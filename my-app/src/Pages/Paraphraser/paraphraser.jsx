

import React, { useState } from 'react'
import axios from 'axios';
import copy from "copy-to-clipboard";
import { MdContentCopy ,MdOutlineDownload,MdCloudDone} from "react-icons/md";
import { BsTrashFill } from "react-icons/bs";
import { toast } from 'react-hot-toast';
import { jsPDF } from "jspdf";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { APICall } from '../../API/APICall';
// import {ScaleLoader} from 'react-icons/ScaleLoader';
import ScaleLoader from "react-spinners/ScaleLoader";


const paraphraser = () => {

 
  const[resdata,setResdata]=useState('');
  const[loading,setLoading]=useState(false);
  const[srcfile,setSrcFile]=useState('');
  const[lang,setLanguage]=useState('');
  const[inputtext,setInputtext]=useState('');
  const[filestat,setFilestat]=useState(false);
  const[displayresult,setDisplayResult]=useState(false);
  const[textfileinput,setTextfileinput]=useState(false);
  




    const load=()=>{
      return (
        // <SkeletonTheme baseColor='#5b0e2d' highlightColor="#444">
        //   <p>
        //     <Skeleton count={3} />
        //   </p>
        // </SkeletonTheme>
        // <Skeleton count={10} height={100} width={100} className=' text-gray-600 bg-slate-800'/>
        <BeatLoader loading={loading}/>
      );

    }
    const copyClip=()=>{
      if(!resdata){
        toast.error('Failed to copy data');
        return
      }
      toast.success("Text Copied")
      copy(resdata);
    }
    const downloadcopy=()=>{
      if(!resdata){
        toast.error('Failed to download file');
        return
      }
      const doc = new jsPDF();
      doc.text(resdata, 10, 10);
      doc.save("Speech_to_text_Results.pdf");

    }
    const filehandchange=()=>{
      
      const fileInput = document.getElementById('dropzone-file');
      const file = fileInput.files[0];
      setSrcFile(fileInput.files[0]);
      setFilestat(true);
      setInputtext('');
      console.log("testing file____",file);
      
    }
    const InputTexthandlechange=(event)=>{
      event.preventDefault();
      setInputtext(event.target.value);
      setFilestat(false);
      setSrcFile('');

    }
    const fileDelete=()=>{
      toast.success("File deleted successfully");
      setSrcFile('');
      setFilestat(false);
      // setDisplayResult(false);
    }


    const TranscribeFile = async () => {
        try {
          
          setLoading(true);
          setDisplayResult(true);
        
          // console.log("in upload fun***********",srcfile);
          if (!lang || (!srcfile && inputtext.length==0)) {
            toast.error(" 🦞 Please Provide all the details to continue ");
            setDisplayResult(false);
            return;
          }
          
          const formData = new FormData();
          formData.append("input_language",lang);
          // formData.append('ImageFile', srcfile);
          if(inputtext.length>0){
            formData.append("input_type","text");
            formData.append("input_text",inputtext);
          }
          else{
            formData.append("input_type","document");
            formData.append("input_document",srcfile);
          }
         
          console.log("testing phase---->",formData.getAll("input_language"));
          
          const response = await axios.post(
            APICall+'/language-translation',
            formData,
            {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            
            }
          );
      
          
          console.log(response.data);
          setResdata(response.data.translated_text);
     
         
      
          
        } catch (error) {
          setDisplayResult(false);

          toast.error("Unable to process the text :",error)
          console.error('Error processing text:', error);
        }
        finally{
          setLoading(false);
          
        }
      };
  return (
   

    <div className="relative overflow-y-hidden overflow-x-hidden">
        <div className="bg-home bg-no-repeat h-screen bg-center bg-cover ">
          <video
            autoPlay
            loop
            muted
            className="absolute inset-0 object-cover w-full h-full xl:h-auto"
            src="/Videos/dustparticles.mp4"
          />
       
          <div className="absolute inset-0">


           <div>
        
        <div className='  gap-x-28 flex items-center justify-center h-screen w-screen container'>

        <h1>Feature is under progress...</h1>
            <div className=' w-96 h-96  flex  items-center justify-center rounded-lg border-2 border-white bg-white opacity-75'>
                
                {filestat?(
                   <div className=' border-black h-40 w-52 rounded-md space-y-12 '>
                   {/* <div class="flex items-center justify-center w-full "> */}
               <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-full border-2 border-black border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100 ">
                   <div class="flex flex-col items-center justify-center pt-5 pb-6 ">
              
                       <MdCloudDone className=' text-[#f97f4a] text-5xl'/>
                       <p class="mb-2 text-sm text-black "><span class="font-bold">File selected</span></p>
                       <p class="text-xs text-black font-semibold">{srcfile.name}</p>
                   </div>
               </label>
               <div className=' flex justify-center items-center space-x-3 '>
                <BsTrashFill className=' text-stone-950 bg-[#f97f4a] text-4xl p-2 cursor-pointer mt-1 rounded-md' onClick={fileDelete} />
                <button className=' bg-[#f97f4a] p-2 rounded-lg text-stone-950 font-bold' type='submit' onClick={TranscribeFile}>Proceed</button>
      
                </div>
           {/* </div> */}
                   </div>
                ):(
                 
                   <div className=' flex justify-center items-center flex-col gap-y-3'>
                    {/* <div className=' flex justify-center items-center gap-x-4'>
                        <div className=' w-40 bg-gray-300 rounded-full gap-x-3 flex items-center justify-center p-2'>
                            <button className={ `h-7 w-full font-semibold  rounded-full ${textfileinput? "": "bg-[#ffa781] "} transition duration-500`} onClick={()=> setTextfileinput(false)}>File </button>
                            <button className={`${textfileinput? "bg-[#ffa781]" :" "}  w-full font-semibold h-8 rounded-full transition duration-500`} onClick={()=> setTextfileinput(true)}>Text</button>

                            </div>
                        

                    </div>   */}
                     <div className=' w-52 bg-gray-400 rounded-full gap-x-7 flex items-center justify-center p-2'>
                        <button className={ `h-8 w-full font-bold  rounded-full ${textfileinput? "": "bg-[#f97f4a] "} transition duration-500`} onClick={()=> setTextfileinput(false)}>File </button>
                        <button className={`${textfileinput? "bg-[#f37c4a]" :" "}  w-full font-bold h-8 rounded-full transition duration-500`} onClick={()=> setTextfileinput(true)}>Text</button>

                        </div>
                      
                      <div className={` h-56 w-72 rounded-md transition duration-500 ${textfileinput ? "hidden":"block" } `}>
                              {/* <div class="flex items-center justify-center w-full"> */}
                                  <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-full border-2 border-black border-dashed rounded-lg cursor-pointer bg-gray-50 ">
                                      <div class="flex flex-col items-center justify-center pt-5 pb-6 ">
                                          <svg class="w-8 h-8 mb-4 text-black font-bold" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                          </svg>
                                          <p class="mb-2 text-sm text-black font-semibold text-center"><span class=" text-black font-semibold">Click to upload</span> or drag and drop</p>
                                          <p class="text-xs text-black font-semibold">Document</p>
                                      </div>
                                      <input id="dropzone-file" onChange={filehandchange} accept='application/pdf' type="file" class="hidden"/>
                                  </label>
                      {/* </div> */}
                        </div>
                        <div className={` h-56 w-80 bg-red-800 transition duration-500 ${textfileinput ? "block" : "hidden"} `}>
                          <textarea className=' w-full h-full border border-black rounded-lg p-2' placeholder='Provide your text here .....' onChange={InputTexthandlechange} />
                          </div>

                          
                          {inputtext.length >0 && textfileinput ? (
                            <div className=' flex justify-center items-center space-x-3 '>
                            {/* <BsTrashFill className=' text-white bg-[#5b0e2d] text-4xl p-2 cursor-pointer mt-1 rounded-md' onClick={fileDelete} /> */}
                            <button className='bg-[#5b0e2d] p-2 rounded-lg text-white font-bold' type='submit' onClick={()=>TranscribeFile()}>Proceed</button>
                  
                           </div>
                          ) : " "}
                    </div>
  
                )}
        
                
            </div>

            <div className={` px-6 w-1/3 h-96 space-y-5 bg-gray-200 flex flex-col items-center justify-center rounded-lg border-2 border-[#5b0e2d] ${displayresult ? "block" : "hidden"}`}>
            <div className=' flex items-center justify-center rounded-lg bg-slate-500 w-full h-72 mt-4'>
              {loading ?(
                // <div className=' flex items-center justify-center'>
                 <ScaleLoader loading={loading} className="text-cyan-900 flex self-center text-9xl ml p-8" />

              ) : 
              <textarea className=' w-full p-3 text-left h-72 bg-[#ffa781] rounded-lg text-black font-semibold text-sm border border-black' value={resdata}></textarea> 
               }
            </div>
            <div className='flex self-end space-x-3 mr-4'>
            <MdOutlineDownload onClick={downloadcopy} className='cursor-pointer text-white p-2 rounded-lg bg-[#5b0e2d] text-4xl' />
            <MdContentCopy onClick={copyClip} className='cursor-pointer text-white bg-[#5b0e2d] rounded-lg text-4xl p-2' />
            </div>
          </div> 

       

                
            
        </div>
    </div>


            </div>
          </div>
</div>
  )
}

export default paraphraser;




