import React from 'react';
import Nav from '../components/Nav';

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-secondary text-primary flex flex-col">
      <Nav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-md">
          {children}
        </div>
      </main>
    </div>
  );
};

export default AuthLayout;