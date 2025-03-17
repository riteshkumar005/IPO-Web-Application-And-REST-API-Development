import React, { useState } from 'react';
import { ArrowRight, Send } from 'lucide-react';
import './App.css';
import './Naav.jsx'

function App() {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Phone number submitted:', phoneNumber);
  };

  return (
    <div>
      <Navbar />
    </div>
    <div className="min-h-screen bg-white">
      <div className="hero-container">
        <div className="hero-content">
          <div className="new-badge">
             <button className="new-button">NEW</button>
  <span className="app-text">App 2.0</span>
  <ArrowRight size={16} className="arrow-icon" />
          </div>

          <h1 className="hero-title">
            Free & Open<br />
            Stock Market Analytics<br />
            For GenZ
          </h1>

          <p className="hero-subtitle">
            Thousands of traders and investors in India use our
            stable and reliable mobile app regularly.
          </p>

          <div>
            <p className="font-medium text-gray-700">Get early access</p>
            <form onSubmit={handleSubmit} className="phone-input">
              <span className="country-code">+91</span>
              <input
                type="tel"
                className="phone-field"
                placeholder="Enter mobile number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                pattern="[0-9]{10}"
                maxLength={10}
                required
              />
              <button type="submit" className="submit-button">
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>

        <div className="hero-rectangle" />
      </div>
    </div>
  );
}

export default App;
