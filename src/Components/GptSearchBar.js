import React from 'react';

const GptSearchBar = () => {
    return (
        <div className='pt-[10%] flex justify-center'>
           <form
            className="bg-black w-1/2 grid grid-cols-12"
           onSubmit={(e)=>e.preventDefault()}
          
           >
            <input className='m-4 p-4 col-span-10 rounded-lg' type="text"  placeholder='What would you like to watch today?'></input>
            <button className='m-4  ml-0 py-2 px-4 col-span-2 bg-red-600 text-white rounded-md  hover:bg-red-700'>Search</button>
           </form>
            
        </div>
    );
}

export default GptSearchBar;
