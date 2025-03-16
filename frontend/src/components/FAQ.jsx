import React, { useState } from "react";
import "../style/FAQ.css"; // Import custom styles

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // FAQ data
  const faqs = [
    { question: "Am I required to subscribe?", answer: "No, subscription is optional, but it provides benefits like real-time alerts." },
    { question: "Should you buy this stock?", answer: "It depends on your financial goals and market research." },
    { question: "Does an IPO guarantee gains?", answer: "No, stock performance depends on market conditions and company valuation." },
    { question: "What is a stock draft?", answer: "A stock draft is the process where shares are allocated before official trading starts." },
    { question: "How much money do I need to buy stocks?", answer: "It varies based on stock price and brokerage fees." },
    { question: "How do I sell and withdraw funds?", answer: "You can sell through your brokerage account and transfer funds to your bank." },
    { question: "Who decides the IPO price?", answer: "The company and underwriters determine the IPO price based on valuation." },
    { question: "What are pre-IPO shares?", answer: "Pre-IPO shares are stocks sold to private investors before public listing." },
    { question: "How many lots can I apply for in an IPO?", answer: "It depends on the company's allotment criteria." }
  ];

  // Toggle function
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container my-5 ">
      <h2 className="text-start pd-20 mb-1">Frequently Asked Questions?</h2>
      <p>Find answers to common questions that come in your mind related to IPO.</p>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <button className="faq-question btn btn-light w-100 text-start" onClick={() => toggleFAQ(index)}>
              {faq.question}
              <span className="float-end">{activeIndex === index ? "−" : "+"}</span>
            </button>
            {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
