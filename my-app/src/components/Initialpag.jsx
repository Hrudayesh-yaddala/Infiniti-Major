import React from "react";
import chat from '../Images/chat.png';
import { Link } from "react-router-dom";
export default()=>{
    return(
        <div className="bg-white flex mt-10 mb-11">
            <div className="w-1/2 ">
                {/* <div className=" shadow-2xl shadow-purple-800"><img src={chat} className="px-40 py-8"></img></div> */}
                <div className='w-1/2 ml-32 '><img src={chat} alt='background-display' className=' rounded-2xl border-2  shadow-2xl shadow-purple-800 w-full'></img></div>
                
            </div>
            <div className='w-1/2 item '>
                    <div className=' text-center mt-32 ml-20 space-y-4'>
                        <div className=" space-y-3">

                        <h3 className='font-bold text-[#3E0765]  text-5xl'>Empowering Your</h3>
                        <h3 className='font-bold text-[#3E0765]  text-5xl'>Legal Journey with </h3>
                        <h3 className='font-bold text-[#3E0765]   text-6xl'>LawQue</h3>
                        </div>
                    
                    <h6 className="text-black font-bold">"Unlock Legal Confidence with LawQue."</h6>
                    <div className=' px-8 text-center '>
                    <p className='text-purple-800  font-medium text-lg mt-6 px-10'>Join us today and experience the confidence of knowing your legal world is protected while having instant access to the knowledge and support of legal professionals. Your peace of mind is our priority, and we're here to help you unlock the full potential of your legal journey.</p>
                    
                    </div>
                    {/* <p className='text-black font-medium text-lg mt-6'>We believe that legal assistance should be accessible to everyone. LawQue connects you with our network of professional lawyers, providing you with the guidance and support you need, whenever you need it. Whether you're seeking advice, consultations, or full legal representation, our platform ensures a seamless experience</p> */}
                    <div className=" p-4">
                    <Link to={'/'} className=" bg-purple-800 rounded-xl text-white px-7 py-4  font-bold shadow-md  hover:bg-purple-600">Get Started</Link>
                    </div>
                   
                    
                    </div>
                    
                </div>
            
        </div>
    )
}