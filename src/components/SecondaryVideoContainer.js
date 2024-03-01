import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryVideoContainer = () => {
  const movies = useSelector(store => store.movies)

  // console.log(movies)
  return (
    <div className='bg-black w-screen'>
       <div className='pl-12 -mt-56 relative z-10 '>
       <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
       <MovieList title={"Popular"} movies={movies.popularMovies}/>
       <MovieList title={"Top Rated"} movies={movies.topRatedMovies}/>
       <MovieList title={"Upcoming"} movies={movies.upcomingMovies}/>
       </div>
      {/**
       * Movie List
       *   -popular Movie List
       *       -MovieCard
       *   -trending Movie List
       *   -Now playing Movie List
       *   -Top movies Movie List
       */}
    </div>
  )
}

export default SecondaryVideoContainer