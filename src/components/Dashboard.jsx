import React, { useEffect, useState } from "react";
import "./Dashboard.css";

const Dashboard = () => {
  const [rotateX, setRotateX] = useState(90); // Start flipped down

  useEffect(() => {
    const handleScroll = () => {
      const imageWrapper = document.querySelector(".dashboard-image-wrapper");
      if (imageWrapper) {
        const rect = imageWrapper.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Adjusted progress calculation so flipping starts earlier
        const progress = Math.min(
          Math.max((windowHeight - rect.top) / windowHeight, 0),
          1
        );

        // Flip earlier (start from 90° and reach 0° sooner)
        setRotateX(90 - progress * 90);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
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
  );
};

export default Dashboard;
