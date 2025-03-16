import React from "react";

import "../style/StockInvestors.css";

const investors = [
  {
    name: "Rakesh Jhunjhunwala",
    image: "https://via.placeholder.com/150",
    netWorth: "₹30,000 Cr",
  },
  {
    name: "Radhakishan Damani",
    image: "https://via.placeholder.com/150",
    netWorth: "₹25,000 Cr",
  },
  {
    name: "Vijay Kedia",
    image: "https://via.placeholder.com/150",
    netWorth: "₹10,000 Cr",
  },
  {
    name: "Raamdeo Agrawal",
    image: "https://via.placeholder.com/150",
    netWorth: "₹12,000 Cr",
  },
  {
    name: "Ashish Kacholia",
    image: "https://via.placeholder.com/150",
    netWorth: "₹8,000 Cr",
  },
  {
    name: "Dolly Khanna",
    image: "https://via.placeholder.com/150",
    netWorth: "₹5,000 Cr",
  },
  {
    name: "Porinju Veliyath",
    image: "https://via.placeholder.com/150",
    netWorth: "₹7,000 Cr",
  },
  {
    name: "Anil Goel",
    image: "https://via.placeholder.com/150",
    netWorth: "₹6,000 Cr",
  },
  {
    name: "Nemish Shah",
    image: "https://via.placeholder.com/150",
    netWorth: "₹9,000 Cr",
  },
  {
    name: "Mukul Agrawal",
    image: "https://via.placeholder.com/150",
    netWorth: "₹8,500 Cr",
  },
];

const StockInvestors = () => {
  return (
    <div className="container mt-4">
      <h4 className="mb-3">Stock Investors</h4>
      <p className="text-muted">List of India's top stock market investors.</p>

      <div className="row">
        {investors.map((investor, index) => (
          <div key={index} className="col-md-4 col-lg-3 mb-4">
            <div className="card investor-card">
              <img src={investor.image} className="card-img-top" alt={investor.name} />
              <div className="card-body text-center">
                <h5 className="card-title">{investor.name}</h5>
                <p className="card-text">Net Worth: {investor.netWorth}</p>
                <button className="btn btn-primary btn-sm">View Portfolio</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StockInvestors;
