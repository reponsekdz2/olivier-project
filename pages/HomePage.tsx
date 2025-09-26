import React from 'react';
import Hero from '../components/Hero';
import FeaturedDestinations from '../components/FeaturedDestinations';
import AITripPlanner from '../components/AITripPlanner';
import TravelStories from '../components/TravelStories';
import Explore from '../components/Explore';
import News from '../components/News';
import Events from '../components/Events';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <FeaturedDestinations />
      <AITripPlanner />
      <TravelStories />
      <Explore />
      <News />
      <Events />
    </>
  );
};

export default HomePage;
