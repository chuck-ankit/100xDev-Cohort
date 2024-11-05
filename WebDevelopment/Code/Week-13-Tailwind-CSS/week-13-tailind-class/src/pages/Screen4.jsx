import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Screen.css';
import logo from '../assets/webinar.png';

function Screen4() {
  const inputRefs = useRef([]);
  const [otp, setOtp] = useState(new Array(6).fill(""));

  const handleInputChange = (e, index) => {
    const value = e.target.value;

    // Update OTP state
    if (!isNaN(value) && value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to next input field if value is not empty
      if (value !== "" && index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    // Handle backspace to move back
    if (e.key === "Backspace") {
      if (otp[index] === "" && index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

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
        <div className="flex space-x-4">
          {otp.map((value, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              maxLength="1"
              value={value}
              onChange={(e) => handleInputChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="rounded-md h-12 w-10 text-white text-center"
              style={{ backgroundColor: '#19406B' }}
            />
          ))}
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

export default Screen4;
