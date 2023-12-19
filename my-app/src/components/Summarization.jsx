
import axios from "axios";
import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { toast } from 'react-hot-toast';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { FaEye } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import BeatLoader from "react-spinners/BeatLoader";
// import { BASE_URL } from "../config";

const Summarize = () => {
  const [documents, setDocuments] = useState([]);
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [inputData, setInputData] = useState("");
  const [summarizedData, setsummarizedData] = useState("");
  const [Dropvalue, setDropvalue] = useState("Document");
  const [Table, setTable] = useState(false);
  const [textInput, setTextInput] = useState(true);
  const [showSD, setshowSD] = useState(false);
  const [files, setfiles] = useState([]);
  let [loading, setLoading] = useState(false);
  const [filetypes, setfiletype] = useState([])
  const VisuallyHiddenInput = styled('input')`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;

  // spinner
  const load = () => {
    return (
      <div className={`flex justify-center items-center h-screen ${loading ? 'block' : 'hidden'}`}>
        <div className="">
          <BeatLoader loading={loading} className="text-cyan-900 text-3xl" />
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  const handleChange = (e) => {
    setDropvalue(e.target.value);
  };
  const handleSubmit = async () => {
    const boxtext = inputData;
    if (!files[0] && !boxtext) {
      setshowSD(false);
      toast.error("Please select Document or Provide Some Text");
      return;

    }
    else {
      try {
        setLoading(true);
        const formData = new FormData();
        formData.append("input_content", boxtext);
        if (boxtext.length > 0) {
          formData.append("document_type", "text");
          setfiletype([]);
        }
        else {
          for (let i = 0; i < files.length; i++) {
            formData.append("documents", files[i]);
            formData.append("document_type", filetypes[i]);
          }
        }
      
        // console.log(formData.getAll("documents"))
        const response = await axios.post(

          "https://major-backend-infiniti.onrender.com/api/user/textSummarization",

          

          formData,
        );
        // console.log(response.data) ;

        if (response.data) {
          setsummarizedData(response.data);
          toast.success("Summarization completed successfully");

        } else {
          setsummarizedData("No summary data received from the server Try after sometime!!!!!!!!!!");
        }
      }
      catch (err) {
        //console.log(err);
        toast.error(err.response.data.message);
        setsummarizedData("An error occurred while processing the request: " + err);
      }
      finally {
        setLoading(false);
        setshowSD(true);

      }
    }
  }


  const handleUpload = (event) => {
    setsummarizedData("");
    setTable(true);
    setTextInput(false);
    setInputData("");
    try {
      const FILES = event.target.files;

      // setFile(file);
      for (let i = 0; i < FILES.length; i++) {
        setfiles((prevFiles) => [...prevFiles, FILES[i]]);
        setfiletype((prevTypes) => [...prevTypes, Dropvalue]);
        const file = FILES[i];
        const reader = new FileReader();
        reader.onload = (e) => {
          const fileNameWithoutExtension = file.name.split(".")[0]; // Get the file name without extension
          const documentData = {
            type: Dropvalue, // Replace with actual document type
            fileName: file.name, // Use the file name without extension
            Description: fileNameWithoutExtension,
            fileData: e.target.result, // Store the file data (e.g., base64)
          };
          // setDocuments((prevDocuments) => [documentData ]);
          setDocuments((prevDocuments) => [...prevDocuments, documentData]);
          // setFile(documents[0]);
        };
        reader.readAsDataURL(file);
      }
    }
    catch (err) {
      //console.log(err);
    }
  };
  

  const handleView = (document) => {
    const newWindow = window.open();
    newWindow.document.write(
      `<iframe src="${document.fileData}" style="width: 100%; height: 100vh; border: none;"></iframe>`
    );
    newWindow.document.title = "Document Viewer";
  };
  
  const handleDelete = (document) => {
    // Filter out the document to delete
    let ind = documents.indexOf(document);
    const updatedDocuments = documents.filter((doc) => doc !== document);
    const updatedFiles = files.filter((_file) => _file !== files[ind]);
    const updatedTypes = filetypes.filter((_type) => _type !== filetypes[ind]);
    setfiletype(updatedTypes);
    setfiles(updatedFiles);
    setDocuments(updatedDocuments);
    if (updatedDocuments.length === 0) {
      setTable(false);
      setSelectedDocument(null);
      setTextInput(true);
      setshowSD(false);
    }
  };

  return (
    <div>{loading ? load() : (
      <div className="font-sans items-center text-left bg-slate-200 h-screen">
        <div className="container mx-auto md:w-1/2 lg:w-full xl:w-full pt-10 pl-8 pr-8 ">
          <div className="text-center rounded-t-xl py-4 w-full bg-gradient-to-r from-rose-500 to-blue-400 text-white font-bold"><h2 className="text-xl">Text Summarization</h2></div>
          <div className=" bg-white p-10 rounded-b-lg shadow-lg shadow-gray-500">
            <div className="grid grid-cols-2 outline-dotted rounded-lg h-32">
              <div className="mx-auto mt-4">
                <label class="text-gray-500 font-semibold text-base ">SELECT DOCUMENT TYPE</label>
                <select id="doctype" class="border-2 border-rose-500 h-12 hover:border-rose-900 text-blue  text-black rounded-lg focus:ring-rose-500 focus:border-rose-900 block p-3 bg-white" onChange={handleChange}>
                  <option selected>Choose a Document</option>
                  <option value="RFx Doc">TextBook</option>
                  <option value="Contract">StoryBook</option>
                  <option value="Job Order">Lecture Notes</option>
                  <option value="Resume">Resume</option>
                  <option value="Invoice">Educational Book</option>
                </select>
              </div>
              <div className="flex w-full">
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
                    <VisuallyHiddenInput type="file" onChange={handleUpload} multiple />
                  </Button>

                </div>
              </div>
            </div>
            <br />
            <>
              <div className={`${Table ? "flex flex-col items-center text-left" : "hidden"}`} >
                <label className="font-bold text-lg py-4 text-gray-500"><small>UPLOADED DOCUMENT</small></label>
                <table className="w-full  rounded-lg  shadow-md overflow-hidden">
                  <thead className="text-md text-white border-2 h-10 border-gray-300 bg-gradient-to-r from-rose-500 to-blue-400 text-center">
                    <tr>
                      <th className=" font-semibold border border-gray-300">Document Type</th>
                      <th className="font-semibold border border-gray-300">File Name</th>
                      <th className="font-semibold border border-gray-300">Description</th>
                      <th className="font-semibold border border-gray-300">Action</th>
                    </tr>
                  </thead>
                  <tbody className="text-center border-2 border-gray-300">
                    {documents.map((document, index) => (
                      <tr
                        key={index}
                        className={index % 2 !== 0 ? "bg-[#edf0f7] h-14 " : "bg-white h-14"}
                      >
                        <td className="border border-gray-300">{document.type}</td>
                        <td className="border border-gray-300">{document.fileName}</td>
                        <td className="border border-gray-300">{document.Description}</td>
                        <td className="border border-gray-300">
                          <button
                            onClick={() => handleView(document)}
                            className="bg-blue-500 text-white px-2 py-2 rounded mr-2"
                          >
                            <FaEye className="text-xl" />
                          </button>
                          <button
                            onClick={() => handleDelete(document)} className="bg-red-500 text-white px-2 py-2 rounded">
                            <RiDeleteBin6Line className="text-xl" />
                          </button>
                        </td>
                      </tr>

                    ))}
                  </tbody>
                </table>
              </div>
            </>
            {/* {Table && <RenderTable/>} */}
            {selectedDocument && (
              <div className="mb-4">
                <p className="text-xl font-bold">View Document</p>
                <iframe
                  title="Document Viewer"
                  src={selectedDocument.fileData}
                  className="w-full border rounded"
                ></iframe>
              </div>
            )}
            <div className={`${textInput ? "" : "hidden"}`}>
              <div className="text-center"><small className="font-bold mt-4 text-gray-500">OR INPUT YOUR TEXT HERE</small></div>
              <br />
              <div className="mb-4">
                <table className="w-full border-[#044661] border-2  rounded-t-lg ">
                  <th className="font-semibold text-base text-center   text-white bg-gradient-to-r from-rose-500 to-blue-400 pl-1">Text to Summarize</th>
                  <tr><td><textarea onChange={(event) => setInputData(event.target.value)} name="input_content" className="w-full h-44 border-transparent focus:outline-none focus:ring-0 focus:border-transparent"></textarea></td></tr>
                </table>
              </div>

            </div>
            <br />
            <div className="flex justify-center">
              <button className="bg-rose-500 hover:bg-rose-700 text-white px-4 py-2 rounded" type="submit" onClick={handleSubmit}>
                Summarize
              </button>
            </div>
            <br />

        <div className={`mb-4 ${showSD ? "" : "hidden"}`}>
          {Array.isArray(summarizedData.results) ? (
            summarizedData.results.map((resultArray, index) => (
              <table className="w-full border-[#044661] border-2 rounded-t-lg " key={index}>
                <th className="font-semibold text-m text-white bg-gradient-to-r from-rose-500 to-blue-400 pl-1 text-center">Summarized Text</th>
                <tr>
                  <td>
                    <textarea
                      placeholder=""
                      readOnly
                      value={resultArray.join('\n')}
                      className="w-full h-56 border-transparent focus:outline-none focus:ring-0 focus:border-transparent"
                    ></textarea>
                  </td>
                </tr>
              </table>
            ))
          ) : (
            <table className="w-full border-[#044661] border-2 rounded-t-lg">
              <th className="font-semibold text-center text-white bg-cyan-600 pl-1">Summarized Text</th>
              <tr className="">
                <td>
                  <textarea
                    placeholder=""
                    readOnly
                    value={summarizedData.results}
                    className="w-full h-56 border-transparent focus:outline-none focus:ring-0 focus:border-transparent"
                  ></textarea>
                </td>
              </tr>
            </table>
          )}
        </div>
      </div>
    </div>
  </div>)}
    
    </div>
  );
};

export default Summarize;
