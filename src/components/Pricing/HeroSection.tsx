import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-primary text-secondary py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Choose Your Plan</h1>
        <p className="text-xl mb-4">Flexible pricing based on your content creation needs</p>
        <p className="text-lg">Create text-only content or enhance with graphics - all powered by AI</p>
      </div>
    </section>
  );
};

export default HeroSection;