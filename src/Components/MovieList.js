import React from 'react';
import MovieCard from './MovieCard';
import { useSelector } from 'react-redux';

const MovieList = ({title,movies}) => {
    if(!movies) return null;
    return (
        <div className='md:py-6 z-30 md:px-16
        py-2 px-4' >
            <h1 className='md:text-xl text-md mb-[10px] text-white font-bold'>{title}</h1>
           
            <div className='flex overflow-x-auto hide-scrollbar'>
                <div className='flex'>
                {
                    movies?.map((movie)=> <MovieCard key={movie.id} poster_path={movie.poster_path}/>)
                }
               </div>
            </div>
            
        </div>
    );
}

export default MovieList;
