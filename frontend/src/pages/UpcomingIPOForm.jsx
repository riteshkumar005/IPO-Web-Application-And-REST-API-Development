import React from "react";
import "../style/UpcomingIPOForm.css";

const UpcomingIPOForm = () => {
  return (
    <div className="container mt-4">
      <h4 className="mb-3">Upcoming IPO Information</h4>
      <p className="text-muted">Manage your IPO records</p>

      <div className="card p-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h5>IPO Information</h5>
          <div>
            <button className="btn btn-primary btn-sm me-2">Register</button>
            <button className="btn btn-light btn-sm">Cancel</button>
          </div>
        </div>

        <div className="form-section">
          <div className="mb-3">
            <label className="form-label">Company Logo</label>
            <div className="d-flex align-items-center">
              <img
                src="https://via.placeholder.com/50"
                alt="Company Logo"
                className="company-logo me-3"
              />
              <button className="btn btn-outline-primary btn-sm">Upload</button>
              <button className="btn btn-outline-danger btn-sm ms-2">Remove</button>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <label className="form-label">Company Name</label>
              <input type="text" className="form-control" placeholder="Enter company name" />
            </div>
            <div className="col-md-6">
              <label className="form-label">Price Band</label>
              <input type="text" className="form-control" placeholder="Enter price band" />
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-6">
              <label className="form-label">Open Date</label>
              <input type="date" className="form-control" />
            </div>
            <div className="col-md-6">
              <label className="form-label">Close Date</label>
              <input type="date" className="form-control" />
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-6">
              <label className="form-label">Issue Size</label>
              <input type="text" className="form-control" placeholder="Enter issue size" />
            </div>
            <div className="col-md-6">
              <label className="form-label">Issue Type</label>
              <select className="form-select">
                <option value="">Select issue type</option>
                <option value="Book Built">Book Built</option>
                <option value="Fixed Price">Fixed Price</option>
              </select>
            </div>
          </div>

          <hr className="mt-4 mb-4" />

          <h5>New Listed IPO Details (When IPO Gets Listed)</h5>

          <div className="row mt-3">
            <div className="col-md-6">
              <label className="form-label">IPO Price</label>
              <input type="text" className="form-control" placeholder="Enter IPO price" />
            </div>
            <div className="col-md-6">
              <label className="form-label">Listing Price</label>
              <input type="text" className="form-control" placeholder="Enter listing price" />
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-6">
              <label className="form-label">CMP</label>
              <input type="text" className="form-control" placeholder="Enter CMP" />
            </div>
            <div className="col-md-6">
              <label className="form-label">Listing Date</label>
              <input type="date" className="form-control" />
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-6">
              <label className="form-label">GMP</label>
              <input type="text" className="form-control" placeholder="Enter GMP" />
            </div>
            <div className="col-md-6">
              <label className="form-label">GMP %</label>
              <input type="text" className="form-control" placeholder="Enter GMP %" />
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-6">
              <label className="form-label">BSE PDF Link</label>
              <input type="text" className="form-control" placeholder="Enter BSE PDF Link" />
            </div>
            <div className="col-md-6">
              <label className="form-label">NSE PDF Link</label>
              <input type="text" className="form-control" placeholder="Enter NSE PDF Link" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingIPOForm;
