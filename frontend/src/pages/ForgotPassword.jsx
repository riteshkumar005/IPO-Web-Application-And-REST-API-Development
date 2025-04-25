import React from "react";
import "../style/ForgotPassword.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/logo.png";

const ForgotPassword = () => {
  return (
    <div className="forgot-container">
      <div className="forgot-box p-4">
        <div className="text-center mb-4">
          <img src={logo} alt="Bluestock Logo" className="logo mb-2" />
          <h2 className="brand-name">BLUESTOCK</h2>
        </div>

        <h4 className="fw-bold mb-3 text-center">Forgot Your Password?</h4>
        <p className="text-muted mb-4 text-center instruction-text">
          No worries! Enter your email and we’ll send you a reset link.
        </p>

        <form>
          <div className="mb-3 text-start">
            <label className="form-label fw-medium">Email Address</label>
            <input
              type="email"
              className="form-control shadow-sm"
              placeholder="you@example.com"
              required
            />
          </div>
          <button type="submit" className="btn btn-purple w-100 mb-3">
            Send Reset Link
          </button>
        </form>

        <div className="text-center">
          <a href="#" className="back-link">
            &larr; Back to Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;