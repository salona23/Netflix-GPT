import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
    const movies = useSelector((store)=>store.movies);
    return (
        <div className='bg-black'>
        <div className='relative z-30 -mt-40'>
            <MovieList title="Now Playing" movies={movies?.nowPlayingMovies} />
            <MovieList title="Popular" movies={movies?.popularMovies} />
            <MovieList title="Trending" movies={movies?.topRatedMovies} />
            <MovieList title="Upcoming" movies={movies?.upcomingMovies} />
            <MovieList title="New on Netflix" movies={movies?.nowPlayingMovies} />
            <MovieList title="Us Movies" movies={movies?.popularMovies} />
            <MovieList title="Action Movies" movies={movies?.topRatedMovies} />
            
        </div>
        </div>
    );
}

export default SecondaryContainer;
