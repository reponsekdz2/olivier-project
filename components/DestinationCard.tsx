import React from 'react';
import type { Destination } from '../types';

interface DestinationCardProps {
  destination: Destination;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ destination }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg h-96 transform transition-transform duration-500 hover:scale-105">
      <img src={destination.imageUrl} alt={destination.name} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      <div className="absolute bottom-0 left-0 p-6">
        <h4 className="text-2xl font-bold text-white">{destination.name}</h4>
        <p className="text-gray-300 mt-1">{destination.description}</p>
      </div>
       <div className="absolute inset-0 border-2 border-transparent group-hover:border-emerald-500 rounded-lg transition-all duration-300 pointer-events-none"></div>
    </div>
  );
};

export default DestinationCard;
