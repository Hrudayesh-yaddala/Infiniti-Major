const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const axios = require('axios');
const { text } = require("stream/consumers");
require("dotenv").config();
const path = require('path');
const fs = require('fs');




const _email = process.env.EMAIL
const _password = process.env.EMAIL_PASSWORD
const signup = async (req, res) => {
  try {
    const { firstname, lastname, email, phone, password } = req.body;
    const hasNumber = /\d/;
    const hasSpecialCharacter = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/;
    const hasUpperCase = /[A-Z]/;
    // Check if the string meets all other conditions
    const containsNumber = hasNumber.test(password);
    const containsSpecialCharacter = hasSpecialCharacter.test(password);
    const containsUpperCase = hasUpperCase.test(password);

    // console.log(phone)
    if (!firstname || !lastname || !email || !password || !phone) {

      return res.status(400).json({ message: "Fill all Details" });
    }

    if (!containsNumber || !containsSpecialCharacter || !containsUpperCase) {
      return res.status(400).json({ message: "use atleast one UpperCase letter one Special Character and One Number in Your Password" })
    }
    if (password.length < 7) {
      return res.status(400).json({ message: "Your Password must be at least 7 Characters" })
    }
    const isUser = await User.findOne({ email: email }); //undefined
    if (isUser) {
      return res.status(409).json({ message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    req.body.password = hashedPassword;
    // const newUser = await User.create(req.body);
    const uniqueObjid = await bcrypt.hash(req.body.email,12);
    const newUser = await User.create({firstname: firstname,lastname:lastname, email: email, password:hashedPassword, phone: phone,uniqueObjid: uniqueObjid});


    return res.status(200).json({ message: "user registered", user: newUser });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
};

const signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Fill all details" });
    }
    const isUser = await User.findOne({ email });
    if (isUser) {
      const isPasswordValid = await bcrypt.compare(password, isUser.password);
      if (isPasswordValid) {
        const accessToken = await jwt.sign(
          { userId: isUser._id },
          process.env.ACCESS_TOKEN_SECRET,
          {
            expiresIn: "1d",
          }
        );
        return res.status(200).json({
          message: "Login successful",
          firstname: isUser.firstname,
          accessToken,
          uniqueObjid: isUser.uniqueObjid,
        });
      } else {
        return res.status(401).json({ message: "Invalid Credentials" });
      }
    } else {
      return res.status(404).json({ message: "User Not Found" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const forgetpassword = async (req, res) => {
  try {
    const { email } = req.body;
    console.log(email)
    if (!email) return res.status(400).json({ message: "Fill Email Properly" });
    const isUser = await User.findOne({ email });

    if (isUser) {

      const accessToken = await jwt.sign(
        { userId: isUser._id },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "1d", }
      );

      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: _email,
          pass: _password,
        }
      });

      var mailOptions = {
        from: _email,
        to: email,
        subject: 'Reset Your Password',
        text: `http://localhost:5173/resetpassword/${isUser._id}/${accessToken}`
      };
     

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
      return res.status(200).json({ message: "Password Recovery Email sent successfully!!" });

    }
    else {
      return res.status(404).json({ message: "User Not Found" });
    }
  }
  catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

const resetpassword = async (req, res) => {
  try {
    const { userId, accessToken } = req.params;
    const { password } = req.body;

    jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, async (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: "Invalid access token" });
      }

      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      // Use findByIdAndUpdate to update the user's password
      const hashedPassword = await bcrypt.hash(password, 10);
      const updatedUser = await User.findByIdAndUpdate(
        userId,
        { password: hashedPassword },
        { new: true } // Return the updated document
      );


      // Send a confirmation email
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: _email,
          pass: _password,
        }
      });

      const mailOptions = {
        from: _email,
        to: user.email,
        subject: 'Password Reset Confirmation',
        text: 'Your password has been reset successfully.'
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });

      return res.status(200).json({ message: "Password reset successful" });
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};


const textsummarization = async (req, res) => {
  // const flask_url = process.env.FLASK_URL + "/AI-API/text-summarization";
  const flask_url = "https://dev.docnlp.com/AI-API/text-summarization";

  const document_types = req.body.document_type;
  // console.log(document_types);
  try {
    console.log("entered summarization")
    if (req.files.length >= 1) {
      const formData = new FormData();

      for (let i = 0; i < req.files.length; i++) {
        if (req.files.length === 1) {
          formData.append('document_type', document_types);
        }
        else {
          formData.append('document_type', document_types[i])
        }
        formData.append('pdf', new Blob([req.files[i].buffer]), 'pdf-file.pdf');
      }

      const pythonFlaskResponse = await axios.post(flask_url, formData, {

      });
      console.log(pythonFlaskResponse.data.results)
      return res.status(200).json({ results: pythonFlaskResponse.data.results });

    }
    else {
      const formData = new FormData();
      formData.append('document_type', document_types);
      const input_content = req.body.input_content;
      console.log(input_content)
      formData.append("input_content", input_content);
      const pythonFlaskResponse = await axios.post(flask_url, formData, {
      });
      console.log(pythonFlaskResponse.data.results)
      return res.status(200).json({ results: pythonFlaskResponse.data.results });
    }
  }


  catch (err) {
    // console.error("Error Occured in Flask API:", err);
    return res.status(500).json({ message: err.message, results: err });

  }
}
const speechrecognition = async (req, res) => {
  try {
    const flask_url = process.env.FLASK_URL + "/audio-transcribe";

    // const flask_url=" http://127.0.0.1:5000/audio-transcribe"
   
    const filedata = req.file;
    const formData = new FormData();
    const blob = new Blob([filedata.buffer], { type: filedata.mimetype });
    formData.append('audioFile', blob, filedata.originalname);
    // console.log(formData,"---------->");
    const pythonFlaskResponse = await axios.post(flask_url, formData,{headers: {
      'Content-Type': 'multipart/form-data',
    }},);
    console.log(pythonFlaskResponse.data);
    return res.status(200).json(pythonFlaskResponse.data)

  } catch (err) {
    console.error("Error Occurred in Flask API:", err);
    return res.status(500).json({ message: err.message, results: err });
  }
};


const handwrittenOcr= async (req, res) => {
  try {
    const flask_url = process.env.FLASK_URL + "/ocr";
    // const flask_url=" http://127.0.0.1:5000/ocr"


    const filedata = req.file;
    const formData = new FormData();
    const key = filedata.mimetype.startsWith('image') ? 'image' : 'pdf';
    const blob = new Blob([filedata.buffer], { type: filedata.mimetype });
    formData.append(key, blob, filedata.originalname);
    // console.log(formData,"---------->");
    const pythonFlaskResponse = await axios.post(flask_url, formData,{headers: {}},);
    console.log(pythonFlaskResponse.data);
    return res.status(200).json(pythonFlaskResponse.data)

  } catch (err) {
    console.error("Error Occurred in Flask API:", err);
    return res.status(500).json({ message: err.message, results: err });
  }
};

// const text2speech= async(req,res)=>{
//   const flask_url=process.env.FLASK_URL+'/text-to-speech'
//   try{
//     const formdata=new FormData();
//     const input_type=req.body.input_type;
//     formdata.append("input_type",input_type);
//     console.log(input_type,"-------->");
//     // console.log(req.file);
//     if(input_type=='text'){
//       const inp_text=req.body.input_text;
//       console.log(inp_text);
//       formdata.append("input_text",inp_text);
//       const pythonFlaskResponse= await axios.post(flask_url,formdata,{});
//       // console.log(pythonFlaskResponse.data);
//       return res.status(200).json(pythonFlaskResponse.data);
//     }
//     else{
//       const filedata=req.file;
//       console.log(req.file);
//       const blob = new Blob([filedata.buffer], { type: filedata.mimetype });
//       formdata.append('input_document', blob, filedata.originalname);
//       // console.log(formData,"---------->");
//       const pythonFlaskResponse = await axios.post(flask_url,formdata,{});
//       // console.log(pythonFlaskResponse.data);
//       return res.status(200).json(pythonFlaskResponse.data)

//     }

//   }
//   catch (err) {
//     console.error("Error Occurred in Flask API:", err);
//     return res.status(500).json({ message: err.message, results: err });
//   }
// }

const text2speech = async (req, res) => {
  const flask_url = process.env.FLASK_URL + '/text-to-speech';
  try {
    const formdata = new FormData();
    const input_type = req.body.input_type;
    // const input_language=req.body.input_language;

    formdata.append("input_type", input_type);
    // formdata.append("input_language",input_language);


    if (input_type === 'text') {
      const inp_text = req.body.input_text;
      formdata.append("input_text", inp_text);
    } else {
      const filedata = req.file;
      const blob = new Blob([filedata.buffer], { type: filedata.mimetype });
      formdata.append('input_document', blob, filedata.originalname);
    }

    const pythonFlaskResponse = await axios.post(flask_url, formdata, {
      responseType: 'arraybuffer' 
    });

    res.set('Content-Type', 'audio/mpeg');
    res.status(200).send(pythonFlaskResponse.data);
  } catch (err) {
    console.error("Error Occurred:", err);
    return res.status(500).json({ message: err.message, results: err });
  }
}




const languagetranslation = async (req, res) => {
  // console.log("backend-translation")
  const flask_url = process.env.FLASK_URL + '/translate';
  // const flask_url="http://127.0.0.1:5000/translate";

  try {
    const formdata = new FormData();
    const input_type = req.body.input_type;
    const input_language=req.body.input_language;
    formdata.append("input_type", input_type);
    formdata.append("input_language",input_language);

    if (input_type === 'text') {
      const inp_text = req.body.input_text;
      formdata.append("input_text", inp_text);
    } else {
      const filedata = req.file;
      const blob = new Blob([filedata.buffer], { type: filedata.mimetype });
      formdata.append('input_document', blob, filedata.originalname);
    }

    const pythonFlaskResponse = await axios.post(flask_url, formdata, {});
    console.log(pythonFlaskResponse.data,"------->");
    res.status(200).json(pythonFlaskResponse.data);
  } catch (err) {
    console.error("Error Occurred:", err);
    return res.status(500).json({ message: err.message, results: err });
  }
}


const paraphraser = async (req, res) => {
  // console.log("backend-translation")
  const flask_url = process.env.FLASK_URL + '/paraphrase';
  // const flask_url="http://127.0.0.1:5000/translate";

  try {
    const formdata = new FormData();
    const input_type = req.body.input_type;
    formdata.append("input_type", input_type);

    if (input_type === 'text') {
      const inp_text = req.body.input_text;
      console.log(inp_text);
      formdata.append("input_text", inp_text);
    } else {
      const filedata = req.file;
      console.log(filedata);
      const blob = new Blob([filedata.buffer], { type: filedata.mimetype });
      formdata.append('input_document', blob, filedata.originalname);
    }

    const pythonFlaskResponse = await axios.post(flask_url, formdata, {});
    console.log(pythonFlaskResponse.data,"------->");
    res.status(200).json(pythonFlaskResponse.data);
  } catch (err) {
    console.error("Error Occurred :", err);
    return res.status(500).json({ message: err.message, results: err });
  }
}


const MathematicalSolving = async (req, res) => {
  const flask_url = process.env.FLASK_URL + '/math_exp_solve';
  // const flask_url="http://127.0.0.1:5000/translate";

  try {
    const formdata = new FormData();
  
    // const formdata=req.body;
    const inp_text = req.body.input_text;
    // console.log(req.body.input_text,"***********");
    formdata.append("prompt", inp_text);

    const pythonFlaskResponse = await axios.post(flask_url, formdata, {});
    console.log(pythonFlaskResponse.data,"------->");
    res.status(200).json(pythonFlaskResponse.data);
  } catch (err) {
    console.error("Error Occurred:", err);
    return res.status(500).json({ message: err.message, results: err });
  }
}


const EdittoHandwritten = async (req, res) => {
  const flask_url = process.env.FLASK_URL + '/generate_handwritten_image';
  
  try {
    const formdata = new FormData();
    const inp_text = req.body.input_text;
    formdata.append("text", inp_text);

    const pythonFlaskResponse = await axios.post(flask_url, formdata, {
      responseType: 'arraybuffer' 
    });
   
    res.set('Content-Type', 'image/png');
    // Send the image data to the frontend
    res.status(200).send(pythonFlaskResponse.data);
  } catch (err) {
    console.error("Error Occurred:", err);
    return res.status(500).json({ message: err.message, results: err });
  }
}


const FileExporting = async (req, res) => {
  console.log("file-exporting");
  const flask_url = 'http://127.0.0.1:5000/file-conversion';

  try {
    const formdata = new FormData();
    const inputType = req.body.input_language;
    formdata.append("input_type", inputType);
    
    // Check file type and append accordingly
    const filedata = req.file;
    let blobData;
    if (filedata.mimetype === 'application/pdf' || filedata.originalname.endsWith('.pdf')) {
      blobData = new Blob([filedata.buffer], { type: 'application/pdf' });
    } else if (filedata.mimetype === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' || filedata.originalname.endsWith('.docx')) {
      blobData = new Blob([filedata.buffer], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
    } else if (filedata.mimetype === 'text/plain' || filedata.originalname.endsWith('.txt')) {
      blobData = new Blob([filedata.buffer], { type: 'text/plain' });
    } else {
      return res.status(400).json({ message: 'Unsupported file type' });
    }

    formdata.append('input_document', blobData, filedata.originalname);

    const pythonFlaskResponse = await axios.post(flask_url, formdata, { responseType: 'arraybuffer' });
    console.log(pythonFlaskResponse.data, "------->");
    res.status(200).json(pythonFlaskResponse.data);
  } catch (err) {
    console.error("Error Occurred:", err);
    return res.status(500).json({ message: err.message, results: err });
  }
};




module.exports = {
  signup,
  signin,
  forgetpassword,
  resetpassword,
  textsummarization,
  speechrecognition,
  handwrittenOcr,
  text2speech,
  languagetranslation,
  paraphraser,
  MathematicalSolving,
  EdittoHandwritten,
  FileExporting,

 
};
