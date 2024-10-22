import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name : "gpt",
    initialState : {
        showGptSearch : false,
        movieNames : null,
        movieResults : null,
    },

    reducers : {
        toggleGptSearchView : (state) =>{
            state.showGptSearch = !(state.showGptSearch)
        },
        addGptMovieSuggestion : (state,action) =>{
            const {gptMovieNames,gptMovieResults} = action.payload;
            state.movieNames = gptMovieNames;
            state.movieResults = gptMovieResults
        }
    }
});

export const {toggleGptSearchView,addGptMovieSuggestion} = gptSlice.actions;

export default gptSlice.reducer;