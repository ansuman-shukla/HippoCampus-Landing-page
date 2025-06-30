import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqs = [
    {
      id: 1,
      category: "Product",
      question: "How is this different from bookmarks or Notion?",
      answer: "Bookmarks are just links in folders. Notion requires manual organization. HippoCampus understands what you saved and why it matters, so you can find things the way your brain actually works—by describing what you want, not where you filed it."
    },
    {
      id: 2,
      category: "Features",
      question: "What can I actually save?",
      answer: "Anything online! TikTok videos, Instagram posts, Amazon products, job listings, Twitter threads, articles, recipes—if you can see it in your browser, you can save it."
    },
    {
      id: 3,
      category: "Security",
      question: "Is my stuff private and secure?",
      answer: "100%. Your saves are yours alone. We use bank-level encryption and never share your data. Many Fortune 500 companies trust us with their teams' research."
    },
    {
      id: 4,
      category: "Organization",
      question: "Do I have to organize everything myself?",
      answer: "Nope! That's the whole point. Our AI organizes and connects things automatically. You just save and search—no folders, no tags, no busywork."
    }
  ];

  const categories = [...new Set(faqs.map(faq => faq.category))];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-background-secondary to-background">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-text-primary mb-6">
            Questions? We've Got
            <span className="block text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">
              Answers.
            </span>
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto font-inter leading-relaxed">
            Everything you need to know about HippoCampus. Can't find what you're looking for? Contact our support team.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category, index) => (
            <div
              key={index}
              className="px-4 py-2 glassmorphism rounded-full"
            >
              <span className="text-sm font-inter text-text-secondary">{category}</span>
            </div>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className="glassmorphism rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between glassmorphism-hover transition-glassmorphism"
                aria-expanded={openFAQ === index}
                aria-controls={`faq-answer-${faq.id}`}
              >
                <div className="flex-1 pr-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="px-3 py-1 bg-primary-50 text-primary text-xs rounded-full font-inter">
                      {faq.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-poppins font-semibold text-text-primary">
                    {faq.question}
                  </h3>
                </div>
                <div className={`transition-transform duration-300 ${
                  openFAQ === index ? 'transform rotate-180' : ''
                }`}>
                  <Icon name="ChevronDown" size={24} color="var(--color-text-secondary)" />
                </div>
              </button>

              {/* Answer */}
              <div
                id={`faq-answer-${faq.id}`}
                className={`overflow-hidden transition-all duration-300 ${
                  openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6">
                  <div className="pt-4 border-t border-border">
                    <div className="prose prose-sm max-w-none">
                      {faq.answer.split('\n').map((paragraph, pIndex) => (
                        <p key={pIndex} className="text-text-secondary font-inter leading-relaxed mb-3 last:mb-0">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;