import React from "react";
import GptSearchBar from "./GptSearchBar";
import { LOGIN_PAGE_BG } from "../Utils/constants";

const GptSearchPage = () => {
  return (
    <div className="">
      <img className="-z-10 absolute" src={LOGIN_PAGE_BG} alt="logo"></img>
      <GptSearchBar />
    </div>
  );
};

export default GptSearchPage;
