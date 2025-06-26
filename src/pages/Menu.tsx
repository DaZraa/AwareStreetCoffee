import React, { useState } from 'react';
import { Star, Clock } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface MenuItem {
  id: number;
  name: string;
  price: string;
  image: string;
  category: 'coffee' | 'non-coffee';
  rating: number;
  prepTime: string;
  theme: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
  };
}

const Menu: React.FC = () => {
  const { setTheme, resetTheme } = useTheme();
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const menuItems: MenuItem[] = [
    {
      id: 1,
      name: 'Kosuwer',
      price: 'Rp 15.000',
      image: 'https://github.com/DaZraa/AwareStreetCoffee/blob/main/image/WhatsApp%20Image%202025-06-26%20at%2021.34.15_6121b22f.jpg?raw=true',
      category: 'coffee',
      rating: 4.9,
      prepTime: '5 menit',
      theme: {
        primary: '#8B4513',
        secondary: '#A0522D',
        accent: '#654321',
        background: '#FFF8DC'
      }
    },
    {
      id: 2,
      name: 'Kosuwer',
      price: 'Rp 15.000',
      image: 'https://github.com/DaZraa/AwareStreetCoffee/blob/main/image/WhatsApp%20Image%202025-06-26%20at%2021.34.15_6121b22f.jpg?raw=true',
      category: 'coffee',
      rating: 4.8,
      prepTime: '7 menit',
      theme: {
        primary: '#D2691E',
        secondary: '#CD853F',
        accent: '#8B4513',
        background: '#FFFAF0'
      }
    },
    {
      id: 3,
      name: 'Kosuwer',
      price: 'Rp 15.000',
      image: 'https://github.com/DaZraa/AwareStreetCoffee/blob/main/image/WhatsApp%20Image%202025-06-26%20at%2021.34.15_6121b22f.jpg?raw=true',
      category: 'coffee',
      rating: 4.7,
      prepTime: '4 menit',
      theme: {
        primary: '#654321',
        secondary: '#8B4513',
        accent: '#A0522D',
        background: '#F5F5DC'
      }
    },
    {
      id: 4,
      name: 'Kosuwer',
      price: 'Rp 15.000',
      image: 'https://github.com/DaZraa/AwareStreetCoffee/blob/main/image/WhatsApp%20Image%202025-06-26%20at%2021.34.15_6121b22f.jpg?raw=true',
      category: 'coffee',
      rating: 4.8,
      prepTime: '6 menit',
      theme: {
        primary: '#CD853F',
        secondary: '#D2691E',
        accent: '#B8860B',
        background: '#FFFACD'
      }
    },
    {
      id: 5,
      name: 'Kosuwer',
      price: 'Rp 15.000',
      image: 'https://github.com/DaZraa/AwareStreetCoffee/blob/main/image/WhatsApp%20Image%202025-06-26%20at%2021.34.15_6121b22f.jpg?raw=true',
      category: 'coffee',
      rating: 4.8,
      prepTime: '4 menit',
      theme: {
        primary: '#4169E1',
        secondary: '#6495ED',
        accent: '#1E90FF',
        background: '#F0F8FF'
      }
    },
    {
      id: 6,
      name: 'Choco Lava',
      price: 'Rp 15.000',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGobEHZ3Ap7e3wLxPmub8_yO8CMcGkpm5Qhw&s',
      category: 'non-coffee',
      rating: 4.7,
      prepTime: '6 menit',
      theme: {
        primary: '#6B8E23',
        secondary: '#9ACD32',
        accent: '#556B2F',
        background: '#F0FFF0'
      }
    },
    {
      id: 7,
      name: 'Choco Lava',
      price: 'Rp 15.000',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGobEHZ3Ap7e3wLxPmub8_yO8CMcGkpm5Qhw&s',
      category: 'non-coffee',
      rating: 4.6,
      prepTime: '5 menit',
      theme: {
        primary: '#8B4513',
        secondary: '#A0522D',
        accent: '#654321',
        background: '#FFF8DC'
      }
    },
    {
      id: 8,
      name: 'Choco Lava',
      price: 'Rp 15.000',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGobEHZ3Ap7e3wLxPmub8_yO8CMcGkpm5Qhw&s',
      category: 'non-coffee',
      rating: 4.5,
      prepTime: '4 menit',
      theme: {
        primary: '#FFD700',
        secondary: '#FFA500',
        accent: '#FF8C00',
        background: '#FFFACD'
      }
    }
  ];

  const categories = [
    { id: 'all', name: 'Semua Menu' },
    { id: 'coffee', name: 'Kopi' },
    { id: 'non-coffee', name: 'Non Kopi' }
  ];

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  const handleItemClick = (item: MenuItem) => {
    setSelectedItem(item);
    setTheme(item.theme);
  };

  const handleCloseDetail = () => {
    setSelectedItem(null);
    resetTheme();
  };

  return (
    <div className="min-h-screen bg-cream animate-fade-in">
      {/* Header */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-charcoal mb-4 sm:mb-6">
            Menu Kami
          </h1>
          <p className="font-body text-warm-gray-600 text-lg sm:text-xl max-w-3xl mx-auto px-4">
            Jelajahi koleksi premium kami dengan berbagai pilihan kopi dan minuman 
            yang disiapkan dengan penuh cinta dan keahlian.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 sm:py-8 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-body font-medium transition-all duration-300 text-sm sm:text-base ${
                  activeCategory === category.id
                    ? 'bg-gold text-white shadow-lg'
                    : 'bg-white text-warm-gray-600 hover:bg-warm-gray-50 hover:text-charcoal'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Grid */}
      <section className="py-8 sm:py-12 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => handleItemClick(item)}
              >
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-40 sm:h-48 object-cover"
                  />
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-white/90 backdrop-blur-sm rounded-full px-2 sm:px-3 py-1 flex items-center space-x-1">
                    <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                    <span className="text-xs sm:text-sm font-body font-medium">{item.rating}</span>
                  </div>
                </div>
                
                <div className="p-4 sm:p-6">
                  <div className="flex justify-between items-start mb-3 sm:mb-4">
                    <h3 className="font-display text-lg sm:text-xl font-semibold text-charcoal pr-2">
                      {item.name}
                    </h3>
                    <span className="font-body text-base sm:text-lg font-bold text-gold whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-warm-gray-500">
                      <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="text-xs sm:text-sm font-body">{item.prepTime}</span>
                    </div>
                    
                    <button className="bg-gold text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-body font-medium hover:bg-gold-dark transition-colors">
                      Lihat Detail
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Detail Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
            <div className="relative">
              <img 
                src={selectedItem.image} 
                alt={selectedItem.name}
                className="w-full h-48 sm:h-64 object-cover rounded-t-2xl"
              />
              <button
                onClick={handleCloseDetail}
                className="absolute top-3 sm:top-4 right-3 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
              >
                <span className="text-xl sm:text-2xl text-charcoal">&times;</span>
              </button>
              
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-3 sm:p-4">
                  <div className="flex justify-between items-start">
                    <div className="flex-1 pr-3">
                      <h2 className="font-display text-xl sm:text-2xl font-bold text-charcoal mb-1">
                        {selectedItem.name}
                      </h2>
                      <div className="flex items-center space-x-3 sm:space-x-4 text-xs sm:text-sm text-warm-gray-600">
                        <div className="flex items-center space-x-1">
                          <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                          <span>{selectedItem.rating}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span>{selectedItem.prepTime}</span>
                        </div>
                      </div>
                    </div>
                    <span className="font-body text-lg sm:text-2xl font-bold text-gold whitespace-nowrap">
                      {selectedItem.price}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button 
                  className="flex-1 bg-gold text-white py-3 rounded-full font-body font-semibold hover:bg-gold-dark transition-colors text-sm sm:text-base"
                >
                  Pesan Sekarang
                </button>
                <button 
                  onClick={handleCloseDetail}
                  className="flex-1 border-2 border-warm-gray-300 text-warm-gray-600 py-3 rounded-full font-body font-semibold hover:border-warm-gray-400 hover:text-charcoal transition-colors text-sm sm:text-base"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;