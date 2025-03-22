import React from "react";
import "../style/Signup.css";
import logo from "../assets/logo.png";

const Signup = () => {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="signup-box p-4 shadow-sm bg-white rounded">
        <h2 className="text-center mb-2">
          <img src={logo} alt="Bluestock Logo" className="logome-1" />
          <span className="logo" style={{color : "black"}}>BLUESTOCK</span>
        </h2>
        <h5 className="text-center mb-4" style={{fontSize: "21px", color: "darkblack" , fontWeight: "bold"}}>Create an account</h5>
        <form>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Saisha Wagh"
              style={{border: "1px solid black"}}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              className="form-control"
              placeholder="hello@bluestock.in"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="••••••••••••••••"
            />
          </div>

          <p className="text-muted small">
            By continuing, you agree to our{" "}
            <a href="#" className="text-decoration-none">
              terms of service
            </a>.
          </p>

          <div className="d-flex justify-content-center mb-3">
            <div className="captcha-box d-flex align-items-center">
              <input type="checkbox" id="captcha" />
              <label htmlFor="captcha" className="ms-2 mb-0">
                I'm not a robot
              </label>
              <img
                src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
                alt="reCAPTCHA"
                className="captcha-img"
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Sign up
          </button>

          <div className="separator">
            <span className="separator-text">or sign up with</span> 
          </div>

          <button className="btn btn-light w-100 d-flex align-items-center justify-content-center ">
            <img
              src="https://img.icons8.com/color/32/000000/google-logo.png"
              alt="Google"
              className="me-2"
            />
            Continue with Google
          </button>
        </form>

        <div className="text-center mt-3">
          <p className="text-muted ">
            Already have an account?{" "}
            <a href="#" className="text-decoration-none">
              Sign in here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;