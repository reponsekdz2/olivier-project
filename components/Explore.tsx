import React from 'react';

const exploreCategories = [
  {
    name: 'Adventure',
    imageUrl: 'https://picsum.photos/seed/adventure/800/600',
  },
  {
    name: 'Culture',
    imageUrl: 'https://picsum.photos/seed/culture/800/600',
  },
  {
    name: 'Beach',
    imageUrl: 'https://picsum.photos/seed/beach/800/600',
  },
  {
    name: 'City',
    imageUrl: 'https://picsum.photos/seed/city/800/600',
  },
];

const Explore: React.FC = () => {
  return (
    <section id="explore" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-emerald-400 to-white bg-clip-text text-transparent">
          Explore Your Style
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {exploreCategories.map((category, index) => (
            <div
              key={category.name}
              className="group relative h-80 rounded-lg overflow-hidden cursor-pointer animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms`, opacity: 0 }}
            >
              <img
                src={category.imageUrl}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-colors duration-300 flex items-center justify-center">
                <h4 className="text-3xl font-bold text-white tracking-wider uppercase transition-transform duration-300 group-hover:scale-110">
                  {category.name}
                </h4>
              </div>
               <div className="shimmer-effect"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Explore;
