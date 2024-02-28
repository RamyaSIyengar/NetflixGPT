import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {

    // console.log(title )
    // console.log(movies )
    
  return (

    <div className='p-2'>
       <h1 className='font-semibold text-3xl py-4 text-white'>{title} </h1>
       <div className='flex  no-scrollbar overflow-x-auto'>
        <div className='flex '>
            {movies && movies.map((movie) => ( 
           <MovieCard key={movie.id}  title={movie.original_title} poster_path={movie.poster_path} />
             ))

            }
          
        </div>
    </div>
    </div>
  )
}

export default MovieList