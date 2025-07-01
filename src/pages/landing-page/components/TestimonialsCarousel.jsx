import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const TestimonialsCarousel = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      content: "I used to save everything 'for later' but later never came because I could never find anything. I wasn't using my saves—they were just making me feel bad about being disorganized. HippoCampus changed that completely.",
      author: "Sarah",
      role: "Content Creator"
    },
    {
      id: 2,
      content: "As a researcher, I collect hundreds of papers and articles. HippoCampus's AI search finds exactly what I need from my vast collection. It's like having a research assistant that never forgets.",
      author: "Dr. Michael Chen",
      role: "Research Scientist"
    },
    {
      id: 3,
      content: "My newsletter audience loves the curated content I share. HippoCampus helps me remember which tools I've already recommended and discover new gems from my saved content.",
      author: "Maria Rodriguez",
      role: "Newsletter Creator"
    },
    {
      id: 4,
      content: "Building my startup, I save tons of inspiration and resources. HippoCampus turns my scattered bookmarks into an organized knowledge base that actually helps me execute ideas.",
      author: "David Kim",
      role: "Startup Founder"
    }
  ];

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  const current = testimonials[currentTestimonial];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-background-secondary to-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-text-primary mb-6">
            Real People,
            <span className="block text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">
              Real Results
            </span>
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto font-inter leading-relaxed">
            See how HippoCampus transformed digital chaos into personal goldmines.
          </p>
        </div>

        {/* Single Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="glassmorphism p-8 rounded-2xl text-center">
            <div className="mb-6">
              <Icon name="Quote" size={48} className="mx-auto mb-4 opacity-20" color="white" />
              <blockquote className="text-lg md:text-xl font-lora italic text-text-primary leading-relaxed mb-6">
                "{current.content}"
              </blockquote>
              <div className="text-sm text-text-secondary">
                — {current.author}, {current.role}
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 glassmorphism rounded-full flex items-center justify-center hover:bg-primary/20 transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <Icon name="ChevronLeft" size={20} color="white" />
            </button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-primary w-8' : 'bg-text-tertiary hover:bg-text-secondary'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 glassmorphism rounded-full flex items-center justify-center hover:bg-primary/20 transition-all duration-300"
              aria-label="Next testimonial"
            >
              <Icon name="ChevronRight" size={20} color="white" />
            </button>
          </div>
        </div>

        {/* Social Proof Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="text-center glassmorphism p-6 rounded-2xl">
            <div className="text-2xl md:text-3xl font-poppins font-bold text-primary mb-2">
              10,000+
            </div>
            <div className="text-text-secondary font-inter text-sm">
              Active Users
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

        {/* Security & Trust Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl md:text-3xl font-poppins font-bold text-text-primary mb-6">
            Your Digital Life Stays Private
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
            <div className="glassmorphism p-4 md:p-6 rounded-2xl">
              <div className="w-12 h-12 mx-auto mb-3 bg-primary/10 rounded-xl flex items-center justify-center">
                <Icon name="Shield" size={24} color="white" />
              </div>
              <div className="text-sm md:text-base font-poppins font-semibold text-text-primary mb-1">
                SOC 2
              </div>
              <div className="text-xs md:text-sm text-text-secondary font-inter">
                Type II Compliant
              </div>
            </div>
            <div className="glassmorphism p-4 md:p-6 rounded-2xl">
              <div className="w-12 h-12 mx-auto mb-3 bg-secondary/10 rounded-xl flex items-center justify-center">
                <Icon name="Globe" size={24} color="white" />
              </div>
              <div className="text-sm md:text-base font-poppins font-semibold text-text-primary mb-1">
                GDPR Compliant
              </div>
              <div className="text-xs md:text-sm text-text-secondary font-inter">
                EU Privacy Ready
              </div>
            </div>
            <div className="glassmorphism p-4 md:p-6 rounded-2xl">
              <div className="w-12 h-12 mx-auto mb-3 bg-accent/10 rounded-xl flex items-center justify-center">
                <Icon name="Lock" size={24} color="white" />
              </div>
              <div className="text-sm md:text-base font-poppins font-semibold text-text-primary mb-1">
                256-bit Encryption
              </div>
              <div className="text-xs md:text-sm text-text-secondary font-inter">
                Military Grade
              </div>
            </div>
            <div className="glassmorphism p-4 md:p-6 rounded-2xl">
              <div className="w-12 h-12 mx-auto mb-3 bg-success/10 rounded-xl flex items-center justify-center">
                <Icon name="Activity" size={24} color="white" />
              </div>
              <div className="text-sm md:text-base font-poppins font-semibold text-text-primary mb-1">
                99.9% Uptime
              </div>
              <div className="text-xs md:text-sm text-text-secondary font-inter">
                Always Available
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;