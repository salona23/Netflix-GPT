import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const GptMovieSuggestions = () => {
    const {movieNames,movieResults} = useSelector(store=>store.gpt);
    if(!movieNames) return null;
    return (
        <div className='md:m-8 bg-black text-white opacity-90 rounded-sm
        m-4'>
            {
                movieNames.map((movieName,i)=><MovieList key={movieName} title={movieName} movies = {movieResults[i]} />)
            }
            
            
        </div>
    );
}

export default GptMovieSuggestions;
