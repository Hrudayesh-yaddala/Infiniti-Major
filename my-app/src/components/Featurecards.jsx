import { Link } from 'react-router-dom';
import audi from '../Images/audio.png';
import handwritten from '../Images/handwritten.png';
import maths from '../Images/maths.png';
import summarization from '../Images/summary.png';

import variousfile from '../Images/variousfile.png';
export const Featurecards = () => {
    return (
        <div>
            <section className="mb-32 text-center mt-6">
                <h1 className="mb-12 pb-4 text-center text-5xl font-bold relative text-[#5b0e2d]">
                   Services
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-black"></div>
                </h1>

                <div className="grid md:grid-cols-3 justify-center items-center">
                    <div className="mb-6 lg:mb-0 ">
                        <div className=" w-72 block rounded-lg bg-[#aa3f3d] mx-auto  cursor-pointer transition duration-500 hover:scale-105 shadow-2xl shadow-[#5b0e2d]">
                            <div className="flex">
                                <div className="relative mx-4 -mt-4 w-72 overflow-hidden rounded-lg bg-cover bg-no-repeat">
                                    <img src={handwritten} alt='audiofile' className="w-full "/>                                 
                                </div>
                            </div>
                            <div className="p-6">
                                <Link  to={'/hand-to-edit'} className="mb-2 text-lg font-medium text-white">Text Conversion</Link> 
                                          
                            </div>
                        </div>
                    </div>
                    <div className="mb-6 lg:mb-0">
                        <div className="w-72 rounded-lg bg-[#aa3f3d]  mx-auto  cursor-pointer transition duration-500 hover:scale-105 shadow-2xl shadow-[#5b0e2d]">
                            <div className="flex">
                                <div className="relative mx-4 -mt-4 w-72 overflow-hidden rounded-lg bg-cover bg-no-repeat ">
                                    <img src={audi} className="w-full"/>                                 
                                </div>
                            </div>
                            <div className="p-6">
                                <Link className="mb-2 text-lg font-medium text-white" to={'/audio-transcribe'}>Audio Conversion</Link>                       
                            </div>
                        </div>
                    </div>
                    <div className="mb-6 lg:mb-0 sm: w-full">
                        <div className="w-72 rounded-lg bg-[#aa3f3d] mx-auto  cursor-pointer transition duration-500 hover:scale-105 shadow-2xl shadow-[#5b0e2d]">
                            <div className="flex">
                                <div className="relative mx-4 -mt-4 w-72 overflow-hidden rounded-lg bg-cover bg-no-repeat ">
                                    <img src={variousfile}className="w-full"/>                                 
                                </div>
                            </div>
                            <div className="p-6">
                                <h5 className="mb-2 text-lg font-bold text-white">Export to various file formats</h5>                       
                            </div>
                        </div>
                    </div>
                    <div className="mb-6 lg:mb-0 mt-8">
                        <div className="w-72 rounded-lg bg-[#aa3f3d] mx-auto   cursor-pointer transition duration-500 hover:scale-105 shadow-2xl shadow-[#5b0e2d]">
                            <div className="flex">
                                <div className="relative mx-4 -mt-4 w-72 overflow-hidden rounded-lg bg-cover bg-no-repeat ">
                                    <img src={variousfile} className="w-full"/>                                 
                                </div>
                            </div>
                            <Link to={'/language-translate'} className="p-6">
                                <h5 className="mb-2 text-lg font-bold text-white">Language Translation</h5>                       
                            </Link>
                        </div>
                    </div>
                  
                    <div className="mb-6 lg:mb-0 mt-8">
                        <div className="w-72 rounded-lg bg-[#aa3f3d]  mx-auto  cursor-pointer transition duration-500 hover:scale-105 shadow-2xl shadow-[#5b0e2d]">
                            <div className="flex">
                                <div className="relative mx-4 -mt-4 w-72 overflow-hidden rounded-lg bg-cover bg-no-repeat ">
                                    <img src={summarization} className="w-full"/>                                 
                                </div>
                            </div>
                            <div className="p-6">
                            <Link to={'/summarization'} className="mb-2 text-lg font-bold text-white">Text summarization</Link>                       
                            </div>
                        </div>
                    </div>
                    <div className="mb-6 lg:mb-0 mt-8">
                        <div className="w-72 rounded-lg bg-[#aa3f3d] mx-auto  cursor-pointer transition duration-500 hover:scale-105 shadow-2xl shadow-[#5b0e2d]">
                            <div className="flex">
                                <div className="relative mx-4 -mt-4 w-72 overflow-hidden rounded-lg bg-cover bg-no-repeat ">
                                    <img src={maths} className="w-full"/>                                 
                                </div>
                            </div>
                            <div className="p-6">
                                <h5 className="mb-2 text-lg font-bold text-white">Mathematical Expression solving</h5>                       
                            </div>
                        </div>
                    </div>

    
                </div>
            </section>
        </div>
    )
}






// import { Link } from 'react-router-dom';
// import audi from '../Images/audio.png';
// import handwritten from '../Images/handwritten.png';
// import maths from '../Images/maths.png';
// // import summarization from '../Images/summary.png';
// import translate from '../Images/translate.png';
// import variousfile from '../Images/variousfile.png';
// export const Featurecards = () => {
//     const ServiceData=["Text Conversion","Audio Conversion","Export to various file formats","Language Translation","Text summarization","Mathematical Expression solving"]
//     return (
//         <div>
//             <section className="mb-32 text-center mt-6">
//                 <h1 className="mb-12 pb-4 text-center text-5xl font-bold relative text-[#5b0e2d]">
//                    Services
//                     <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-black"></div>
//                 </h1>

//                 <div className="grid md:grid-cols-3 justify-center items-center">
//                     {ServiceData.map(item=>(
//                          <div className="mb-6 mt-7">
//                          <div className=" w-72 block rounded-lg bg-[#aa3f3d] mx-auto  cursor-pointer transition duration-500 hover:scale-105 shadow-2xl shadow-[#5b0e2d]">
//                              <div className="flex">
//                                  <div className="relative mx-4 -mt-4 w-72 overflow-hidden rounded-lg bg-cover bg-no-repeat ">
                                   
//                                      <img key={item} src={`/$(item).webp`} alt='audiofile' className="w-full "/>                                 
//                                  </div>
//                              </div>
//                              <div className="p-6">
//                                  <h5 className="mb-2 text-lg font-medium text-white">{item}</h5>                       
//                              </div>
//                          </div>
//                      </div>
//                     ))}
                   
//                     {/* <div className="mb-6 lg:mb-0">
//                         <div className="w-72 rounded-lg bg-[#aa3f3d]  mx-auto  cursor-pointer transition duration-500 hover:scale-105 shadow-2xl shadow-[#5b0e2d]">
//                             <div className="flex">
//                                 <div className="relative mx-4 -mt-4 w-72 overflow-hidden rounded-lg bg-cover bg-no-repeat ">
//                                     <img src={audi} className="w-full"/>                                 
//                                 </div>
//                             </div>
//                             <div className="p-6">
//                                 <h5 className="mb-2 text-lg font-medium text-white">Audio Conversion</h5>                       
//                             </div>
//                         </div>
//                     </div> */}
//                     {/* <div className="mb-6 lg:mb-0 sm: w-full">
//                         <div className="w-72 rounded-lg bg-[#aa3f3d] mx-auto  cursor-pointer transition duration-500 hover:scale-105 shadow-2xl shadow-[#5b0e2d]">
//                             <div className="flex">
//                                 <div className="relative mx-4 -mt-4 w-72 overflow-hidden rounded-lg bg-cover bg-no-repeat ">
//                                     <img src={variousfile}className="w-full"/>                                 
//                                 </div>
//                             </div>
//                             <div className="p-6">
//                                 <h5 className="mb-2 text-lg font-bold text-white">Export to various file formats</h5>                       
//                             </div>
//                         </div>
//                     </div>
//                     <div className="mb-6 lg:mb-0 mt-8">
//                         <div className="w-72 rounded-lg bg-[#aa3f3d] mx-auto   cursor-pointer transition duration-500 hover:scale-105 shadow-2xl shadow-[#5b0e2d]">
//                             <div className="flex">
//                                 <div className="relative mx-4 -mt-4 w-72 overflow-hidden rounded-lg bg-cover bg-no-repeat ">
//                                     <img src={variousfile} className="w-full"/>                                 
//                                 </div>
//                             </div>
//                             <div className="p-6">
//                                 <h5 className="mb-2 text-lg font-bold text-white">Language Translation</h5>                       
//                             </div>
//                         </div>
//                     </div>
                  
//                     <div className="mb-6 lg:mb-0 mt-8">
//                         <div className="w-72 rounded-lg bg-[#aa3f3d]  mx-auto  cursor-pointer transition duration-500 hover:scale-105 shadow-2xl shadow-[#5b0e2d]">
//                             <div className="flex">
//                                 <div className="relative mx-4 -mt-4 w-72 overflow-hidden rounded-lg bg-cover bg-no-repeat ">
//                                     <img src={summarization} className="w-full"/>                                 
//                                 </div>
//                             </div>
//                             <div className="p-6">
//                             <Link to={'/summarization'} className="mb-2 text-lg font-bold text-white">Text summarization</Link>                       
//                             </div>
//                         </div>
//                     </div>
//                     <div className="mb-6 lg:mb-0 mt-8">
//                         <div className="w-72 rounded-lg bg-[#aa3f3d] mx-auto  cursor-pointer transition duration-500 hover:scale-105 shadow-2xl shadow-[#5b0e2d]">
//                             <div className="flex">
//                                 <div className="relative mx-4 -mt-4 w-72 overflow-hidden rounded-lg bg-cover bg-no-repeat ">
//                                     <img src={maths} className="w-full"/>                                 
//                                 </div>
//                             </div>
//                             <div className="p-6">
//                                 <h5 className="mb-2 text-lg font-bold text-white">Mathematical Expression solving</h5>                       
//                             </div>
//                         </div>
//                     </div> */}

    
//                 </div>
//             </section>
//         </div>
//     )
// }