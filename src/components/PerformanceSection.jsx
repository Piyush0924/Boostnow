export default function PerformanceSection() {
  const stats = [
    ["Campaigns Launched", "6K+"],
    ["Active Platform Users", "34K"],
    ["AI Insights Generated", "200K"],
    ["Global Engagement", "180K"],
    ["Customer Satisfaction", "92%"],
    ["Strategic Solutions", "36K"],
  ];

  return (
    <section className="w-full h-screen py-16 bg-gradient-to-br from-white to-blue-50/50 overflow-hidden relative">
     <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1] "
      >
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>



      <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row">
        {/* Section Label */}
       

        {/* Middle Content */}
        <div className="lg:w-1/2 ml-64">
          <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 to-indigo-900 bg-clip-text text-transparent">
              Our Milestones,
            </span>
            <br />
            <span className="bg-gradient-to-tr from-cyan-400 to-indigo-900 bg-clip-text text-transparent">
              your Advantage
            </span>
          </h3>

          <p className="text-gray-600 max-w-2xl text-lg mb-12">
            Driving measurable growth worldwide with every campaign launched, user supported, and AI-driven solution delivered.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {stats.map(([title, value], i) => {
              const number = value.replace(/[^\d]/g, "");
              const suffix = value.replace(/[\d]/g, "");
              return (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-500 relative group overflow-hidden"
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(circle at center, rgba(99,102,241,0.2), transparent 70%)",
                    }}
                  ></div>

                  <h5 className="text-gray-500 font-medium mb-2 relative z-10">
                    {title}
                  </h5>
                  <div className="relative z-10 flex items-end gap-1">
                    <span className="text-4xl font-bold text-indigo-800 leading-none">
                      {number}
                    </span>
                    <span className="text-3xl font-semibold text-indigo-700">
                      {suffix}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-12 flex flex-col md:flex-row items-start md:items-center gap-4">
            <p className="text-gray-600 max-w-md">
              Experience our analytics engine and see how we shape businesses worldwide.
            </p>
            <button className="rounded-full w-full max-w-xs px-6 py-2 bg-[#7584D6] hover:bg-indigo-400 text-white transition-colors font-medium text-center break-words">
              Analytics Demo
            </button>
          </div>
        </div>

        {/* Right Spacer */}
        <div className="lg:w-1/4 hidden lg:block"></div>
      </div>
    </section>
  );
}
