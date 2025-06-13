import React, { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How does image detection technology work?",
      answer:
        "Our image detection technology uses advanced AI algorithms to analyze visual patterns, metadata, and inconsistencies that are typically present in manipulated or AI-generated images. The system compares the submitted image against known patterns of authentic and fake images to determine its likelihood of being manipulated.",
    },
    {
      question: "Is the detection process secure and private?",
      answer:
        "Yes, all uploaded images are processed securely and never stored without user consent. Our system ensures user privacy by automatically deleting images after analysis, unless the user explicitly opts to save them for reports or further review.",
    },
    {
      question: "What types of image manipulation can be detected?",
      answer:
        "Our system can detect various types of manipulations including AI-generated images (from models like DALL-E, Midjourney, Stable Diffusion), face swaps, object additions/removals, and other digital alterations. The technology is constantly improving to detect increasingly sophisticated manipulations.",
    },
    {
      question: "What's the success rate of detection?",
      answer:
        "Our current detection accuracy exceeds 95% for most common types of image manipulations. However, as AI technology evolves, we continuously update our models to maintain high accuracy rates against new generation techniques.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-6 md:py-16 text-white">
      <div className="container mx-auto px-10 md:px-16 xl:px-24 max-w-6xl">
        <div className="text-center text-white mb-8 md:mb-14">
          <h2 className="text-section-title xl:text-section-title-xl mb-3">
            Frequently Asked <span className="text-xpose-green">Questions</span>
          </h2>
          <p className="text-xpose-text-secondary text-base xl:text-[20px] leading-5 md:leading-10">
            Learn more about how our AI-powered platform helps you detect fake
            images — safely, quickly, and confidently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-lg h-fit overflow-hidden bg-gradient-to-br from-[#0B253D] to-[#070B0E]"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-medium text-xpose-text-primary">
                  {faq.question}
                </span>
                <span className="text-xpose-green text-xl">
                  {openIndex === index ? "×" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-xpose-text-secondary">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
