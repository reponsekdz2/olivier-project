import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900/50 text-gray-400 py-12">
      <div className="container mx-auto px-4 text-center">
        <p className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-white bg-clip-text text-transparent mb-4">
            VoyageAI
        </p>
        <div className="flex justify-center space-x-6 mb-6">
          <a href="#destinations" className="hover:text-emerald-400 transition-colors">Destinations</a>
          <a href="#planner" className="hover:text-emerald-400 transition-colors">AI Planner</a>
          <a href="#stories" className="hover:text-emerald-400 transition-colors">Stories</a>
          <a href="#explore" className="hover:text-emerald-400 transition-colors">Explore</a>
        </div>
        <p>&copy; {new Date().getFullYear()} VoyageAI. All rights reserved.</p>
        <p className="text-sm mt-2">Crafting unforgettable journeys with the power of AI.</p>
      </div>
    </footer>
  );
};

export default Footer;
