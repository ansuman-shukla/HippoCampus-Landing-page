import React, { useState } from 'react';
import { useAuth } from '../../../contexts/AuthContext';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import LoginModal from '../../../components/auth/LoginModal';
import SignupModal from '../../../components/auth/SignupModal';

const HeroSection = () => {
  const [email, setEmail] = useState('');
  const [showDemo, setShowDemo] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  const { user, userProfile, loading } = useAuth();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleTrialSignup = () => {
    if (user) {
      // User is already logged in, redirect to app
      window.open('/app', '_blank');
    } else if (email) {
      // Start signup process with email pre-filled
      setShowSignupModal(true);
    } else {
      // Show signup modal
      setShowSignupModal(true);
    }
  };

  const handleDemoClick = () => {
    setShowDemo(true);
  };

  const switchToSignup = () => {
    setShowLoginModal(false);
    setShowSignupModal(true);
  };

  const switchToLogin = () => {
    setShowSignupModal(false);
    setShowLoginModal(true);
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background - Dark Theme */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary-300 to-secondary-300 rounded-full opacity-20 blur-xl animate-pulse" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-accent-300 to-primary-300 rounded-full opacity-20 blur-xl animate-pulse animation-delay-200" />
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-gradient-to-br from-secondary-300 to-accent-300 rounded-full opacity-20 blur-xl animate-pulse animation-delay-300" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-text-primary mb-6 leading-tight">
              I know I saved this 
              <span className="block text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text text-glow">
                Somewhere...
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-text-secondary mb-8 max-w-2xl font-inter leading-relaxed">
              That perfect product you saw on TikTok? 
              <br />
              The career advice from that Twitter thread? 
              <br />
              The recipe that actually looked doable? 
              <br />
              They're lost somewhere in your digital chaos. It's time for a second brain that actually works.
            </p>

            {/* User Status Message */}
            {user && (
              <div className="mb-6 p-4 bg-success-50 border border-success-100 rounded-xl">
                <div className="flex items-center space-x-2">
                  <Icon name="CheckCircle" size={20} color="white" />
                  <span className="text-success font-medium">
                    Welcome back, {userProfile?.full_name || 'User'}! Ready to remember everything?
                  </span>
                </div>
              </div>
            )}

            {/* Call to Action */}
            <div className="mb-8">
              <Button
                variant="primary"
                size="lg"
                onClick={handleTrialSignup}
                className="primary-shadow hover:cta-shadow text-lg px-8 py-4 mb-4 w-full sm:w-auto rounded-xl"
              >
                Never Lose Cool Stuff Again - Install Free
              </Button>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            {/* YouTube Video Demo */}
            <div className="glassmorphism p-4 rounded-3xl">
              <div className="relative">
                <iframe
                  className="w-full h-64 md:h-80 lg:h-96 rounded-2xl"
                  src="https://www.youtube.com/embed/-QTkPfq7w1A"
                  title="Hippocampus Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>


          </div>
        </div>
      </div>

      {/* Demo Modal */}
      {showDemo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={() => setShowDemo(false)}
          />
          <div className="relative glassmorphism backdrop-blur-glassmorphism rounded-2xl p-6 max-w-4xl w-full max-h-[80vh] overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-poppins font-bold text-text-primary">
                HippoCampus Demo
              </h3>
              <Button
                variant="ghost"
                size="sm"
                iconName="X"
                onClick={() => setShowDemo(false)}
              />
            </div>
            <div className="aspect-video bg-gradient-to-br from-primary-800 to-secondary-800 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <Icon name="Play" size={48} color="white" className="mx-auto mb-4" />
                <p className="text-text-secondary font-inter mb-4">
                  See how HippoCampus transforms your digital memory
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Icon name="MousePointer" size={16} color="white" />
                    <span>One-click save</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Search" size={16} color="white" />
                    <span>Natural language search</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Brain" size={16} color="white" />
                    <span>AI-powered organization</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Auth Modals */}
      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onSwitchToSignup={switchToSignup}
      />
      
      <SignupModal
        isOpen={showSignupModal}
        onClose={() => setShowSignupModal(false)}
        onSwitchToLogin={switchToLogin}
      />

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={24} color="white" />
      </div>
    </section>
  );
};

export default HeroSection;