import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';

const App: React.FC = () => {
  return (
    <div className="bg-black text-white">
      <Header />
      <main>
        <HomePage />
      </main>
      <Footer />
    </div>
  );
};

export default App;
