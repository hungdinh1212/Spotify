import React from 'react';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import './App.css';
import './index.css';
export default function App() {
  return (
    <div className="h-screen bg-black">
      <div className="h-[90%] flex">
        <Sidebar/>
        <Home/>
      </div>   
    </div>
  );
}