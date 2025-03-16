import React from "react";
import { Link } from "react-router-dom";
import "../style/UpcomingIPO.css"; // Import custom CSS for styling

const UpcomingIPO = () => {
  return (
    <div className="container mt-4">
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/" className="text-primary">Bluestock</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/ipo" className="text-primary">IPO</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Upcoming IPO
          </li>
        </ol>
      </nav>

      {/* Heading and Description */}
      <div className="upcoming-ipo-section">
        <h2 className="fw-bold">Upcoming IPO</h2>
        <p className="text-muted">
          Companies that have filed for an IPO with SEBI. Few details might be
          disclosed by the companies later.
        </p>
      </div>
    </div>
  );
};

export default UpcomingIPO;
