import React, { useState } from "react";

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
    <div className="text-center py-16 px-4 bg-inherit">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-[#8364e8] to-[#00aefd] bg-clip-text text-transparent leading-tight">
        Explore Our Plans
      </h1>
      <p className="text-gray-600 mt-4 mb-8 ml-11">
        Super flexible monthly plans and cost-effective annual subscriptions.
      </p>

      {/* Toggle */}
      <div className="flex items-center justify-center gap-4 text-lg font-bold text-gray-600 mb-10 relative">
        <span className={`${!isAnnual ? "text-blue-600" : ""}`}>Monthly</span>
        <button
          onClick={() => setIsAnnual(!isAnnual)}
          className="relative w-20 h-9 bg-gray-300 rounded-full flex items-center justify-start transition-all"
        >
          <div
            className={`w-7 h-7 bg-white rounded-full absolute top-1 left-1 transition-all ${
              isAnnual ? "translate-x-[2.5rem] bg-blue-500" : ""
            }`}
          />
          {isAnnual && (
            <span className="absolute -top-5 -right-10 text-white text-xs bg-blue-500 px-2 py-1 rounded-full">
              Save 20%
            </span>
          )}
        </button>
        <span className={`${isAnnual ? "text-blue-600" : ""}`}>Annual</span>
      </div>

      {/* Pricing Cards */}
      <div className="flex flex-wrap justify-center gap-8">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-xl shadow-md text-center min-w-[270px] transition-transform transform hover:scale-105 w-full max-w-sm"
          >
            <h3 className="text-xl font-bold text-gray-800">{plan.name}</h3>
            <ul className="mt-4 mb-6 space-y-2 text-gray-600">
              {plan.features.map((feature, i) => (
                <li key={i}>✔ {feature}</li>
              ))}
            </ul>
            <p className="text-3xl font-bold text-[#8364e8] mb-2">
              {isAnnual ? plan.annualPrice : plan.monthlyPrice}
              <span className="text-sm text-gray-500">/month</span>
            </p>
            <button className="mt-4 px-6 py-2 text-white font-bold rounded-full bg-gradient-to-r from-[#8364e8] to-[#00aefd] hover:from-[#00aefd] hover:to-[#8364e8] transition-all transform hover:scale-105 shadow-md">
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>

      {/* Trusted Companies */}
      <div className="mt-16 text-center w-full overflow-hidden">
        <span className="block text-sm font-bold text-gray-600 mb-6">
          TRUSTED BY MARKET LEADERS
        </span>
        <div className="w-[60%] mx-auto overflow-hidden whitespace-nowrap">
          <div className="flex gap-20 animate-scroll w-max">
            {[...Array(2)].map((_, dup) =>
              ["1.svg", "2.svg", "3.svg", "4.svg", "5.svg", "6.svg"].map(
                (logo, i) => (
                  <img
                    key={`${dup}-${i}`}
                    src={logo}
                    alt={`logo-${i}`}
                    className="h-8 w-auto transition-transform hover:scale-110"
                  />
                )
              )
            )}
          </div>
        </div>
      </div>

      {/* Help Section */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-16">
        <span className="text-lg font-bold text-gray-600">
          Unsure which plan to pick?
        </span>
        <button className="px-6 py-2 text-white font-bold rounded-full bg-gradient-to-r from-[#8364e8] to-[#00aefd] hover:from-[#00aefd] hover:to-[#8364e8] transition-all transform hover:scale-105 shadow-md">
          Ask Your Expert
        </button>
      </div>
    </div>
  );
};

export default PricingSection;
