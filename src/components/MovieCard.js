import React from 'react'
import { IMAGE_CDN } from '../utils/constants'

const MovieCard = ({poster_path,title }) => {
  return (
    <div className='w-48  pr-4 ml-2'>
        <img src={IMAGE_CDN + poster_path}/>
        <p className='text-white text-center'>{title}</p>

    </div>
  )
}

export default MovieCard