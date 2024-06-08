import React,{useContext} from 'react'
import Sidebar from "./Sidebar";
import Player from "./Player"
import {PlayerContext} from "../context/PlayerContext"
const Layout = ({ children }) => {
  const {audioRef,track}=useContext(PlayerContext);
  return (
    <div>
      <div className="flex">
        <Sidebar />
        <div className="w-3/4 ">{children}</div>
      </div>
      <Player />
      <audio ref={audioRef} src={track.file} preload="auto"></audio>
    </div>
  );
};
export default Layout;
