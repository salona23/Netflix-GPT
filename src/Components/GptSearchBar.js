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
    // console.log(json.results);
    return json.results;
  }

  const handleSearchSuggestion = async () => {
    const prompt =
      "Act a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movie, comma seperated. like the example result ahead. Example Result : Gadar, Golmaal, Don, Partner, Chup Chup ke ";

    const result = await model.generateContent(prompt);
    const gptMovieNames = result.response.text().split(", ");
    // getMoviesSuggestion(gptMoviesResult[0])
    const moviesPromise =  gptMovieNames.map(movie=>getMoviesSuggestion(movie));

    const gptMovieResults = await Promise.all(moviesPromise);
    dispatch(addGptMovieSuggestion({gptMovieNames,gptMovieResults}))

    
    // console.log(gptMovieResults);

  };
  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="bg-black w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          className="m-4 p-4 col-span-10 rounded-lg"
          type="text"
          placeholder={lang[langCode].GptPlaceholder}
          ref={searchText}
        ></input>
        <button
          className="m-4  ml-0 py-2 px-4 col-span-2 bg-red-600 text-white rounded-md  hover:bg-red-700"
          onClick={handleSearchSuggestion}
        >
          {lang[langCode].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
