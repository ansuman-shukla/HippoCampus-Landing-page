import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import Icon from '../AppIcon';
import Button from './Button';
import LoginModal from '../auth/LoginModal';
import SignupModal from '../auth/SignupModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  
  const { user, userProfile, signOut, loading } = useAuth();

  const handleSignOut = async () => {
    await signOut();
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
    <>
      <header className="fixed top-0 left-0 right-0 z-40 glassmorphism backdrop-blur-glassmorphism border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <span className="text-xl font-poppins font-bold text-text-primary">
                HippoCampus
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#how-it-works" className="text-text-secondary hover:text-primary font-inter transition-colors">
                How It Works
              </a>
              <a href="#pricing" className="text-text-secondary hover:text-primary font-inter transition-colors">
                Pricing
              </a>
              <a href="#success-stories" className="text-text-secondary hover:text-primary font-inter transition-colors">
                Reviews
              </a>
              <a href="#blog" className="text-text-secondary hover:text-primary font-inter transition-colors">
                Blog
              </a>
            </nav>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              {loading ? (
                <div className="w-8 h-8 animate-spin">
                  <Icon name="Loader2" size={20} color="var(--color-primary)" />
                </div>
              ) : user ? (
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                      <Icon name="User" size={16} color="white" />
                    </div>
                    <span className="text-sm font-inter text-text-primary">
                      {userProfile?.full_name || 'User'}
                    </span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleSignOut}
                  >
                    Sign Out
                  </Button>
                </div>
              ) : (
                <>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowLoginModal(true)}
                  >
                    Sign In
                  </Button>
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => setShowSignupModal(true)}
                    className="primary-shadow hover:cta-shadow"
                  >
                    Stop Losing Cool Stuff - Try Free
                  </Button>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg glassmorphism-hover"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Icon name={isMenuOpen ? "X" : "Menu"} size={20} color="var(--color-text-primary)" />
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-border mt-4 pt-4 pb-4">
              <nav className="flex flex-col space-y-4">
                <a href="#how-it-works" className="text-text-secondary hover:text-primary font-inter transition-colors">
                  How It Works
                </a>
                <a href="#pricing" className="text-text-secondary hover:text-primary font-inter transition-colors">
                  Pricing
                </a>
                <a href="#success-stories" className="text-text-secondary hover:text-primary font-inter transition-colors">
                  Reviews
                </a>
                <a href="#blog" className="text-text-secondary hover:text-primary font-inter transition-colors">
                  Blog
                </a>
                
                <div className="border-t border-border pt-4">
                  {loading ? (
                    <div className="flex justify-center">
                      <Icon name="Loader2" size={20} color="var(--color-primary)" />
                    </div>
                  ) : user ? (
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                          <Icon name="User" size={16} color="white" />
                        </div>
                        <span className="text-sm font-inter text-text-primary">
                          {userProfile?.full_name || 'User'}
                        </span>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        fullWidth
                        onClick={handleSignOut}
                      >
                        Sign Out
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <Button
                        variant="ghost"
                        size="sm"
                        fullWidth
                        onClick={() => {
                          setShowLoginModal(true);
                          setIsMenuOpen(false);
                        }}
                      >
                        Sign In
                      </Button>
                      <Button
                        variant="primary"
                        size="sm"
                        fullWidth
                        onClick={() => {
                          setShowSignupModal(true);
                          setIsMenuOpen(false);
                        }}
                        className="primary-shadow hover:cta-shadow"
                      >
                        Stop Losing Cool Stuff - Try Free
                      </Button>
                    </div>
                  )}
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

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
    </>
  );
};

export default Header;