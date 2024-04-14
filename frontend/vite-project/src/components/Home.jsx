import React, { useState } from "react";
import homePage from "../contents/homePage.json";
import Summary from "./Summary";
import Loading from "../components/Loading";
import { getCookie } from "../utils/cookies.js";
import { endPoints, loginCN } from "../config/constants.js";
import { Navigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [youtubeLink, setyoutubeLink] = useState('')

  return (
    <>
     {(getCookie(loginCN) === null) && <Navigate to="/login" replace={true} />}
    
      <div className="flex-grow container mx-auto mt-10 px-4 sm:px-0">
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 flex flex-col">
          <div>
            <h2 className="text-2xl font-semibold mb-4">{homePage.title}</h2>
            <p className="text-gray-800">{homePage.description}</p>
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-4">
              Enter Youtube Video Link{" "}
            </h2>
            <div className="flex space-x-4">
              <input
                id="youtubeLink"
                type="url"
                placeholder="Paste Youtube Link"
                className="flex-grow p-4 border border-blue-900 rounded-lg"
                onChange={({target:{value}})=> setyoutubeLink(value)}
              />
              <button id="generateBtn" className="hover:bg-[#3A3A3A]" onClick={()=> handleGenerate(youtubeLink)}>
                Generate
              </button>
            </div>
          </div>

          <Loading isLoading={isLoading} />
          <Summary />
        </div>
      </div>
    </>
  );
};

async function handleGenerate(youtubeLink){
  try{
    var res = await axios.post(endPoints.generate, {'link': youtubeLink})
    console.log(res)

  }catch(err){
    console.log(err)
  }
}


export default Home;
