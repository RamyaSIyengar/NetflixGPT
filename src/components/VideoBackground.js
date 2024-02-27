import React from 'react'
import {  useSelector } from 'react-redux'
import useMovieTrailer from '../hooks/useMovieTrailer';


const VideoBackground = ({movieId}) => {

    const trailerVideo = useSelector(store => store.movies?.trailerVideo);
   console.log(trailerVideo)

    //Fetch Video trailer from Movies TMDB API website and updating store with the trailer video, moved to hooks

   useMovieTrailer(movieId);

    
  return (
    <div >
        <iframe className='w-screen aspect-video z-10 top-0' 
        src={"https://www.youtube.com/embed/" + 
        trailerVideo?.key +
         "?&autoplay=1&controls=0&iv_load_policy=3&modestbranding=1&showinfo=0&rel=0&mute=1&loop=1&amp;start=10&color=white"}
        title="YouTube video player" frameborder="3" 
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
         allowfullscreen></iframe>

    </div>
  )
}

export default VideoBackground

