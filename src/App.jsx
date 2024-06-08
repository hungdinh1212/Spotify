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
const App = () => {
  return (
    <PlayerContextProvider>
    
        <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/signin" element={<Signin />} />
            <Route path="/signup/step1" element={<SignupStep1 />} />
            <Route path="/signup/step2" element={<SignupStep2 />} />
            <Route path="/signup/step3" element={<SignupStep3 />} />
            <Route path="/signup/step4" element={<SignupStep4 />} /> */}
            <Route path="/" element={<DisplayHome />} />
            <Route path="/album/:id" element={<DisplayAlbum />} />
          </Routes>
          </Layout>
        </Router>
    </PlayerContextProvider>
  );
};
export default App;