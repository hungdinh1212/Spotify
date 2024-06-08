import React from 'react';
import { MdPlayCircleFilled } from "react-icons/md";

const AlbumItem = ({ image, name, description, onClick }) => {
    return (
        <div className='relative min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26] max-w-[250px]' onClick={onClick}>
            <img className='rounded' width="250px" src={image} alt={name} />
            <p className="font-bold mt-2 mb-1 text-white">{name}</p>
            <p className="text-slate-200 text-sm overflow-hidden break-words">{description}</p>
            <div className='hidden absolute bottom-2 right-2 opacity-0 hover:opacity-100 hover:block transition-opacity duration-300 w-20'>
                <MdPlayCircleFilled size={30} className="text-green-500" />
            </div>
        </div>
    );
};
export default AlbumItem;
