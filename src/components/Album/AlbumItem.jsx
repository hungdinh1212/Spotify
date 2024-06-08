import React from 'react';
import { FaPlayCircle } from 'react-icons/fa';

const AlbumItem = ({ image, name, description, onClick }) => {
    return (
        <div className="group min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26] max-w-[250px] relative" onClick={onClick}>
            <img className="rounded" width="250px" src={image} alt={name} />
            <p className="font-bold mt-2 mb-1 text-white">{name}</p>
            <p className="text-slate-200 text-sm overflow-hidden break-words">{description}</p>
            <button className="absolute bottom-24 right-4 rounded-full invisible group-hover:visible transition duration-300 ease-in-out">
                <FaPlayCircle size={50} className="text-green-600" />
            </button>
        </div>
    );
};

export default AlbumItem;
