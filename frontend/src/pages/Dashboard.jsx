import React from "react";
import "../style/Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="row">
        {/* IPO Dashboard India Section */}
        <div className="col-md-4">
          <h5 className="section-title">IPO Dashboard India</h5>
          <p className="text-success">⬆ 20 IPO in Gain</p>
          <div className="ipo-charts">
            <div className="circle orange">
              <span>30</span>
              <p>Total IPO</p>
            </div>
            <div className="circle blue">
              <span>20</span>
              <p>IPO in Gain</p>
            </div>
            <div className="circle purple">
              <span>9</span>
              <p>IPO in Loss</p>
            </div>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="col-md-4">
          <h5 className="section-title">Quick Links</h5>
          <p className="subtext">Adipiscing elit, sed do eiusmod tempor</p>
          <ul className="quick-links">
            <li><img src="nse.png" alt="NSE" /> NSE India <span>Visit Now</span></li>
            <li><img src="bse.png" alt="BSE" /> BSE India <span>Visit Now</span></li>
            <li><img src="sbi.png" alt="SEBI" /> SEBI <span>Visit Now</span></li>
            <li><img src="moneycontrol.png" alt="Money Control" /> Money Control <span>Visit Now</span></li>
          </ul>
        </div>

        {/* Main Board IPO Section */}
        <div className="col-md-4">
          <h5 className="section-title">Main Board IPO</h5>
          <p>From 01 Jan 2024</p>
          <button className="btn btn-primary btn-sm">View Report</button>
          <div className="donut-chart">
            <div className="tooltip">
              <span>Afternoon</span>
              <p>IPO NSE & BSE</p>
              <strong>15</strong>
            </div>
          </div>
          <div className="chart-legend">
            <span className="dot upcoming"></span> Upcoming 15
            <span className="dot listed"></span> New Listed 25
            <span className="dot ongoing"></span> Ongoing 2
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
