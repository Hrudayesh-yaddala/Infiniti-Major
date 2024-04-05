import React from 'react'
import { Link } from 'react-router-dom';
const Pricing = () => {
  return (
    <div className='bg-[#ffa781] dark:bg-gray-900 h-screen'>
<div class="">
    <div class="container px-6 py-8 mx-auto">
        <div class=" mt-32 flex flex-col items-center justify-center space-y-8 lg:-mx-4 lg:flex-row lg:items-stretch lg:space-y-0">
            <div class="  flex flex-col w-full max-w-sm p-8 space-y-8 text-center  bg-white border-2 border-gray-300 rounded-lg lg:mx-4 hover:bg-slate-200 hover:border-[#5b0e2d] ">
                <div class="flex-shrink-0">
                    <h2 class="inline-flex items-center justify-center px-2 font-bold tracking-tight text-[#5b0e2d] uppercase rounded-lg text-xl ">
                        Basic
                    </h2>
                </div>

                <div class="flex-shrink-0">
                    <span  class="pt-2 text-4xl font-bold text-gray-800 uppercase dark:text-gray-100">
                        Free
                    </span>
                </div>

                <ul class="flex-1 space-y-4">
                    <li class="text-gray-500 dark:text-gray-400">
                        Supports English 
                    </li>

                    <li class="text-gray-500 dark:text-gray-400">
                        Unlimited Size
                    </li>

                   {/* <li class="text-gray-500 dark:text-gray-400">
                        2Gb of storage
                    </li>  */}
                </ul>

                <Link to={'/audio-main'} class="inline-flex items-center justify-center px-4 py-2 font-medium text-white uppercase transition-colors duration-300 bg-[#5b0e2d] rounded-lg hover:bg-orange-800 focus:outline-none">
                    Start free
                </Link>
            </div>

            <div class="flex flex-col w-full max-w-sm p-8 space-y-8 text-center bg-white border-2 border-gray-200 rounded-lg lg:mx-4 hover:bg-slate-200 hover:border-[#5b0e2d] ">
                <div class="flex-shrink-0">
                    <h2 class="inline-flex items-center justify-center px-2 font-bold tracking-tight text-[#5b0e2d] uppercase rounded-lg text-xl ">
                        Pro
                    </h2>
                </div>

                <div class="flex-shrink-0">
                    <span class="pt-2 text-4xl font-bold text-gray-800 uppercase dark:text-gray-100">
                        $24.90
                    </span>
                    
                    <span class="text-gray-500 dark:text-gray-400">
                        /month
                    </span>
                </div>

                <ul class="flex-1 space-y-4">
                    <li class="text-gray-500 dark:text-gray-400">
                        Supports Multi-Languages
                    </li>

                    <li class="text-gray-500 dark:text-gray-400">
                        Up to 40 seconds
                    </li>
{/* 
                    <li class="text-gray-500 dark:text-gray-400">
                        10Gb of storage
                    </li>

                    <li class="text-gray-500 dark:text-gray-400">
                        Real-time collaborations
                    </li> */}
                </ul>

                <button class="inline-flex items-center justify-center px-4 py-2 font-medium text-white uppercase transition-colors duration-300 bg-[#5b0e2d] rounded-lg hover:bg-orange-800">
                    Start free trial
                </button>
            </div>

            <div class="  flex flex-col w-full max-w-sm p-8 space-y-8 text-center bg-white border-2 border-[#5b0e2d] rounded-lg lg:mx-4 hover:bg-slate-200">
                <div class="flex-shrink-0">
                    <h2 class="inline-flex items-center justify-center px-2 font-bold tracking-tight text-[#5b0e2d] uppercase rounded-lg text-xl ">
                        Ultra
                    </h2>
                </div>

                <div class="flex-shrink-0">
                    <span class="pt-2 text-4xl font-bold text-gray-800 uppercase dark:text-gray-100">
                        $49.90
                    </span>

                    <span class="text-gray-500 dark:text-gray-400">
                        /month
                    </span>
                </div>

                <ul class="flex-1 space-y-4">
                    <li class="text-gray-500 dark:text-gray-400">
                        Unlimited Languages
                    </li>
                    
                    <li class="text-gray-500 dark:text-gray-400">
                        Unlimited size
                    </li>
                   
                    <li class="text-gray-500 dark:text-gray-400">
                     24x7 Support
                     </li>
                    
                    {/* <li class="text-gray-500 dark:text-gray-400">
                        Real-time collaborations
                    </li>
                    
                    <li class="text-gray-500 dark:text-gray-400">
                        24x7 Support
                    </li> */}
                </ul>

                <button class="inline-flex items-center justify-center px-4 py-2 font-medium text-white uppercase transition-colors duration-700 bg-[#5b0e2d] rounded-lg hover:bg-orange-800 focus:outline-none">
                    Start free trial
                </button>
            </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default Pricing