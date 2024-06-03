// import React from 'react'
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-3/4 ">{children}</div>
    </div>
  );
};
export default Layout;
