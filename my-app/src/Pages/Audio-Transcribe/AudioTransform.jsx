
import React, { useState } from 'react';
import axios from 'axios';
const AudioTransform = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);


  const handleSubmit = async () => {
    try {
      const fileInput = document.getElementById('audioInput');
      const file = fileInput.files[0];
  
      if (!file) {
        return;
      }
  
      const formData = new FormData();
      formData.append('audioFile', file);
      console.log("******",formData.getAll('audioFile'));
      
      const response = await axios.post(
        'http://localhost:8000/api/user/audio-transform',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
  
      // Handle the response from the server as needed
      console.log(response.data);
  
      // You can also perform any additional actions based on the response
      // For example, redirecting to a different page or displaying a message.
    } catch (error) {
      // Handle any errors that occurred during the file upload
      console.error('Error uploading audio file:', error);
    }
  };


  const handleFileChange = (event) => {
    console.log("entered----->")
    // var preview = document.querySelector('audio');
    setFile(event.target.files[0]);
    // var reader = new FileReader();
    // reader.addEventListener("load", function () {
    //     preview.src = reader.result;
    //     }, false);
        
    //     if (file) {
    //     reader.readAsDataURL(file);
    //     }
  };

  const previewFile=()=> {
    var preview = document.querySelector('audio');
    var file = document.querySelector('input[type=file]').files[0];
    var reader = new FileReader();
    
    reader.addEventListener("load", function () {
    preview.src = reader.result;
    }, false);
    
    if (file) {
    reader.readAsDataURL(file);
    }
    }

  return (
    // <div>{loading ? load() : (
      <div className="font-sans items-center text-left bg-[#ffa781] h-screen">
        <div className="container mx-auto md:w-1/2 lg:w-full xl:w-full pt-10 pl-8 pr-8 ">
          <div className="text-center rounded-t-xl py-4 w-full bg-[#5b0e2d] text-white font-bold"><h2 className="text-xl">Audio Transcription</h2></div>
          <div className=" bg-white p-10 rounded-b-lg shadow-2xl shadow-[#5b0e2d]">
            <div className=" outline-dotted rounded-lg h-32 items-center">

              {/* <div className="flex w-full">
                <div className="flex flex-col text-left mt-4">
                  <p className="text-base text-gray-500 font-semibold text-left ">UPLOAD DOCUMENT</p>
                  <Button
                    component="label"
                    variant="contained"
                    startIcon={<CloudUploadIcon />}
                    href="#file-upload"
                    className="h-11 "
                  >
                    Upload a file
                    <VisuallyHiddenInput type="file" onChange={handleUpload}/>
                  </Button>

                </div>
              </div> */}
              <div className="">
              {/* <Button  
              // component="label"
              variant="contained"
                    // startIcon={<CloudUploadIcon />}
              ><input type="file" onChange={previewFile} accept="audio/*" id="audioInput"/></Button> */}
              <input type="file" onChange={previewFile} accept="audio/*" id="audioInput"/>
              <audio controls src=""></audio>
              </div>
            </div>
         
            <div className="flex justify-center">
              <button className="bg-rose-500 hover:bg-rose-700 text-white px-4 py-2 rounded" type="submit" onClick={handleSubmit}>
                Transcribe
              </button>
            </div>
          
            
      </div>
      
    </div>
  </div>
//   )}
    
    // </div>
  );
};

export default AudioTransform;
