import React from "react";
import "../css/Card.css"
import { FaPlayCircle } from "react-icons/fa";
const Card = ({ artist, onClick }) => {

    return (
        <div className="card rounded-lg h-72 flex flex-col max-w-[16.5%] relative  " onClick={onClick}>
            <img className=" rounded-full w-full p-3 " src={artist.image} alt="placeholder">
            </img>
            <button className="play-button absolute rounded-3xl bottom-[110px] right-6">
                <FaPlayCircle />
            </button>
            <h3 className="text-lg font-semibold text-white pl-3 ">{artist.nameArtist}</h3>
            <p className="text-xs text-gray-400 pb-2 font-semibold pl-3">{artist.profession}</p>
        </div>

    );
};

export default Card;
