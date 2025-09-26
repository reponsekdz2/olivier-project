import React from 'react';
import DestinationCard from './DestinationCard';
import type { Destination } from '../types';

// FIX: Added dummy 'coords' to satisfy the Destination type requirement.
const featuredDestinations: Destination[] = [
  {
    id: 1,
    name: 'Serengeti Plains, Tanzania',
    description: 'Witness the Great Migration in this iconic African savanna.',
    imageUrl: 'https://picsum.photos/seed/serengeti/600/800',
    coords: { cx: '0', cy: '0' },
  },
  {
    id: 2,
    name: 'Kyoto, Japan',
    description: 'Explore ancient temples, serene gardens, and traditional geishas.',
    imageUrl: 'https://picsum.photos/seed/kyoto/600/800',
    coords: { cx: '0', cy: '0' },
  },
  {
    id: 3,
    name: 'Patagonia, Argentina',
    description: 'Hike through dramatic landscapes of glaciers, mountains, and lakes.',
    imageUrl: 'https://picsum.photos/seed/patagonia/600/800',
    coords: { cx: '0', cy: '0' },
  },
  {
    id: 4,
    name: 'Santorini, Greece',
    description: 'Experience breathtaking sunsets over the Aegean Sea.',
    imageUrl: 'https://picsum.photos/seed/santorini/600/800',
    coords: { cx: '0', cy: '0' },
  },
  {
    id: 5,
    name: 'Bora Bora, French Polynesia',
    description: 'Relax in overwater bungalows surrounded by turquoise lagoons.',
    imageUrl: 'https://picsum.photos/seed/borabora/600/800',
    coords: { cx: '0', cy: '0' },
  },
  {
    id: 6,
    name: 'Rome, Italy',
    description: 'Journey through history, from the Colosseum to the Vatican City.',
    imageUrl: 'https://picsum.photos/seed/rome/600/800',
    coords: { cx: '0', cy: '0' },
  },
  {
    id: 7,
    name: 'Amazon Rainforest, Brazil',
    description: 'Immerse yourself in the world\'s largest tropical rainforest.',
    imageUrl: 'https://picsum.photos/seed/amazon/600/800',
    coords: { cx: '0', cy: '0' },
  },
  {
    id: 8,
    name: 'Cairo, Egypt',
    description: 'Uncover the mysteries of ancient pyramids and pharaohs.',
    imageUrl: 'https://picsum.photos/seed/cairo/600/800',
    coords: { cx: '0', cy: '0' },
  },
];


const FeaturedDestinations: React.FC = () => {
  return (
    <section id="destinations" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-emerald-400 to-white bg-clip-text text-transparent">
          Popular Destinations
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredDestinations.map((dest, index) => (
            <div key={dest.id} className="animate-fadeInUp" style={{ animationDelay: `${index * 100}ms`, opacity: 0 }}>
              <DestinationCard destination={dest} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;