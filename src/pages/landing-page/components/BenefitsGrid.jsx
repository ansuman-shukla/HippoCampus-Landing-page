import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const BenefitsGrid = () => {
  const [activeBenefit, setActiveBenefit] = useState(0);

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
        visual: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop"
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
        visual: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop"
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
        visual: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop"
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
              className={`glassmorphism p-8 rounded-3xl cursor-pointer transition-all duration-300 ${
                activeBenefit === index 
                  ? 'transform scale-105 shadow-2xl' 
                  : 'hover:transform hover:scale-102'
              }`}
              onClick={() => setActiveBenefit(index)}
            >
              {/* Benefit Header */}
              <div className="text-center mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <Icon name={benefit.icon} size={32} color="white" />
                </div>
                <h3 className="text-xl font-poppins font-bold text-text-primary mb-2">
                  {benefit.title}
                </h3>
                <p className="text-text-secondary font-inter text-sm">
                  {benefit.subtitle}
                </p>
              </div>

              {/* Benefit Description */}
              <p className="text-text-secondary font-inter text-center mb-6 leading-relaxed">
                {benefit.description}
              </p>

              {/* Feature List */}
              <div className="space-y-3">
                {benefit.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-success-100 rounded-full flex items-center justify-center mt-0.5">
                      <Icon name="Check" size={12} color="var(--color-success)" />
                    </div>
                    <span className="text-text-secondary font-inter text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Active Indicator */}
              {activeBenefit === index && (
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="flex items-center justify-center space-x-2 text-primary">
                    <Icon name="Eye" size={16} />
                    <span className="text-sm font-inter font-medium">View Demo</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Interactive Demo Section */}
        <div className="glassmorphism p-8 rounded-3xl">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Demo Visual */}
            <div className="order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={benefits[activeBenefit].demo.visual}
                  alt={`${benefits[activeBenefit].title} demonstration`}
                  className="w-full h-64 object-cover"
                />
                
                {/* Demo Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent">
                  <div className="absolute bottom-4 left-4 right-4">
                    {/* Browser Extension Demo */}
                    {benefits[activeBenefit].demo.type === 'extension' && (
                      <div className="glassmorphism p-4 rounded-xl">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                            <Icon name="Download" size={16} color="white" />
                          </div>
                          <div className="text-white">
                            <div className="text-sm font-poppins font-semibold">HippoCampus Extension</div>
                            <div className="text-xs opacity-80">Saving this article...</div>
                          </div>
                        </div>
                        <div className="w-full bg-white bg-opacity-20 rounded-full h-2">
                          <div className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full w-3/4 animate-pulse" />
                        </div>
                      </div>
                    )}

                    {/* Search Demo */}
                    {benefits[activeBenefit].demo.type === 'search' && (
                      <div className="glassmorphism p-4 rounded-xl">
                        <div className="flex items-center space-x-3 mb-2">
                          <Icon name="Search" size={16} color="white" />
                          <div className="text-white text-sm font-inter">
                            "productivity tips for remote work"
                          </div>
                        </div>
                        <div className="text-xs text-white opacity-80">
                          Found 23 relevant results in 0.3 seconds
                        </div>
                      </div>
                    )}

                    {/* Sync Demo */}
                    {benefits[activeBenefit].demo.type === 'sync' && (
                      <div className="glassmorphism p-4 rounded-xl">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <Icon name="Cloud" size={16} color="white" />
                            <span className="text-white text-sm font-inter">Syncing...</span>
                          </div>
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-success rounded-full" />
                            <div className="w-2 h-2 bg-success rounded-full" />
                            <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                          </div>
                        </div>
                        <div className="text-xs text-white opacity-80">
                          1,247 items synced across 3 devices
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Demo Details */}
            <div className="order-1 lg:order-2">
              <div className="mb-6">
                <div className={`inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r ${benefits[activeBenefit].color} rounded-full text-white mb-4`}>
                  <Icon name={benefits[activeBenefit].icon} size={16} />
                  <span className="text-sm font-poppins font-medium">
                    {benefits[activeBenefit].title}
                  </span>
                </div>
                <h3 className="text-2xl font-poppins font-bold text-text-primary mb-4">
                  {benefits[activeBenefit].subtitle}
                </h3>
                <p className="text-text-secondary font-inter leading-relaxed mb-6">
                  {benefits[activeBenefit].description}
                </p>
              </div>

              {/* Detailed Features */}
              <div className="space-y-4">
                {benefits[activeBenefit].features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className={`w-8 h-8 bg-gradient-to-br ${benefits[activeBenefit].color} rounded-lg flex items-center justify-center`}>
                      <span className="text-white text-sm font-poppins font-bold">
                        {index + 1}
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="text-text-primary font-inter">{feature}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Dots */}
              <div className="flex space-x-2 mt-8">
                {benefits.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveBenefit(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeBenefit 
                        ? 'bg-primary w-8' :'bg-text-tertiary hover:bg-text-secondary'
                    }`}
                    aria-label={`View ${benefits[index].title} benefit`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-2xl font-poppins font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Start Saving Smarter - Install Free
          </button>
        </div>
      </div>
    </section>
  );
};

export default BenefitsGrid;