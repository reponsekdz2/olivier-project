import React from 'react';
import Explore from './components/Explore';
import FeaturedDestinations from './components/FeaturedDestinations';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import News from './components/News';
import Events from './components/Events';

const App: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <Header />
      <main>
        <Hero />
        <FeaturedDestinations />
        <Explore />
        <News />
        <Events />
      </main>
      <Footer />
    </div>
  );
};

export default App;