import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Screen.css';
import logo from '../assets/webinar.png';
import { Button } from '../components/button';

function Screen3() {
  const inputRefs = useRef([]);
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const navigate = useNavigate();

  const handleInputChange = (e, index) => {
    const value = e.target.value;

    if (!isNaN(value) && value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value !== "" && index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleContinue = () => {
    navigate('/Screen5');
  };

  // Check if all inputs are filled
  const isButtonDisabled = otp.some(value => value === "");

  return (
    <div className="screen1-container">
      <div id="logo" className="title-logo flex items-center justify-center m-[70px]">
        <img src={logo} alt="Logo" className="h-8 mx-4 filter-white" />
        <span className="text-3xl font-sans font-semibold">
          <span style={{ color: '#70f0f0' }}>Webinar</span>
          <span className="text-white">.gg</span>
        </span>
      </div>

      <div className="text-white text-center text-2xl font-medium mb-[50px]">
        Check Your Email For A Code
      </div>
      <div className="text-green-vogue-50 font-light text-center antialiased opacity-80 mb-[15px]">
        Please enter the verification code sent to your email id ankit@yahoo.com.
      </div>

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

      <div className="flex justify-center">
        <Button onClick={handleContinue} disabled={isButtonDisabled}>
          Continue
        </Button>
      </div>
    </div>
  );
}

export default Screen3;
