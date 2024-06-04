import React, { useRef, useState, useEffect } from 'react';
import { songsData } from '../assets/assets';
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
const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef(new Audio(songsData[1].file));
  useEffect(() => {
    const audio = audioRef.current;
    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  const handlePlayPause = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const progress = (currentTime / audioRef.current.duration) * 100 || 0;

  return (
    <div className="h-[10%] bg-black flex justify-between items-center text-white px-4 fixed w-full">
      <div className="lg-flex items-center flex gap-4">
        <img className="rounded-lg" width="50px" src={songsData[1].image} alt="hi" />
        <div>
          <p className="text-sm font-bold">{songsData[1].name}</p>
          <p className="text-xs">{songsData[1].description}</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1 m-auto">
        <div className="flex gap-4">
          <RxShuffle size={40} className="w-5 cursor-pointer" />
          <GiPreviousButton size={40} className="w-5 cursor-pointer" />
          {isPlaying ? (
            <FaPause size={40} className="w-7 cursor-pointer" onClick={handlePlayPause} />
          ) : (
            <FaPlayCircle size={40} className="w-7 cursor-pointer" onClick={handlePlayPause} />
          )}
          <GiNextButton size={40} className="w-5 cursor-pointer" />
          <SlLoop size={40} className="w-5 cursor-pointer" />
        </div>
        <div className="flex items-center gap-5">
          <p>{Math.floor(currentTime / 60)}:{Math.floor(currentTime % 60).toString().padStart(2, '0')}</p>
          <div className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer">
            <div
              className="h-1 bg-green-400 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p>{songsData[1].duration}</p>
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
