import React, { useState } from 'react'
import axios from 'axios';
import copy from "copy-to-clipboard";
import { MdContentCopy ,MdOutlineDownload,MdCloudDone} from "react-icons/md";
import { BsTrashFill } from "react-icons/bs";
import { toast } from 'react-hot-toast';
import { jsPDF } from "jspdf";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { APICall } from '../../API/APICall';



const Audiotranscribe = () => {

  
  
  const[resdata,setResdata]=useState('');
  const[loading,setLoading]=useState(false);
  const[srcfile,setSrcFile]=useState('');
  const[filestat,setFilestat]=useState(false);

  var data="Hello how are you myan";

    const load=()=>{
      return (
        // <SkeletonTheme baseColor='#5b0e2d' highlightColor="#444">
        //   <p>
        //     <Skeleton count={3} />
        //   </p>
        // </SkeletonTheme>
        <Skeleton count={10} height={100} width={100} className=' text-gray-600 bg-slate-800'/>
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
      doc.save("Results.pdf");

    }
    const filehandchange=()=>{
      console.log("file testing_____");
      const fileInput = document.getElementById('dropzone-file');
      const file = fileInput.files[0];
      setSrcFile(fileInput.files[0]);
      setFilestat(true);
      console.log("testing file____",file);
      
    }
    const fileDelete=()=>{
      toast.success("File deleted successfully");
      setSrcFile('');
      setFilestat(false);
    }
    const TranscribeFile = async () => {
        try {
          
          setLoading(true);
          // const fileInput = document.getElementById('dropzone-file');
          // const file = fileInput.files[0];
          console.log("in upload fun***********",srcfile);
          if (!srcfile) {
            toast.error("upload file to transcribe audio!!")
            return;
          }
          
          const formData = new FormData();
          formData.append('audioFile', srcfile);
          // console.log("******",formData.getAll('audioFile'));
          
          const response = await axios.post(
            APICall+'/audio-transform',
            formData,
            {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            }
          );
      
          // Handle the response from the server as needed
          console.log(response.data['data']);
          setResdata(response.data['data']);
      
          // You can also perform any additional actions based on the response
          // For example, redirecting to a different page or displaying a message.
        } catch (error) {
          // Handle any errors that occurred during the file upload
          toast.error("Unable to transcribe audio file",error)
          console.error('Error uploading audio file:', error);
        }
        finally{
          setLoading(false);
        }
      };
  return (
    <div>
        <div className='flex h-screen p-32 space-x-5'>
      
            <div className='w-1/2 bg-[#ffa781]  justify-center items-center rounded-lg'>
                
                {filestat?(
                   <div className=' w-1/2 mt-20 ml-32'>
                   <div class="flex items-center justify-center w-full">
               <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-600 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                   <div class="flex flex-col items-center justify-center pt-5 pb-6 ">
              
                       <MdCloudDone className=' text-[#5b0e2d] text-5xl'/>
                       <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">File selected</span></p>
                       <p class="text-xs text-gray-500 dark:text-gray-400">{srcfile.name}</p>
                   </div>
               </label>
           </div>
                   </div>
                ):(
                   <div className=' bg-purple-500 w-96 mt-20 ml-32'>
                   <div class="flex items-center justify-center w-full">
               <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                   <div class="flex flex-col items-center justify-center pt-5 pb-6 ">
                       <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                           <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                       </svg>
                       <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                       <p class="text-xs text-gray-500 dark:text-gray-400">Mp3,Mp4 or Wav</p>
                   </div>
                   <input id="dropzone-file" onChange={filehandchange} accept='audio/*' type="file" class="hidden"/>
               </label>
           </div>
                   </div>
                )}
               
                <div className=' flex justify-end mt-20 space-x-3 '>
                <BsTrashFill className=' text-white bg-[#5b0e2d] text-4xl p-2 cursor-pointer mt-1 rounded-md' onClick={fileDelete} />
                <button className='bg-[#5b0e2d] p-2 rounded-lg text-white font-bold' type='submit' onClick={TranscribeFile}>Transcribe</button>
                <div className=' w-7'></div>
                </div>
                
                

                
       
            </div>
            <div className=' w-1/2 bg-[#ffa781]  rounded-lg'>
                <div className=' px-10 py-10'>
                  { loading ? load():( <textarea className=' w-full p-3 text-left h-72' value={resdata}></textarea>)}  
                </div>
                <div className=' flex justify-end space-x-3 mt-12'>
                <MdOutlineDownload onClick={downloadcopy} className=' cursor-pointer text-white bg-[#5b0e2d]  p-2 text-4xl'/>
                <MdContentCopy onClick={copyClip} className=' cursor-pointer text-white bg-[#5b0e2d] p-2 text-4xl'/>
                <div className=' w-5'></div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Audiotranscribe