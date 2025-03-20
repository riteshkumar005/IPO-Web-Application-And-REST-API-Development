import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/Login.css";
import logo from "../assets/logo.png"; // Adjust path if needed

const Login = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="login-box p-4 shadow rounded">
        
        {/* Logo & Title Section */}
        <h2 className="text-center mb-3 d-flex align-items-center justify-content-center">
          <img src={logo} alt="Bluestock Logo" className="logo me-2"/>
          <span className = "title-box" style={{ color: "black", fontWeight: "bold" }}>BLUESTOCK</span>
        </h2>

        <form>
          {/* Email Field */}
          <div className="mb-2">
            <label className="form-label">Email Address</label>
            <input type="email" className="form-control" placeholder="johndoe@gmail.com" style={{border: "1px solid black"}}/>
          </div>

          {/* Password Field with Forgot Password on the Right */}
          <div className="mb-2">
            <div className="d-flex justify-content-between">
              <label className="form-label">Password</label>
              <a href="#" className="text-decoration-none forgot-password small">
                Forgot Password?
              </a>
            </div>
            <input type="password" className="form-control" placeholder="••••••••••••••••" />
          </div>

          {/* reCAPTCHA Box */}
          <div className="captcha-box mb-3 p-2 rounded border d-flex align-items-center ">
            <input type="checkbox" className="form-check-input me-2" id="captcha" />
            <label className="form-check-label" htmlFor="captcha">
              I'm not a robot
            </label>
            <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="reCAPTCHA" className="ms-auto recaptcha-img" />
          </div>

          {/* Keep Me Signed In */}
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="rememberMe" />
            <label className="form-check-label" htmlFor="rememberMe">Keep me signed in</label>
          </div>

          {/* Login Button */}
          <div className="mb-3">
            <button type="submit" className="btn btn-primary w-100 login-btn" >Login</button>
          </div>

          {/* Divider */}
          <div className="text-center text-muted mb-2">or sign in with</div>

          {/* Google Sign-in Button */}
          <div className="mb-3">
            <button className="btn btn-light w-100 google-btn">
              <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google" className="me-2" />
              Continue with Google
            </button>
          </div>
        </form>

        {/* Create Account Link */}
        <div className="text-center mt-3">
          <a href="#" className="text-decoration-none create-account">Create an account</a>
        </div>
      </div>
    </div>
  );
};

export default Login;