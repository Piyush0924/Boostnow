import React, { useEffect, useState } from "react";
import "./Dashboard.css";

const Dashboard = () => {
  const [rotateX, setRotateX] = useState(90);

  useEffect(() => {
    const handleScroll = () => {
      const imageWrapper = document.querySelector(".dashboard-image-wrapper");
      if (imageWrapper) {
        const rect = imageWrapper.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const progress = Math.min(
          Math.max((windowHeight - rect.top) / windowHeight, 0),
          1
        );
        setRotateX(90 - progress * 90);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app-wrapper">
      {/* Background Video */}
      <video className="background-video" autoPlay loop muted>
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="page-content">
        <div className="dashboard-container">
          <h1 className="dashboard-title">BoostNow Sample Dashboard</h1>
          <div
            className="dashboard-image-wrapper"
            style={{
              transform: `perspective(800px) rotateX(${rotateX}deg)`,
            }}
          >
            <img src="/image.png" alt="Dashboard" className="dashboard-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
