import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SolutionShowcase = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [currentDemo, setCurrentDemo] = useState(0);

  const demoQueries = [
    "that article about productivity in remote teams",
    "research on AI impact on education",
    "the paper about climate change solutions",
    "notes from the marketing strategy meeting"
  ];

  const mockResults = [
    {
      id: 1,
      title: "The Future of Remote Work: Productivity Insights",
      snippet: "Recent studies show that remote teams can be 35% more productive when using the right tools and methodologies...",
      source: "Harvard Business Review",
      confidence: 95,
      tags: ["productivity", "remote work", "teams"]
    },
    {
      id: 2,
      title: "Building High-Performance Distributed Teams",
      snippet: "Key strategies for maintaining team cohesion and productivity in remote work environments include...",
      source: "MIT Technology Review",
      confidence: 87,
      tags: ["teams", "management", "remote"]
    },
    {
      id: 3,
      title: "Remote Team Communication Best Practices",
      snippet: "Effective communication patterns that increase team productivity by up to 40% in distributed work settings...",
      source: "Your Notes",
      confidence: 92,
      tags: ["communication", "productivity", "best practices"]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDemo((prev) => (prev + 1) % demoQueries.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleSearch = () => {
    if (!searchQuery.trim()) return;
    
    setIsSearching(true);
    setShowResults(false);
    
    setTimeout(() => {
      setIsSearching(false);
      setShowResults(true);
    }, 1500);
  };

  const handleDemoQuery = (query) => {
    setSearchQuery(query);
    handleSearch();
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background-secondary to-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-text-primary mb-6">
            Meet Your AI-Powered
            <span className="block text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">
              Digital Hippocampus
            </span>
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto font-inter leading-relaxed">
            Search your saved content using natural language, just like talking to a research assistant who remembers everything.
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-12 items-center">
          {/* Features */}
          <div className="space-y-6">
            {/* AI Capabilities */}
            <div className="glassmorphism p-6 rounded-2xl">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                  <Icon name="Brain" size={24} color="white" />
                </div>
                <div>
                  <h3 className="text-lg font-poppins font-bold text-text-primary">
                    Semantic Understanding
                  </h3>
                  <p className="text-text-secondary font-inter text-sm">
                    AI understands context, not just keywords
                  </p>
                </div>
              </div>
              <ul className="space-y-2">
                {[
                  "Natural language queries",
                  "Context-aware results",
                  "Confidence scoring",
                  "Cross-content connections"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <Icon name="Check" size={16} color="var(--color-success)" />
                    <span className="text-text-secondary font-inter text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Speed & Accuracy */}
            <div className="glassmorphism p-6 rounded-2xl">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-warning rounded-xl flex items-center justify-center">
                  <Icon name="Zap" size={24} color="white" />
                </div>
                <div>
                  <h3 className="text-lg font-poppins font-bold text-text-primary">
                    Lightning Fast
                  </h3>
                  <p className="text-text-secondary font-inter text-sm">
                    Sub-second search across all content
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-success-50 rounded-lg">
                  <div className="text-xl font-poppins font-bold text-success mb-1">&lt;0.5s</div>
                  <div className="text-xs text-text-secondary font-inter">Search Speed</div>
                </div>
                <div className="text-center p-3 bg-primary-50 rounded-lg">
                  <div className="text-xl font-poppins font-bold text-primary mb-1">95%</div>
                  <div className="text-xs text-text-secondary font-inter">Accuracy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionShowcase;