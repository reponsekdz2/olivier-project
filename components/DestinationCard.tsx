import React from 'react';
import type { Destination } from '../types';

interface DestinationCardProps {
  destination: Destination;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ destination }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform hover:-translate-y-2 transition-transform duration-300 h-full">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-green-500 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-500"></div>
        <div className="relative bg-black rounded-lg h-full overflow-hidden">
            <img src={destination.imageUrl} alt={destination.name} className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110 rounded-t-lg" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
            <div className="shimmer-effect"></div>
            <div className="absolute bottom-0 left-0 p-6 text-white">
                <h4 className="text-2xl font-bold">{destination.name}</h4>
                <p className="text-gray-300 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-h-0 group-hover:max-h-40 overflow-hidden">{destination.description}</p>
            </div>
        </div>
    </div>
  );
};

export default DestinationCard;