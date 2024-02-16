import React from 'react'
import { Link } from 'react-router-dom'
// import audioimag from '../Images/audiotranscribe.webp'
// import audioimag from '../Images/audiotranscribe.webp'

const Audioinit = () => {
  return (
    <div>
    <div className="flex ">
        <div className=" w-1/2 mt-28">
          <div className=" ml-44  p-10">
            <div className=' mt-24 space-y-5 mb-8 '>
            <h1 className=" text-6xl font-bold text-black ">Audio to Text</h1>
            <p className="text-black text-left text-lg font-semibold ">Transcribe audio to text automatically, using AI. Over +120 languages supported</p>
            
          </div>
          <Link  to={'/plan-selection'} className=' bg-orange-800 p-2  mt-6 rounded-2xl text-white font-medium text-2xl'>Transcribe your audio to text</Link>
          
          </div>
          
        </div>
        <div className=" w-1/2 mt-32">
          <div className=" px-10 py-20 mr-16 ">
          <img src='/Images/audiotranscribe.webp' className=' rounded-lg shadow-black shadow-2xl'></img>
          </div>
        </div>
      </div>
      <div>
      </div>
    
      </div>
  )
}

export default Audioinit;