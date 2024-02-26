import React from 'react'
import {  useSelector } from 'react-redux'
import useMovieTrailer from '../hooks/useMovieTrailer';


const VideoBackground = ({movieId}) => {

    const trailerVideo = useSelector(store => store.movies?.trailerVideo);
    // console.log(trailerVideo.key)

    //Fetch Video trailer from Movies TMDB API website and updating store with the trailer video, moved to hooks

   useMovieTrailer(movieId);

    
  return (
    <div >
        <iframe className='w-screen aspect-video' 
        src={"https://www.youtube.com/embed/" + 
        trailerVideo?.key +
         "?&autoplay=1&mute=1&cc_load_policy=1&amp;start=10&amp;end=10"}
        title="YouTube video player" frameborder="3" 
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
         allowfullscreen></iframe>

    </div>
  )
}

export default VideoBackground

