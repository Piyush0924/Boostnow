
import { Calendar, Rocket } from "lucide-react"
import { motion } from "framer-motion"
import DotGridNavigation from "./dot-grid-navigation"

export default function HeroSection() {
  const logos = [
    "VjmsqHeWTpcOeQ1me9Gtc9adLE",
    "bcIHofRAGz07Cl47alk4eZweX78",
    "KM1Q6ZA4hUHuWvz4cOZsQI9v0",
    "RZk0FOpNrZ9xFwKUFoQlbL1alzE",
    "LNsbmxTCNLUk4k4J45n8VhPQeWY",
    "1ehZ5pYQJiXu4sArrnMFIo21CAU",
  ]

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background Video */}
      <video autoPlay muted loop playsInline className="absolute top-0 left-0 w-full h-full object-cover z-[-1]">
        <source src="/assets/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/60 dark:bg-black/60 backdrop-blur-sm z-0" />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-4xl mx-auto">
          {/* Header */}
          <div className="bg-white dark:bg-slate-800 rounded-full shadow-md p-4 mb-16 flex justify-between items-center">
            <div className="flex items-center ml-8 gap-2">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-[#8c6c9d] to-[#7584D6] bg-clip-text text-transparent ml-24">
                BoostNowAI
              </h1>
            </div>
            <div className="flex items-center gap-3">
              <DotGridNavigation />
            </div>
            <div className="bg-[#7584D6] text-white p-4 rounded-full mr-36">
              <Calendar className="w-6 h-6" />
            </div>
          </div>

          {/* Badge */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-full shadow-sm overflow-hidden flex">
              <div className="flex overflow-hidden rounded-full shadow-md border border-blue-200">
                <div className="bg-[#7584D6] text-white px-4 py-2 flex items-center gap-2 transition-transform duration-300 hover:scale-105">
                  <Rocket className="w-5 h-5" />
                  <span className="font-semibold">12K+</span>
                </div>
                <div className="bg-white px-4 py-2 text-[#7584D6] font-medium transition-colors duration-300 hover:bg-blue-50">
                  GROWING BUSINESSES
                </div>
              </div>
            </div>
          </div>

          {/* Headings */}
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-700 dark:text-white flex flex-wrap justify-center items-center gap-2">
              <span className="flex items-center">
                <img
                  src="https://framerusercontent.com/images/7zkhvw6Vmrv74YJUJLtLkVm8Q.svg"
                  alt="A"
                  className="h-[0.8em] w-auto object-contain inline-block"
                />
                mplify
              </span>
              <span className="text-[#7584D6]">your growth</span>
            </h1>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-700 dark:text-white flex items-center justify-center flex-wrap gap-4">
              <span>with</span>
              <span className="bg-white dark:bg-slate-900 rounded-full px-8 py-2 border-2 border-blue-200 inline-flex items-center space-x-2">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#a87fcb] to-[#7584D6] animate-pulse">
                  Smart
                </span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8562a1] to-[#7584D6] animate-pulse">
                  AI
                </span>
              </span>
              <span>insights</span>
            </h1>
          </div>

          {/* Subheading */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300">
              You are just one click away from transforming your business with powerful analytics support.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#7584D6] hover:bg-[#8d95c2] text-white font-medium px-8 py-4 rounded-full text-lg transition-colors">
              Start Free Trial
            </button>
            <button className="bg-white hover:bg-gray-50 text-[#7584D6] font-medium px-8 py-4 rounded-full text-lg shadow-sm transition-colors border border-[#7584D6]">
              How it Works
            </button>
          </div>

          {/* Scrolling Logos */}
          <section className="py-12 overflow-hidden">
            <h6 className="mb-8 tracking-widest text-center text-sm font-semibold text-gray-500 dark:text-gray-400">
              GROWING PARTNERSHIPS AROUND THE WORLD
            </h6>
            <div className="relative w-full overflow-hidden">
              <motion.div
                className="flex gap-10"
                animate={{ x: ["0%", "-100%"] }}
                transition={{
                  duration: 20,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                {[...logos, ...logos].map((id, index) => (
                  <img
                    key={index}
                    src={`https://framerusercontent.com/images/${id}.svg`}
                    alt={`Logo ${index}`}
                    className="h-10 w-auto object-contain"
                  />
                ))}
              </motion.div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

