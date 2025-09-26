import React from 'react';

const upcomingEvents = [
  {
    id: 1,
    name: 'Rio Carnival',
    location: 'Rio de Janeiro, Brazil',
    date: 'February 2025',
    imageUrl: 'https://picsum.photos/seed/event1/600/400',
  },
  {
    id: 2,
    name: 'Oktoberfest',
    location: 'Munich, Germany',
    date: 'September 2025',
    imageUrl: 'https://picsum.photos/seed/event2/600/400',
  },
  {
    id: 3,
    name: 'La Tomatina',
    location: 'Buñol, Spain',
    date: 'August 2025',
    imageUrl: 'https://picsum.photos/seed/event3/600/400',
  },
];

const Events: React.FC = () => {
  return (
    <section id="events" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-emerald-400 to-white bg-clip-text text-transparent">
          Upcoming Global Events
        </h3>
        <div className="max-w-4xl mx-auto space-y-8">
          {upcomingEvents.map((event, index) => (
            <div
              key={event.id}
              className="group flex flex-col md:flex-row items-center bg-black rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-emerald-500/20 hover:scale-105 animate-fadeInUp"
               style={{ animationDelay: `${index * 100}ms`, opacity: 0 }}
            >
              <img
                src={event.imageUrl}
                alt={event.name}
                className="w-full md:w-1/3 h-48 md:h-full object-cover"
              />
              <div className="p-6 md:p-8 flex-grow">
                <p className="text-sm font-semibold text-emerald-400">{event.date}</p>
                <h4 className="text-2xl font-bold text-white mt-1">{event.name}</h4>
                <p className="text-gray-400 mt-1">{event.location}</p>
              </div>
              <div className="p-6">
                <a href="#" className="bg-gray-800 text-white font-bold py-2 px-6 rounded-md group-hover:bg-emerald-500 group-hover:text-black transition-colors duration-300">
                  Learn More
                </a>
              </div>
               <div className="shimmer-effect"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
