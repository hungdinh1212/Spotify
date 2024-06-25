import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';

const Callback = ({ onTokenReceived }) => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const hash = queryString.parse(location.hash);
        const token = hash.access_token;

        if (token) {
            onTokenReceived(token);
            localStorage.setItem('spotify_access_token', token); // Lưu token vào localStorage
            navigate('/dashboard'); // Chuyển hướng đến dashboard
        }
    }, [location, onTokenReceived, navigate]);

    return <div>Loading...</div>;
};

export default Callback;
