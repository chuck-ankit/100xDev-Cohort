import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Screen.css';
import logo from '../assets/webinar.png';
import Screen2 from './Screen2';

function Screen1() {
  return (
    <div className="screen1-container">
      {/* Logo and Title */}
      <div id="logo" className="title-logo flex items-center justify-center m-[70px]">
        <img src={logo} alt="Logo" className="h-8 mx-4 filter-white" />
        <span className="text-3xl font-sans font-semibold">
          <span style={{ color: '#70f0f0' }}>Webinar</span>
          <span className="text-white">.gg</span>
        </span>
      </div>

      {/* Verification Text */}
      <div className="text-white text-center text-2xl font-medium mb-[50px]">Verify Your Age</div>
      <div className="text-green-vogue-50 font-light text-center antialiased opacity-80 mb-[15px]">
        Please confirm your birth year. This data will not be stored.
      </div>

      {/* Input Field */}
      <div className="flex justify-center mb-[30px]"> 
        <input
          id="year"
          type="text"
          name="year"
          placeholder="Your Birth Year"
          className=" rounded-md h-12 w-[20%] text-start pl-8"
          style={{ backgroundColor: '#19406B' }}
          focus:text-red-600
        />
      </div>

      {/* Button */}
      <div className="flex justify-center">
        <button 
          id="continue"
          name="continue"
          className="text-white bg-green-vogue-200 rounded-md h-12 w-[20%] text-center hover:bg-slate-50"
          style={{ backgroundColor: '#d1d1d1' }}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default Screen1;
