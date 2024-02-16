import React from 'react';
import { CardData } from './Audio3data';

const Audio3 = () => {
    return (
        <div>
            <div className='px-32 mt-20 '>
                <div className=' p-10 rounded-lg'>
                    <h1 className='font-bold text-4xl text-center'>How to transcribe audio to text:</h1>
                    <div className='grid md:grid-cols-3 justify-center items-center'>
                        {CardData.map((eachobj, index) => (
                            <div key={index} className="relative flex flex-col mt-16 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-80">
                                <div className="relative h-40 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                                    <img src={eachobj.imgurl} alt="card-image" />
                                </div>
                                <div className="p-6">
                                    <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                        {eachobj.head}
                                    </h5>
                                    <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                                        {eachobj.para}
                                    </p>
                                </div>
                                <div className="p-6 pt-0">
                                    <button
                                        className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                                        type="button">
                                        Read More
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Audio3;






       {/* <div className='w-72 '>
            <div className='text-center'>
                <img src='https://cdn-site-assets.veed.io/cdn-cgi/image/width=360,quality=75,format=auto/Upload_or_record_d9784e01b0/Upload_or_record_d9784e01b0.png'></img>
                <h1 className='font-bold text-lg'>Upload or record</h1>
                <p>Upload your audio or video to VEED or record one using our online audio recorder.</p>
            </div>
        </div>
        <div className='w-72'>
            <div className='text-center'>
                <img src='https://cdn-site-assets.veed.io/cdn-cgi/image/width=360,quality=75,format=auto/Auto_transcribe_and_translate_f9f7a99235/Auto_transcribe_and_translate_f9f7a99235.png'></img>
                <h1 className='font-bold text-lg'>Auto-transcribe and translate</h1>
                <p>Auto-transcribe your video from the Subtitles menu. You can also translate your transcript to over 12 languages. Select a language and translate the transcript instantly.</p>
            </div>
        </div>
        <div className='w-72'>
            <div className='text-center'>
                <img src='https://cdn-site-assets.veed.io/cdn-cgi/image/width=360,quality=75,format=auto/Upload_or_record_d9784e01b0/Upload_or_record_d9784e01b0.png'></img>
                <h1 className='font-bold text-lg'>Review and export</h1>
                <p>Review and edit the transcription if necessary. Just click on a line of text and start typing. Download your transcript in PDF,Doc, TXT format.</p>
            </div>
        </div> */}