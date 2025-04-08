"use client"

import { useEffect, useState } from "react"

const steps = [
  {
    step: "Step 1",
    title: "Sign up & Profile",
    desc: "Create your account with our guided setup process. Access your personalized dashboard instantly.",
    icon: "/img1.svg",
  },
  {
    step: "Step 2",
    title: "Personalisation",
    desc: "Tell us your goals and preferences. We'll customize your experience with AI-driven insights.",
    icon: "/img2.svg",
  },
  {
    step: "Step 3",
    title: "Strategy",
    desc: "Implement data-backed strategies aligned with your objectives. Optimize your performance in real-time.",
    icon: "/img3.svg",
  },
  {
    step: "Step 4",
    title: "Analyze & Scale",
    desc: "Monitor your success through clear analytics. Scale what works and optimize for growth.",
    icon: "/img4.svg",
  },
]

const HowItWorks = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [videoLoaded, setVideoLoaded] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    const onScroll = () => {
      const section = document.querySelector(".how-it-works-section")
      if (section) {
        const rect = section.getBoundingClientRect()
        if (rect.top < window.innerHeight - 100) {
          setIsVisible(true)
        }
      }
    }

    window.addEventListener("scroll", onScroll)
    onScroll()

    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <section
      className={`how-it-works-section relative py-20 overflow-hidden ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } transition-all duration-700 ease-in-out`}
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-20"
        autoPlay
        loop
        muted
        playsInline
        onLoadedData={() => setVideoLoaded(true)}
        onError={(e) => console.error("Video failed to load:", e)}
      >
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2 className="uppercase text-indigo-600 font-semibold mb-4 tracking-wide">HOW IT WORKS</h2>
        <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-indigo-600 text-transparent bg-clip-text mb-6">
          Explore Our Simple, <br className="hidden md:block" /> Easy Process
        </h3>
        <p className="max-w-2xl mx-auto text-lg text-slate-600 mb-12">
          Start with ease and watch your business thrive from the get-go with personalized guidance every step of the way.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-90 p-6 rounded-xl shadow-md backdrop-blur-sm transition-transform duration-300 hover:scale-105"
            >
              <h4 className="text-indigo-600 text-lg font-medium mb-4">{item.step}</h4>
              <div className="h-16 w-16 mx-auto mb-4">
                <img src={item.icon} alt={item.title} className="w-full h-full object-contain" />
              </div>
              <h5 className="text-xl font-semibold text-indigo-700 mb-2">{item.title}</h5>
              <p className="text-sm text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
  <p className="text-indigo-600 text-lg font-medium">
    Seamless integration with expert guidance
  </p>
  <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-base md:text-lg font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
    Connect Now
  </button>
</div>

      </div>
    </section>
  )
}

export default HowItWorks
