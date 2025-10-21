import React from 'react';
import Nav from '../components/Nav';
import HeroSection from '../components/Contact/HeroSection';
import ContactDetails from '../components/Contact/ContactDetails';
import ContactForm from '../components/Contact/ContactForm';
import Footer from '../components/Footer';

const ContactPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-secondary text-primary">
      <Nav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <HeroSection />
      <main className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactDetails />
          <ContactForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;