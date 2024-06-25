import React, { useContext } from 'react';
import { RxShuffle } from "react-icons/rx";
import { GiPreviousButton } from "react-icons/gi";
import { FaPlayCircle, FaPause } from "react-icons/fa";
import { GiNextButton } from "react-icons/gi";
import { SlLoop } from "react-icons/sl";
import { AiOutlinePlaySquare } from "react-icons/ai";
import { LuMic2 } from "react-icons/lu";
import { HiMiniQueueList } from "react-icons/hi2";
import { MdSpeakerGroup } from "react-icons/md";
import { IoMdVolumeHigh } from "react-icons/io";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { MdHorizontalRule } from "react-icons/md";
import { PlayerContext } from "../context/PlayerContext";
const Player = () => {
  const { seekBar, seekBg, play, pause, playStatus, time, track, previous, next } = useContext(PlayerContext)
  console.log('hi')

  return (
    <div className="h-[10%] bg-black flex justify-between items-center text-white px-4  w-full fixed bottom-0 left-0 z-10">
      <div className="flex items-center  gap-4">
        <img className="rounded-lg" width="50px" src={track.album.images[0].url} />
        <div>
          <p className="text-sm font-bold">{track.name}</p>
          <p className="text-xs">{track.artists[0].name}</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1 m-auto">
        <div className="flex gap-4">
          <RxShuffle size={40} className="w-5 cursor-pointer" />
          <GiPreviousButton size={40} className="w-5 cursor-pointer" onClick={previous} />
          {playStatus ? (
            <FaPause size={40} className="w-7 cursor-pointer" onClick={pause} />
          ) : (
            <FaPlayCircle size={40} className="w-7 cursor-pointer" onClick={play} />
          )}
          <GiNextButton size={40} className="w-5 cursor-pointer" onClick={next} />
          <SlLoop size={40} className="w-5 cursor-pointer" />
        </div>
        <div className="flex items-center gap-5">
          <p>{time.currentTime.minute}:{time.currentTime.second}</p>
          <div ref={seekBg} className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer">
            <hr ref={seekBar}
              className="h-1 border-none bg-green-400 rounded-full"
            />
          </div>
          <p>{time.totalTime.minute}:{time.totalTime.second}</p>
        </div>
      </div>
      <div className="lg:flex items-center gap-2 opacity-75">
        <AiOutlinePlaySquare size={20} className="w-7 cursor-pointer hover:text-green-500" />
        <LuMic2 size={20} className="w-7 cursor-pointer hover:text-green-500" />
        <HiMiniQueueList size={20} className="w-7 cursor-pointer hover:text-green-500" />
        <MdSpeakerGroup size={20} className="w-7 cursor-pointer hover:text-green-500" />
        <IoMdVolumeHigh size={20} className="w-7 cursor-pointer hover:text-green-500" />
        <MdHorizontalRule size={20} className="w-7 cursor-pointer hover:text-green-500" />
        <MdOutlineZoomOutMap size={20} className="w-7 cursor-pointer hover:text-green-500" />
      </div>
    </div>
  );
}

export default Player;
