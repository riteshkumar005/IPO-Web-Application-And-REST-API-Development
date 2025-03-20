import { ArrowRight, Send } from "lucide-react";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./App.css"; // Custom styles
import Navbar from "./Naav"; // Import Navbar component

// Sample Testimonials
const testimonials = [
  { name: "Venkatesh", text: "Excellent app with a fantastic UI! 😍 Getting better every day." },
  { name: "Sarthak", text: "Bluestock provides a user-friendly interface 📈 Intuitive design." },
  { name: "Sakshi", text: "The best app for chart learning & technical analysis. Highly recommended!" }
];

// Stock Broker Data
const brokers = [
  { name: "Angel One", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Angel_Broking_Logo.svg/220px-Angel_Broking_Logo.svg.png" },
  { name: "Zerodha", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Zerodha_logo.svg/220px-Zerodha_logo.svg.png" },
  { name: "Upstox", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Upstox_Logo.svg/220px-Upstox_Logo.svg.png" },
  { name: "Groww", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Groww_app_logo.png/220px-Groww_app_logo.png" }
];

// Trending Stocks
const trendingStocks = [
  { name: "TCS", price: "₹3,560", change: "+1.2%" },
  { name: "HDFC Bank", price: "₹1,580", change: "-0.8%" },
  { name: "Infosys", price: "₹1,480", change: "+2.1%" }
];

// Market Movers
const marketMovers = [
  { name: "Reliance", high: "₹2,520", low: "₹2,460" },
  { name: "ICICI Bank", high: "₹990", low: "₹960" }
];

// Top Gainers & Losers
const gainers = [
  { name: "TCS", price: "₹3,600", change: "+3%" },
  { name: "Reliance", price: "₹2,540", change: "+2.5%" }
];

const losers = [
  { name: "HDFC Bank", price: "₹1,540", change: "-2.1%" },
  { name: "Airtel", price: "₹750", change: "-1.5%" }
];

const Home = () => {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [broker1, setBroker1] = useState(brokers[0]);
  const [broker2, setBroker2] = useState(brokers[1]);
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Phone number submitted:", phoneNumber);
  };

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
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
                  pattern="^\d{10}$"
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

      {/* Stock Broker Comparison */}
      <div className="p-8 bg-blue-50 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-blue-600">Best Stock Broker for you</h2>
        <div className="flex mt-6 space-x-6">
          {[broker1, broker2].map((broker, i) => (
            <div key={i} className="border p-3 rounded-lg flex items-center bg-white shadow-sm">
              <img src={broker.logo} alt={broker.name} className="w-8 h-8 mr-2" />
              <select value={broker.name} onChange={(e) => i === 0 ? setBroker1(brokers.find(b => b.name === e.target.value)) : setBroker2(brokers.find(b => b.name === e.target.value))}>
                {brokers.map((b, index) => <option key={index} value={b.name}>{b.name}</option>)}
              </select>
            </div>
          ))}
        </div>
        <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700">Compare</button>
      </div>

      {/* User Testimonials */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">What do our users say?</h2>
        <div className="flex items-center justify-between">
          <button onClick={() => setTestimonialIndex((testimonialIndex - 1 + testimonials.length) % testimonials.length)}><FaChevronLeft size={24} /></button>
          <div className="text-center p-4 border rounded-lg bg-gray-50">
            <h3 className="font-bold">{testimonials[testimonialIndex].name}</h3>
            <p className="text-gray-600">{testimonials[testimonialIndex].text}</p>
          </div>
          <button onClick={() => setTestimonialIndex((testimonialIndex + 1) % testimonials.length)}><FaChevronRight size={24} /></button>
        </div>
      </div>

      {/* Trending Stocks */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold">Trending Stocks 🔥</h2>
        {trendingStocks.map((stock, index) => (
          <div key={index} className="p-4 border rounded-lg text-center bg-gray-50">
            <h3 className="font-bold">{stock.name}</h3>
            <p>{stock.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
