import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Screen.css';
import logo from '../assets/webinar.png';
import Screen4 from './Screen4';

function Screen3() {
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
      <div className="text-white text-center text-2xl font-medium mb-[50px]">Check Your Email For A Code</div>
      <div className="text-green-vogue-50 font-light text-center antialiased opacity-80 mb-[15px]">
        Please enter the verification code sent to your email id ankit@yahoo.com.
      </div>

      {/* Input Field */}
      <div className="flex justify-center mb-[20px]">
        <div className='flex justify-between p=3'>
          <input id='otp-1' className="rounded-md h-12 w-10 mr-5" style={{ backgroundColor: '#19406B' }} />
          <input id='otp-2' className="rounded-md h-12 w-10 mr-5" style={{ backgroundColor: '#19406B' }} />
          <input id='otp-3' className="rounded-md h-12 w-10 mr-5" style={{ backgroundColor: '#19406B' }} />
          <input id='otp-4' className="rounded-md h-12 w-10 mr-5" style={{ backgroundColor: '#19406B' }} />
          <input id='otp-5' className="rounded-md h-12 w-10 mr-5" style={{ backgroundColor: '#19406B' }} />
          <input id='otp-6' className="rounded-md h-12 w-10 mr-5" style={{ backgroundColor: '#19406B' }} />
          
        </div>
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

export default Screen3;
