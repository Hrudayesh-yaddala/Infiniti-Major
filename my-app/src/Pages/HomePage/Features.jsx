


import React from 'react'
import { Link } from 'react-router-dom';

const Features = () => {
    return (
        <section class="py-6 bg-white text-black sm:py-16 lg:py-10 ">
            <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div class="max-w-xl mx-auto text-center xl:max-w-2xl">
                    <h2 class="text-3xl font-bold leading-tight sm:text-4xl xl:text-5xl font-pj">Features</h2>
                </div>
                <div class="grid max-w-4xl lg:max-w-6xl grid-cols-1 mx-auto mt-8 text-center gap-y-4 sm:gap-x-8 sm:grid-cols-2 lg:grid-cols-3 sm:mt-12 lg:mt-20 sm:text-left">
                    <Link to={'/language-translate'} class="overflow-hidden bg-[#ffa781] shadow-md rounded-xl"><div class="p-9">
                        <p class="text-4xl">ऋ</p>
                        <h3 class="mt-6 text-2xl font-bold sm:mt-10 font-pj">Language Translation</h3>
                        <p class="mt-6 text-base text-black font-pj">Seamlessly translate text between languages for effective communication worldwide.</p>
                    </div>
                    </Link>
                    <Link to={'/summarization'} class="relative">
                        <div class="absolute -inset-1">
                            <div class="w-full h-full rotate-180 opacity-50  filter blur-md  bg-gradient-to-r from-purple-900 to-blue-900">
                            </div>
                        </div>
                        <div  class="relative overflow-hidden bg-[#5b0e2d] shadow-md rounded-xl h-full">
                            <div class="p-9">
                                <p class="text-4xl">📝</p>
                                <h3 class="mt-6 text-2xl font-bold sm:mt-10 font-pj text-white">Text Summarization</h3>   
                                <p class="mt-6 text-base text-white font-pj">Condense lengthy texts into concise summaries for quick understanding </p>
                            </div>
                        </div>
                    </Link>
                    <Link to={'/text-to-speech'} class="overflow-hidden bg-[#ffa781] shadow-md rounded-xl">
                        <div class="p-9">
                            <p class="text-4xl">🔉</p>
                            <h3 class="mt-6 text-2xl font-bold sm:mt-10 font-pj text-black">Text to Audio Conversion</h3>
                            <p class="mt-6 text-base text-black font-pj">Transform written content into spoken words for accessibility and convenience.</p>
                        </div>
                    </Link>
                    <Link to={'/audio-transcribe'} class="relative"><div class="absolute -inset-1">
                        <div class="w-full h-full rotate-180 opacity-50 blur-md filter bg-gradient-to-r from-purple-700 to-black"></div>
                    </div>
                        <div class="relative overflow-hidden bg-[#5b0e2d] shadow-md rounded-xl h-full">
                            <div class="p-9">
                                <p class="text-4xl">💬</p>
                                <h3 class="mt-6 text-2xl font-bold  text-white sm:mt-10 font-pj">Audio to text Conversion  </h3>
                                <p class="mt-6 text-base text-gray-300 font-pj">Convert spoken words or audio recordings into written text for transcription purposes. </p>
                            </div>
                        </div>
                    </Link>
                    <Link to={'/hand-to-edit'} class="overflow-hidden bg-[#ffa781] shadow-md rounded-xl">
                        <div class="p-9">
                            <p class="text-4xl">🔡</p>
                            <h3 class="mt-6 text-2xl font-bold sm:mt-10 font-pj">HandWritten to Editable Text</h3>
                            <p class="mt-6 text-base text-black font-pj"> Digitize handwritten notes or documents into editable, electronic formats.</p>
                        </div>
                    </Link>
                    <Link to={'/text-paraphraser'} class="overflow-hidden bg-[#5b0e2d] shadow-md rounded-xl">
                        <div class="p-9">
                            <p class="text-4xl">📑</p>
                            <h3 class="mt-6 text-2xl font-bold sm:mt-10 font-pj text-white">Paraphraser</h3>
                            <p class="mt-6 text-base text-white font-pj">Rephrase text while retaining the original meaning to enhance clarity and avoid plagiarism.</p>
                        </div>
                    </Link>
                    <Link to={'/maths-expression'} class="relative">
                        <div class="absolute -inset-1">
                            <div class="w-full h-full rotate-180 opacity-50 blur-md filter   bg-gradient-to-r from-purple-600 to-black">
                            </div>
                        </div>
                        <div class="relative overflow-hidden bg-[#ffa781] shadow-md rounded-xl h-full">
                            <div class="p-9">
                                <p class="text-4xl">➗</p>
                                <h3 class="mt-6 text-2xl font-bold sm:mt-10 font-pj text-black">Mathematical Expression Solving</h3>
                                <p class="mt-6 text-base text-black font-pj">Solve complex mathematical equations and expressions with precision and efficiency. </p>
                            </div>
                        </div>
                    </Link>
                    <Link to={'/edit-to-handwritten'} class="relative">
                        <div class="absolute -inset-1">
                            <div class="w-full h-full rotate-180 opacity-50 blur-md filter   bg-gradient-to-r from-purple-600 to-black">
                            </div>
                        </div>
                        <div class="relative overflow-hidden bg-[#5b0e2d] shadow-md rounded-xl h-full">
                            <div class="p-9">
                                <p class="text-4xl">✍🏻</p>
                                <h3 class="mt-6 text-2xl font-bold sm:mt-10 font-pj text-white">Editable to handwritten Text</h3>
                                <p class="mt-6 text-base text-gray-300 font-pj">Convert editable electronic text into handwritten format for personalized communication or artistic expression.</p>
                            </div>
                        </div>
                    </Link>
                    <Link to={'/export-file'} class="relative">
                        <div class="absolute -inset-1">
                            <div class="w-full h-full rotate-180 opacity-30 blur-lg filter   bg-gradient-to-r from-black-400 via-blue-500 to-green-600">
                            </div>
                        </div>
                        <div class="relative overflow-hidden bg-[#ffa781] shadow-md rounded-xl h-full">
                            <div class="p-9">
                                <p class="text-4xl">⚡</p>
                                <h3 class="mt-6 text-2xl font-bold sm:mt-10 font-pj text-black">Export to various File Formats</h3>
                                <p class="mt-6 text-base text-black font-pj">Save documents in multiple file formats, ensuring compatibility and flexibility for diverse needs. </p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Features;










