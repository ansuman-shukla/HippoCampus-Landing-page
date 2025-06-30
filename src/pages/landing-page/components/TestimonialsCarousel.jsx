import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialsCarousel = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Dr. Sarah Chen",
      role: "Research Scientist",
      company: "Stanford University",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
      content: `HippoCampus has revolutionized my research workflow. I used to spend hours trying to find papers I'd bookmarked months ago. Now I just ask 'that study about neural plasticity in adults' and boom - it's there instantly. It's like having a research assistant who never forgets anything.`,
      rating: 5,
      metrics: {
        timeSaved: "4.5 hours/week",
        contentSaved: "2,847 papers"
      },
      verified: true,
      linkedIn: "https://linkedin.com/in/sarahchen"
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "PhD Candidate",
      company: "MIT",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      content: `As a PhD student drowning in research papers, HippoCampus became my lifeline. The semantic search is incredible - I can find connections between papers I never would have discovered manually. My literature reviews are now 3x faster and more comprehensive.`,
      rating: 5,
      metrics: {
        timeSaved: "6 hours/week",
        contentSaved: "1,923 articles"
      },
      verified: true,
      linkedIn: "https://linkedin.com/in/marcusrodriguez"
    },
    {
      id: 3,
      name: "Emma Thompson",
      role: "Content Strategist",
      company: "TechCorp",
      avatar: "https://randomuser.me/api/portraits/women/28.jpg",
      content: `I manage content research for our entire marketing team. HippoCampus transformed how we organize and retrieve insights. The AI search understands context so well - when I search for 'engagement strategies for Gen Z', it surfaces exactly what I need from hundreds of saved articles.`,
      rating: 5,
      metrics: {
        timeSaved: "3.2 hours/week",
        contentSaved: "1,456 insights"
      },
      verified: true,
      linkedIn: "https://linkedin.com/in/emmathompson"
    },
    {
      id: 4,
      name: "Prof. David Kim",
      role: "Associate Professor",
      company: "Harvard Medical School",
      avatar: "https://randomuser.me/api/portraits/men/52.jpg",
      content: `After 15 years in academia, I thought I had my research system figured out. HippoCampus proved me wrong. The ability to search across all my saved content using natural language has uncovered connections I missed for years. It's not just a tool - it's a research multiplier.`,
      rating: 5,
      metrics: {
        timeSaved: "5.1 hours/week",
        contentSaved: "4,231 papers"
      },
      verified: true,
      linkedIn: "https://linkedin.com/in/davidkim"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
    setIsAutoPlaying(false);
  };

  const current = testimonials[currentTestimonial];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-background-secondary to-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-text-primary mb-6">
            Trusted by Researchers
            <span className="block text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">
              Worldwide
            </span>
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto font-inter leading-relaxed">
            Join thousands of knowledge workers who've transformed their research workflow with AI-powered memory.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="relative">
          <div className="glassmorphism p-8 md:p-12 rounded-3xl max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* Avatar & Profile */}
              <div className="text-center md:text-left">
                <div className="relative inline-block mb-4">
                  <Image
                    src={current.avatar}
                    alt={`${current.name} profile picture`}
                    className="w-24 h-24 rounded-full object-cover mx-auto md:mx-0"
                  />
                  {current.verified && (
                    <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-primary rounded-full flex items-center justify-center border-2 border-white">
                      <Icon name="Check" size={16} color="white" />
                    </div>
                  )}
                </div>
                
                <h4 className="text-lg font-poppins font-bold text-text-primary mb-1">
                  {current.name}
                </h4>
                <p className="text-text-secondary font-inter text-sm mb-1">
                  {current.role}
                </p>
                <p className="text-text-secondary font-inter text-sm mb-4">
                  {current.company}
                </p>

                {/* LinkedIn Verification */}
                <a
                  href={current.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-primary hover:text-secondary transition-colors"
                >
                  <Icon name="Linkedin" size={16} />
                  <span className="text-sm font-inter">Verified Profile</span>
                </a>
              </div>

              {/* Testimonial Content */}
              <div className="md:col-span-2">
                {/* Rating */}
                <div className="flex items-center justify-center md:justify-start space-x-1 mb-4">
                  {Array.from({ length: current.rating }).map((_, index) => (
                    <Icon key={index} name="Star" size={20} color="var(--color-accent)" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-text-primary font-lora text-lg md:text-xl leading-relaxed mb-6 italic">
                  "{current.content}"
                </blockquote>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-success-50 rounded-xl">
                    <div className="text-xl font-poppins font-bold text-success mb-1">
                      {current.metrics.timeSaved}
                    </div>
                    <div className="text-sm text-text-secondary font-inter">Time Saved</div>
                  </div>
                  <div className="text-center p-4 bg-primary-50 rounded-xl">
                    <div className="text-xl font-poppins font-bold text-primary mb-1">
                      {current.metrics.contentSaved}
                    </div>
                    <div className="text-sm text-text-secondary font-inter">Content Saved</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 glassmorphism rounded-full flex items-center justify-center glassmorphism-hover transition-glassmorphism"
              aria-label="Previous testimonial"
            >
              <Icon name="ChevronLeft" size={20} color="var(--color-text-primary)" />
            </button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-primary w-8' :'bg-text-tertiary hover:bg-text-secondary'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 glassmorphism rounded-full flex items-center justify-center glassmorphism-hover transition-glassmorphism"
              aria-label="Next testimonial"
            >
              <Icon name="ChevronRight" size={20} color="var(--color-text-primary)" />
            </button>
          </div>

          {/* Auto-play Toggle */}
          <div className="text-center mt-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="inline-flex items-center space-x-2 text-text-secondary hover:text-primary transition-colors"
            >
              <Icon name={isAutoPlaying ? "Pause" : "Play"} size={16} />
              <span className="text-sm font-inter">
                {isAutoPlaying ? "Pause" : "Play"} Auto-rotation
              </span>
            </button>
          </div>
        </div>

        {/* Social Proof Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="text-center glassmorphism p-6 rounded-2xl">
            <div className="text-2xl md:text-3xl font-poppins font-bold text-primary mb-2">
              50,000+
            </div>
            <div className="text-text-secondary font-inter text-sm">
              Active Researchers
            </div>
          </div>
          <div className="text-center glassmorphism p-6 rounded-2xl">
            <div className="text-2xl md:text-3xl font-poppins font-bold text-secondary mb-2">
              200+
            </div>
            <div className="text-text-secondary font-inter text-sm">
              Universities
            </div>
          </div>
          <div className="text-center glassmorphism p-6 rounded-2xl">
            <div className="text-2xl md:text-3xl font-poppins font-bold text-accent mb-2">
              4.9/5
            </div>
            <div className="text-text-secondary font-inter text-sm">
              Average Rating
            </div>
          </div>
          <div className="text-center glassmorphism p-6 rounded-2xl">
            <div className="text-2xl md:text-3xl font-poppins font-bold text-success mb-2">
              3.5hrs
            </div>
            <div className="text-text-secondary font-inter text-sm">
              Avg. Time Saved
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;