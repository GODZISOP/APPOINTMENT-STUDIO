import React from "react";
import InformationCard from "./InformationCard";
import "../Styles/Info.css";

import { faNetworkWired ,} from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp,faPaperPlane } from '@fortawesome/free-solid-svg-icons';


function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>What We Do</span>
        </h3>
        <p className="info-description">
         Keeping track of interactions and maintaining accurate records of leads and appointments.
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="HIGH TICKET SALES SYSTEM"
          description="
 A high-ticket sales system:

Unlock your potential with our cutting-edge high-ticket sales system designed to transform the way you approach selling. In today’s competitive market, mastering the art of high-ticket sales is essential for maximizing revenue and building lasting customer relationships"
icon={faThumbsUp}/>
        

        <InformationCard
          title="LEAD GENERATION SYSTEM"
          description="Our Best Lead Generation System is designed to empower your business with the tools and strategies needed to attract and convert high-quality leads effectively. By combining targeted content marketing, advanced SEO techniques, and powerful social media campaigns, we ensure that your brand reaches the right audience at the right time."
          icon={ faPaperPlane}/>
        

        <InformationCard
          title="TEAM BUILD"
          description="

Our Best Lead Generation System for Team Building is crafted to help organizations enhance collaboration and drive results through effective strategies. By integrating personalized training sessions, interactive workshops, and innovative team-building exercises, we empower your team to work together seamlessly while generating high-quality leads."
icon={faNetworkWired}/>
        
      </div>
    </div>
  );
}

export default Info;
