import React from 'react';

const newsArticles = [
  {
    id: 1,
    category: 'Travel Tips',
    title: '10 Essential Hacks for Stress-Free Flying',
    imageUrl: 'https://picsum.photos/seed/news1/600/400',
  },
  {
    id: 2,
    category: 'New Openings',
    title: 'The Most Anticipated Hotel Openings of the Year',
    imageUrl: 'https://picsum.photos/seed/news2/600/400',
  },
  {
    id: 3,
    category: 'Sustainability',
    title: 'How to Be a More Eco-Conscious Traveler',
    imageUrl: 'https://picsum.photos/seed/news3/600/400',
  },
   {
    id: 4,
    category: 'Culture',
    title: 'Discovering the Hidden Food Markets of Southeast Asia',
    imageUrl: 'https://picsum.photos/seed/news4/600/400',
  },
];

const News: React.FC = () => {
  return (
    <section id="news" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-emerald-400 to-white bg-clip-text text-transparent">
          Latest Travel News
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {newsArticles.map((article, index) => (
            <div
              key={article.id}
              className="group relative bg-gray-900 rounded-lg overflow-hidden shadow-lg cursor-pointer animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms`, opacity: 0 }}
            >
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-sm font-semibold text-emerald-400 mb-1">{article.category}</p>
                <h4 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors duration-300">
                  {article.title}
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

export default News;
