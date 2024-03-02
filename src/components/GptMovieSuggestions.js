import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const GptMovieSuggestions = () => {

  const gpt = useSelector(store => store.gpt);
  const {movieNames, movieResults} = gpt;

  if(!movieNames) return null;

  return (
    <div className='p-4 m-4 bg-black  text-white  bg-opacity-80'>

      <div>

        {/* {movieNames.map((movieName, index) =>{
            <MovieList
              key={movieName}
              title={movieName}
              movies={movieResults[index]}
              />
          })} */}

       <MovieList title={movieNames[0]} movies={movieResults[0]}/>
       <MovieList title={movieNames[1]} movies={movieResults[1]}/>
       <MovieList title={movieNames[2]} movies={movieResults[2]}/>
       <MovieList title={movieNames[3]} movies={movieResults[3]}/>
       <MovieList title={movieNames[4]} movies={movieResults[4]}/>
              

          
      </div>

    </div>
  )

}
export default GptMovieSuggestions