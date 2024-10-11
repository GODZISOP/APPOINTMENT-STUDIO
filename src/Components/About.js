import React, { useState } from "react";
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";

function About() {
  const [activeSolution, setActiveSolution] = useState(null);

  const toggleSolution = (solution) => {
    setActiveSolution(activeSolution === solution ? null : solution);
  };

  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img 
          src="https://cdn.prod.website-files.com/64a83d4453b353ae789d6387/64eccba6885a08b1429a90a8_How%20to%20Implement%20Inbound%20Links%20to%20Help%20Your%20SEO%20modify%20heading%20(3)-min.jpg" 
          alt="Doctor Group" 
          className="about-image1" 
        />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>TAKE YOUR BUSINESS TO THE NEXT LEVEL</span>
        </h3>
        <p className="about-description">
          Elevate your business with innovative solutions and personalized strategies.
          Unlock new growth opportunities and maximize your potential.
          Join us today to transform your vision into reality!
        </p>

        <h4 className="about-text-title">Your Solutions</h4>

        <div onClick={() => toggleSolution("mobileAccessibility")} style={{ cursor: 'pointer' }}>
          <SolutionStep
            title="Mobile Accessibility"
            description={activeSolution === "mobileAccessibility" ? 
              "After each appointment, send a feedback survey to clients using tools like Google Forms or Typeform. Use this feedback to continuously improve your appointment process." 
              : "Click to learn more about Mobile Accessibility"}
          />
        </div>

        <div onClick={() => toggleSolution("socialMediaIntegration")} style={{ cursor: 'pointer' }}>
          <SolutionStep
            title="Social Media Integration"
            description={activeSolution === "socialMediaIntegration" ? 
              "Use social media platforms to enable appointment bookings directly from your business profiles, increasing accessibility for potential clients."
              : "Click to learn more about Social Media Integration"}
          />
        </div>

        <div onClick={() => toggleSolution("feedbackImprovement")} style={{ cursor: 'pointer' }}>
          <SolutionStep
            title="Feedback and Improvement "
            description={activeSolution === "feedbackImprovement" ? 
              "Our experienced doctors and specialists are here to provide expert advice and personalized treatment plans, helping you achieve your best possible health."
              : "Click to learn more about Feedback and Improvement Mechanism"}
          />
        </div>
      </div>
    </div>
  );
}

export default About;
