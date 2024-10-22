import React from "react";
import GptSearchBar from "./GptSearchBar";
import { LOGIN_PAGE_BG } from "../Utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";

const GptSearchPage = () => {
  return (
    <div className="">
      <img
        className="-z-10 fixed h-screen w-screen object-cover"
        src={LOGIN_PAGE_BG}
        alt="logo"
      ></img>
      <div className="pt-[20%] sm:pt-0">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </div>
  );
};

export default GptSearchPage;
