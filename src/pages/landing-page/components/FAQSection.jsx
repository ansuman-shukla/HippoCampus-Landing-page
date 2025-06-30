import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqs = [
    {
      id: 1,
      category: "Privacy & Security",
      question: "How secure is my data with HippoCampus?",
      answer: `Your data security is our top priority. We use enterprise-grade encryption (AES-256) for all data at rest and in transit. All processing happens locally on your device when possible, and we never sell or share your personal information.\n\nWe're SOC 2 Type II compliant and GDPR ready. You maintain full ownership of your data and can export or delete it at any time. Our privacy-first approach means we only collect what's necessary to provide the service.`
    },
    {
      id: 2,
      category: "AI & Search",
      question: "How does the AI semantic search actually work?",
      answer: `Our AI uses advanced natural language processing to understand the meaning and context of your content, not just keywords. When you save an article, we create a semantic fingerprint that captures the core concepts, relationships, and context.\n\nWhen you search using natural language like "that study about remote work productivity," our AI matches your intent with the semantic meaning of your saved content. This allows for much more intuitive and accurate search results compared to traditional keyword matching.`
    },
    {
      id: 3,
      category: "Usage & Limits",
      question: "What counts as a \'save\' in the free plan?",
      answer: `Each piece of content you save counts as one save - whether it's a web article, PDF, note, or document. The free plan includes 100 saves per month, which resets on your billing date.\n\nSearches are unlimited on all plans. If you exceed your save limit, you can still search your existing content but won't be able to save new items until the next month or until you upgrade to a paid plan.`
    },
    {
      id: 4,
      category: "Browser Extension",
      question: "Which browsers support the HippoCampus extension?",
      answer: `We support all major browsers:\n• Chrome (recommended)\n• Firefox\n• Safari\n• Microsoft Edge\n• Brave\n\nThe extension works on both desktop and mobile versions where extensions are supported. We're constantly updating to ensure compatibility with the latest browser versions and security standards.`
    },
    {
      id: 5,
      category: "Collaboration",
      question: "Can I share my saved content with team members?",
      answer: `Yes! Team plans include collaborative workspaces where you can:\n• Share knowledge bases with team members\n• Create collaborative research projects\n• Set permissions for viewing and editing\n• Track team activity and contributions\n\nIndividual Professional plans can share individual items via secure links, but full collaboration features require a Team plan.`
    },
    {
      id: 6,
      category: "Data Export",
      question: "Can I export my data if I want to leave?",
      answer: `Absolutely. We believe in data portability and never want to lock you in. You can export all your data at any time in multiple formats:\n• JSON for technical users\n• CSV for spreadsheet applications\n• HTML for web viewing\n• PDF for archival purposes\n\nExports include all your saved content, tags, notes, and metadata. The process is instant for most accounts and takes just a few minutes for large datasets.`
    },
    {
      id: 7,
      category: "Billing & Cancellation",
      question: "How does the free trial work? Can I cancel anytime?",
      answer: `Our 14-day free trial gives you full access to Professional features with no credit card required. You can upgrade during or after the trial period.\n\nYou can cancel your subscription at any time with no penalties or fees. Your account will remain active until the end of your current billing period, and you'll retain access to all your data. After cancellation, you can still access your content in read-only mode.`
    },
    {
      id: 8,
      category: "Technical Support",
      question: "What kind of support do you provide?",
      answer: `Support varies by plan:\n• Free: Email support with 48-hour response time\n• Professional: Priority email support with 24-hour response\n• Team: Dedicated support with phone/video calls and 4-hour response time\n\nAll plans include access to our comprehensive help center, video tutorials, and community forum. We also offer onboarding assistance for Team plan customers.`
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
            Frequently Asked
            <span className="block text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">
              Questions
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