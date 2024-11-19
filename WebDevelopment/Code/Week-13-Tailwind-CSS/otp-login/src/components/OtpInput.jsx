import React, { useState, useRef, useEffect } from "react";

const OtpInput = ({ length = 6, onOtpSubmit = () => { } }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const [isComplete, setIsComplete] = useState(false);
  const [activeInput, setActiveInput] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const inputRefs = useRef([]);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearInterval(timer);
    } else setCanResend(true);
  }, [timeLeft]);

  useEffect(() => inputRefs.current[0]?.focus(), []);
  useEffect(() => setIsComplete(otp.every((char) => char !== "")), [otp]);

  const handleChange = (index, e) => {
    const value = e.target.value;
    if (isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    if (value && index < length - 1) inputRefs.current[index + 1]?.focus();
    if (newOtp.every((char) => char !== "")) onOtpSubmit(newOtp.join(""));
  };

  const handleResend = () => {
    if (canResend) {
      setTimeLeft(30);
      setCanResend(false);
      setOtp(new Array(length).fill(""));
      inputRefs.current[0]?.focus();
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-center space-x-2">
        {otp.map((value, index) => (
          <input
            key={index}
            value={value}
            ref={(el) => (inputRefs.current[index] = el)}
            maxLength={1}
            type="text"
            inputMode="numeric"
            onChange={(e) => handleChange(index, e)}
            className={`w-12 h-12 text-center border-2 rounded-lg text-lg transition-all ${value ? "border-victoria-600" : "border-victoria-300"
              } focus:ring focus:ring-victoria-500`}
          />
        ))}
      </div>
      <div className="flex items-center justify-between">
        <button
          onClick={() => onOtpSubmit(otp.join(""))}
          disabled={!isComplete}
          className={`py-2 px-4 rounded-lg text-white ${isComplete
              ? "bg-victoria-600 hover:bg-victoria-700"
              : "bg-victoria-300 cursor-not-allowed"
            }`}
        >
          Verify OTP
        </button>
        <button
          onClick={handleResend}
          disabled={!canResend}
          className={`text-victoria-600 px-4 py-2 ${!canResend && "opacity-50 cursor-not-allowed"
            }`}
        >
          {canResend ? "Resend OTP" : `Resend in ${timeLeft}s`}
        </button>
      </div>
    </div>

  );
};

export default OtpInput;
