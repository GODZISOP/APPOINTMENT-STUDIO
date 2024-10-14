import React, { useEffect, useState } from "react";
import Doctor from "../Assets/Untitled design (2).gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Hero.css";

function Hero() {
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };



  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div className="section-container">
      <div className="hero-section">
        <div className="text-section">
          <h1 className="text-title">
          Schedule Your Appointment Today! Choose a best time to connect with us and let us assist you with your needs
          </h1>
          <p className="text-descritpion">
          Transform your business with tailored strategies designed for success. From marketing to management, we’re here to help you thrive. Schedule your consultation now
          </p>
        <a href="https://calendly.com/appointmentstudio">
        <button

            className="text-appointment-btn"
            type="button"
          >
            <FontAwesomeIcon icon={faCalendarCheck} /> Book Appointment
          </button>
          </a>
          <div className="text-stats">
            <div className="text-stats-container">
              <p>500+</p>
              <p>Receive Clientss</p>
            </div>

            <div className="text-stats-container">
              <p>50+</p>
              <p>Experienced Setters</p>
            </div>

            <div className="text-stats-container">
              <p>1+</p>
              <p>Years of Experience</p>
            </div>
          </div>
        </div>

        <div className="hero-image-section">
          <img className="hero-image1" src={Doctor} alt="Doctor" />
        </div>
      </div>

      <div
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? "show-scroll" : ""}`}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
    </div>
  );
}

export default Hero;
