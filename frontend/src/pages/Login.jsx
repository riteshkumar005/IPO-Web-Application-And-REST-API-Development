import React from "react";
import "../style/Login.css"; // Custom CSS for styling

const Login = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="login-box p-4 shadow rounded">
        <h2 className="text-center mb-4"> <span className="logo">BLUESTOCK</span> </h2>
        <form>
          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input type="email" className="form-control" placeholder="johndoe@gmail.com" />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" placeholder="**********" />
            <small className="float-end"><a href="#" className="text-decoration-none">Forgot Password?</a></small>
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="rememberMe" />
            <label className="form-check-label" htmlFor="rememberMe">Keep me signed in</label>
          </div>
          <div className="mb-3 d-flex justify-content-center">
            <button type="submit" className="btn btn-primary w-100">Login</button>
          </div>
          <div className="text-center">or sign in with</div>
          <div className="mb-3 d-flex justify-content-center">
            <button className="btn btn-light w-100 mt-2">
              <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google" className="me-2" />
              Continue with Google
            </button>
          </div>
        </form>
        <div className="text-center mt-3">
          <a href="#" className="text-decoration-none">Create an account</a>
        </div>
      </div>
    </div>
  );
};

export default Login;

