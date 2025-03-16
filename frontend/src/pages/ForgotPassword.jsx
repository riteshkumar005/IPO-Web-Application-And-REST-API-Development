import React from "react";
import "../style/ForgotPassword.css"; // Custom CSS for styling

const ForgotPassword = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="password-box p-4 shadow rounded text-center">
        <h2 className="logo mb-3">BLUESTOCK</h2>
        <h4 className="mb-2">Forgot Password?</h4>
        <p className="text-muted">Enter your email address to get the password reset link.</p>
        <form>
          <div className="mb-3 text-start">
            <label className="form-label">Email Address</label>
            <input type="email" className="form-control" placeholder="hello@bluestock.in" />
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-primary w-100">Password Reset</button>
          </div>
        </form>
        <div>
          <a href="#" className="text-decoration-none">Back to login</a>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;