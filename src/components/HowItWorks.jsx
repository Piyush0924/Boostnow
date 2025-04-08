"use client"

import { useEffect, useState } from "react"
import "./HowItWorks.css"

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
    // Set visible immediately for initial render
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
    // Trigger once to check initial position
    onScroll()

    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <section className={`how-it-works-section ${isVisible ? "visible" : "hidden"}`}>
      {/* Background video with event handlers to track loading */}
      <video
  className="background-video"
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

      <div className="how-it-works-container">
        <h2 className="how-it-works-title">
          <span>Explore</span> Our Simple,
          <br /> Easy Process
        </h2>
        <p className="how-it-works-subtitle">
          Start with ease and watch your business thrive from the get-go with personalized guidance every step of the
          way
        </p>

        <div className="how-it-works-steps">
          {steps.map((item, index) => (
            <div key={index} className="how-it-works-card">
              <div className="step-number">{item.step}</div>
              <div className="icon-wrapper">
                <img src={item.icon || "/placeholder.svg"} alt={item.title} className="step-icon" />
              </div>
              <h3 className="step-title">{item.title}</h3>
              <p className="step-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks;

