import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector} from "react-redux";
import openai from '../utils/openAi';
import { API_OPTIONS } from "../utils/constants";
import { addGptSearchResults, addTMDBMovies } from "../utils/gptSlice";



const GptSearchBar = () => {

  const langSelected = useSelector(store => store.config.lang)
  const searchText = useRef(null);
  const dispatch = useDispatch();

  //search movie in TMDB database

  const searchMovieTMDB = async (movieName) => {
     const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' +movieName +'&include_adult=false&language=en-US&page=1',  API_OPTIONS)
     const json = await data.json();
     return json.results;
    }

  const handleGptSearchClick = async() => {
    console.log(searchText.current.value)
    //Make an API call to GPT API and get Movie Results 

      const gptQuery = " Act as a Movie Recommendation system and suggest some movies for the query: " +
      searchText.current.value +
      ". only give me names of 5 movies, comma separated. like the example result given ahead. Example Result: Fighter, 12th Fail, Hi Nanna, Dia, Rab ne banadi jodi "

      const gptResults =  await openai.chat.completions.create({  //promise result so await
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    });

      if(!gptResults.choices){
        //error handling
      }
      console.log(gptResults.choices?.[0]?.message?.content);
      //Don, Don 2, Don: The Chase Begins Again, Don Muthu Swami, Don Seenu
      // split gives an array of movies
      const gptMovies = gptResults.choices?.[0]?.message?.content.split(", ")
      //for each movies, will call TMDB search API

      const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie))
      // [Promise , Promise, Promise, Promise, Promise]
      // when all the promises are resolved then only will get results from tmdb by using promise.all

      const tmdbResult = await Promise.all(promiseArray)
      console.log(tmdbResult)
      dispatch(
        addTMDBMovies({movieNames:gptMovies, movieResults:tmdbResult})
      );
  }

  return (
    <div className="p-[10%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12" onSubmit={(e) => e.preventDefault()}>
        <input
          ref={searchText}
          type="text"
          className=" m-4 col-span-9 p-2 "
          placeholder={lang[langSelected].gptSearchPlaceholder}
        />
        <button className="p-2 m-4 px-4 bg-red-700 text-white col-span-3"
        onClick={handleGptSearchClick}>
          {lang[langSelected].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
