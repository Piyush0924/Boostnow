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
      <div className="overflow-hidden relative px-3 mt-5">
  <div className="flex gap-10 animate-scroll-logos whitespace-nowrap">
    {[1, 2, 3, 4, 5, 6].map((num) => (
      <img
        key={num}
        src={`${num}.svg`}
        alt={`company-${num}`}
        className="h-10 object-contain"
      />
    ))}
  </div>
</div>

    </div>
  );
};

export default ScrollingBanner;
