import React from 'react';
import Icon from '../../../components/AppIcon';

const ProblemSection = () => {
  const problems = [
    {
      icon: 'SearchX',
      title: 'The "I Know I Saw This Somewhere" Spiral',
      description: 'You KNOW you bookmarked that perfect apartment decor idea, but 20 minutes of frantic searching through Instagram saves and browser bookmarks turns up nothing. You settle for something mediocre instead.'
    },
    {
      icon: 'Camera',
      title: 'The Screenshot Graveyard',
      description: 'Your camera roll: 1,247 screenshots with zero context. "Was this skincare routine from TikTok or YouTube? What was special about this coffee shop? Why did I save this random tweet?"'
    },
    {
      icon: 'FolderX',
      title: 'The Bookmark Black Hole',
      description: 'Your "Read Later" folder is where good intentions go to die. 500+ unsorted links that feel more like digital hoarding than helpful resources.'
    },
    {
      icon: 'Brain',
      title: 'The Inspiration Amnesia',
      description: 'That brilliant business idea from a podcast, that life-changing productivity tip, that tool everyone was raving about—vanished into the scroll before you could act on it.'
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
            We Get It. This Happens
            <span className="block text-transparent bg-gradient-to-r from-warning to-error bg-clip-text">
              Every Day.
            </span>
          </h2>
          
          <p className="text-lg text-text-secondary max-w-3xl mx-auto font-inter leading-relaxed">
            Your daily frustrations with saving and finding information are valid. You're not alone in this struggle.
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
                  <h3 className="text-lg font-poppins font-bold text-text-primary mb-3">
                    {problem.title}
                  </h3>
                  
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
            "This isn't your fault. You're not disorganized. The tools just suck."
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