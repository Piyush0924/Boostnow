import React from "react";
import "./GifSection.css";

const gifs = [
  "/gif1.gif",
  "/gif2.gif",
  "/gif3.gif",
  "/gif4.gif",
  "/gif5.gif",
  "/gif6.gif",
];

const GifSection = () => {
  return (
    <div className="gif-wrapper">
      {/* Background Video */}
      <video className="background-video" autoPlay loop muted>
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="gif-section">
        <div className="gif-grid">
          {gifs.map((gif, index) => (
            <div key={index} className="gif-item">
              <img src={gif} alt={`GIF ${index + 1}`} className="gif-image" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GifSection;
