import { useRef } from "react";
import { lang } from "../Utils/langConstants";
import { useDispatch, useSelector } from "react-redux";
import { model } from "../Utils/openAI";
import { API_OPTIONS } from "../Utils/constants";
import { addGptMovieSuggestion } from "../Utils/gptSlice";

const GptSearchBar = () => {
  const langCode = useSelector((store) => store.config.language);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const getMoviesSuggestion = async (movie) =>{
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=true&language=en-US&page=1",API_OPTIONS);
    const json = await data.json();
  
    return json.results;
  }

  const handleSearchSuggestion = async () => {
    const prompt =
      "Act a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movie, comma seperated. like the example result ahead. Example Result : Gadar, Golmaal, Don, Partner, Chup Chup ke ";

    const result = await model.generateContent(prompt);
    const gptMovieNames = result.response.text().split(", ");
    const moviesPromise =  gptMovieNames.map(movie=>getMoviesSuggestion(movie));

    const gptMovieResults = await Promise.all(moviesPromise);
    dispatch(addGptMovieSuggestion({gptMovieNames,gptMovieResults}))

    
   
  };
  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="bg-black  grid grid-cols-12 md:w-1/2 p-2 rounded-md"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          className="md:text-lg md:h-12 md:m-4 md:p-4  col-span-10 rounded-lg md:w-[95%] 
          w-[250px] h-[35px] m-1 p-1 text-[14px]
          "
          type="text"
          placeholder={lang[langCode].GptPlaceholder}
          ref={searchText}
        ></input>
        <button
          className="md:text-md md:h-12 md:p-2 md:my-4 md:mx-2 col-span-2 bg-red-600 text-white rounded-md font-bold hover:bg-red-700
          text-[14px] h-[35px] p-1 my-1 mx-[2px]"
          onClick={handleSearchSuggestion}
        >
          {lang[langCode].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
