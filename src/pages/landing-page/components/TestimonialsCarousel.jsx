import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialsCarousel = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Sarah J.",
      role: "Content Creator & Marketing Consultant",
      company: "",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
      content: `I'm a content creator constantly finding inspiration across 6 different platforms. HippoCampus is the only tool that lets me search my saved content like Google searches the internet. Game changer.`,
      rating: 5,
      metrics: {
        timeSaved: "8+ hours weekly",
        contentSaved: "Saves 8+ hours weekly"
      },
      verified: true,
      linkedIn: "https://linkedin.com/in/sarahj"
    },
    {
      id: 2,
      name: "David Chen",
      role: "Software Engineer & Founder",
      company: "",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      content: `My side hustle ideas used to die in random notes apps. Now I save everything in HippoCampus and can actually find my research when I'm ready to build. It's like having a personal research assistant.`,
      rating: 5,
      metrics: {
        timeSaved: "2 projects launched",
        contentSaved: "Launched 2 profitable projects"
      },
      verified: true,
      linkedIn: "https://linkedin.com/in/davidchen"
    },
    {
      id: 3,
      name: "Maria Flores",
      role: "Newsletter Creator",
      company: "15K subscribers",
      avatar: "https://randomuser.me/api/portraits/women/28.jpg",
      content: `I recommend tools in my newsletter but could never remember what I'd already shared. Now I just search 'that AI writing tool from March' and it's right there. My readers love the consistent quality.`,
      rating: 5,
      metrics: {
        timeSaved: "2x quality boost",
        contentSaved: "Doubled content quality"
      },
      verified: true,
      linkedIn: "https://linkedin.com/in/mariaflores"
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
            Real People,
            <span className="block text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">
              Real Results
            </span>
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto font-inter leading-relaxed">
            See how HippoCampus transformed digital chaos into personal goldmines.
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
                    <Icon key={index} name="Star" size={20} color="white" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-text-primary font-lora text-lg md:text-xl leading-relaxed mb-6 italic">
                  "{current.content}"
                </blockquote>

                {/* Metrics */}
                <div className="grid grid-cols-1 gap-4">
                  <div className="text-center p-4 bg-success-50 rounded-xl">
                    <div className="text-lg md:text-xl font-poppins font-bold text-success mb-1">
                      📊 {current.metrics.contentSaved}
                    </div>
                    <div className="text-sm text-text-secondary font-inter">Impact Achieved</div>
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
              <Icon name="ChevronRight" size={20} color="white" />
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