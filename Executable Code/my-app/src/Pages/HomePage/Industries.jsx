import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
const Industries = () => {
  return (
    <div>
        <div class="bg-white pt-12 pr-4 pb-10 pl-4  mt-36">
  <div class="mr-auto ml-auto max-w-7xl">
    <p class="text-gray-900 text-3xl font-bold text-center tracking-tight mb-3 md:text-4xl">Trusted by 5200+, built by
        8</p>
    <p class="text-gray-600 text-lg text-center mt-0 mr-0 mb-16 ml-0">Organizations of all sizes trust HelloNext to
        manage customer feedback</p>
    <div class="pt-0 pr-0 pb-16 pl-0 grid grid-cols-2 gap-16 text-center lg:grid-cols-6">
      <div class="flex items-center justify-center">
        <img src="https://res.cloudinary.com/macxenon/image/upload/v1629297558/001-adobe_q9fyz4.svg" alt="Logo 1"
            class="block object-contain h-full h-16"/>
      </div>
      <div class="flex items-center justify-center">
        <img src="https://res.cloudinary.com/macxenon/image/upload/v1629297558/002-airbnb_aotwnn.svg" alt="Logo 2"
            class="block object-contain h-full h-16"/>
      </div>
      <div class="flex items-center justify-center">
        <img src="https://res.cloudinary.com/macxenon/image/upload/v1629297558/003-amd_fhisin.svg" alt="Logo 3"
            class="block object-contain h-full h-16"/>
      </div>
      <div class="flex items-center justify-center">
        <img src="https://res.cloudinary.com/macxenon/image/upload/v1629297560/004-android_a6i0c7.svg" alt="Logo 4"
            class="block object-contain h-full h-16"/>
      </div>
      <div class="flex items-center justify-center">
        <img src="https://res.cloudinary.com/macxenon/image/upload/v1629297560/007-ati_hhzips.svg" alt="Logo 5"
            class="block object-contain h-full h-16"/>
      </div>
      <div class="flex items-center justify-center">
        <img src="https://res.cloudinary.com/macxenon/image/upload/v1629297560/005-apple_zgdckn.svg" alt="Logo 6"
            class="block object-contain h-full h-16"/>
      </div>
    </div>
    <div class="text-center">
      <button fontfamily="Arial" class="pt-2 pr-3 pb-2 pl-3 inline-flex items-center justify-center bg-[#5b0e2d]
          rounded-md text-white transition cursor-pointer hover:bg-orange-900">
        <p class="font-semibold">See our Testimonials</p>
        <p class="inline-flex items-center justify-center w-10 h-10">
        <FaArrowRight className=' text-white text-xl'/>
        </p>
      </button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Industries;