import React from 'react'

const GptSearchBar = () => {
  return (

    <div className='p-[10%] flex justify-center'>
        <form className='w-1/2 bg-black grid grid-cols-12'>
            <input type='text' className=' m-4 col-span-9 p-2 '  placeholder='what would you like to watch today?' />
            <button className='p-2 m-4 px-4 bg-red-700 text-white col-span-3'>Search</button>
        </form>
    </div>
  )
}

export default GptSearchBar