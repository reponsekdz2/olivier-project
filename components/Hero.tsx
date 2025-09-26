import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="https://picsum.photos/seed/hero-poster/1920/1080"
        >
          {/* Using a placeholder video */}
          <source src="https://assets.mixkit.co/videos/preview/mixkit-flying-over-a-large-city-at-night-4288-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>
      <div className="relative z-10 px-4 animate-fadeInUp" style={{ opacity: 0 }}>
        <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-emerald-400 to-white bg-clip-text text-transparent">
          Discover Your Next Adventure
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300 mb-8">
          Your journey begins here. Explore the world's most captivating destinations and create unforgettable memories.
        </p>
        <a
          href="#destinations"
          className="bg-gradient-to-r from-emerald-500 to-green-500 text-black font-bold py-3 px-8 rounded-md hover:from-emerald-400 hover:to-green-400 transition-all duration-300 transform hover:scale-105"
        >
          Explore Destinations
        </a>
      </div>
    </section>
  );
};

export default Hero;
