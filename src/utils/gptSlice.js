import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice(
    {
        name:'gpt',
        initialState:{
            showGptSearchPage: false,
            movieNames: null,
            movieResults: {}
        },   
        reducers: {
        toggleGptSearchView : (state) => {
            state.showGptSearchPage = !state.showGptSearchPage;
        },
        addTMDBMovies: (state, action) => {
            const {movieNames, movieResults} = action.payload
            state.movieNames = movieNames
            state.movieResults =  movieResults
        },
        
    }
});

export const {toggleGptSearchView, addTMDBMovies} = gptSlice.actions;
export default gptSlice.reducer;