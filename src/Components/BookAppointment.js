import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/BookAppointment.css";

function BookAppointment() {

 
  return (
    <div className="ba-section">
      <div className="ba-image-content">
        <img src="https://www.leveragebpo.com/wp-content/uploads/2021/12/leveragebpo.com-appointment-setter-600x666.png"alt="Doctor Group" className="ba-image1" />
      </div>

      <div className="ba-text-content">
        <h3 className="ba-title">
          <span>Why Choose Us</span>
        </h3>
        <p className="ba-description">
        Appointment setters streamline the scheduling process, reducing the time spent on back-and-forth communication. This allows you and your team to focus on other important tasks.
        </p>

        <p className="ba-checks ba-check-first">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> Efficiency
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> Convenience
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> Growth
        </p>
        <p className="ba-checks ba-check-last">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> Satisfaction
        </p>
<a href="https://calendly.com/appointmentstudio">

        <button
          className="text-appointment-btn"
          type="button"
      
          >
          <FontAwesomeIcon icon={faCalendarCheck} /> Book Appointment
        </button>
          </a>
      </div>
    </div>
  );
}

export default BookAppointment;
