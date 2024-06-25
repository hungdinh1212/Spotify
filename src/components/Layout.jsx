import React, { useContext } from 'react'
import Sidebar from "./Sidebar";
import Player from "./Player"
const Layout = ({ children }) => {
  return (
    <div>
      <div className="flex">
        <Sidebar />
        <div className="w-3/4 ">{children}</div>
      </div>

    </div>
  );
};
export default Layout;
