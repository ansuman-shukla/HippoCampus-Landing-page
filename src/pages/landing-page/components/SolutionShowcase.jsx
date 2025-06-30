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
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-background-secondary to-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-text-primary mb-6">
            Meet Your AI-Powered
            <span className="block text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">
              Memory Assistant
            </span>
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto font-inter leading-relaxed mb-8">
            Just like the hippocampus in your brain forms memories, HippoCampus AI remembers everything you find online. 
            But here's the magic: you don't search by folder or tag. You search the way you think.
          </p>
          
          {/* Example Cards */}
          <div className="max-w-4xl mx-auto mb-8">
            <p className="text-text-secondary font-inter mb-6">
              Instead of trying to remember "Was it in my shopping folder or lifestyle folder?" just ask:
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Old Way Card */}
              <div className="glassmorphism p-6 rounded-xl border-l-4 border-red-400">
                <div className="flex items-center mb-3">
                  <Icon name="FolderOpen" size={20} color="#ef4444" />
                  <span className="ml-2 text-sm font-medium text-red-600">Old Way</span>
                </div>
                <p className="text-text-secondary text-sm font-inter">
                  "Let me check... was it in Shopping folder? Or maybe Lifestyle? 
                  Or did I save it in Random Stuff? Ugh, where did I put that coffee brand?"
                </p>
              </div>
              
              {/* New Way Card */}
              <div className="glassmorphism p-6 rounded-xl border-l-4 border-green-400">
                <div className="flex items-center mb-3">
                  <Icon name="Sparkles" size={20} color="#22c55e" />
                  <span className="ml-2 text-sm font-medium text-green-600">With HippoCampus</span>
                </div>
                <p className="text-text-secondary text-sm font-inter mb-3">
                  "Show me that sustainable coffee brand from Instagram"
                </p>
                <div className="text-green-600 font-medium text-sm">
                  💥 Boom—there it is!
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-xl font-poppins font-semibold text-text-primary">
            It's not about organizing better. It's about remembering smarter.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SolutionShowcase;