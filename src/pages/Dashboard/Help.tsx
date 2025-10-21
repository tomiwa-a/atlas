import React, { useState } from 'react';

const Help: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do I start a new learning path?",
      answer: "Navigate to the Learning Paths section from your dashboard. Browse available subjects or create a custom path. Click 'Start Course' to begin your learning journey."
    },
    {
      question: "Can I change my learning preferences?",
      answer: "Yes! Go to your Profile settings and select the 'Learning Preferences' tab. You can adjust your learning style, pace, and notification settings."
    },
    {
      question: "How do I track my progress?",
      answer: "Visit the Progress page to see detailed analytics of your learning activity, course completion status, achievements, and weekly learning charts."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept major credit cards (Visa, MasterCard, American Express) and PayPal. All payments are processed securely through our payment partners."
    },
    {
      question: "How do I cancel my subscription?",
      answer: "Go to Billing > Current Plan and click 'Manage Plan'. You can downgrade or cancel your subscription from there. Changes take effect at the end of your billing cycle."
    },
    {
      question: "Can I download my learning data?",
      answer: "Yes, in Settings > Account, click 'Export Data' to download all your learning history, progress, and achievements in JSON format."
    },
    {
      question: "How do I reset my password?",
      answer: "Go to Profile > Security and click 'Change Password'. You'll receive a confirmation email to verify the change."
    },
    {
      question: "What are API keys used for?",
      answer: "API keys allow you to integrate ATLAS with third-party applications. Generate keys in Profile > API Keys and use them to access our REST API."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Help & Support</h1>
        <p className="text-lg text-gray-600">Find answers to common questions and get support</p>
      </div>

      {/* Contact Support */}
      <div className="bg-white p-6 rounded-lg border border-neutral shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Contact Support</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Live Chat</h3>
            <p className="text-sm text-gray-600 mb-4">Get instant help from our support team</p>
            <button className="bg-primary text-white px-4 py-2 rounded-lg hover:opacity-90 transition">
              Start Chat
            </button>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Email Support</h3>
            <p className="text-sm text-gray-600 mb-4">Send us an email and we'll respond within 24 hours</p>
            <button className="border border-primary text-primary px-4 py-2 rounded-lg hover:bg-primary hover:text-white transition">
              Send Email
            </button>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Knowledge Base</h3>
            <p className="text-sm text-gray-600 mb-4">Browse our comprehensive help articles</p>
            <button className="border border-primary text-primary px-4 py-2 rounded-lg hover:bg-primary hover:text-white transition">
              Browse Articles
            </button>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-white p-6 rounded-lg border border-neutral shadow-sm">
        <h2 className="text-xl font-semibold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition"
              >
                <span className="font-medium">{faq.question}</span>
                <svg
                  className={`w-5 h-5 transition-transform ${openFAQ === index ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openFAQ === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* System Status */}
      <div className="bg-white p-6 rounded-lg border border-neutral shadow-sm">
        <h2 className="text-xl font-semibold mb-4">System Status</h2>
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
            <span className="text-sm font-medium">All Systems Operational</span>
          </div>
          <span className="text-sm text-gray-600">Last updated: 2 minutes ago</span>
        </div>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
            <span className="text-sm">API</span>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
              <span className="text-xs text-green-600">Operational</span>
            </div>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
            <span className="text-sm">Dashboard</span>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
              <span className="text-xs text-green-600">Operational</span>
            </div>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
            <span className="text-sm">Learning Platform</span>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
              <span className="text-xs text-green-600">Operational</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;