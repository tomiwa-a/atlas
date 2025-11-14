import React from 'react';
import { FaUser, FaCog, FaCreditCard, FaQuestionCircle, FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

interface ProfileDropdownProps {
  onClose: () => void;
}

const ProfileDropdown: React.FC<ProfileDropdownProps> = ({ onClose }) => {
  const handleLogout = () => {
    // In real app, clear auth tokens, redirect to login
    console.log('Logout');
    onClose();
  };

  return (
    <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
            <span className="text-white font-semibold">JD</span>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900">John Doe</p>
            <p className="text-xs text-gray-500">john@example.com</p>
          </div>
        </div>
      </div>

      <div className="py-2">
        <Link
          to="/dashboard/profile"
          onClick={onClose}
          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          <FaUser className="mr-3 text-gray-400" />
          Profile
        </Link>

        <button
          onClick={() => {
            // Open settings modal or navigate
            console.log('Open settings');
            onClose();
          }}
          className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          <FaCog className="mr-3 text-gray-400" />
          Settings
        </button>

        <Link
          to="/dashboard/billing"
          onClick={onClose}
          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          <FaCreditCard className="mr-3 text-gray-400" />
          Billing
        </Link>

        <Link
          to="/dashboard/help"
          onClick={onClose}
          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          <FaQuestionCircle className="mr-3 text-gray-400" />
          Help
        </Link>
      </div>

      <div className="border-t border-gray-200 py-2">
        <button
          onClick={handleLogout}
          className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50"
        >
          <FaSignOutAlt className="mr-3" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfileDropdown;