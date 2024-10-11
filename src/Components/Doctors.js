import React from "react";
import DoctorCard from "./DoctorCard";

import "../Styles/Doctors.css";

function Doctors() {
  return (
    <div className="doctor-section" id="doctors">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>Meet Our Experts</span>
        </h3>

        <p className="dt-description">
        Expert Appointment Setters Dedicated to Your Success!      
        </p>
      </div>

      <div className="dt-cards-content">
        <DoctorCard
          img="https://th.bing.com/th/id/OIP.hQ8rcC9RbHVZhDa0M6znFQHaJw?rs=1&pid=ImgDetMain"
          name=" Kathryn Murphy"
          title="MARKETING EXPERT"
          stars="4.9"
          reviews="1800"
        />
        <DoctorCard
          img="https://th.bing.com/th/id/OIP.-VCEMfYvaTaGSI1Nf2O4tQHaHa?pid=ImgDet&w=206&h=206&c=7"
          name=" Jacob Jones"
          title="APPOINTMENT SETTER"
          stars="4.8"
          reviews="700"
        />
        <DoctorCard
          img="https://th.bing.com/th/id/OIP.UIhyOKGJotdsuVsRbLHVzgHaHa?rs=1&pid=ImgDetMain"
          name=" Albert Flores"
          title="SUPPORTER"
          stars="4.7"
          reviews="450"
          />
        <DoctorCard
          img="https://th.bing.com/th/id/OIP.wRImpaLWq1Oj8WsrLZEDpQHaHa?pid=ImgDet&w=184&h=184&c=7&dpr=1.1"
          name=" Jenny Wilson"
          title="HR"
          stars="4.8"
          reviews="500"
        />
      </div>
    </div>
  );
}

export default Doctors;
