import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';

import Button from '../ui/Button';
import Input from '../ui/Input';

const SignupModal = ({ isOpen, onClose, onSwitchToLogin }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const { signUp } = useAuth();

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      setLoading(false);
      return;
    }

    const result = await signUp(formData.email, formData.password, {
      fullName: formData.fullName
    });

    if (result?.success) {
      setSuccess(true);
      setFormData({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    } else {
      setError(result?.error || 'Signup failed');
    }

    setLoading(false);
  };

  const handleClose = () => {
    onClose();
    setFormData({
      fullName: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
    setError('');
    setSuccess(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={handleClose}
      />
      <div className="relative glassmorphism backdrop-blur-glassmorphism rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-poppins font-bold text-text-primary">
            Join HippoCampus
          </h2>
          <Button
            variant="ghost"
            size="sm"
            iconName="X"
            onClick={handleClose}
          />
        </div>

        {error && (
          <div className="mb-4 p-3 bg-error-50 border border-error-100 rounded-lg">
            <p className="text-sm text-error font-inter">{error}</p>
          </div>
        )}

        {success && (
          <div className="mb-4 p-3 bg-success-50 border border-success-100 rounded-lg">
            <p className="text-sm text-success font-inter">
              Account created successfully! Please check your email to verify your account.
            </p>
          </div>
        )}

        {!success ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                Full Name
              </label>
              <Input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
                disabled={loading}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                Email
              </label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                disabled={loading}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                Password
              </label>
              <Input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create a password"
                required
                disabled={loading}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                Confirm Password
              </label>
              <Input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                required
                disabled={loading}
              />
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              fullWidth
              disabled={loading}
              className="primary-shadow hover:cta-shadow"
            >
              {loading ? 'Creating Account...' : 'Create Account'}
            </Button>
          </form>
        ) : (
          <div className="space-y-4">
            <Button
              variant="primary"
              size="lg"
              fullWidth
              onClick={onSwitchToLogin}
            >
              Sign In Now
            </Button>
          </div>
        )}

        {!success && (
          <div className="mt-6 text-center">
            <p className="text-sm text-text-secondary font-inter">
              Already have an account?{' '}
              <button
                onClick={onSwitchToLogin}
                className="text-primary hover:text-primary-600 font-medium"
                disabled={loading}
              >
                Sign in
              </button>
            </p>
          </div>
        )}

        <div className="mt-4 text-xs text-text-secondary font-inter text-center">
          By creating an account, you agree to our Terms of Service and Privacy Policy.
        </div>
      </div>
    </div>
  );
};

export default SignupModal;