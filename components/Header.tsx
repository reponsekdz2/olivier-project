import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <a href="#" className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-white bg-clip-text text-transparent">
            VoyageAI
          </a>
          <nav className="hidden md:flex space-x-6">
            <a href="#destinations" className="text-gray-300 hover:text-emerald-400 transition-colors">Destinations</a>
            <a href="#planner" className="text-gray-300 hover:text-emerald-400 transition-colors">AI Planner</a>
            <a href="#stories" className="text-gray-300 hover:text-emerald-400 transition-colors">Stories</a>
            <a href="#explore" className="text-gray-300 hover:text-emerald-400 transition-colors">Explore</a>
          </nav>
          <button className="hidden md:block bg-gradient-to-r from-emerald-500 to-green-500 text-black font-bold py-2 px-6 rounded-md hover:from-emerald-400 hover:to-green-400 transition-all duration-300">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
