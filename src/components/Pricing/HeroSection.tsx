import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6">Choose Your Perfect Plan</h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto">Unlock AI-powered learning with flexible pricing. Create content, customize experiences, and scale your education journey.</p>
      </div>
    </section>
  );
};

export default HeroSection;