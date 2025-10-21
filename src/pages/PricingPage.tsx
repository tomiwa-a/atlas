import React from 'react';
import Nav from '../components/Nav';
import HeroSection from '../components/Pricing/HeroSection';
import PricingCards from '../components/Pricing/PricingCards';
import PricingTable from '../components/Pricing/PricingTable';
import ApiKeysSection from '../components/Pricing/ApiKeysSection';
import Footer from '../components/Footer';

const PricingPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-secondary text-primary flex flex-col">
      <Nav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <HeroSection />
      <main className="flex-1">
        <PricingCards />
        <PricingTable />
        <ApiKeysSection />
      </main>
      <Footer />
    </div>
  );
};

export default PricingPage;