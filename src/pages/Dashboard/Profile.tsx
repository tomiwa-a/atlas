import React, { useState } from 'react';

const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = useState('personal');

  const tabs = [
    { id: 'personal', label: 'Personal Info' },
    { id: 'preferences', label: 'Learning Preferences' },
    { id: 'security', label: 'Security' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Profile Settings</h1>
        <p className="text-lg text-gray-600">Manage your account information and preferences</p>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg border border-neutral shadow-sm">
        <div className="border-b border-gray-200">
          <nav className="flex">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-primary text-primary'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'personal' && (
            <div className="space-y-6">
              <div className="flex items-center space-x-6">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl font-semibold">JD</span>
                </div>
                <div>
                  <button className="bg-primary text-white px-4 py-2 rounded-lg hover:opacity-90 transition">
                    Change Avatar
                  </button>
                  <p className="text-sm text-gray-600 mt-1">JPG, PNG up to 2MB</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <input
                    type="text"
                    defaultValue="John"
                    className="w-full p-3 border border-gray-300 rounded-lg bg-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <input
                    type="text"
                    defaultValue="Doe"
                    className="w-full p-3 border border-gray-300 rounded-lg bg-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    defaultValue="john.doe@example.com"
                    className="w-full p-3 border border-gray-300 rounded-lg bg-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    defaultValue="+1 (555) 123-4567"
                    className="w-full p-3 border border-gray-300 rounded-lg bg-white"
                  />
                </div>
              </div>

              <button className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition">
                Save Changes
              </button>
            </div>
          )}

          {activeTab === 'preferences' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Learning Style</h3>
                <div className="space-y-3">
                  <label className="flex items-center">
                    <input type="radio" name="style" defaultChecked className="mr-3" />
                    <span>Visual - I learn best with diagrams and images</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="style" className="mr-3" />
                    <span>Auditory - I prefer listening and discussions</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="style" className="mr-3" />
                    <span>Kinesthetic - I learn by doing and hands-on activities</span>
                  </label>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Pace Preferences</h3>
                <div className="space-y-3">
                  <label className="flex items-center">
                    <input type="radio" name="pace" className="mr-3" />
                    <span>Slow and steady - More time per lesson</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="pace" defaultChecked className="mr-3" />
                    <span>Balanced - Standard pace</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="pace" className="mr-3" />
                    <span>Fast - Quick progression</span>
                  </label>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Notifications</h3>
                <div className="space-y-3">
                  <label className="flex items-center">
                    <input type="checkbox" defaultChecked className="mr-3" />
                    <span>Email reminders for lessons</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" defaultChecked className="mr-3" />
                    <span>Progress achievement notifications</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-3" />
                    <span>Weekly summary reports</span>
                  </label>
                </div>
              </div>

              <button className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition">
                Save Preferences
              </button>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Change Password</h3>
                <div className="space-y-4 max-w-md">
                  <div>
                    <label className="block text-sm font-medium mb-2">Current Password</label>
                    <input
                      type="password"
                      className="w-full p-3 border border-gray-300 rounded-lg bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">New Password</label>
                    <input
                      type="password"
                      className="w-full p-3 border border-gray-300 rounded-lg bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Confirm New Password</label>
                    <input
                      type="password"
                      className="w-full p-3 border border-gray-300 rounded-lg bg-white"
                    />
                  </div>
                  <button className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition">
                    Update Password
                  </button>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Two-Factor Authentication</h3>
                <p className="text-gray-600 mb-4">Add an extra layer of security to your account</p>
                <button className="border border-primary text-primary px-6 py-3 rounded-full font-semibold hover:bg-primary hover:text-white transition">
                  Enable 2FA
                </button>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4 text-red-600">Danger Zone</h3>
                <p className="text-gray-600 mb-4">Permanently delete your account and all associated data</p>
                <button className="bg-red-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-600 transition">
                  Delete Account
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;