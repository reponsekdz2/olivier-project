import React from 'react';
import { TwitterIcon, InstagramIcon, FacebookIcon } from './icons/Icons';


const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-black border-t border-gray-800 py-8">
      <div className="container mx-auto px-4 text-center text-gray-500">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent mb-4">
          NgomaEvents
        </h3>
        <p>Travel intelligently. Explore passionately.</p>
        <div className="flex justify-center space-x-6 mt-6">
          <a href="#" className="hover:text-white transition-all transform hover:scale-125 hover:drop-shadow-[0_0_8px_rgba(16,185,129,0.7)] duration-300">
            <TwitterIcon size={6} />
          </a>
          <a href="#" className="hover:text-white transition-all transform hover:scale-125 hover:drop-shadow-[0_0_8px_rgba(16,185,129,0.7)] duration-300">
            <InstagramIcon size={6} />
          </a>
          <a href="#" className="hover:text-white transition-all transform hover:scale-125 hover:drop-shadow-[0_0_8px_rgba(16,185,129,0.7)] duration-300">
            <FacebookIcon size={6} />
          </a>
        </div>
         <p className="mt-8 text-sm">&copy; {new Date().getFullYear()} NgomaEvents. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;