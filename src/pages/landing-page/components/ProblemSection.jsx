import React from 'react';
import Icon from '../../../components/AppIcon';

const ProblemSection = () => {
  const problems = [
    {
      icon: 'SearchX',
      title: 'Information Overload',
      description: 'You consume hundreds of articles, videos, and resources but struggle to find them when you need them most.',
      stat: '73% of knowledge workers'
    },
    {
      icon: 'Clock',
      title: 'Time Wasted Searching',
      description: 'Spending 30+ minutes looking for that "perfect article" you bookmarked months ago.',
      stat: '2.5 hours per week'
    },
    {
      icon: 'FolderX',
      title: 'Broken Organization Systems',
      description: 'Complex folder structures and bookmark systems that nobody actually maintains or uses effectively.',
      stat: '67% abandon their system'
    },
    {
      icon: 'Brain',
      title: 'Memory Limitations',
      description: 'Your brain cannot remember every valuable insight, quote, or resource you encounter daily.',
      stat: '90% is forgotten in 7 days'
    }
  ];

  return (
    <section id="problems" className="relative py-20 bg-gradient-to-br from-background to-background-secondary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_50%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 glassmorphism px-4 py-2 rounded-full mb-6">
            <Icon name="AlertTriangle" size={16} color="var(--color-warning)" />
            <span className="text-sm font-inter text-warning">The Problem</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-text-primary mb-6">
            Your Digital Memory is
            <span className="block text-transparent bg-gradient-to-r from-warning to-error bg-clip-text">
              Broken
            </span>
          </h2>
          
          <p className="text-lg text-text-secondary max-w-3xl mx-auto font-inter leading-relaxed">
            In our information-rich world, the tools we use to save and organize knowledge are fundamentally flawed. 
            Here is what every knowledge worker experiences:
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="glassmorphism p-8 rounded-2xl hover:glassmorphism-hover transition-all duration-300 group"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-warning to-error rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon name={problem.icon} size={24} color="white" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-poppins font-bold text-text-primary">
                      {problem.title}
                    </h3>
                    <span className="text-sm font-inter font-medium text-warning bg-warning-50 px-2 py-1 rounded-full">
                      {problem.stat}
                    </span>
                  </div>
                  
                  <p className="text-text-secondary font-inter leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pain Point Visualization */}
        <div className="glassmorphism p-8 rounded-2xl text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-poppins font-bold text-text-primary mb-4">
              The Result? Information Chaos
            </h3>
            <p className="text-text-secondary font-inter">
              You end up with scattered bookmarks, unused read-later apps, and the constant feeling that valuable knowledge is slipping away.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-error-50 rounded-xl border border-error-100">
              <Icon name="BookmarkX" size={32} color="var(--color-error)" className="mx-auto mb-2" />
              <div className="text-2xl font-poppins font-bold text-error mb-1">500+</div>
              <div className="text-sm text-error font-inter">Unsorted bookmarks</div>
            </div>
            
            <div className="p-4 bg-warning-50 rounded-xl border border-warning-100">
              <Icon name="Timer" size={32} color="var(--color-warning)" className="mx-auto mb-2" />
              <div className="text-2xl font-poppins font-bold text-warning mb-1">Hours</div>
              <div className="text-sm text-warning font-inter">Wasted searching</div>
            </div>
            
            <div className="p-4 bg-error-50 rounded-xl border border-error-100">
              <Icon name="TrendingDown" size={32} color="var(--color-error)" className="mx-auto mb-2" />
              <div className="text-2xl font-poppins font-bold text-error mb-1">Lost</div>
              <div className="text-sm text-error font-inter">Valuable insights</div>
            </div>
          </div>
        </div>

        {/* Transition to Solution */}
        <div className="text-center mt-16">
          <p className="text-xl font-lora italic text-text-secondary mb-4">
            "I know I saved that article somewhere, but where?"
          </p>
          <div className="flex items-center justify-center space-x-2 text-text-tertiary">
            <div className="w-2 h-2 bg-text-tertiary rounded-full animate-pulse" />
            <div className="w-2 h-2 bg-text-tertiary rounded-full animate-pulse animation-delay-100" />
            <div className="w-2 h-2 bg-text-tertiary rounded-full animate-pulse animation-delay-200" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;