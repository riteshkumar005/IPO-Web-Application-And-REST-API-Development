import React from "react";
import { Link } from "react-router-dom";
import "../style/navbar.css"; // External CSS for styles

const Navbar = () => {
  const dropdownItems = {
    media: [
      { path: "/videos", label: "Videos" },
      { path: "/articles", label: "Articles" },
    ],
    support: [
      { path: "/help-center", label: "Help Center" },
      { path: "/contact", label: "Contact Us" },
    ],
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        {/* Logo & Brand Name */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src="android app icon.png" alt="Bluestock Logo" className="navbar-logo" />
          <h1 className="navbar-title">BLUESTOCK</h1>
        </Link>

        {/* Mobile Toggle Button */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            {["products", "pricing", "community"].map((item) => (
              <li className="nav-item" key={item}>
                <Link className="nav-link" to={`/${item}`}>{item.charAt(0).toUpperCase() + item.slice(1)}</Link>
              </li>
            ))}

            {/* Dropdowns */}
            {Object.entries(dropdownItems).map(([key, items]) => (
              <li className="nav-item dropdown" key={key}>
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </a>
                <ul className="dropdown-menu">
                  {items.map(({ path, label }) => (
                    <li key={path}>
                      <Link className="dropdown-item" to={path}>{label}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side Buttons */}
        
        <div className="d-flex align-items-center">
          <Link className="nav-link me-3 collapse navbar-collapse justify-content-center" to="/signin">Sign In</Link>
          <Link className="btn signup-btn collapse navbar-collapse justify-content-center" to="/signup">Sign Up Now</Link>
          <span className="menu-icon ms-3">&#x2630;</span>
          
        </div>
        
       
       
      </div>
    </nav>
  );
};

export default Navbar;
