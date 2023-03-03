import { React, useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import Lambda_logo from "../Img/Lambda_logo.png";
import { close, logo, menu } from "../assets";


export default function Navbar() {

  const location = useLocation();
  const navigate = useNavigate();


  function pathMatchRoute(route) {
    if (route === location.pathname) {
      return true
    }
  };

  return (
    <div className='sticky top-0 z-50  rgb(9, 4, 29) text-white px-20 py-10 '>      <header className='flex justify-between item-center  py-1 max-w-full mx-auto '>
      <div className='flex font-Poppins py-2'>
        <img src={Lambda_logo} alt="logo" className='h-9' onClick={() => navigate("/")} />
        <p className='font-bold text-3xl  cursor-pointer text-white py-1 px-1' onClick={() => navigate("/")}> Techno Academy</p>
      </div>

      <div>
        <ul className='flex space-x-10 font-Poppins text-xl '>

          <li className={`py-3 cursor-pointer text-gray-400 border-b-[3px] border-b-transparent ${pathMatchRoute("/video-courses") && "text-black border-b-red-500"}`}
            onClick={() => navigate("/video-courses")} > Video Courses</li>
          <li className={`py-3 cursor-pointer text-gray-400 border-b-[3px] border-b-transparent ${pathMatchRoute("/certifications") && "text-black border-b-red-500"}`}
            onClick={() => navigate("/certifications")}> Certifications</li>
          <li className={`py-3 cursor-pointer text-gray-400 border-b-[3px] border-b-transparent ${pathMatchRoute("/login") && "text-black border-b-red-500"}`}
            onClick={() => navigate("/login")}>Login</li>
          <li className={`py-3 cursor-pointer text-gray-400 border-b-[3px] border-b-transparent ${pathMatchRoute("/signUp") && "text-black border-b-red-500"}`}
            onClick={() => navigate("/signUp")}>SignUp</li>
        </ul>

      </div>
    </header >
    </div >
  )
}


