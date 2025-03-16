import React from "react";
import "../style/Signup.css"; // Custom CSS for styling

const Signup = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="signup-box p-4 shadow rounded">
        <h2 className="text-center mb-3"> <span className="logo">BLUESTOCK</span> </h2>
        <h4 className="text-center mb-4">Create an account</h4>
        <form>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" placeholder="Saisha Wagh" />
          </div>
          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input type="email" className="form-control" placeholder="hello@bluestock.in" />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" placeholder="**********" />
          </div>
          <p className="text-muted text-center small">By continuing, you agree to our <a href="#" className="text-decoration-none">terms of service</a>.</p>
          <div className="mb-3 d-flex justify-content-center">
            <button type="submit" className="btn btn-primary w-100">Sign up</button>
          </div>
          <div className="text-center">or sign up with</div>
          <div className="mb-3 d-flex justify-content-center">
            <button className="btn btn-light w-100 mt-2">
              <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google" className="me-2" />
              Continue with Google
            </button>
          </div>
        </form>
        <div className="text-center mt-3">
          <p className="text-muted">Already have an account? <a href="#" className="text-decoration-none">Sign in here</a></p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
