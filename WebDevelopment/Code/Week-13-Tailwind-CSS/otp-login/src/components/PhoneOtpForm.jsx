import { useState } from "react";
import OtpInput from "./OtpInput";

const PhoneOtpForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [countryCode, setCountryCode] = useState("+91");
  const [showOtpInput, setShowOtpInput] = useState(false);

  const handlePhoneNumber = (e) => {
    const value = e.target.value;
    if (/^\d{0,10}$/.test(value)) {
      setPhoneNumber(value);
      setIsButtonDisabled(value.length !== 10);
    }
  };

  const handleCountryCode = (event) => setCountryCode(event.target.value);

  const handlePhoneSubmit = (event) => {
    event.preventDefault();
    if (phoneNumber.length !== 10) {
      alert("Invalid phone number. Please enter a valid 10-digit number.");
      return;
    }
    setShowOtpInput(true);
  };

  const onOtpSubmit = (otp) => {
    alert(`Login Successful with OTP: ${otp}`);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-victoria-50 p-4">
      <div className="w-full max-w-md px-6 py-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-center text-victoria-800 mb-6">
          {showOtpInput ? "Verify OTP" : "Phone Number Verification"}
        </h2>

        {!showOtpInput ? (
          <form onSubmit={handlePhoneSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-victoria-800" htmlFor="phone">
                Phone Number
              </label>
              <div className="flex">
                <select
                  value={countryCode}
                  onChange={handleCountryCode}
                  className="px-3 py-2 border border-victoria-300 rounded-l-lg focus:ring focus:ring-victoria-500 text-victoria-900 w-1/3"
                >
                  <option value="+91">+91</option>
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                  <option value="+5">+5</option>
                  <option value="+92">+92</option>
                </select>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Enter phone number"
                  value={phoneNumber}
                  onChange={handlePhoneNumber}
                  className="w-full px-4 py-2 border-t border-b border-r border-victoria-300 rounded-r-lg focus:ring focus:ring-victoria-500 text-victoria-900"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className={`w-full py-3 rounded-lg text-white font-medium transition-all ${isButtonDisabled
                  ? "bg-victoria-300 cursor-not-allowed"
                  : "bg-victoria-600 hover:bg-victoria-700"
                }`}
              disabled={isButtonDisabled}
            >
              Submit
            </button>
          </form>
        ) : (
          <div className="space-y-6">
            <p className="text-sm text-center text-victoria-800">
              Enter the OTP sent to <span className="font-semibold">{`${countryCode} ${phoneNumber}`}</span>.
            </p>
            <OtpInput length={6} onOtpSubmit={onOtpSubmit} />
          </div>
        )}
      </div>
    </div>


  );
};

export default PhoneOtpForm;
