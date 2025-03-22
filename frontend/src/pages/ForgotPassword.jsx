import React from "react";
import "../style/ForgotPassword.css"; // Custom CSS
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/logo.png";

const ForgotPassword = () => {
  return (
    <div className="forgot-container">
      <div className="forgot-box p-4">
        <h2 className="text-center mb-3 d-flex align-items-center justify-content-center">
            <img src={logo} alt="Bluestock Logo" className="logo me-2"/>
            <span className = "title-box" style={{ color: "black", fontWeight: "bold", fontSize:28 }}>BLUESTOCK</span>
        </h2>
        
        <h4 className="fw-bold mb-2">Forgot Password?</h4>
        <p className="text-muted mb-4" style={{fontSize:17, textAlign:"center", padding: 10}}>
          Enter your email address to get the password reset link.
        </p>

        <form>
          <div className="mb-3 text-start">
            <label className="form-label fw-medium">Email Address</label>
            <input
              type="email"
              className="form-control shadow-sm"
              placeholder="hello@bluestock.in"
              required
            />
          </div>
          <button type="submit" className="btn btn-purple w-100 mb-3">
            Password Reset
          </button>
        </form>

        <a href="#" className="back-link">
          Back to login
        </a>
      </div>
    </div>
  );
};

export default ForgotPassword;