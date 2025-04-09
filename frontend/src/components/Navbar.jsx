import React from "react";
import { Link } from "react-router-dom";
import "../style/navbar.css";

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
      <div className="container-fluid justify-content-between align-items-center">

        {/* Left: Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src="android app icon.png" alt="Bluestock Logo" className="navbar-logo" />
          <h1 className="navbar-title">BLUESTOCK</h1>
        </Link>

        {/* Center: Nav Links */}
        <div className="navbar-center">
          <ul className="navbar-nav d-flex flex-row gap-4">
            {["products", "pricing", "community"].map((item) => (
              <li className="nav-item" key={item}>
                <Link className="nav-link text-uppercase" to={`/${item}`}>
                  {item}
                </Link>
              </li>
            ))}

            {Object.entries(dropdownItems).map(([key, items]) => (
              <li className="nav-item dropdown" key={key}>
                <a
                  className="nav-link dropdown-toggle text-uppercase"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  {key}
                </a>
                <ul className="dropdown-menu">
                  {items.map(({ path, label }) => (
                    <li key={path}>
                      <Link className="dropdown-item" to={path}>
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Auth Buttons & Icon */}
        <div className="navbar-right d-flex align-items-center gap-3">
          <Link className="nav-link signin-link" to="/signin">
            Sign In
          </Link>
          <Link className="btn signup-btn" to="/signup" style={{backgroundColor:"blue", borderRadius: 0}}>
            Sign Up Now
          </Link>
          <span className="menu-icon">&#9776;</span> {/* Hamburger icon */}

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
