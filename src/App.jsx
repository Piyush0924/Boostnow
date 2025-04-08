import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import Dashboard from './components/Dashboard.jsx';
import PerformanceSection from './components/PerformanceSection';
import Footer from './components/Footer';
import GifSection from './components/GifSection.jsx';
import IntegrationSection from './components/IntegrationSection.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import PricingSection from './components/PricingSection.jsx';
import Burning from './components/Burning.jsx';
import ReadySection from './components/ReadySection.jsx';

function App() {
  return (
    <BrowserRouter>
      <div className="relative w-full min-h-screen overflow-hidden">
        {/* Background Video (applied to all sections) */}
        <video autoPlay muted loop playsInline className="absolute top-0 left-0 w-full h-full object-cover z-[-1]">
          <source src="/assets/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-white/60 dark:bg-black/60 backdrop-blur-sm z-[-1]" />

        {/* Main Content Sections */}
        <div className="relative z-10">
          <HeroSection />
          <Dashboard />
          <GifSection />
          <HowItWorks />
          <IntegrationSection />
          <PerformanceSection />
          <PricingSection />
          <Burning />
          <ReadySection />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
