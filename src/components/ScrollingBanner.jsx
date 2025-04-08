const StarIcon = ({ className = "w-6 h-6" }) => (
  <svg
    className={`fill-[#7584D6] ${className}`}
    viewBox="0 0 24 24"
  >
    <path d="M12 2L14.95 8.54L22 9.36L17 14.46L18.49 21.5L12 18L5.51 21.5L7 14.46L2 9.36L9.05 8.54L12 2Z" />
  </svg>
);

const ScrollingBanner = () => {
  const items = [
    "98% Success Rate",
    "Predictive Analysis",
    "Business Growth",
    "Smart Automation",
    "Strategic Planning",
    "AI-Driven Insights",
    "Cost Optimization",
  ];

  return (
    <div className="relative overflow-hidden h-[10px] sm:h-[100px] lg:h-[100px]">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src="/assets/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Scrolling Banner */}
      <div className="py-6 border-y border-gray-300 bg-white/60 backdrop-blur-md relative z-10">
        <div className="whitespace-nowrap flex items-center gap-20 animate-scroll-left px-6">
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-3 px-6">
              <StarIcon className="w-6 h-6 animate-scale-rotate" />
              <span className="text-[#4c5ac1] font-bold text-lg sm:text-xl tracking-wide">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollingBanner;
