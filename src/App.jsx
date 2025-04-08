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
import ReadySection from './components/ReadySection.jsx'

function App() {
  return (
    <BrowserRouter>
      <div className="relative w-full min-h-screen overflow-hidden">
        {/* Content Sections */}
        <HeroSection />
        <Dashboard />
        <GifSection />
        <HowItWorks/>
        <IntegrationSection />
        <PerformanceSection />
        <PricingSection />
        <Burning />
        <ReadySection/>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
