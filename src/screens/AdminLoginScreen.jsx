import React, { useState } from 'react';
import { Eye, EyeOff, Lock, Shield } from 'lucide-react';
import { COLORS } from '../../constants/colors.js';
import { PrimaryButton, SecondaryButton } from '../../components/UI/Buttons.jsx';
import { isValidEmail } from '../../utils/helpers.js';

/**
 * AdminLoginScreen - Admin portal login
 */
const AdminLoginScreen = ({ onLoginSuccess, onBack }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async () => {
    setError('');
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    if (!isValidEmail(email)) {
      setError('Invalid email address');
      return;
    }

    setLoading(true);
    // Simulate API call - check for admin credentials
    setTimeout(() => {
      setLoading(false);
      // Mock admin check
      if (email.includes('admin')) {
        onLoginSuccess({ email, userType: 'admin' });
      } else {
        setError('Admin credentials invalid');
      }
    }, 1500);
  };

  return (
    <div
      style={{ backgroundColor: COLORS.paper }}
      className="min-h-screen flex flex-col"
    >
      {/* Header */}
      <div
        style={{ backgroundColor: COLORS.dark }}
        className="pt-12 pb-8 px-4 text-center"
      >
        <div className="flex justify-center mb-3">
          <Shield size={40} style={{ color: COLORS.primary }} />
        </div>
        <h1 style={{ color: COLORS.white }} className="text-2xl font-bold mb-2">
          Admin Portal
        </h1>
        <p style={{ color: COLORS.lightGray }} className="text-sm">
          SkillLink Administration
        </p>
      </div>

      {/* Content */}
      <div className="flex-1 px-4 py-8 flex flex-col justify-center">
        {/* Security Notice */}
        <div
          style={{
            backgroundColor: '#F0FDF4',
            borderColor: COLORS.success,
          }}
          className="border-l-4 p-4 rounded mb-8"
        >
          <p style={{ color: '#166534' }} className="text-xs font-semibold">
            🔒 This is a secure admin area. Only authorized administrators can access.
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div
            style={{
              backgroundColor: '#FEE2E2',
              borderColor: COLORS.error,
            }}
            className="border-l-4 p-4 rounded mb-6"
          >
            <p style={{ color: '#991B1B' }} className="text-sm font-semibold">
              {error}
            </p>
          </div>
        )}

        {/* Email Field */}
        <div className="mb-6">
          <label style={{ color: COLORS.dark }} className="block text-sm font-bold mb-2">
            Admin Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="admin@skilllink.com"
            className="w-full px-4 py-3 border-2 rounded-lg outline-none transition"
            style={{
              borderColor: COLORS.lighter,
              color: COLORS.dark,
            }}
          />
        </div>

        {/* Password Field */}
        <div className="mb-8">
          <label style={{ color: COLORS.dark }} className="block text-sm font-bold mb-2">
            Admin Password
          </label>
          <div className="flex items-center gap-3 border-2 rounded-lg" style={{ borderColor: COLORS.lighter }}>
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="flex-1 px-4 py-3 bg-transparent outline-none"
              style={{ color: COLORS.dark }}
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              style={{ color: COLORS.gray }}
              className="mr-3 hover:opacity-70 transition"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        {/* Login Button */}
        <PrimaryButton
          onClick={handleLogin}
          loading={loading}
          fullWidth
          size="lg"
          className="mb-4"
        >
          Access Admin Portal
        </PrimaryButton>

        {/* Back Button */}
        <SecondaryButton
          onClick={onBack}
          fullWidth
          size="lg"
        >
          Back to Login
        </SecondaryButton>
      </div>
    </div>
  );
};

export default AdminLoginScreen;
