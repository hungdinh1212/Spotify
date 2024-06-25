import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import axios from 'axios';
import Player from './Player';
import { PlayerContext } from '../context/PlayerContext';
import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FaPlay } from "react-icons/fa";
import { IoMdAddCircleOutline } from "react-icons/io";


// import "../css/Card.css";
const DisplayAlbum = ({ token }) => {
  const { audioRef, track, isPlay, playWithId, playStatus, pause, play, playAlbum } = useContext(PlayerContext);
  const { name } = useParams();
  const [songs, setSongs] = useState([]);
  //xoa khoang trang ten artist
  const removeSpaces = (str) => str.replace(/\s+/g, '');
  const nameURL = removeSpaces(name);
  //hien thi top 10 bai hat

  const [showAll, setShowAll] = useState(false);
  const handleShowMore = () => {
    setShowAll(true);
  };

  const handleShowLess = () => {
    setShowAll(false);
  };
  //hover vao hien thi them cac button
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.spotify.com/v1/search?q=${nameURL}&type=artist&limit=1`,
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );
        const artistId = response.data.artists.items[0].id;
        fetchTopTracks(artistId);
      } catch (error) {
        console.error('Error fetching songs:', error);
      }
    };
    fetchData();
  }, [nameURL, token]);

  const fetchTopTracks = async (artistId) => {
    try {
      const response = await axios.get(
        `https://api.spotify.com/v1/artists/${artistId}/top-tracks?`,
        // `https://api.spotify.com/v1/artists/${artistId}/top-tracks?market=VN`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      setSongs(response.data.tracks);
    } catch (error) {
      console.error('Error fetching top tracks:', error);
    }
  };

  const formatDuration = (duration) => {
    const minutes = Math.floor(duration / 60000);
    const seconds = ((duration % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };
  return (
    <>
      <Header name={name} />

      <div className='bg-gradient-to-b from-[#2a2a2c] via-slate-500 to-[#121212] pt-1' >

        <div className="ml-4 mt-10 gap-10 flex flex-col md:flex-row md:items-center text-white z-0">
          {playStatus ? (
            <FaPauseCircle size={40} className="w-14 h-14 cursor-pointer  text-green-500 bg-black rounded-full  border-2 border-green-500" onClick={pause} />
          ) : (
            <FaPlayCircle size={40} className="w-14 h-14 cursor-pointer text-green-500 bg-black rounded-full  border-2 border-green-500  " onClick={play} />
          )}
          <button className='text-white rounded-3xl w-32 border border-gray-500 font-semibold hover:w-32 hover:h-7 hover:border-white'>Theo dõi</button>
          <button className='text-3xl text-gray-500 hover:text-white'><HiOutlineDotsHorizontal /></button>
        </div>
        <div className="grid grid-cols-4 sm:grid-cols-3 mt-10 mb-4 ml-2 pl-2 text-white ">
          <p className='text-xl'><b>PHỔ BIẾN</b></p>
        </div>


        <div className="ml-5">
          {songs.slice(0, showAll ? songs.length : 5).map((song, index) => (
            <div key={index} onClick={() => playWithId(song, index, songs)} className="cursor-pointer grid grid-cols-[70%_15%_15%] gap-2 p-2 items-center
             text-[#a7a7a7] text-sm hover:bg-[#ffffff2b] hover:rounded-lg font-medium "  onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave}>

              <div className="text-white grid grid-cols-[5%_15%_50%]">
                {hoveredIndex === index ? (
                  <FaPlay className="text-[#a7a7a7] text-xl cursor-pointer mt-2" />
                ) : (
                  <b className="text-[#a7a7a7] mt-[7px]">{index + 1}</b>
                )}
                <img className="rounded-lg" src={song.album.images[0].url} width="40" alt={song.name} />
                <p className="text hover:underline hover:text-green-500 mt-[6px]">{song.name}</p>
              </div>

              <p className="text">{song.popularity} ps</p>

              <div className='grid grid-cols-[20%_30%_50%]'>
                {hoveredIndex === index && (
                  <IoMdAddCircleOutline className="text-[#a7a7a7] text-lg cursor-pointer absolute right-48 mt-[2px]  hover:text-black" />
                )}
                <p className="text relative">{formatDuration(song.duration_ms)}</p>
                {hoveredIndex === index && (
                  <HiOutlineDotsHorizontal className="text-[#a7a7a7] text-xl cursor-pointer absolute right-20 mt-[2px] hover:text-black" />
                )}
              </div>

            </div>
          ))}
        </div>
        {showAll ? (
          <div
            onClick={handleShowLess}
            className="mt-4 px-4 py-2 text-white cursor-pointer"
          >
            Ẩn bớt
          </div>
        ) : (
          <div
            onClick={handleShowMore}
            className="mt-4 px-4 py-2  text-white cursor-pointer  "
          >
            Xem thêm
          </div>
        )}
      </div>
      {
        isPlay && (
          <>
            <Player />
            <audio ref={audioRef} src={track.preview_url} preload="auto"></audio>
          </>
        )
      }
    </>
  );
};

export default DisplayAlbum;
