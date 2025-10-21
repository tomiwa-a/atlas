import React from 'react';
import { Link } from 'react-router-dom';
import AuthLayout from '../../pages/AuthLayout';

const ForgotPassword: React.FC = () => {
  return (
    <AuthLayout>
      <h1 className="text-3xl font-bold text-center mb-8">Reset Password</h1>
        <p className="text-center mb-6">Enter your email address and we'll send you a link to reset your password.</p>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              className="w-full p-3 border border-neutral rounded bg-secondary text-primary"
              placeholder="Enter your email"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-secondary px-6 py-3 rounded-full font-semibold hover:opacity-90 transition"
          >
            Send Reset Link
          </button>
        </form>
        <p className="text-center mt-6">
          Remember your password? <Link to="/signin" className="text-primary hover:opacity-75">Sign In</Link>
        </p>
    </AuthLayout>
  );
};

export default ForgotPassword;