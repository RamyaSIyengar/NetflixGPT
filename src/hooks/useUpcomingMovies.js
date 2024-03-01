import {useDispatch} from "react-redux"
import { API_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
    //Fetch Data from TDB API & update store 
    const dispatch = useDispatch();

    const getUpcomigMovies= async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1',
     API_OPTIONS
     )
     const json = await data.json();
    // console.log(json)
     dispatch(addUpcomingMovies(json.results))

  };

  useEffect(() => {
    getUpcomigMovies();
  }, [])

}

export default useUpcomingMovies;