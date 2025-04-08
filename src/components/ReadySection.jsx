import React from "react";
import "./ReadySection.css";

const ReadySection = () => {
  return (
    <section className="ready-section">
      <div className="overlay">
        <div className="graphic-elements">
          <img
            src="/assets/chat-card.png"
            alt="Floating chat card illustration"
            className="graphic"
            loading="lazy"
          />
          <img
            src="/assets/chat-icon.png"
            alt="Chat icon illustration"
            className="icon"
            loading="lazy"
          />
        </div>

        <h1>Ready? Let’s Talk!</h1>

        <p>
          Get expert insights and answers tailored to your business<br />
          requirements and transformation.
        </p>

        <div className="cta-buttons">
          <button className="book-call">Book a Call</button>
          <span className="availability">2 spots available</span>
        </div>
      </div>
    </section>
  );
};

export default ReadySection;
