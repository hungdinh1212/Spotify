import React, { createContext, useRef, useState } from 'react';
import { useEffect } from 'react';
export const PlayerContext = createContext();
const PlayerContextProvider = (props) => {
    const audioRef = useRef();
    const seekBg = useRef();
    const seekBar = useRef();
    const [track, setTrack] = useState([]);//set 1 bai hat
    const [playStatus, setPlayStatus] = useState(false);
    const [isPlay, setisPlay] = useState(false);//set isplay de hien thi player
    const [inDexSong, setIndexSong] = useState([]);//set chi muc bai hat
    const [songs, setSongs] = useState([]);//set list bai hat cua nghe si
    const [time, setTime] = useState({
        currentTime: {
            second: 0,
            minute: 0,
        },
        totalTime: {
            second: 0,
            minute: 0,
        },
    });

    const play = () => {
        setPlayStatus(true);
        audioRef.current.play();
    };
    const pause = () => {
        setPlayStatus(false);
        audioRef.current.pause();
    };
    const playWithId = async (song, index, songs) => {
        await setTrack(song);
        await setIndexSong(index);
        await setSongs(songs);
        await setisPlay(true);
        await setPlayStatus(true);
        await audioRef.current.play();
    }
    const previous = async () => {

        if (inDexSong > 0) {
            await setTrack(songs[inDexSong - 1]);
            await setIndexSong(inDexSong - 1);
            await setPlayStatus(true);
            await audioRef.current.play()
        }
    }
    const next = async () => {
        if (inDexSong < songs.length - 1) {
            await setTrack(songs[inDexSong + 1]);
            await setIndexSong(inDexSong + 1);
            await setPlayStatus(true);
            await audioRef.current.play();
        }
    }
    // const playAlbum = async (songs) => { cai nay lam de an vao nut player mau xanh trong album thi no chay het 10 bai hat
    //     await setSongs(songs);
    //     await setisPlay(true);
    //     await setPlayStatus(true);
    //     await setTrack(songs[0]);
    //     await audioRef.current.play();

    // }
    const contextValue = {
        audioRef,
        seekBar,
        seekBg,
        track,
        setTrack,
        inDexSong,
        setIndexSong,
        playStatus,
        isPlay,
        setisPlay,
        setPlayStatus,
        time,
        setTime,
        play,
        pause,
        playWithId,
        previous,
        next,
        // playAlbum,
    };


    useEffect(() => {
        setTimeout(() => {
            audioRef.current.ontimeupdate = () => {
                seekBar.current.style.width = (Math.floor(audioRef.current.currentTime) / Math.floor(audioRef.current.duration)) * 100 + "%";
                setTime({
                    currentTime: {
                        second: Math.floor(audioRef.current.currentTime % 60),
                        minute: Math.floor(audioRef.current.currentTime / 60),
                    },
                    totalTime: {
                        second: Math.floor(audioRef.current.duration % 60),
                        minute: Math.floor(audioRef.current.duration / 60),
                    }
                })
            }
        }, 1000);
    }, [audioRef]);
    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    );
};

export default PlayerContextProvider;
