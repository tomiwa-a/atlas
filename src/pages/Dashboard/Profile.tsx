import React, { useState } from 'react';
import { Checkbox } from '../../components/ui/checkbox';
import { AddApiKeyModal } from '../../components/AddApiKeyModal';

interface ApiKey {
  id: string;
  provider: string;
  key: string;
}

const Profile = () => {
  const [activeTab, setActiveTab] = useState('personal');
  const [apiKeys, setApiKeys] = useState<ApiKey[]>([
    { id: '1', provider: 'openai', key: 'sk-1234567890abcdef' },
    { id: '2', provider: 'gemini', key: 'AIzaSyAbCdEfGhIjKlMnOpQrStUvWxYz' }
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingKey, setEditingKey] = useState<ApiKey | null>(null);

  const handleAddApiKey = (provider: string, key: string) => {
    const newKey: ApiKey = {
      id: Date.now().toString(),
      provider,
      key
    };
    setApiKeys([...apiKeys, newKey]);
  };

  const handleEditApiKey = (provider: string, key: string) => {
    if (editingKey) {
      setApiKeys(apiKeys.map(k => k.id === editingKey.id ? { ...k, provider, key } : k));
      setEditingKey(null);
    }
  };

  const handleDeleteApiKey = (id: string) => {
    setApiKeys(apiKeys.filter(k => k.id !== id));
  };

  const maskApiKey = (key: string) => {
    if (key.length <= 8) return key;
    return `${key.slice(0, 4)}****${key.slice(-4)}`;
  };

  const tabs = [
    { id: 'personal', label: 'Personal Info' },
    { id: 'preferences', label: 'Learning Preferences' },
    { id: 'notifications', label: 'Notifications' },
    { id: 'security', label: 'Security' },
    { id: 'api-keys', label: 'API Keys' },
  ];

  return (
    <>
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
                className={`px-6 py-4 text-base font-medium border-b-2 transition-colors ${
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
                   <p className="text-base text-gray-600 mt-1">JPG, PNG up to 2MB</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                   <label className="block text-base font-medium mb-2">First Name</label>
                  <input
                    type="text"
                    defaultValue="John"
                    className="w-full p-3 border border-gray-300 rounded-lg bg-white"
                  />
                </div>
                <div>
                   <label className="block text-base font-medium mb-2">Last Name</label>
                  <input
                    type="text"
                    defaultValue="Doe"
                    className="w-full p-3 border border-gray-300 rounded-lg bg-white"
                  />
                </div>
                <div>
                   <label className="block text-base font-medium mb-2">Email</label>
                  <input
                    type="email"
                    defaultValue="john.doe@example.com"
                    className="w-full p-3 border border-gray-300 rounded-lg bg-white"
                  />
                </div>
                 <div>
                   <label className="block text-base font-medium mb-2">Phone</label>
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
                <h3 className="text-xl font-semibold mb-4">Learning Style</h3>
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

               <button className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition">
                 Save Preferences
               </button>
            </div>
           )}

           {activeTab === 'notifications' && (
             <div className="space-y-6">
               <div>
                 <h3 className="text-lg font-semibold mb-4">Notification Preferences</h3>
                 <p className="text-gray-600 mb-6">Choose how you want to be notified about your learning progress and account activity</p>
                 <div className="space-y-4">
                   <div className="flex items-center justify-between">
                     <div>
                        <h4 className="font-medium">Email Notifications</h4>
                         <p className="text-base text-gray-600">Receive updates via email</p>
                      </div>
                      <Checkbox defaultChecked />
                   </div>
                   <div className="flex items-center justify-between">
                     <div>
                        <h4 className="font-medium">Push Notifications</h4>
                         <p className="text-base text-gray-600">Get notified in your browser</p>
                      </div>
                      <Checkbox defaultChecked />
                   </div>
                   <div className="flex items-center justify-between">
                     <div>
                        <h4 className="font-medium">Weekly Progress Report</h4>
                        <p className="text-base text-gray-600">Receive weekly learning summaries</p>
                      </div>
                      <Checkbox />
                   </div>
                   <div className="flex items-center justify-between">
                     <div>
                        <h4 className="font-medium">Lesson Reminders</h4>
                        <p className="text-base text-gray-600">Email reminders for upcoming lessons</p>
                      </div>
                      <Checkbox defaultChecked />
                   </div>
                   <div className="flex items-center justify-between">
                     <div>
                        <h4 className="font-medium">Progress Updates</h4>
                        <p className="text-base text-gray-600">Notifications for course progress milestones</p>
                      </div>
                      <Checkbox defaultChecked />
                   </div>
                 </div>
               </div>

               <button className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition">
                 Save Notification Settings
               </button>
             </div>
           )}

           {activeTab === 'security' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Change Password</h3>
                <div className="space-y-4 max-w-md">
                  <div>
                    <label className="block text-base font-medium mb-2">Current Password</label>
                    <input
                      type="password"
                      className="w-full p-3 border border-gray-300 rounded-lg bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-base font-medium mb-2">New Password</label>
                    <input
                      type="password"
                      className="w-full p-3 border border-gray-300 rounded-lg bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-base font-medium mb-2">Confirm New Password</label>
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

            {activeTab === 'api-keys' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">API Keys</h3>
                  <p className="text-gray-600 mb-4">Manage your API keys for third-party integrations</p>

                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="mb-4 bg-primary text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition"
                  >
                    Add API Key
                  </button>

                   <div className="space-y-4">
                     {apiKeys.map((apiKey) => (
                       <div key={apiKey.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
                         <div className="flex items-center space-x-3">
                           <div className={`w-3 h-3 rounded-full ${apiKey.provider === 'openai' ? 'bg-green-500' : 'bg-blue-500'}`}></div>
                           <div>
                             <p className="font-semibold capitalize">{apiKey.provider} API Key</p>
                             <p className="text-sm text-gray-600 font-mono">{maskApiKey(apiKey.key)}</p>
                           </div>
                         </div>
                         <div className="flex items-center space-x-2">
                           <button
                             onClick={() => {
                               setEditingKey(apiKey);
                               setIsModalOpen(true);
                             }}
                             className="p-2 text-gray-500 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors"
                             title="Edit API Key"
                           >
                             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                             </svg>
                           </button>
                           <button
                             onClick={() => {/* TODO: Implement disable functionality */}}
                             className="p-2 text-gray-500 hover:text-orange-500 hover:bg-gray-50 rounded-lg transition-colors"
                             title="Disable API Key"
                           >
                             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-12.728 12.728m0-12.728l12.728 12.728" />
                             </svg>
                           </button>
                           <button
                             onClick={() => handleDeleteApiKey(apiKey.id)}
                             className="p-2 text-gray-500 hover:text-red-500 hover:bg-gray-50 rounded-lg transition-colors"
                             title="Delete API Key"
                           >
                             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                             </svg>
                           </button>
                         </div>
                       </div>
                     ))}
                     {apiKeys.length === 0 && (
                       <p className="text-gray-500 text-center py-8">No API keys added yet. Click "Add API Key" to get started.</p>
                     )}
                   </div>
                </div>
             </div>
           )}
          </div>
        </div>
      </div>

      <AddApiKeyModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingKey(null);
        }}
        onSave={editingKey ? handleEditApiKey : handleAddApiKey}
        editingKey={editingKey}
      />
    </>
  );
};

export default Profile;