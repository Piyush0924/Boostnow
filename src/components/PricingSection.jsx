import React, { useState } from "react";
import "./PricingSection.css";

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  // Pricing Data
  const pricingPlans = [
    {
      name: "Essential",
      features: ["Core Analytics", "Limited Campaigns", "Community Access", "Standard Support"],
      monthlyPrice: "$29",
      annualPrice: "$232", // 20% Discount
      buttonText: "Purchase",
    },
    {
      name: "Advanced",
      features: [
        "All Essential Features",
        "Unlimited Campaigns",
        "Advanced AI Predictions",
        "Priority Support",
        "Team Collaboration Tools",
      ],
      monthlyPrice: "$79",
      annualPrice: "$632",
      buttonText: "Purchase",
    },
    {
      name: "Enterprise",
      features: [
        "All Advanced Features",
        "Custom AI Models",
        "API Access",
        "Advanced Integrations",
        "24/7 Priority Support",
        "Training Sessions",
      ],
      monthlyPrice: "$199",
      annualPrice: "$1592",
      buttonText: "Contact Sales",
    },
  ];

  return (
    <div className="pricing-section">
      <h1 className="pricing-title">Explore Our Plans</h1>
      <p className="pricing-subtitle">
        Super flexible monthly plans and cost-effective annual subscriptions.
      </p>

      {/* Toggle Button */}
      <div className="toggle-container">
        <span className={!isAnnual ? "active" : ""}>Monthly</span>
        <button onClick={() => setIsAnnual(!isAnnual)} className="toggle-button">
          <div className={`toggle-circle ${isAnnual ? "active" : ""}`}></div>
          {isAnnual && <span className="discount-badge">Save 20%</span>}
        </button>
        <span className={isAnnual ? "active" : ""}>Annual</span>
      </div>

      {/* Pricing Cards */}
      <div className="pricing-cards">
        {pricingPlans.map((plan, index) => (
          <div key={index} className="pricing-card">
            <h3 className="plan-name">{plan.name}</h3>
            <ul className="plan-features">
              {plan.features.map((feature, i) => (
                <li key={i}>✔ {feature}</li>
              ))}
            </ul>
            <p className="plan-price">{isAnnual ? plan.annualPrice : plan.monthlyPrice}<span>/month</span></p>
            <button className="purchase-btn">{plan.buttonText}</button>
          </div>
        ))}
      </div>

      {/* Trusted Companies */}
      <div className="trusted-companies">
      <span>TRUSTED BY MARKET LEADERS</span>
      <div className="logo-slider">
        <div className="company-logos">
          <img src="1.svg" />
          <img src="2.svg" />
          <img src="3.svg" />
          <img src="4.svg" />
          <img src="5.svg" />
          <img src="6.svg" />
          {/* <!-- Duplicate for seamless looping --> */}
          <img src="1.svg" />
          <img src="2.svg" />
          <img src="3.svg" />
          <img src="4.svg" />
          <img src="5.svg" />
          <img src="6.svg" />
        </div>
      </div>
    </div>

    <div className="plan-help">
      <span className="plan-question">Unsure which plan to pick?</span>
      <button className="expert-button">Ask Your Expert</button>
    </div>



    </div>
  );
};

export default PricingSection;
