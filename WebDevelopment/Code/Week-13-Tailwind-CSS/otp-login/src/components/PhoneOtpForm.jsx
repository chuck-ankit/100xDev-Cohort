import { useState } from "react";

const PhoneOtpForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [countryCode, setCountryCode] = useState("+91");

  const handlePhoneNumber = (e) => {
    const value = e.target.value;
    // Restrict input to numbers only and ensure it's at most 10 digits
    if (/^\d{0,10}$/.test(value)) {
      setPhoneNumber(value);
      setIsButtonDisabled(value.length !== 10);
    }
  };

  const handleCountryCode = (event) => {
    setCountryCode(event.target.value);
  };

  const handlePhoneSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={(e) => { e.preventDefault(); }} className="space-y-4">
        <label className="block text-left font-medium text-victoria-800" htmlFor="phone">
          Phone Number
        </label>
        
        <div className="flex space-x-2">
          <select
            value={countryCode}
            onChange={handleCountryCode}
            className="px-4 py-2 border border-victoria-300 rounded-lg focus:ring focus:ring-victoria-500 text-victoria-900"
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
            className="w-full px-4 py-2 border border-victoria-300 rounded-lg focus:ring focus:ring-victoria-500 text-victoria-900"
            required
          />
        </div>

        <button
          type="submit"
          className={`w-full py-2 rounded-lg cursor-pointer transition duration-200 ${
            isButtonDisabled 
              ? "bg-victoria-300 cursor-not-allowed"
              : "bg-victoria-700 hover:bg-victoria-800"
          }`}
          style={{ color: 'white' }}
          disabled={isButtonDisabled}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default PhoneOtpForm;
