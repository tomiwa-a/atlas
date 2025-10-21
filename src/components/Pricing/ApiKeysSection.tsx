import React from 'react';

const ApiKeysSection: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Bring Your Own API Keys</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          For advanced users, you can integrate your own OpenAI API keys to have full control over your content creation process.
          This allows for unlimited usage without monthly credit limits and ensures your data privacy.
        </p>
        <div className="bg-secondary p-6 rounded-lg border border-neutral max-w-md mx-auto">
          <h3 className="text-xl font-semibold mb-4">API Key Integration</h3>
          <ul className="text-left space-y-2 mb-6">
            <li>• Unlimited content generation</li>
            <li>• Full data privacy</li>
            <li>• No credit limits</li>
            <li>• Direct API access</li>
          </ul>
          <button className="bg-primary text-secondary px-6 py-3 rounded-full font-semibold hover:opacity-90 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default ApiKeysSection;