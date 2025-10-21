import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const Nav: React.FC<NavProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const location = useLocation();

  const navLinks = [
    { path: '/', title: 'Home' },
    { path: '/#about', title: 'About' },
    { path: '/#how-it-works', title: 'How It Works' },
    { path: '/pricing', title: 'Pricing' },
    { path: '/contact', title: 'Contact' },
  ];

  // Map pathname to active id
  const pathToId = {
    '/': 'home',
    '/contact': 'contact',
    '/pricing': 'pricing'
  };

  const activeSection = pathToId[location.pathname];

  return (
    <>
      <header className="sticky top-0 bg-secondary bg-opacity-80 backdrop-blur-sm z-10">
        <div className="container mx-auto px-4 flex justify-between items-center p-4 text-primary">
          <Link to="/" className="text-2xl font-bold">ATLAS</Link>
          <nav className="hidden lg:flex space-x-1 items-center bg-neutral p-2 rounded-full">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 lg:px-5 lg:py-2 text-lg font-medium transition rounded-full ${
                  (link.path === '/' && activeSection === 'home') || (link.path === '/contact' && activeSection === 'contact') || (link.path === '/pricing' && activeSection === 'pricing')
                    ? 'bg-primary text-secondary'
                    : 'hover:bg-primary hover:text-primary hover:bg-opacity-10'
                }`}
              >
                {link.title}
              </Link>
            ))}
          </nav>
          <div className="lg:flex items-center space-x-4">
            <Link to="/signup" className="text-lg font-medium hover:opacity-75 transition">Sign Up</Link>
            <Link to="/signin" className="bg-primary text-secondary px-5 py-2.5 rounded-full font-semibold hover:opacity-90 transition">Sign In</Link>
          </div>

          {/* Hamburger Menu */}
          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="flex flex-col space-y-1">
              <span className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        <div
          className={`fixed top-16 left-0 right-0 bottom-0 z-20 lg:hidden flex flex-col ${isMenuOpen ? 'bg-secondary bg-opacity-95' : ''}`}
          onClick={() => setIsMenuOpen(false)}
        >
          <div
            className={`bg-secondary p-4 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex flex-col items-start space-y-6 pl-4 mb-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-xl font-semibold text-primary hover:opacity-75 transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.title}
                </Link>
              ))}
            </nav>
            <div className="mt-auto pt-8 border-t border-neutral flex flex-col items-start space-y-4 pl-4">
              <Link to="/signup" className="text-lg font-medium hover:opacity-75 transition">Sign Up</Link>
              <Link to="/signin" className="bg-primary text-secondary px-5 py-2.5 rounded-full font-semibold hover:opacity-90 transition">Sign In</Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Nav;