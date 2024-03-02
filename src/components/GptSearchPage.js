import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_IMG } from "../utils/constants";

const GptSearchPage = () => {
  return (
    <div>
      <div className=" -z-10 w-screen fixed">
        <img
          className="transform: scale-130 bg-gradient-to-t from-black bg-blend-lighten md:bg-blend-darken "
          src={BG_IMG}
          alt="bg img"
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearchPage;
