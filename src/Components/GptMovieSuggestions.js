import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const GptMovieSuggestions = () => {
    const {movieNames,movieResults} = useSelector(store=>store.gpt);
    if(!movieNames) return null;
    return (
        <div className='bg-black text-white m-8 opacity-90'>
            {
                movieNames.map((movieName,i)=><MovieList key={movieName} title={movieName} movies = {movieResults[i]} />)
            }
            
            
        </div>
    );
}

export default GptMovieSuggestions;
