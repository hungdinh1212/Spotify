import React from "react";
import Home from "./components/Home";
import Signin from "./components/Signin";
import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignupStep1 from "./components/Signup/SignupStep1";
import SignupStep2 from "./components/Signup/SignupStep2";
import SignupStep3 from "./components/Signup/SignupStep3";
import SignupStep4 from "./components/Signup/SignupStep4";
import DisplayHome from "./components/DisplayHome";
import DisplayAlbum from "./components/DisplayAlbum";
import Layout from "./components/Layout";
import PlayerContextProvider from "./context/PlayerContext";
import SpotifyAuth from "./components/SpotifyAuth";
import Callback from "./components/Callback";
import Dashboard from "./components/Dashboard";
import { useState } from 'react';
import { useEffect } from 'react';
const App = () => {
  const [token, setToken] = useState('');
  useEffect(() => {
    const storedToken = localStorage.getItem('spotify_access_token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);
  const handleTokenReceived = (token) => {
    setToken(token);
  };
  return (
    <PlayerContextProvider>

      <Router>

        {/* <Route path="/" element={<Home />} /> */}
        <Routes>

          <Route path="/signin" element={<Signin />} />
          <Route path="/signup/step1" element={<SignupStep1 />} />
          <Route path="/signup/step2" element={<SignupStep2 />} />
          <Route path="/signup/step3" element={<SignupStep3 />} />
          <Route path="/signup/step4" element={<SignupStep4 />} />
        </Routes>
        {/* <Route path="/" element={<DisplayHome />} /> */}
        <Layout>
          <Routes >

            <Route path="/" element={<SpotifyAuth />} />
            <Route path="/callback" element={<Callback onTokenReceived={handleTokenReceived} />} />
            <Route path="/dashboard" element={<Dashboard token={token} />} />
            <Route path="/album/:name" element={<DisplayAlbum token={token} />} />
          </Routes>
        </Layout>
      </Router>
    </PlayerContextProvider>
  );
};
export default App;