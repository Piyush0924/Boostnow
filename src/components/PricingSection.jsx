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
    <div className="relative w-full text-center py-16 px-4 overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1] "
      >
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Headings */}
      <h1 className="text-4xl font-bold bg-gradient-to-r from-[#8364e8] to-[#00aefd] bg-clip-text text-transparent leading-tight">
        Explore Our Plans
      </h1>
      <p className="text-gray-800 text-xl mt-4 mb-12 font-medium max-w-xl mx-auto">
        Super flexible monthly plans and cost-effective annual subscriptions.
      </p>

      {/* Toggle Switch */}
      <div className="flex items-center justify-center gap-4 text-lg font-bold text-gray-800 mb-10 relative">
        <span className={`${!isAnnual ? "text-blue-400" : ""}`}>Monthly</span>
        <button
          onClick={() => setIsAnnual(!isAnnual)}
          className="relative w-20 h-9 bg-gray-100 rounded-full flex items-center justify-start transition-all"
        >
          <div
            className={`w-7 h-7 bg-white rounded-full absolute top-1 left-1 transition-all ${
              isAnnual ? "translate-x-[2.5rem] bg-blue-500" : ""
            }`}
          />
          {isAnnual && (
            <span className="absolute -top-5 -right-10 text-gray-400 text-xs bg-blue-600 px-2 py-1 rounded-full">
              Save 20%
            </span>
          )}
        </button>
        <span className={`${isAnnual ? "text-blue-400" : ""}`}>Annual</span>
      </div>

      {/* Pricing Cards */}
     {/* Pricing Cards */}
<div className="flex flex-wrap justify-center gap-8">
  {pricingPlans.map((plan, index) => (
    <div
      key={index}
      className="text-gray-800 border border-gray-300 backdrop-blur-md p-6 rounded-xl shadow-md text-center min-w-[270px] transition-transform transform hover:scale-105 w-full max-w-sm h-[400px] flex flex-col justify-between bg-white/40"
    >
      {/* Top 70%: Title & Features */}
      <div className="flex-1">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-800">{plan.name}</h3>

        {/* Features */}
        <div className="mt-4 space-y-2 text-gray-800">
          <ul>
            {plan.features.map((feature, i) => (
              <li key={i}>✔ {feature}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom 30%: Price & Button */}
      <div className="mt-5">
        {/* Pricing */}
        <div className="text-3xl font-bold text-[#8364e8] mb-1">
          {isAnnual ? plan.annualPrice : plan.monthlyPrice}
          <span className="text-sm text-gray-500">/month</span>
        </div>

        {/* Button */}
        <button className="mt-2 px-6 py-2 text-gray-800 font-bold rounded-full bg-gradient-to-r from-[#8364e8] to-[#00aefd] hover:from-[#00aefd] hover:to-[#8364e8] transition-all transform hover:scale-105 shadow-md">
          {plan.buttonText}
        </button>
      </div>
    </div>
  ))}
</div>



      {/* Trusted Companies */}
      <div className="mt-20 text-center w-full overflow-hidden">
        <span className="block text-sm font-bold text-slate-800 mb-6 tracking-widest">
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
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-20">
        <span className="text-lg font-bold text-slate-800">
          Unsure which plan to pick?
        </span>
        <button className="px-6 py-2 text-slate-800 font-bold rounded-full bg-gradient-to-r from-[#8364e8] to-[#00aefd] hover:from-[#00aefd] hover:to-[#8364e8] transition-all transform hover:scale-105 shadow-md">
          Ask Your Expert
        </button>
      </div>
    </div>
  );
};

export default PricingSection;
