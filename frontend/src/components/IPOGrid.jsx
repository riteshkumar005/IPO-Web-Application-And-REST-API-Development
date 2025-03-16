import React from "react";
import "../style/IPOGrid.css"; // Import custom styles

const ipoData = [
  {
    logo: "NOVA.png",
    name: "Nova Agritech Ltd.",
    priceBand: "Rs 39 - 41",
    open: "2024-01-22",
    close: "2024-01-24",
    issueSize: "143.81 Cr.",
    issueType: "Book Built",
    listingDate: "2024-01-30",
  },
  {
    logo: "EPACK.jpeg",
    name: "EPACK Durable Ltd.",
    priceBand: "Rs 218 - 230",
    open: "2024-01-19",
    close: "2024-01-23",
    issueSize: "640.05 Cr.",
    issueType: "Book Built",
    listingDate: "2024-01-29",
  },
  {
    logo: "R K SWAMY.png",
    name: "RK Swamy Ltd.",
    priceBand: "Not Issued",
    open: "Not Issued",
    close: "Not Issued",
    issueSize: "Not Issued",
    issueType: "Not Issued",
    listingDate: "Not Issued",
  },
  {
    logo: "OYO.png",
    name: "OYO",
    priceBand: "Not Issued",
    open: "Not Issued",
    close: "Not Issued",
    issueSize: "8430 Cr.",
    issueType: "Book Built",
    listingDate: "Not Issued",
  },
  {
    logo: "boAt.png",
    name: "boAT",
    priceBand: "Not Issued",
    open: "Not Issued",
    close: "Not Issued",
    issueSize: "2000 Cr.",
    issueType: "Book Built",
    listingDate: "Not Issued",
  },
  {
    logo: "cloudnine.jpeg",
    name: "Kids Clinic India Ltd.",
    priceBand: "Not Issued",
    open: "Not Issued",
    close: "Not Issued",
    issueSize: "Not Issued",
    issueType: "Not Issued",
    listingDate: "Not Issued",
  },
  {
    logo: "OYO.png",
    name: "OYO",
    priceBand: "Not Issued",
    open: "Not Issued",
    close: "Not Issued",
    issueSize: "8430 Cr.",
    issueType: "Book Built",
    listingDate: "Not Issued",
  },
  {
    logo: "boAt.png",
    name: "boAT",
    priceBand: "Not Issued",
    open: "Not Issued",
    close: "Not Issued",
    issueSize: "2000 Cr.",
    issueType: "Book Built",
    listingDate: "Not Issued",
  },
  {
    logo: "cloudnine.jpeg",
    name: "Kids Clinic India Ltd.",
    priceBand: "Not Issued",
    open: "Not Issued",
    close: "Not Issued",
    issueSize: "Not Issued",
    issueType: "Not Issued",
    listingDate: "Not Issued",
  },
  {
    logo: "OYO.png",
    name: "OYO",
    priceBand: "Not Issued",
    open: "Not Issued",
    close: "Not Issued",
    issueSize: "8430 Cr.",
    issueType: "Book Built",
    listingDate: "Not Issued",
  },
  {
    logo: "boAt.png",
    name: "boAT",
    priceBand: "Not Issued",
    open: "Not Issued",
    close: "Not Issued",
    issueSize: "2000 Cr.",
    issueType: "Book Built",
    listingDate: "Not Issued",
  },
  {
    logo: "cloudnine.jpeg",
    name: "Kids Clinic India Ltd.",
    priceBand: "Not Issued",
    open: "Not Issued",
    close: "Not Issued",
    issueSize: "Not Issued",
    issueType: "Not Issued",
    listingDate: "Not Issued",
  },
];

const IPOGrid = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        {ipoData.map((ipo, index) => (
          <div className="col-lg-4 col-md-6 mb-4" key={index}>
            <div className="card ipo-card">
              <div className="card-body">
                {/* Logo and Title */}
                <div className="d-flex align-items-center mb-3">
                  <img src={ipo.logo} alt={ipo.name} className="ipo-logo" />
                  <h5 className="company-name ms-2">{ipo.name}</h5>
                </div>

                {/* IPO Details */}
                <div className="row mb-2">
                  <div className="col-6">
                    <p className="text-muted mb-1">PRICE BAND</p>
                    <p><strong>{ipo.priceBand}</strong></p>
                  </div>
                  <div className="col-6">
                    <p className="text-muted mb-1">OPEN</p>
                    <p><strong>{ipo.open}</strong></p>
                  </div>
                </div>

                <div className="row mb-2">
                  <div className="col-6">
                    <p className="text-muted mb-1">CLOSE</p>
                    <p><strong>{ipo.close}</strong></p>
                  </div>
                  <div className="col-6">
                    <p className="text-muted mb-1">ISSUE SIZE</p>
                    <p><strong>{ipo.issueSize}</strong></p>
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-6">
                    <p className="text-muted mb-1">ISSUE TYPE</p>
                    <p><strong>{ipo.issueType}</strong></p>
                  </div>
                  <div className="col-6">
                    <p className="text-muted mb-1">LISTING DATE</p>
                    <p><strong>{ipo.listingDate}</strong></p>
                  </div>
                </div>

                {/* Buttons */}
                <div className="d-flex justify-content gap-2">
                  <button className="btn btn-outline-primary btn-sm">RHP</button>
                  <button className="btn btn-danger btn-sm">DRHP</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IPOGrid;
