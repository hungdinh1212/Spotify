// src/components/SpotifyAuth.js
import React from 'react';

const SpotifyAuth = () => {
    const CLIENT_ID = '804fcd2a95df4661a5fbbb9ca8e46a1a';
    const REDIRECT_URI = 'http://localhost:5173/callback';
    const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
    const RESPONSE_TYPE = 'token';

    const handleLogin = () => {
        window.location = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=user-read-private user-read-email`;
    };

    return (
        <div>
            <button onClick={handleLogin} className="text-white">Login to Spotify</button>
        </div>
    );
};

export default SpotifyAuth;
