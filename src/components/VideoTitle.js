import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className="pt-[15%]  pl-24 px-12 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
        <h1 className='text-6xl font-bold '>{title}</h1>
        <h2 className=' py-6 text-lg w-1/4 '>{overview}</h2> 
        <div>

            <button className='px-12 py-2  bg-white hover:bg-opacity-80 text-black font-semibold rounded-lg text-xl'>Play</button>
            <button className='px-12 py-2 mx-4 bg-gray-400 rounded-lg bg-opacity-40 text-xl'>More Info</button>
        </div> 
    </div>
  )
}

export default VideoTitle