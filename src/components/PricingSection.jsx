import React, { useState } from "react";
import "./PricingSection.css";

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const pricingPlans = [
    {
      name: "Essential",
      features: [
        "Core Analytics",
        "Limited Campaigns",
        "Community Access",
        "Standard Support",
      ],
      monthlyPrice: "$29",
      annualPrice: "$232",
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
    <div className="py-16 px-6 bg-transparent text-center">
      {/* Heading */}
      <h1 className="text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#8364e8] to-[#00aefd]">
        Explore Our Plans
      </h1>

      {/* Subheading */}
      <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
        Super flexible monthly plans and cost-effective annual subscriptions.
      </p>

      {/* Toggle Switch */}
      <div className="flex items-center justify-center gap-4 mb-10">
        <span className={!isAnnual ? "font-semibold" : "text-gray-500"}>
          Monthly
        </span>
        <button
          onClick={() => setIsAnnual(!isAnnual)}
          className="relative inline-flex items-center h-6 w-12 bg-gray-300 rounded-full transition"
        >
          <span
            className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transition-transform ${
              isAnnual ? "translate-x-6" : "translate-x-0"
            }`}
          ></span>
        </button>
        <span className={isAnnual ? "font-semibold" : "text-gray-500"}>
          Annual <span className="text-xs text-green-600">(Save 20%)</span>
        </span>
      </div>

      {/* Pricing Cards */}
      <div className="flex flex-wrap justify-center gap-8 px-4 py-10">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className="w-full max-w-sm h-[440px] flex flex-col justify-between items-center bg-white/40 border border-gray-200 backdrop-blur-md p-6 rounded-2xl shadow-lg text-center text-gray-800 transition-all duration-300 transform hover:scale-105"
          >
            {/* Top Section */}
            <div className="flex-1 flex flex-col items-center">
              <h3 className="text-2xl font-semibold mb-4 text-[#1e1e1e]">
                {plan.name}
              </h3>
              <ul className="space-y-2 text-gray-700 text-left">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-green-500">✔</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Section */}
            <div className="mt-6 flex flex-col items-center">
              <div className="relative inline-block mb-3 text-3xl font-bold text-[#8364e8]">
                {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                <span className="text-sm text-gray-500">/month</span>
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#8364e8]/50" />
              </div>
              <button className="mt-2 px-6 py-2 text-white font-semibold rounded-full bg-gradient-to-r from-[#8364e8] to-[#00aefd] hover:from-[#00aefd] hover:to-[#8364e8] transition-all duration-300 shadow-md">
                {plan.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Trusted Companies */}
      <div className="mt-16">
        <span className="text-gray-500 uppercase text-xs tracking-wide block mb-4">
          Trusted by Market Leaders
        </span>

        <div className="overflow-">
          <div className="flex animate-slide gap-10 items-center w-max whitespace-nowrap">
            {[1, 2, 3, 4, 5, 6, ].map((num, i) => (
              <img
                key={i}
                src={`${num}.svg`}
                alt={`company-${num}`}
                className="h-10 object-contain"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Help Section */}
      <div className="mt-12">
        <p className="text-lg font-medium mb-2">
          Unsure which plan to pick?
        </p>
        {/* Additional help UI can go here */}
      </div>
    </div>
  );
};

export default PricingSection;