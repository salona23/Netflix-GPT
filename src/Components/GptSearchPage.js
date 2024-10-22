import React from "react";
import GptSearchBar from "./GptSearchBar";
import { LOGIN_PAGE_BG } from "../Utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";

const GptSearchPage = () => {
  return (
    <div className="">
      <img className="-z-10 fixed" src={LOGIN_PAGE_BG} alt="logo"></img>
      <GptSearchBar />
      <GptMovieSuggestions/>
    </div>
  );
};

export default GptSearchPage;
