// src/components/ScrollingBanner.jsx

const StarIcon = ({ className = "w-5 h-5" }) => (
    <svg
      className={`fill-[#7584D6] ${className}`}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
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
      <div className="relative overflow-hidden">
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
        <div className="py-3 border-y border-gray-200 bg-white/70 backdrop-blur-sm relative z-10">
          <div className="whitespace-nowrap flex items-center gap-12 animate-scroll-left">
            {items.map((item, index) => (
              <div key={index} className="flex items-center gap-2 px-4">
                <StarIcon className="w-5 h-5 animate-scale-rotate" />
                <span className="text-[#7584D6] font-semibold text-sm sm:text-base">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
  
        {/* Brand name at the bottom */}
        {/* <div className="text-center py-6 relative z-10">
          <h2 className="text-9xl text-[#7584D6] font-bold opacity-70 tracking-wide">
            BoostNowAi
          </h2>
        </div> */}
      </div>
    );
  };
  
  export default ScrollingBanner;
  