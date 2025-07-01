import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const FinalCTASection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setEmail('');
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    }, 1500);
  };

  const benefits = [
    {
      icon: "Clock",
      text: "Save 3+ hours per week"
    },
    {
      icon: "Brain",
      text: "Never lose information again"
    },
    {
      icon: "Zap",
      text: "Find anything in seconds"
    },
    {
      icon: "Shield",
      text: "Your data stays private"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-background-secondary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary-300 to-secondary-300 rounded-full opacity-10 blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-accent-300 to-primary-300 rounded-full opacity-10 blur-xl animate-pulse animation-delay-200" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-secondary-300 to-accent-300 rounded-full opacity-10 blur-xl animate-pulse animation-delay-300" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        {/* Main Headline */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-text-primary mb-6 leading-tight">
            Ready to Transform Your
            <span className="block text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text text-glow">
              Research Workflow?
            </span>
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto font-inter leading-relaxed">
            Join 50,000+ researchers who've already discovered the power of AI-enhanced memory. Start your free trial today.
          </p>
        </div>

        {/* CTA Form */}
        <div className="glassmorphism p-8 md:p-12 rounded-3xl max-w-2xl mx-auto mb-12">
          {!showSuccess ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-poppins font-bold text-text-primary mb-2">
                  Start Your Free Trial
                </h3>
                <p className="text-text-secondary font-inter">
                  No credit card required • 14-day free trial • Cancel anytime
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={handleEmailChange}
                    required
                    className="w-full"
                    disabled={isSubmitting}
                  />
                </div>
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  iconName="ArrowRight"
                  iconPosition="right"
                  loading={isSubmitting}
                  disabled={!email || isSubmitting}
                  className="primary-shadow hover:cta-shadow sm:w-auto"
                >
                  {isSubmitting ? 'Starting Trial...' : 'Start Free Trial'}
                </Button>
              </div>

              <div className="flex items-center justify-center space-x-6 text-sm text-text-secondary font-inter">
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} color="white" />
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} color="white" />
                  <span>No credit card</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} color="white" />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </form>
          ) : (
            <div className="text-center animate-fade-in">
              <div className="w-16 h-16 bg-gradient-to-br from-success to-success-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Check" size={32} color="white" />
              </div>
              <h3 className="text-2xl font-poppins font-bold text-text-primary mb-2">
                Welcome to HippoCampus!
              </h3>
              <p className="text-text-secondary font-inter mb-4">
                Check your email for setup instructions and your browser extension download link.
              </p>
              <div className="flex items-center justify-center space-x-2 text-success">
                <Icon name="Mail" size={16} />
                <span className="text-sm font-inter">Confirmation sent to {email}</span>
              </div>
            </div>
          )}
        </div>

        {/* Alternative CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            variant="ghost"
            size="md"
            iconName="Play"
            iconPosition="left"
          >
            Watch 2-Minute Demo
          </Button>
          <div className="text-text-tertiary">•</div>
          <Button
            variant="ghost"
            size="md"
            iconName="Calendar"
            iconPosition="left"
          >
            Schedule a Demo
          </Button>
          <div className="text-text-tertiary">•</div>
          <Button
            variant="ghost"
            size="md"
            iconName="MessageCircle"
            iconPosition="left"
          >
            Contact Sales
          </Button>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center items-center gap-8 mt-12 opacity-60">
          <div className="flex items-center space-x-2">
            <Icon name="Shield" size={20} color="white" />
            <span className="text-text-secondary font-inter text-sm">SOC 2 Compliant</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Lock" size={20} color="white" />
            <span className="text-text-secondary font-inter text-sm">GDPR Ready</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Database" size={20} color="white" />
            <span className="text-text-secondary font-inter text-sm">256-bit Encryption</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Clock" size={20} color="white" />
            <span className="text-text-secondary font-inter text-sm">99.9% Uptime</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;