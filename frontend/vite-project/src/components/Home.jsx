import React from "react";
import homePage from "../contents/homePage.json";

const Home = () => {
  return (
    <div className="flex-grow container mx-auto mt-10 px-4 sm:px-0">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 flex flex-col">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">{homePage.title}</h2>
          <p className="text-gray-800">{homePage.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
