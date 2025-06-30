import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';

import Button from '../ui/Button';
import Input from '../ui/Input';

const LoginModal = ({ isOpen, onClose, onSwitchToSignup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { signIn } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const result = await signIn(email, password);

    if (result?.success) {
      onClose();
      setEmail('');
      setPassword('');
    } else {
      setError(result?.error || 'Login failed');
    }

    setLoading(false);
  };

  const handleClose = () => {
    onClose();
    setEmail('');
    setPassword('');
    setError('');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={handleClose}
      />
      <div className="relative glassmorphism backdrop-blur-glassmorphism rounded-2xl p-8 max-w-md w-full">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-poppins font-bold text-text-primary">
            Welcome Back
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

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Email
            </label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
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
            {loading ? 'Signing In...' : 'Sign In'}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-text-secondary font-inter">
            Do not have an account?{' '}
            <button
              onClick={onSwitchToSignup}
              className="text-primary hover:text-primary-600 font-medium"
              disabled={loading}
            >
              Sign up
            </button>
          </p>
        </div>

        <div className="mt-4 text-center">
          <button
            className="text-sm text-text-secondary hover:text-primary font-inter"
            disabled={loading}
          >
            Forgot your password?
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;