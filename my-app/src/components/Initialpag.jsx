import React from "react";
import NLPTXT from '../Images/nlptxt.webp';
import { Link } from "react-router-dom";
export default()=>{
    return(
        <div className="bg-[#ffa781] flex mt-24 mb-11">
            <div className="w-1/2 ">
                {/* <div className=" shadow-2xl shadow-purple-800"><img src={chat} className="px-40 py-8"></img></div> */}
                <div className='w-1/2 ml-32 '><img src={NLPTXT} alt='background-display' className=' rounded-2xl border-2  shadow-2xl shadow-[#5b0e2d] w-full'></img></div>
                
            </div>
            <div className='w-1/2 item '>
                    <div className=' text-center mt-32 ml-10 space-y-4'>
                        <div className=" space-y-3">

                        <h3 className='font-bold text-[#5b0e2d] text-4xl'>Revolutionize communication with our </h3>
                        <h3 className='font-bold text-[#5b0e2d]  text-4xl'><span className="text-black">NLP-driven </span>app that offering </h3>
                        <h3 className='font-bold text-[#5b0e2d]   text-5xl'>OCR and ASR</h3>
                        </div>
                    
                    <h6 className="text-black font-bold">"Application designed for diverse users worldwide."</h6>
                    <div className=' px-8 text-center '>
                    <p className=' text-orange-900  font-medium text-lg mt-6 px-10'>
"Join us today and unlock the power of seamless communication with our innovative NLP-driven application. Experience efficiency, security, and inclusivity like never before!"</p>
                    
                    </div>
                    {/* <p className='text-black font-medium text-lg mt-6'>We believe that legal assistance should be accessible to everyone. LawQue connects you with our network of professional lawyers, providing you with the guidance and support you need, whenever you need it. Whether you're seeking advice, consultations, or full legal representation, our platform ensures a seamless experience</p> */}
                    <div className=" p-4">
                    <Link to={'/'} className=" bg-[#5b0e2d] rounded-xl text-white px-7 py-4  font-bold shadow-md  hover:bg-orange-900">Get Started</Link>
                    </div>
                   
                    
                    </div>
                    
                </div>
            
        </div>
    )
}


