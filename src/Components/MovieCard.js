import React from 'react';

const MovieCard = ({poster_path}) => {
    // console.log(poster_url);
    if(!poster_path) return null;
    return (
        <div className=' md:mr-2   md:w-44
        w-28 mr-1' >
            <img className='md:max-w-full md:w-[300px] md:h-[250px] md:object-cover rounded-md hover:opacity-80
            w-[110px] h-[150px]'
            alt="poster_url" src={"https://image.tmdb.org/t/p/w500/"+poster_path}></img>
        </div>
    );
}

export default MovieCard; 
 