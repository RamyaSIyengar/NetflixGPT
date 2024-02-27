import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {

    // console.log(title )
    // console.log(movies )
    
  return (

    <div className='p-4'>
       <h1 className='font-semibold text-3xl py-4 text-white'>{title} </h1>
       <div className='flex  overflow-x-scroll'>
        <div className='flex '>
            {movies && movies.map((movie) => ( 
           <MovieCard key={movie.id} poster_path={movie.poster_path} />
             ))

            }
          
        </div>
    </div>
    </div>
  )
}

export default MovieList