
import React from 'react';

const VideoTitle = ({title,overview}) => {
    return (
        <div className='absolute pt-[20%] md:px-16 text-white bg-gradient-to-r from-black w-screen aspect-video z-10 px-4'>
            <div>
                <h1 className='md:text-6xl font-bold text-xl '>{title}</h1>
                <p className='md:inline-block text-lg md:w-1/4 sm:w-1/2 p-2 py-4 hidden'>{overview}</p>
            </div>
            <div>
                <button className='bg-white md:text-lg md:p-3 md:m-2 md:w-28  text-black rounded-lg hover:opacity-50
                 p-[2px] w-14 my-2'>Play</button>
                <button className='bg-gray-500 md:text-lg md:p-3 md:m-2 md:w-32 text-white rounded-lg opacity-70 hover:opacity-50
                p-[2px] w-24 m-2'>More Info</button>
            </div>
            
        </div>
    );
}

export default VideoTitle;
