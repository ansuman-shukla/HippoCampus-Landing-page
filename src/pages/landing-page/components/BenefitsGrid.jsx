import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const BenefitsGrid = () => {
  const [activeBenefit, setActiveBenefit] = useState(0);
  const [flippedCards, setFlippedCards] = useState(new Set());

  const handleCardClick = (index) => {
    setActiveBenefit(index);
    setFlippedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const benefits = [
    {
      id: 1,
      title: "Save Anything, Instantly",
      subtitle: "One-click capture from anywhere",
      description: "See something cool? One click saves it—whether it's a TikTok hack, Amazon product, job posting, or Twitter thread. Context included.",
      icon: "Download",
      color: "from-primary to-secondary",
      features: [
        "Save from any website or app",
        "TikTok, Instagram, Twitter threads",
        "Amazon products, job postings",
        "Full context automatically captured"
      ],
      demo: {
        type: "extension",
        visual: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop",
        title: "One-Click Save Extension",
        description: "Save anything from any website with just one click. Our browser extension works seamlessly across all platforms."
      }
    },
    {
      id: 2,
      title: "Find Everything, Naturally",
      subtitle: "Natural language search",
      description: "Ask for what you want in plain English: \"that workout routine for small apartments\" or \"the productivity tool from last month's newsletter.\"",
      icon: "Search",
      color: "from-accent to-warning",
      features: [
        "Plain English search queries",
        "Find by description, not keywords",
        "Search across all saved content",
        "Smart context understanding"
      ],
      demo: {
        type: "search",
        visual: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
        title: "Smart Natural Language Search",
        description: "Ask in plain English and find exactly what you're looking for. Our AI understands context and intent."
      }
    },
    {
      id: 3,
      title: "Use What You Saved",
      subtitle: "Turn saves into action",
      description: "Finally turn your saved content into action. Buy that product, try that recipe, apply to that job—because you can actually find it when you need it.",
      icon: "Target",
      color: "from-secondary to-primary",
      features: [
        "Quick access when you need it",
        "Turn saves into real actions",
        "Never lose important links again",
        "Get things done efficiently"
      ],
      demo: {
        type: "action",
        visual: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
        title: "Turn Saves Into Action",
        description: "Access your saved content when you need it most. Take action on important items and get things done."
      }
    }
  ];

  return (
    <section id="core-capabilities" className="py-20 bg-gradient-to-b from-background to-background-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-text-primary mb-6">
            Three Steps to Never Losing
            <span className="block text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">
              Anything Again
            </span>
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto font-inter leading-relaxed">
            No complex setup, no manual organizing, no learning curve. Just save, search, and succeed.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.id}
              className="h-[600px] cursor-pointer"
              onClick={() => handleCardClick(index)}
            >
              <div 
                className={`relative w-full h-full transition-all duration-700 ${
                  activeBenefit === index 
                    ? 'scale-105 shadow-2xl' 
                    : 'hover:scale-102'
                }`}
                style={{ 
                  transformStyle: 'preserve-3d',
                  transform: flippedCards.has(index) ? 'rotateY(180deg)' : 'rotateY(0deg)'
                }}
              >
                {/* Front Side */}
                <div 
                  className="absolute inset-0 w-full h-full glassmorphism p-6 rounded-3xl flex flex-col"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  {/* Benefit Header */}
                  <div className="text-center mb-6 flex-shrink-0">
                    <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Icon name={benefit.icon} size={32} color="white" />
                    </div>
                    <h3 className="text-xl font-poppins font-bold text-text-primary mb-2 leading-tight">
                      {benefit.title}
                    </h3>
                    <p className="text-text-secondary font-inter text-sm">
                      {benefit.subtitle}
                    </p>
                  </div>

                  {/* Benefit Description */}
                  <p className="text-text-secondary font-inter text-center mb-6 leading-relaxed text-base flex-shrink-0">
                    {benefit.description}
                  </p>

                  {/* Feature List - Fill remaining space */}
                  <div className="flex-1 flex flex-col justify-center">
                    <div className="space-y-4">
                      {benefit.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-3">
                          <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                            <Icon name="Check" size={12} color="black" />
                          </div>
                          <span className="text-text-secondary font-inter text-sm leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Click to flip indicator */}
                  <div className="mt-6 pt-4 border-t border-border/30 flex-shrink-0">
                    <div className="flex items-center justify-center space-x-2 text-primary/70">
                      <Icon name="Eye" size={16} />
                      <span className="text-sm font-inter">Click to see demo</span>
                    </div>
                  </div>
                </div>

                {/* Back Side */}
                <div 
                  className="absolute inset-0 w-full h-full glassmorphism p-6 rounded-3xl"
                  style={{ 
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)'
                  }}
                >
                  <div className="h-full flex flex-col items-center justify-center text-center">
                    {/* Square Image Container */}
                    <div className="w-56 h-56 mb-4 rounded-xl overflow-hidden flex-shrink-0 shadow-lg">
                      <Image
                        src={benefit.demo.visual}
                        alt={benefit.demo.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="text-lg font-poppins font-bold text-text-primary mb-3 line-clamp-2">
                      {benefit.demo.title}
                    </h4>
                    <p className="text-text-secondary font-inter text-sm leading-relaxed mb-6 max-w-xs line-clamp-3">
                      {benefit.demo.description}
                    </p>
                    
                    {/* Back to front indicator */}
                    <div className="flex items-center justify-center space-x-2 text-primary/70 mt-auto">
                      <Icon name="ArrowLeft" size={16} />
                      <span className="text-sm font-inter">Click to go back</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>



        {/* CTA Section */}
        <div className="text-center mt-16">
          <button className="bg-primary text-black px-8 py-4 rounded-2xl font-poppins font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Start Saving Smarter - Install Free
          </button>
        </div>
      </div>
    </section>
  );
};

export default BenefitsGrid;