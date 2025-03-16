import React from "react";
import "../style/TradingPlatforms.css";

const brokers = [
  {
    name: "Upstox",
    logo: "https://via.placeholder.com/100",
    rating: 4.5,
    features: ["Equity","Commodity", "Currency", "Futures", "Options"],
    brokerage: "₹20/order",
    platform: "Web & Mobile",
    users: "30 Lakh+",
    bgColor: "#D9E0FC",
  },
  {
    name: "AngelOne",
    logo: "https://via.placeholder.com/100",
    rating: 4.3,
    features: ["Equity","Commodity", "Currency", "Futures", "Options"],
    brokerage: "₹20/order",
    platform: "Web & Mobile",
    users: "25 Lakh+",
    bgColor: "#FDE7B0",
  },
  {
    name: "Groww",
    logo: "https://via.placeholder.com/100",
    rating: 4.7,
    features: ["Equity","Commodity", "Currency", "Futures", "Options"],
    brokerage: "₹20/order",
    platform: "Web & Mobile",
    users: "40 Lakh+",
    bgColor: "#CFE7F2",
  },
  {
    name: "Dhan",
    logo: "https://via.placeholder.com/100",
    rating: 4.4,
    features: ["Equity","Commodity", "Currency", "Futures", "Options"],
    brokerage: "₹20/order",
    platform: "Web & Mobile",
    users: "20 Lakh+",
    bgColor: "#FAE9BE",
  },
  {
    name: "Alice Blue",
    logo: "https://via.placeholder.com/100",
    rating: 4.2,
    features: ["Equity","Commodity", "Currency", "Futures", "Options"],
    brokerage: "₹15/order",
    platform: "Web & Mobile",
    users: "10 Lakh+",
    bgColor: "#E2F2FD",
  },
  {
    name: "Axis Direct",
    logo: "https://via.placeholder.com/100",
    rating: 4.1,
    features: ["Equity", "Currency", "Futures", "Options"],
    brokerage: "₹20/order",
    platform: "Web & Mobile",
    users: "15 Lakh+",
    bgColor: "#FBC4AB",
  },
  {
    name: "Fyers",
    logo: "https://via.placeholder.com/100",
    rating: 4.0,
    features: ["Equity","Commodity", "Currency", "Futures", "Options"],
    brokerage: "₹20/order",
    platform: "Web & Mobile",
    users: "12 Lakh+",
    bgColor: "#F9F1A5",
  },
];

const TradingPlatforms = () => {
  return (
    <div className="container mt-4">
      <h3 className="mb-3">
        <span className="title-highlight">Made to</span> Trade
      </h3>

      {brokers.map((broker, index) => (
        <div key={index} className="broker-card p-3 mb-4" style={{ backgroundColor: broker.bgColor }}>
          <div className="row align-items-center">

            <div className="col-md-2">
              <h5 className="broker-name">{broker.name}</h5>
              <p className="broker-rating">⭐ {broker.rating} | {broker.users} Users</p>
              
            </div>

            <div className="col-md-8">
              <div className="row align-items-center" >
                <div className="col-md-4">
                  <p className="broker-features">
                    {broker.features.map((feature, idx) => (
                      <span key={idx} className="feature-badge">{feature}</span>
                    ))}
                  </p>
                </div>

                <div className="col-md-3">
                  <p className="broker-info">
                  <strong>Brokerage:</strong> {broker.brokerage} | <strong>Platform:</strong> {broker.platform}
                  </p>
                </div>
              </div>
            </div>

            

            <div className="col-md-2 text-center">
              <img src={broker.logo} alt={broker.name} className="broker-logo" />
            </div>

          </div>
        </div>
      ))}
    </div>
  );
};

export default TradingPlatforms;
