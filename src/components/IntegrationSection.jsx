import React from "react";
import "./IntegrationSection.css";

const IntegrationSection = () => {
  return (
    <div className="integration-section">
      <div className="integration-container">
      {/* Left Side Gradient Text */}
      <div className="integration-label">Integration</div>

      {/* Main Integration Content */}
      <div className="integration-content">
        <h1>
          <span className="highlight">Powerful Integrations</span>
          <br />
          <span className="highlight">Made Simple</span>
        </h1>
        
        <p>
          Integrate your favorite platforms into one powerful ecosystem, enabling seamless 
          collaboration and enhanced efficiency.
        </p>
      </div>
    </div>


      <div className="integration-grid">
        <div className="integration-item analytics-module">
          <img src="/pic1.png" />
        </div>

        <div className="integration-item">
          <img src="/pic2.png" />
          <img src="/pic3.png" />
          {/* <h3>AI Model 3</h3> */}
        </div>

        <div className="integration-item integration-gif">
          <img src="/gif7.gif" />
          <img src="/pic4.png" />
          {/* <h3>Integration Templates</h3> */}
        </div>


        
      </div>

    <div class="platform-container">
    <p class="platform-text">Your favorite platforms are ready to be connected.</p>
    <div class="platform-grid">
        <div class="platform-icon"><img src="pic11.png"/></div>
        <div class="platform-icon"><img src="pic12.png" /></div>
        <div class="platform-icon"><img src="pic13.png" /></div>
        <div class="platform-icon"><img src="pic14.png" /></div>
        <div class="platform-icon"><img src="pic15.png" /></div>
        <div class="platform-icon"><img src="pic16.png" /></div>
        <div class="platform-icon"><img src="pic17.png" /></div>
        <div class="platform-icon"><img src="pic18.png" /></div>
    </div>
    </div>

    <div class="support-section">
      <p class="support-text">
        Receive assistance from our integration <br/> specialists
      </p>
      <button class="support-button">Instant Support</button>
    </div>

    </div>
  );
};

export default IntegrationSection;
