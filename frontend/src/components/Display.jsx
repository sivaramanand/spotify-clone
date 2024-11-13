import React from "react";
import DisplayHome from "./DisplayHome";
import Navbar from "./Navbar";
// import { Routes,r } from "react-router-dom";
const Display = () => {
  return (
    <div className="w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%]">
      <Navbar />
      <DisplayHome />

    </div>
  );
};

export default Display;
