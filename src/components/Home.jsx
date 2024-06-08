import React from "react";
import Header from './Header'
import DisplayHome from "./DisplayHome"
import Player from "./Player"
const Home = () => {
  return (
          <div className="flex-cols justify-between  h-[98%] bg-[#121212] rounded-xl mt-2 overflow-auto 
            z-10
            ">
            <Header/>
          <div className="w-full m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto">
            <DisplayHome/>
          </div>
        </div>
  );
};
export default Home;
