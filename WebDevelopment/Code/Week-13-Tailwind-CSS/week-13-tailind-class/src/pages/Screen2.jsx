import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Screen.css';
import logo from '../assets/webinar.png';

function Screen2() {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValid(emailRegex.test(value) || value === '');
  };

  const handleContinue = () => {
    if (isValid && email) {
      navigate('/screen3');
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

      {/* Instruction Text */}
      <div className="text-white text-center text-2xl font-medium mb-[50px]">Let's Get Started</div>

      {/* Email Input Field */}
      <div className="flex flex-col items-center mb-[30px]">
        <input
          id="year"
          type="text"
          name="year"
          placeholder="Email Id"
          value={email}
          onChange={handleInputChange}
          className="rounded-md h-12 w-[20%] text-start pl-8 text-white"
          style={{ backgroundColor: '#19406B' }}
          required // Makes the input mandatory
        />
        {/* Warning Message */}
        {!isValid && (
          <span className="text-red-500 text-sm mt-2">
            This is a mandatory field. Please enter a valid email address.
          </span>
        )}
      </div>

      {/* Continue Button */}
      <div className="flex justify-center">
        <button
          id="continue"
          name="continue"
          className={`text-white rounded-md h-12 w-[20%] text-center ${isValid && email ? 'bg-green-vogue-200 hover:bg-green-600' : 'bg-gray-400'}`}
          style={{ backgroundColor: isValid && email ? '#70f0f0' : '#d1d1d1' }}
          onClick={handleContinue}
          disabled={!isValid || !email} // Disable button if email is invalid or empty
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default Screen2;
