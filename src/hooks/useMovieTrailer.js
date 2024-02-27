import { useDispatch } from "react-redux";
import { API_OPTIONS } from '../utils/constants'
import { useEffect } from "react";
import { addTrailerVideo } from '../utils/moviesSlice';



const useMovieTrailer = (movieId) => {

    const dispatch = useDispatch();


    const getMovieVideos =async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/'+
        movieId+
       '/videos?language=en-US', API_OPTIONS)
        const json = await data.json();
        console.log(json)

        const filterTrailers = json.results.filter((video )=> video.type==="Trailer")
        //if there is no data with trailer the take first video data
        const trailer = filterTrailers.length ? filterTrailers[0] : json.results[0];
        // console.log(trailer)
        dispatch(addTrailerVideo(trailer))
        
    }

    useEffect(()=> {
        getMovieVideos();
    }, [])
}

export default useMovieTrailer