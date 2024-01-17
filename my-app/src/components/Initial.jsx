import NLP from '../Images/nlp.webp';
import { Link } from 'react-router-dom';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

export default()=>{
    return(
        <div>
            <div className=' bg-[#ffa781] flex '>
                <div className='w-1/2 item'>
                    <div className=' text-center mt-32 ml-20 flex-shrink'>
                        <div className=" space-y-3">

                        <h3 className='font-bold text-[#5b0e2d] text-5xl flex-shrink'>Transform the communication </h3>
                        <h3 className='font-bold text-[#5b0e2d] text-5xl'>With  
                        <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            '  NLP-Powered',
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                            '  NLP-Enhanced',
                            1000,
                            '  NLP-Advanced',
                            1000,
                            '  NLP-Optimized',
                            1000
                        ]}
                        wrapper="span"
                        speed={10}
                        className=' text-black '
                        repeat={Infinity}
                        /></h3>
                        
                        {/* <h3 className='font-bold text-[#5b0e2d] text-5xl'>with <span className='text-black'>NLP-Powered</span></h3> */}
                        <h3 className='font-bold text-[#5b0e2d] text-5xl'>Application </h3>
                        </div>
                    
                    
                    <div className=' p-8 text-center '>
                    <p className='text-black font-medium text-lg mt-6 px-10'>
"Welcome to a new era of communication! Our innovative NLP-powered application is here to transform the way you interact with text and speech. Discover efficiency, security, and inclusivity in one seamless experience. Join us on this exciting journey today!"</p>
                    
                    </div>
                    {/* <p className='text-black font-medium text-lg mt-6'>We believe that legal assistance should be accessible to everyone. LawQue connects you with our network of professional lawyers, providing you with the guidance and support you need, whenever you need it. Whether you're seeking advice, consultations, or full legal representation, our platform ensures a seamless experience</p> */}
                    <Link to={'/home'} className=" bg-[#5b0e2d] rounded-xl text-white px-8 py-3 font-bold shadow-md  hover:bg-orange-900">Try Now</Link>
                    </div>
                    
                </div>
                <div className='w-1/2 px-40 py-8 mt-14 '><img src={NLP} alt='background-display' className=' rounded-2xl shadow-2xl shadow-orange-800 bg-[#5b0e2d] '></img></div>
            </div>
            
        </div>
    )
}