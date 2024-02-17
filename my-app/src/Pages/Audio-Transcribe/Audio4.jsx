import React from 'react'
import ReactPlayer from 'react-player/youtube'; 
const Audio4 = () => {
  return (
    <div className=' px-36'>
        <div className='p-20 '>
            <div className=' text-center'>
            <h1 className='text-3xl font-bold'>Learn more about our audio-to-text tool in this video</h1>
            </div>
            <div className="flex justify-center mt-14 relative rounded-md ">
                <ReactPlayer url='https://www.youtube.com/watch?v=qjeEZywI8-E&t=51s' width={700} controls  className=" rounded-xl overflow-hidden"/>
            </div>
            

        </div>

    </div>
  )
}

export default Audio4