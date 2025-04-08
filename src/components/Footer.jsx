import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import ScrollingBanner from "./ScrollingBanner.jsx";

const Footer = () => {
  return (
    <div>
      {/* 1. Scrolling Banner */}
      <ScrollingBanner />

      <div className="text-center mt-8 mb-[-2rem]">
  <h1 className="text-[6rem] sm:text-[8rem] lg:text-[10rem] font-extrabold text-[#7584D6] opacity-40 leading-none">
    BoostNowAI
  </h1>
</div>


      {/* 3. Footer */}
      <footer className="relative text-white pt-10 pb-0 overflow-hidden bg-[#7584D6]">
        {/* Footer Content */}
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-6 px-4 sm:px-8 lg:px-16 pb-20">
          <div className="lg:col-span-2 space-y-4">
            <p className="text-2xl font-bold">BoostNowAI</p>
            <p>BoostNowAI empowers businesses with cutting-edge AI solutions for unparalleled growth and efficiency.</p>
            <div>
              <p className="font-semibold">Phone</p>
              <p>+91 9325919149</p>
            </div>
            <div>
              <p className="font-semibold">Email Address</p>
              <p>support@boostnow.ai</p>
            </div>
            <div className="flex gap-4 mt-4 text-xl">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </div>
          </div>

          <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-x-2 gap-y-6">
            {/* ...Links Section... */}
            <div>
              <p className="mb-3 font-semibold text-white">Useful Links</p>
              <ul className="space-y-1 text-sm">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/terms">Terms of Service</Link></li>
                <li><Link to="/privacy">Privacy Policy</Link></li>
              </ul>
            </div>
            <div>
              <p className="mb-3 font-semibold text-white">ERP Services</p>
              <ul className="space-y-1 text-sm">
                <li><Link to="/services/cloud-erp">Cloud ERP Solutions</Link></li>
                <li><Link to="/services/implementation">ERP Implementation</Link></li>
                <li><Link to="/services/integrations">ERP Integrations</Link></li>
                <li><Link to="/services/support">ERP Support</Link></li>
                <li><Link to="/services/custom">Custom ERP</Link></li>
              </ul>
            </div>
            <div>
              <p className="mb-3 font-semibold text-white">Web Solutions</p>
              <ul className="space-y-1 text-sm">
                <li><Link to="/solutions/web-design">Web Design</Link></li>
                <li><Link to="/solutions/web-dev">Web Development</Link></li>
                <li><Link to="/solutions/ecommerce">E-commerce</Link></li>
                <li><Link to="/solutions/wordpress">WordPress</Link></li>
                <li><Link to="/solutions/seo">SEO Optimization</Link></li>
              </ul>
            </div>
            <div>
              <p className="mb-3 font-semibold text-white">Industry ERP</p>
              <ul className="space-y-1 text-sm">
                <li><Link to="/industry/retail">Retail ERP</Link></li>
                <li><Link to="/industry/manufacturing">Manufacturing ERP</Link></li>
                <li><Link to="/industry/healthcare">Healthcare ERP</Link></li>
                <li><Link to="/industry/education">Education ERP</Link></li>
                <li><Link to="/industry/realestate">Real Estate ERP</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm py-6 z-10 relative bg-white text-black">
          &copy; {new Date().getFullYear()} BoostNowAI. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
