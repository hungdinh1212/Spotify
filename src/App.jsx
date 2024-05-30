import React from 'react';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Signup from './components/Signup';
import './App.css';
import './index.css';
export default function App() {
  return (
    <div className="h-screen bg-black">
      <div className="flex">
        <Sidebar/>
        <Home/>   
      </div>   
    </div>
  );
}