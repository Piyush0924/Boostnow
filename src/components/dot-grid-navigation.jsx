import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

export default function DotGridNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef();

  const leftLinks = [
    { name: "Features", href: "/features" },
    { name: "How it works", href: "/how-it-works" },
    { name: "Integration", href: "/integration" },
    { name: "Performance", href: "/performance" },
    { name: "Pricing", href: "/pricing" },
    { name: "FAQ", href: "/faq" },
  ];

  const rightLinks = [
    { name: "About us", href: "/about" },
    { name: "Client Insight", href: "/client-insight" },
    { name: "Journal", href: "/journal" },
    { name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    { name: "Twitter", icon: "X", href: "https://twitter.com" },
    { name: "LinkedIn", icon: "in", href: "https://linkedin.com" },
    { name: "Instagram", icon: "ig", href: "https://instagram.com" },
  ];

  // Close modal when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative z-50">
      {/* Dot Grid Button */}
      <div
        className="flex flex-col gap-1 cursor-pointer ml-4 mt-2"
        onClick={() => setIsOpen(true)}
        onMouseEnter={() => setIsOpen(true)}
      >
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex gap-1">
            {[...Array(3)].map((_, j) => (
              <div
                key={j}
                className="w-2 h-2 rounded-full bg-[#7584D6] transition-all duration-300 hover:scale-125"
              />
            ))}
          </div>
        ))}
      </div>

      {/* Center Modal Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              ref={modalRef}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.3 }}
              className="relative w-[30rem] h-[30rem] bg-white shadow-xl rounded-2xl p-6 overflow-y-auto"
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-4">
                <div className="text-xl font-bold text-[#7584D6]">BoostNowAI</div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Grid Links */}
              <div className="grid grid-cols-2">
                <div>
                  {leftLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
                <div>
                  {rightLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <div className="flex justify-center gap-4 mb-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-600 transition-colors"
                    >
                      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-700">
                        <span className="text-sm font-semibold">
                          {link.icon}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>

                <div className="flex justify-center">
                  <button className="bg-[#7584D6] hover:bg-[#5a68c0] text-white font-medium px-6 py-2 rounded-full transition-colors">
                    Book a Call
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
