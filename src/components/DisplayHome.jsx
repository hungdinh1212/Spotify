import React from 'react'
import { useNavigate } from 'react-router-dom'
// import { albumsData } from '../assets/assets'
import AlbumItem from './Album/AlbumItem'
import { artists } from '../assets/assets';
import ArtistsList from './ArtistsList';

export default function DisplayHome() {

  const navigate = useNavigate();
  return (
    <>

      <div className="flex-cols justify-between bg-[#121212] rounded mt-2">
        {/* <h2 className="font-bold text-3xl text-white p-6 ">Tuyển tập hay nhất 2024</h2>
        <div className="flex flex-wrap overflow-auto" >
          {albumsData.map((item, index) => (
            <AlbumItem key={index} name={item.name} image={item.image} description={item.description} id={item.id} onClick={() => navigate(`/album/${item.id}`)} />
          ))}
        </div> */}

        <div className="title">
          <h2 className="text-white font-bold leading-7 text-3xl p-6">Nghệ sĩ yêu thích của bạn</h2>
        </div>
        <div className="flex w-full gap-9">
          <ArtistsList artists={artists} />
        </div>
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
  )
}
