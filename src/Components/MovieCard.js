import React from 'react';

const MovieCard = ({poster_path}) => {
    // console.log(poster_url);
    if(!poster_path) return null;
    return (
        <div className='w-64 h-40 mx-2  hover:opacity-70' >
            <img  className='w-[300px] h-[150px]  rounded-md'
            alt="poster_url" src={"https://image.tmdb.org/t/p/w500/"+poster_path}></img>
        </div>
    );
}

export default MovieCard;
