import React from "react";
import "../style/Footer.css"; // Import custom styles


const Footer = () => {
  return (
    <footer className="footer bg-light mt-5">
      <div className="container py-4">
        <div className="row">
          {/* Resources Section */}
          <div className="col-md-2 col-6">
            <h6 className="footer-title">Resources</h6>
            <ul className="list-unstyled">
              <li><a href="#">Trading Guide</a></li>
              <li><a href="#">IPO Listings</a></li>
              <li><a href="#">News</a></li>
              <li><a href="#">Market Trends</a></li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="col-md-2 col-6">
            <h6 className="footer-title">Company</h6>
            <ul className="list-unstyled">
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>

          {/* Offerings Section */}
          <div className="col-md-2 col-6">
            <h6 className="footer-title">Offerings</h6>
            <ul className="list-unstyled">
              <li><a href="#">Campaign & Help</a></li>
              <li><a href="#">IPO Collaboration</a></li>
              <li><a href="#">Investment</a></li>
              <li><a href="#">Products</a></li>
            </ul>
          </div>

          {/* Stock Section */}
          <div className="col-md-2 col-6">
            <h6 className="footer-title">Stock</h6>
            <ul className="list-unstyled">
              <li><a href="#">Stock Analysis</a></li>
              <li><a href="#">Latest Market</a></li>
              <li><a href="#">Listed Stocks</a></li>
              <li><a href="#">Buy-Back Program</a></li>
            </ul>
          </div>

          {/* Policy Section */}
          <div className="col-md-2 col-6">
            <h6 className="footer-title">Policy</h6>
            <ul className="list-unstyled">
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Refund Policy</a></li>
              <li><a href="#">Security</a></li>
            </ul>
          </div>

        </div>

        
        
        

        {/* Footer Bottom Content */}
        <div className="row">
          <div className="col">
            {/* Social Media Icons */}
            <div className="col-md-2 col-6 text-center">
                <h6 className="footer-title">Follow Us</h6>
                <div className="social-icons">
                  <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
                  <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                  <a href="#"><i class="fa-brands fa-youtube"></i></a>
                  <a href="#"><i class="fa-brands fa-linkedin"></i></a>
                  <a href="#"><i class="fa-brands fa-instagram"></i></a>
                  <a href="#"><i class="fa-brands fa-telegram"></i></a>
                </div>
            </div>

             <div className="company-logo ">
               <img src="" alt="Bluestock" />
             </div>
             <div className="company-details">
               <p>Bluestock Fintech</p>
               <p>Pune, Maharashtra</p>
               <p>MSME Registration No:</p>
               <p>UDYAM-MH-01-v0138001</p>
             </div>
          <div className="col-md-4 text-center">
            <img src="startupindia" alt="Startup India" className="startup-logo" />
          </div>

          </div>
          
          <div className="col-md-8 text-muted">
          <p>Investment in securities markets are subject to market risks, read all the related documents carefully before investing as prescribed by SEBI. Issued in the interest of the investors.</p>
             <p>The users can write to <a href="mailto:hello@bluestock.in">hello@bluestock.in</a> for any app, website related queries. Also you can send IT / Tech related feedback to <a href="mailto:cto@bluestock.in">cto@bluestock.in</a></p>
             <p>Disclaimer: We are not a SEBI registered research analyst company. We do not provide any kind of stock recommendations, buy/sell stock tips, or investment and trading advice. All the stock scripts shown in the Bluestock app, website, all social media handles are for educational purposes only.</p>
             <p>Before making any investment in the financial market, it is advisable to consult with your financial advisor. Remember that stock markets are subject to market risks.</p>
            
          </div>
          
        </div>
        {/* Horizontal Line */}
        <hr />
        <div className="d-flex justify-content-evenly">
          <p class="p-2 flex-grow-1">Bluestock Fintech All Rights Reserved.</p>
          <p>  Made with <span>❤</span> in Pune, Maharashtra</p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
