import React from 'react';
import { lang } from '../Utils/langConstants';
import { useSelector } from 'react-redux';

const GptSearchBar = () => {
    const langCode = useSelector((store)=>store.config.language);
    console.log(langCode);
    return (
        <div className='pt-[10%] flex justify-center'>
           <form
            className="bg-black w-1/2 grid grid-cols-12"
           onSubmit={(e)=>e.preventDefault()}
           >
            <input className='m-4 p-4 col-span-10 rounded-lg' type="text"  placeholder={lang[langCode].GptPlaceholder}></input>
            <button className='m-4  ml-0 py-2 px-4 col-span-2 bg-red-600 text-white rounded-md  hover:bg-red-700'>{lang[langCode].search}</button>
           </form>
            
        </div>
    );
}

export default GptSearchBar;
