import React from "react";
import "../Styles/Footer.css";
import imgg from"../Assets/WhatsApp Image 2024-10-11 at 19.56.21_ecaaddd9.jpg"

import SubscribeNewsletter from "./SubscribeNewsletter";

function Footer() {
  return (
    <div className="footer-section">
      <div className="footer-container">
        <div className="ft-info">
          <div className="ft-info-p1">
          <img src={imgg} id="imggg"/>

            <p className="ft-description">
            The appointment setting has streamlined our workflow remarkably. We've experienced a noticeable boost in client satisfaction
            </p>
          </div>

          <SubscribeNewsletter />
        </div>

        <div className="ft-list">
          <p className="ft-list-title">Services</p>
          <ul className="ft-list-items">
            <li>
              <a href="/">MARKETING</a>
            </li>
            <li>
              <a href="/">SOLUTION</a>
            </li>
            <li>
              <a href="/">LEADS GENERATE</a>
            </li>
            <li>
              <a href="/">BUSINESS GROWTH</a>
            </li>
            <li>
            </li>
          </ul>
        </div>

      

        <div className="ft-list" id="contact">
          <p className="ft-list-title">Talk To Us</p>
          <ul className="ft-list-items">
        
            <li>
              <a href="mailto:appointment@healthplus.com">
              appointmentstudio@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+022 5454 5252">+44 7492 989721</a>
            </li>
           
          </ul>
        </div>
      </div>

      <div className="ft-copyright">
        <p>© 2013-2024 Appointment Studio. All rights reserved.</p>

        <ul className="ft-social-links">
         

          <li>
            <a
              href="https://www.facebook.com/profile.php?id=61566532543942&mibextid=ZbWKwL"
              title="FaceBook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 320 512"
              >
                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
              </svg>
            </a>
          </li>

       
        </ul>
      </div>
    </div>
  );
}

export default Footer;
