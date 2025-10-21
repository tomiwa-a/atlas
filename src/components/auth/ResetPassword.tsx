import React from 'react';
import { Link } from 'react-router-dom';
import AuthLayout from '../../pages/AuthLayout';

const ResetPassword: React.FC = () => {
  return (
    <AuthLayout>
      <h1 className="text-3xl font-bold text-center mb-8">New Password</h1>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">New Password</label>
            <input
              type="password"
              className="w-full p-3 border border-neutral rounded bg-secondary text-primary"
              placeholder="Enter new password"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Confirm New Password</label>
            <input
              type="password"
              className="w-full p-3 border border-neutral rounded bg-secondary text-primary"
              placeholder="Confirm new password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-secondary px-6 py-3 rounded-full font-semibold hover:opacity-90 transition"
          >
            Reset Password
          </button>
        </form>
        <p className="text-center mt-6">
          <Link to="/signin" className="text-primary hover:opacity-75">Back to Sign In</Link>
        </p>
    </AuthLayout>
  );
};

export default ResetPassword;