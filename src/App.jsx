<<<<<<< HEAD
import React from 'react';
import Home from './components/Home';
import Signin from './components/Signin';
import Register from './components/Register';
import './App.css';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const App = () => {

=======
// eslint-disable-next-line no-unused-vars
import React from "react";
import Home from "./components/Home";
import Signin from "./components/Signin";

import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Signup from "./components/Signup/Signup";
import SignupStep1 from "./components/Signup/SignupStep1";
import SignupStep2 from "./components/Signup/SignupStep2";
import SignupStep3 from "./components/Signup/SignupStep3";
import SignupStep4 from "./components/Signup/SignupStep4";

const App = () => {
>>>>>>> 152f6dac3ddc5387f2a77ba8cb642c4295e592fd
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup/step1" element={<SignupStep1 />} />
        <Route path="/signup/step2" element={<SignupStep2 />} />
        <Route path="/signup/step3" element={<SignupStep3 />} />
        <Route path="/signup/step4" element={<SignupStep4 />} />
      </Routes>
    </Router>
  );
};
export default App;
// <Route path="/signup" element={<Signup />} />
// <Route path="/signup/:step" element={<SignupStep1 />} />
