import React from 'react'
import {useNavigate} from 'react-router-dom'
import { albumsData } from '../assets/assets'
import AlbumItem from './Album/AlbumItem'
export default function DisplayHome() {

const navigate = useNavigate();
  return (
    <>
     <h2 className="my-5 font-bold text-2xl text-white px-3 ">Tuyển tập hay nhất 2024</h2>
        <div className="flex w-full overflow-auto" >
          {albumsData.map((item,index) => (
            <AlbumItem key={index} name={item.name} image={item.image} description={item.description} id={item.id} onClick={()=>navigate(`/album/${item.id}`)}/>
          ))}
          </div>     
    </>
  )
}
