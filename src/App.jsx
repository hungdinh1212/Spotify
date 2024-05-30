import React from 'react';
import Home from './components/Home';
import Signin from './components/Signin';
import Register from './components/Register';
import './App.css';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const App=()=> {
 
  return (
   <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/register" element={<Register />} />
      </Routes>
   </Router>
  );
}
export default App;