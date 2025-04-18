import React, { useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import Dashboard from "../dashboard/dashboard";

const Layout = () => {
  const [isVisable, setisVisable] = useState(true);

  function handleToggle() {
    setisVisable(!isVisable);
  }

  return (
    <div className="   bg-[#f4f4f4] min-h-screen">
      <Sidebar isVisable={isVisable} handleToggle={handleToggle} />
      <div className={`content  transition-all duration-300 ${isVisable ? "md:ml-[240px] " : "ml-0"}`}>
          <Navbar isVisable={isVisable} handleToggle={handleToggle} />
        <div className="main-content p-4 px-10">
          <Dashboard/>
        </div>
      </div>
    </div>
  );
};

export default Layout;
