import React, { useState } from 'react';

const ApiKeysSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'How do I get API keys?',
      answer: 'Visit the OpenAI or Google AI Studio websites to create accounts and generate your API keys. It\'s quick and free to start.'
    },
    {
      question: 'Is it secure?',
      answer: 'Yes, your API keys are encrypted and stored securely. We never access or store your keys directly on our servers.'
    },
    {
      question: 'What are the benefits?',
      answer: 'Unlimited content generation, full data privacy, no credit limits, and direct access to the latest AI models.'
    },
    {
      question: 'Can I use both providers?',
      answer: 'Absolutely! You can integrate keys from both OpenAI and Gemini for maximum flexibility in your content creation.'
    }
  ];

  return (
    <section className="py-16 bg-neutral">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side: Bring Your Own API Keys */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Bring Your Own API Keys</h2>
            <p className="text-lg mb-8">
              For advanced users, integrate your own API keys for full control over your content creation process.
              Unlimited usage, complete data privacy, and no credit limits.
            </p>
            <div className="bg-white p-8 rounded-lg border border-neutral shadow-sm">
              <h3 className="text-2xl font-semibold mb-6">API Key Integration</h3>
              <div className="space-y-4">
                <div className="border-b border-gray-200 pb-4">
                  <h4 className="font-semibold text-lg">Unlimited content generation</h4>
                  <p className="text-base text-gray-700 mt-2">Generate as much content as you need without worrying about monthly limits.</p>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <h4 className="font-semibold text-lg">Full data privacy</h4>
                  <p className="text-base text-gray-700 mt-2">Your data remains private and secure with direct API access.</p>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <h4 className="font-semibold text-lg">No credit limits</h4>
                  <p className="text-base text-gray-700 mt-2">Bypass credit restrictions and pay only for what you use through your providers.</p>
                </div>
                <div className="pb-4">
                  <h4 className="font-semibold text-lg">Direct API access</h4>
                  <p className="text-base text-gray-700 mt-2">Access the latest AI models and features directly from OpenAI and Gemini.</p>
                </div>
              </div>
              <button className="bg-primary text-secondary px-6 py-3 rounded-full font-semibold hover:opacity-90 transition mt-6">
                Learn More
              </button>
            </div>
          </div>
          {/* Right Side: FAQ */}
          <div className="bg-white p-8 rounded-lg border border-neutral shadow-sm">
            <h3 className="text-2xl font-semibold mb-6">FAQ</h3>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-4">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left flex justify-between items-center py-2 focus:outline-none"
                  >
                    <h4 className="font-semibold text-lg">{faq.question}</h4>
                    <svg
                      className={`w-5 h-5 transform transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openIndex === index && (
                    <p className="text-base text-gray-700 mt-2">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApiKeysSection;