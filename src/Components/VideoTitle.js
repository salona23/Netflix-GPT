
import React from 'react';

const VideoTitle = ({title,overview}) => {
    return (
        <div className='absolute pt-[20%] px-16 text-white bg-gradient-to-r from-black w-screen aspect-video z-10'>
            <div>
                <h1 className='text-6xl font-bold '>{title}</h1>
                <p className='text-lg w-1/4 p-2 py-4'>{overview}</p>
            </div>
            <div>
                <button className='bg-white text-lg p-3 m-2 w-28 text-black rounded-lg hover:opacity-50'>Play</button>
                <button className='bg-gray-500 text-lg p-3 m-2 w-32 text-white rounded-lg opacity-70'>More Info</button>
            </div>
            
        </div>
    );
}

export default VideoTitle;
