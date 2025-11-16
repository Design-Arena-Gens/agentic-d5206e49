'use client';

import { useState } from 'react';
import { Search, MapPin, Clock, Star, Heart, ChevronRight, Flame, Sparkles, TrendingUp } from 'lucide-react';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [favorites, setFavorites] = useState<Set<number>>(new Set());

  const toggleFavorite = (id: number) => {
    setFavorites(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const categories = [
    { id: 'all', name: 'All', icon: Sparkles },
    { id: 'trending', name: 'Trending', icon: TrendingUp },
    { id: 'fast', name: 'Fast', icon: Flame },
    { id: 'top', name: 'Top Rated', icon: Star },
  ];

  const restaurants = [
    {
      id: 1,
      name: 'Mama\'s Kitchen',
      cuisine: 'Italian',
      rating: 4.8,
      reviews: 324,
      time: '25-35',
      distance: '1.2 km',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80',
      badge: 'Top Rated',
    },
    {
      id: 2,
      name: 'Spice Route',
      cuisine: 'Indian',
      rating: 4.6,
      reviews: 189,
      time: '30-40',
      distance: '2.1 km',
      image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80',
      badge: 'Fast Delivery',
    },
    {
      id: 3,
      name: 'Sushi Master',
      cuisine: 'Japanese',
      rating: 4.9,
      reviews: 512,
      time: '20-30',
      distance: '0.8 km',
      image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&q=80',
      badge: 'Trending',
    },
    {
      id: 4,
      name: 'Street Tacos',
      cuisine: 'Mexican',
      rating: 4.7,
      reviews: 278,
      time: '15-25',
      distance: '1.5 km',
      image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&q=80',
      badge: 'Fast Delivery',
    },
    {
      id: 5,
      name: 'Le Petit Bistro',
      cuisine: 'French',
      rating: 4.8,
      reviews: 421,
      time: '35-45',
      distance: '3.2 km',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
      badge: 'Top Rated',
    },
    {
      id: 6,
      name: 'Burger Republic',
      cuisine: 'American',
      rating: 4.5,
      reviews: 634,
      time: '20-30',
      distance: '1.8 km',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80',
      badge: 'Trending',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-warm-200 shadow-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-brand-500 to-brand-600 rounded-xl flex items-center justify-center shadow-medium">
                <Flame className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-brand-600 to-brand-500 bg-clip-text text-transparent">
                Otlob
              </h1>
            </div>

            <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-warm-100 hover:bg-warm-200 transition-colors tap-target">
              <MapPin className="w-4 h-4 text-brand-600" />
              <span className="text-sm font-medium hidden sm:inline">Downtown, Cairo</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-50 via-white to-brand-50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-warm-900 mb-4 text-balance">
              Discover Amazing Food
            </h2>
            <p className="text-lg md:text-xl text-warm-600 text-balance max-w-2xl mx-auto">
              From local favorites to global cuisine, delivered fresh to your door
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-warm-400 group-focus-within:text-brand-500 transition-colors" />
              <input
                type="text"
                placeholder="Search for restaurants, cuisines, or dishes..."
                className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-warm-200 focus:border-brand-500 focus:ring-4 focus:ring-brand-100 outline-none transition-all shadow-soft hover:shadow-medium text-warm-900 placeholder:text-warm-400"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="flex gap-3 justify-center mt-8 flex-wrap">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all tap-target spring-bounce ${
                    activeCategory === category.id
                      ? 'bg-brand-500 text-white shadow-medium scale-105'
                      : 'bg-white text-warm-700 hover:bg-warm-100 shadow-soft hover:shadow-medium'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Restaurants Grid */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-warm-900">
            Popular Near You
          </h3>
          <button className="flex items-center gap-1 text-brand-600 hover:text-brand-700 font-medium transition-colors">
            See all
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {restaurants.map((restaurant) => (
            <div
              key={restaurant.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-strong transition-all duration-300 hover:-translate-y-1 animate-fade-in"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-brand-600 shadow-soft">
                    {restaurant.badge}
                  </span>
                </div>
                <button
                  onClick={() => toggleFavorite(restaurant.id)}
                  className="absolute top-3 right-3 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-soft hover:bg-white transition-all tap-target spring-bounce hover:scale-110"
                >
                  <Heart
                    className={`w-5 h-5 transition-colors ${
                      favorites.has(restaurant.id)
                        ? 'fill-red-500 text-red-500'
                        : 'text-warm-700'
                    }`}
                  />
                </button>
              </div>

              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="font-bold text-lg text-warm-900 mb-1">
                      {restaurant.name}
                    </h4>
                    <p className="text-sm text-warm-600">{restaurant.cuisine}</p>
                  </div>
                  <div className="flex items-center gap-1 bg-brand-50 px-2 py-1 rounded-lg">
                    <Star className="w-4 h-4 fill-brand-500 text-brand-500" />
                    <span className="text-sm font-semibold text-brand-700">
                      {restaurant.rating}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm text-warm-600">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{restaurant.time} min</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{restaurant.distance}</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-warm-100 flex items-center justify-between">
                  <span className="text-xs text-warm-500">
                    {restaurant.reviews} reviews
                  </span>
                  <button className="px-4 py-2 bg-brand-500 hover:bg-brand-600 text-white rounded-lg font-medium transition-colors shadow-soft hover:shadow-medium tap-target">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-warm-900 text-warm-50 py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-brand-500 to-brand-600 rounded-xl flex items-center justify-center">
                  <Flame className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold">Otlob 2026</h2>
              </div>
              <p className="text-warm-300 max-w-md">
                Next-generation food experience platform bringing you the best culinary experiences from around the world.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-warm-300">
                <li><a href="#" className="hover:text-brand-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-brand-400 transition-colors">Restaurants</a></li>
                <li><a href="#" className="hover:text-brand-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-brand-400 transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2 text-warm-300">
                <li><a href="#" className="hover:text-brand-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-brand-400 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-brand-400 transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-warm-800 text-center text-warm-400 text-sm">
            <p>&copy; 2026 Otlob. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
