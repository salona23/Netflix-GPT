import React from 'react';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';
import { useSelector } from 'react-redux';

const MainContainer = () => {
    const movies = useSelector((store)=>store.movies?.nowPlayingMovies);
    if(!movies) return null;
    const mainMovie = movies[0];
    // console.log(mainMovie);
    const {original_title,overview,id} = mainMovie;
    return (
        <div className=''>
            <VideoTitle title={original_title} overview = {overview}/>
            <VideoBackground videoId={id}/>
        </div>
    );
}

export default MainContainer;
