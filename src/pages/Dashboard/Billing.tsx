import React, { useState } from 'react';
import { DropdownMenu, DropdownMenuItem } from '../../components/ui/dropdown';

const Billing: React.FC = () => {
  const [activeTab, setActiveTab] = useState('subscription');
  const [dateFilter, setDateFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const currentPlan = {
    name: 'Pro',
    price: '$29',
    period: 'month',
    features: ['500 credits/month', 'AI tutoring', 'Graphics included', 'Priority support'],
    nextBilling: 'March 15, 2025'
  };

  const paymentHistory = [
    { date: 'Feb 15, 2025', amount: '$29.00', status: 'Paid', method: 'Visa ****1234' },
    { date: 'Jan 15, 2025', amount: '$29.00', status: 'Paid', method: 'Visa ****1234' },
    { date: 'Dec 15, 2024', amount: '$29.00', status: 'Paid', method: 'Visa ****1234' },
    { date: 'Nov 15, 2024', amount: '$29.00', status: 'Paid', method: 'Visa ****1234' },
    { date: 'Oct 15, 2024', amount: '$29.00', status: 'Paid', method: 'Visa ****1234' },
    { date: 'Sep 15, 2024', amount: '$29.00', status: 'Paid', method: 'Visa ****1234' },
    { date: 'Aug 15, 2024', amount: '$29.00', status: 'Paid', method: 'Visa ****1234' },
  ];

  // Filter payment history based on date filter
  const filteredHistory = paymentHistory.filter((payment) => {
    if (dateFilter === 'all') return true;
    const paymentDate = new Date(payment.date);
    const now = new Date();
    const monthsAgo = new Date(now.getFullYear(), now.getMonth() - parseInt(dateFilter), now.getDate());
    return paymentDate >= monthsAgo;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredHistory.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedHistory = filteredHistory.slice(startIndex, startIndex + itemsPerPage);

  const paymentMethods = [
    { id: 1, type: 'visa', last4: '1234', expiry: '12/26', isDefault: true },
    { id: 2, type: 'mastercard', last4: '5678', expiry: '08/27', isDefault: false },
  ];

  const tabs = [
    { id: 'subscription', label: 'Subscription' },
    { id: 'settings', label: 'Settings' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Billing & Subscription</h1>
        <p className="text-lg text-gray-600">Manage your subscription, payment methods, and billing history</p>
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
          {activeTab === 'subscription' && (
            <div className="space-y-6">
              {/* Current Plan */}
              <div className="bg-white p-6 rounded-lg border border-neutral shadow-sm">
                <h2 className="text-xl font-semibold mb-4">Current Plan</h2>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold">{currentPlan.name} Plan</h3>
                    <p className="text-gray-600">{currentPlan.price}/{currentPlan.period}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Next billing</p>
                    <p className="font-semibold">{currentPlan.nextBilling}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {currentPlan.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <button className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition">
                    Upgrade Plan
                  </button>
                  <button className="border border-primary text-primary px-6 py-3 rounded-full font-semibold hover:bg-primary hover:text-white transition">
                    Manage Plan
                  </button>
                </div>
              </div>

              {/* Billing History */}
              <div className="bg-white p-6 rounded-lg border border-neutral shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold">Billing History</h2>
                  <div className="flex items-center space-x-4">
                    <label className="text-sm font-medium text-gray-700">Filter by:</label>
                    <select
                      value={dateFilter}
                      onChange={(e) => {
                        setDateFilter(e.target.value);
                        setCurrentPage(1); // Reset to first page when filter changes
                      }}
                      className="px-3 py-2 border border-gray-300 rounded-lg bg-white text-sm"
                    >
                      <option value="all">All time</option>
                      <option value="3">Last 3 months</option>
                      <option value="6">Last 6 months</option>
                      <option value="12">Last year</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  {paginatedHistory.map((payment, index) => (
                    <div key={index} className="flex items-center justify-between py-3 border-b border-gray-200 last:border-b-0">
                      <div>
                        <p className="font-semibold">{payment.date}</p>
                        <p className="text-sm text-gray-600">{payment.method}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">{payment.amount}</p>
                        <p className={`text-sm ${payment.status === 'Paid' ? 'text-green-600' : 'text-red-600'}`}>
                          {payment.status}
                        </p>
                      </div>
                      <button className="text-primary hover:underline ml-4">Download</button>
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-600">
                      Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredHistory.length)} of {filteredHistory.length} entries
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                        disabled={currentPage === 1}
                        className="px-3 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Previous
                      </button>
                      <span className="px-3 py-2 text-sm">
                        Page {currentPage} of {totalPages}
                      </span>
                      <button
                        onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                        disabled={currentPage === totalPages}
                        className="px-3 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Next
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left Column - Payment Methods */}
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg border border-neutral shadow-sm">
                  <h2 className="text-xl font-semibold mb-4">Payment Methods</h2>
                  <div className="space-y-4">
                    {paymentMethods.map((method) => (
                      <div key={method.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                        <div className="flex items-center">
                          <div className={`w-12 h-8 ${method.type === 'visa' ? 'bg-blue-600' : 'bg-red-600'} rounded flex items-center justify-center mr-4`}>
                            <span className="text-white text-xs font-bold uppercase">{method.type}</span>
                          </div>
                          <div>
                            <p className="font-semibold capitalize">{method.type} ending in {method.last4}</p>
                            <p className="text-sm text-gray-600">Expires {method.expiry}</p>
                            {method.isDefault && <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Default</span>}
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          {!method.isDefault && (
                            <button className="p-2 text-gray-500 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors" title="Set as default">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                              </svg>
                            </button>
                          )}
                          <button className="p-2 text-gray-500 hover:text-red-500 hover:bg-gray-50 rounded-lg transition-colors" title="Remove">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button className="mt-4 w-full bg-primary text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition">
                    + Add New Card
                  </button>
                </div>
              </div>

              {/* Right Column - Billing Address */}
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg border border-neutral shadow-sm">
                  <h2 className="text-xl font-semibold mb-4">Billing Address</h2>
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Address Line 1</label>
                      <input
                        type="text"
                        defaultValue="123 Main Street"
                        className="w-full p-3 border border-gray-300 rounded-lg bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Address Line 2</label>
                      <input
                        type="text"
                        placeholder="Apt, Suite, etc."
                        className="w-full p-3 border border-gray-300 rounded-lg bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">City</label>
                      <input
                        type="text"
                        defaultValue="San Francisco"
                        className="w-full p-3 border border-gray-300 rounded-lg bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">State/Province</label>
                      <input
                        type="text"
                        defaultValue="CA"
                        className="w-full p-3 border border-gray-300 rounded-lg bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">ZIP/Postal Code</label>
                      <input
                        type="text"
                        defaultValue="94105"
                        className="w-full p-3 border border-gray-300 rounded-lg bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Country</label>
                      <DropdownMenu
                        value="United States"
                        onValueChange={() => {}}
                        placeholder="Select country"
                      >
                        <DropdownMenuItem value="United States">United States</DropdownMenuItem>
                        <DropdownMenuItem value="Canada">Canada</DropdownMenuItem>
                        <DropdownMenuItem value="United Kingdom">United Kingdom</DropdownMenuItem>
                      </DropdownMenu>
                    </div>
                  </div>
                  <button className="mt-6 w-full bg-primary text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition">
                    Save Address
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Billing;