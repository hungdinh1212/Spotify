import React from 'react';
import { useParams } from 'react-router-dom';
import { albumsData, assets } from '../assets/assets';
import Header from './Header'
import { FaRegClock } from "react-icons/fa";
import { songsData } from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext';
const DisplayAlbum = () => {
  const { playWithId } = React.useContext(PlayerContext);
  const { id } = useParams();
  const album = albumsData[id];
  return (
   <>
   <Header/>
   <div className="mt-10  gap-8 flex flex-col md:flex-row md:items-center text-white z-0">
    <img src={album.image}  className="w-48 rounded"  />
     <div className='flex flex-col'>
      <p>Playlist</p>
      <h2 className='text-5xll font-bold mb-4 md:text-7xl'>{album.name}</h2>
      <h4>{album.description}</h4>
      <p className='mt-1'>
        <img className='inline-block w-10' width="100px" src={assets.logoWhite}></img>
        <b>Spotify</b>
        - 1,323,154 likes
        - <b>50 songs</b>
          about 2 hr 30 min
      </p>
     </div>
    </div>
    <div className="grid grid-cols-3 sm:grid-cols-3 mt-10 mb-4 pl-2 textt-[#a7a7a7] text-white">
      <p><b className="mr-4">#</b>Tiêu đề</p>
      <p className="mr-4">Album</p>
    
      <FaRegClock className="m-auto w-4" />

    </div>
    <hr></hr>
    {
      songsData.map((item,index)=>(
        <div onClick={()=>playWithId(item.id)}className="cursor-pointer   grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] " key={index}>
          <p className="text-white">

            <b className="mr-4 text-[#a7a7a7]">{index+1}</b>
            <img className="inline w-10 mr-5" src={item.image} />
            {item.name}
          </p>
        <p className="text">{album.name}</p>
        <p className="text-[15px] mx-f">{item.duration}</p>
        </div>
      ))
    }
   </>
  );
};

export default DisplayAlbum;
