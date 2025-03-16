import React, { useState } from "react";
import "../style/Nav.css";

const Dashboard = () => {
  const [activeItem, setActiveItem] = useState("Dashboard");

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className="dashboard-container d-flex">
      <aside className="sidebar p-4">
        <div className="brand">
          <h5>Bluestock Fintech</h5>
        </div>
        {/* <hr className="nav-menu-divider" /> */}
        <h9 className="menu-title">MENU</h9>
        <ul className="nav flex-column">
          {["Dashboard", "Manage IPO", "IPO Subscription", "IPO Allotment"].map((item) => (
            <li
              key={item}
              className={`nav-item ${activeItem === item ? "active" : ""}`}
              onClick={() => handleItemClick(item)}
            >
              {item}
            </li>
          ))}
        </ul>
        <hr className="nav-menu-divider" />
        <h9 className="menu-title">OTHERS</h9>
        <ul className="nav flex-column">
          {["Settings", "API Manager", "Accounts", "Help"].map((item) => (
            <li
              key={item}
              className={`nav-item ${activeItem === item ? "active" : ""}`}
              onClick={() => handleItemClick(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </aside>
      <main className="content p-4">
        <header className="d-flex justify-content-between align-items-center mb-4 header-container">
          <div className="input-group search-bar">
            <input 
              type="text" 
              className="form-control" 
              placeholder="Search" 
              aria-label="Search" 
            />
            <span className="input-group-text" id="basic-addon2">
              <i className="fa-brands fa-searchengin"></i>
            </span>
          </div>
          <div className="user-profile d-flex align-items-center">
            <div className="avatar">V</div>
            <span className="username">Hi, Vishal</span>
            <i className="fa-solid fa-bell"></i>
            <span className="notification-dot"></span>
          </div>
        </header>
      </main>
    </div>
  );
};

export default Dashboard;
