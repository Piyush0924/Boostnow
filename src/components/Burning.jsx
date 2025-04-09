import React, { useState } from 'react';
import './burning.css';

const faqData = [
  {
    question: "Is the platform suitable for beginners?",
    answer: "Yes, our platform is designed to be intuitive and user-friendly, with guided onboarding and expert support at every step.",
  },
  {
    question: "How accurate are the AI insights?",
    answer: "Our AI insights are based on real-time data and refined models to deliver precise and reliable predictions.",
  },
  {
    question: "Can I integrate with my existing tools?",
    answer: "Absolutely! We offer seamless integration with many popular tools and services via APIs.",
  },
  {
    question: "What security measures do you have?",
    answer: "We use end-to-end encryption, secure cloud infrastructure, and regular audits to ensure your data is safe.",
  },
  {
    question: "How often are insights updated?",
    answer: "Insights are updated continuously in real-time based on incoming data streams and machine learning updates.",
  },
  {
    question: "What kind of support do you offer?",
    answer: "We provide 24/7 chat and email support, as well as onboarding webinars and a comprehensive help center.",
  },
];

const Burning = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="burning-wrapper">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1] opacity-5 "
      >
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>


      <section className="burning-section">
        <div className="burning-container">
          <h4 className="burning-subtitle">F A Q</h4>
          <h2 className="burning-title">
            <span className="highlight">Burning</span> Questions About <span className="highlight">BoostNowAI</span>
          </h2>
          <p className="burning-description">
            Simple answers to make things clear.
          </p>

          <div className="burning-faq">
            {faqData.map((item, index) => (
              <div
                key={index}
                className={`faq-item ${openIndex === index ? 'open' : ''}`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="faq-question">
                  {item.question}
                  <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
                </div>
                {openIndex === index && <p className="faq-answer">{item.answer}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Burning;
