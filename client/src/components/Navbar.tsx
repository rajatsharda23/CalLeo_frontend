// src/components/Navbar.tsx

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <header className="fixed w-full bg-deep-navy-blue text-white p-4 flex justify-between items-center">
      <div className="text-2xl font-bold">AI Calendar</div>
      <nav className="flex space-x-4">
        <Link to="/" className="text-xl">Home</Link>
        <Link to="/auth" className="text-xl">Login</Link>
        <Link to="/get-started" className="text-xl">Get Started</Link>
      </nav>
    </header>
  );
};

export default Navbar;
