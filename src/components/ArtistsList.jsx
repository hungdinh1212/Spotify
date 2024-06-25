import React from 'react';
import Card from './Card'; // Import your Card component
import { useNavigate } from 'react-router-dom'

const ArtistsList = ({ artists }) => {
    const navigate = useNavigate();

    return (
        <>
            <div className="artist-list flex flex-wrap">
                {artists.map((artist) => (
                    <Card artist={artist} name={artist.nameArtist} onClick={() => navigate(`/album/${artist.nameArtist}`)} />
                ))}

            </div>
        </>
    );
};

export default ArtistsList;
