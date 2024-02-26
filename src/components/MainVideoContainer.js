import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'


const MainVideoContainer = () => {
    //getting video info from redux store using useSelector
    const movies = useSelector(store=> store.movies?.nowPlayingMovies)
    // it will throw an runtime err as initially the movies = null so do the early return
    // if(movies === null) return;
    if(!movies ) return;

    const mainMovie = movies[0]
    // console.log(mainMovie)

    const { original_title,overview, id  } = mainMovie;
  return (
    <div className='md:pt-0  pt-[30%]'>
     
        <VideoTitle  title={original_title} overview={overview}/>      
        <VideoBackground  movieId={id}/>
   
    </div>
  )
}

export default MainVideoContainer