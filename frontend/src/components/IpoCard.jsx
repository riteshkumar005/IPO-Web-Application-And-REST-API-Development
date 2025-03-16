import React from "react";
import "../Style"; // Import custom styles

const IPOCard = () => {
  return (
    <div className="card ipo-card">
      <div className="card-body">
        {/* Logo and Title */}
        <div className="d-flex align-items-center mb-3">
          <img
            src="https://via.placeholder.com/50" // Replace with actual logo
            alt="Nova Agritech Ltd."
            className="ipo-logo"
          />
          <h5 className="company-name ms-2">Nova Agritech Ltd.</h5>
        </div>

        {/* IPO Details */}
        <div className="row mb-3">
          <div className="col-6">
            <p className="text-muted mb-1">PRICE BAND</p>
            <p><strong>Rs 39 - 41</strong></p>
          </div>
          <div className="col-6">
            <p className="text-muted mb-1">OPEN</p>
            <p><strong>2024-01-22</strong></p>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-6">
            <p className="text-muted mb-1">CLOSE</p>
            <p><strong>2024-01-24</strong></p>
          </div>
          <div className="col-6">
            <p className="text-muted mb-1">ISSUE SIZE</p>
            <p><strong>143.81 Cr.</strong></p>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-6">
            <p className="text-muted mb-1">ISSUE TYPE</p>
            <p><strong>Book Built</strong></p>
          </div>
          <div className="col-6">
            <p className="text-muted mb-1">LISTING DATE</p>
            <p><strong>2024-01-30</strong></p>
          </div>
        </div>

        {/* Buttons */}
        <div className="d-flex justify-content-center gap-3">
          <button className="btn btn-primary btn-sm">RHP</button>
          <button className="btn btn-danger btn-sm">DRHP</button>
        </div>
      </div>
    </div>
  );
};

export default IPOCard;
