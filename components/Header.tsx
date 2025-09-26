import React, { useState, useEffect, useRef } from 'react';
import { SearchIcon, GlobeIcon, StarIcon, NewspaperIcon, TicketIcon } from './icons/Icons';

const navItems = [
    { href: '#destinations', label: 'Destinations', icon: GlobeIcon },
    { href: '#explore', label: 'Explore', icon: StarIcon },
    { href: '#news', label: 'News', icon: NewspaperIcon },
    { href: '#events', label: 'Events', icon: TicketIcon },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            setIsSearchActive(false);
            searchInputRef.current?.blur();
        }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSearchToggle = () => {
      setIsSearchActive(prev => {
          if (!prev) {
              setTimeout(() => searchInputRef.current?.focus(), 100);
          }
          return !prev;
      });
  };

  return (
    <>
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isSearchActive ? 'bg-black/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 h-20 flex justify-between items-center transition-all duration-300">
        
        {/* Logo */}
        <div className={`transition-all duration-300 ${isSearchActive ? 'opacity-0 scale-90' : 'opacity-100 scale-100'}`}>
             <a href="#" className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
              NgomaEvents
            </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className={`flex items-center space-x-6 text-gray-300 transition-all duration-300 ${isSearchActive ? 'opacity-0 -translate-x-16' : 'opacity-100'}`}>
                {navItems.map(item => (
                    <a key={item.label} href={item.href} className="hover:text-white transition-colors">{item.label}</a>
                ))}
            </div>
             <div className={`absolute top-1/2 -translate-y-1/2 transition-all duration-300 ${isSearchActive ? 'opacity-100' : 'opacity-0 translate-x-16'}`}>
                <div className="flex space-x-8">
                     {navItems.map(item => (
                        <a key={item.label} href={item.href} title={item.label} className="text-gray-400 hover:text-white transition-colors">
                            <item.icon size={5} />
                        </a>
                    ))}
                </div>
            </div>
        </nav>

        {/* Search Bar & Icons */}
        <div className="hidden md:flex items-center justify-end gap-4">
           <div className="relative flex items-center">
             <input
                ref={searchInputRef}
                type="text"
                placeholder="Search destinations..."
                className={`bg-transparent border-b-2 transition-all duration-300 text-white placeholder-gray-500 focus:outline-none ${isSearchActive ? 'w-64 pr-8 border-emerald-500' : 'w-0 border-transparent'}`}
                onBlur={() => { if(!searchInputRef.current?.value) setIsSearchActive(false); }}
             />
             <button onClick={handleSearchToggle} className="text-gray-300 hover:text-white transition-colors absolute right-0">
                <SearchIcon size={5} />
             </button>
           </div>
        </div>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </header>
     {isSearchActive && <div onClick={() => setIsSearchActive(false)} className="fixed inset-0 bg-black/30 z-40 backdrop-blur-sm md:block hidden"></div>}
     </>
  );
};

export default Header;
