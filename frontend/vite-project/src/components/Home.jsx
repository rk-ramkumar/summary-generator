import React from "react";
import homePage from "../contents/homePage.json";
import Summary from "./Summary";

const Home = () => {
  return (
    <div className="flex-grow container mx-auto mt-10 px-4 sm:px-0">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 flex flex-col">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">{homePage.title}</h2>
          <p className="text-gray-800">{homePage.description}</p>
        </div>
        
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-4">Enter Youtube Video Link </h2>
          <div className="flex space-x-4">
            <input id="youtubeLink" type="url" placeholder="Paste Youtube Link" className="flex-grow p-4 border border-blue-900 rounded-lg"/>
            <button id="generateBtn" className="hover:bg-[#3A3A3A]">Generate</button>
          </div>
        </div>

        <Summary/>
      </div>
    </div>
  );
};

export default Home;
