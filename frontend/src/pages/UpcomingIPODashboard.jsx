import React from "react";
import "../style/UpcomingIPODashboard.css";


const UpcomingIPODashboard = () => {
  const ipoData = [
    {
      company: "Adani Power",
      priceBand: "₹ 129 - 136",
      open: "2024-06-03",
      close: "2024-06-05",
      issueSize: "130.15 Cr.",
      issueType: "Book Built",
      listingDate: "2024-06-10",
      status: "Ongoing",
      statusClass: "status-ongoing",
    },
    {
      company: "VBL LTD",
      priceBand: "₹ 129 - 136",
      open: "2024-06-03",
      close: "2024-06-05",
      issueSize: "130.15 Cr.",
      issueType: "Book Built",
      listingDate: "2024-06-10",
      status: "Coming",
      statusClass: "status-coming",
    },
    {
      company: "Tata Motor",
      priceBand: "₹ 129 - 136",
      open: "2024-06-03",
      close: "2024-06-05",
      issueSize: "130.15 Cr.",
      issueType: "Book Built",
      listingDate: "2024-06-10",
      status: "New Listed",
      statusClass: "status-newlisted",
    },
  ];

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5>Upcoming IPO | Dashboard</h5>
        <button className="btn btn-primary btn-sm">Register IPO</button>
      </div>

      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Company</th>
              <th>Price Band</th>
              <th>Open</th>
              <th>Close</th>
              <th>ISSUE SIZE</th>
              <th>ISSUE Type</th>
              <th>Listing Date</th>
              <th>Status</th>
              <th>Action</th>
              <th>Delete/View</th>
            </tr>
          </thead>
          <tbody>
            {ipoData.map((ipo, index) => (
              <tr key={index}>
                <td>{ipo.company}</td>
                <td>{ipo.priceBand}</td>
                <td>{ipo.open}</td>
                <td>{ipo.close}</td>
                <td>{ipo.issueSize}</td>
                <td>{ipo.issueType}</td>
                <td>{ipo.listingDate}</td>
                <td>
                  <span className={`status-badge ${ipo.statusClass}`}>
                    {ipo.status}
                  </span>
                </td>
                <td>
                  <button className="btn btn-sm btn-update">Update</button>
                </td>
                <td>
                <i class="fa-solid fa-trash"></i>
                <i class="fa-solid fa-eye"></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <nav>
        <ul className="pagination">
          <li className="page-item active"><a href="#" className="page-link">1</a></li>
          <li className="page-item"><a href="#" className="page-link">2</a></li>
          <li className="page-item"><a href="#" className="page-link">...</a></li>
          <li className="page-item"><a href="#" className="page-link">9</a></li>
          <li className="page-item"><a href="#" className="page-link">10</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default UpcomingIPODashboard;
