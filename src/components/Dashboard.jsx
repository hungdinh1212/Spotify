// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import { PlayerContext } from '../context/PlayerContext';
import ArtistsList from './ArtistsList';
import { artists } from '../assets/assets';
import Player from './Player';
const Dashboard = () => {
    const { audioRef, track, isPlay } = useContext(PlayerContext);

    return (
        <>
            <div className="flex-cols justify-between bg-[#121212] rounded mt-2">

                <div className="title">
                    <h2 className="text-white font-bold leading-7 text-3xl p-6">Nghệ sĩ yêu thích của bạn</h2>
                </div>
                <div className="flex w-full gap-9">
                    <ArtistsList artists={artists} />
                </div>
                {
                    isPlay && (
                        <>
                            <Player />
                            <audio ref={audioRef} src={track.preview_url} preload="auto"></audio>
                        </>
                    )
                }
            </div>




        </>
    );
};
export default Dashboard;