import React from 'react';
import { Clock, MapPin, Star, Coffee, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

const Home: React.FC = () => {
  const { currentTheme } = useTheme();

  const features = [
    {
      icon: Coffee,
      title: 'Kopi Premium',
      description: 'Biji kopi pilihan dari berbagai daerah di Indonesia'
    },
    {
      icon: Users,
      title: 'Suasana Nyaman',
      description: 'Atmosfer yang elegan dan cocok untuk berbagai acara'
    },
    {
      icon: Award,
      title: 'Pelayanan Terbaik',
      description: 'Tim profesional yang siap melayani dengan ramah'
    }
  ];

  const galleryImages = [
    'https://github.com/DaZraa/AwareStreetCoffee/blob/main/image/WhatsApp%20Image%202025-06-26%20at%2021.34.03_c9c80164.jpg?raw=true',
    'https://github.com/DaZraa/AwareStreetCoffee/blob/main/image/WhatsApp%20Image%202025-06-26%20at%2021.34.15_9457baf5.jpg?raw=true',
    'https://github.com/DaZraa/AwareStreetCoffee/blob/main/image/WhatsApp%20Image%202025-06-26%20at%2021.34.03_c9c80164.jpg?raw=true',
    'https://github.com/DaZraa/AwareStreetCoffee/blob/main/image/WhatsApp%20Image%202025-06-26%20at%2021.34.15_9457baf5.jpg?raw=true',
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://github.com/DaZraa/AwareStreetCoffee/blob/main/image/WhatsApp%20Image%202025-06-26%20at%2021.34.03_c9c80164.jpg?raw=true)',
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 animate-slide-up">
            Aware Street Coffee
          </h1>
          <p className="font-body text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 opacity-90 animate-slide-up px-4" style={{ animationDelay: '0.2s' }}>
            Tempat dimana setiap cangkir kopi bercerita tentang keistimewaan
          </p>
          <div className="flex justify-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Link 
              to="/menu"
              className="px-6 sm:px-8 py-3 rounded-full font-body font-semibold text-white border-2 border-white hover:bg-white hover:text-charcoal transition-all duration-300 text-sm sm:text-base"
            >
              Lihat Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-charcoal mb-4">
              Mengapa Memilih Aware?
            </h2>
            <p className="font-body text-warm-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
              Kami berkomitmen memberikan pengalaman kopi terbaik dengan suasana yang istimewa
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="text-center p-6 sm:p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div 
                  className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: currentTheme.primary }}
                >
                  <feature.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="font-display text-lg sm:text-xl font-semibold text-charcoal mb-3">
                  {feature.title}
                </h3>
                <p className="font-body text-warm-gray-600 text-sm sm:text-base">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-charcoal mb-4">
              Suasana Aware
            </h2>
            <p className="font-body text-warm-gray-600 text-base sm:text-lg">
              Nikmati atmosfer yang elegan dan nyaman
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img 
                  src={image} 
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">
                Kunjungi Aware Street Coffee
              </h2>
              <p className="font-body text-warm-gray-300 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
                Terletak di jantung kota Kediri, Aware Street Coffee menawarkan pengalaman kopi premium. Kami buka setiap hari untuk melayani Anda.
              </p>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div 
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                    style={{ backgroundColor: currentTheme.primary }}
                  >
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg sm:text-xl mb-2">Jam Operasional</h3>
                    <p className="font-body text-warm-gray-300 text-sm sm:text-base">
                      Rabu - Senin : 18.00 - 01.00<br />
                      Selasa Closed
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div 
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                    style={{ backgroundColor: currentTheme.primary }}
                  >
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg sm:text-xl mb-2">Alamat Lengkap</h3>
                    <p className="font-body text-warm-gray-300 text-sm sm:text-base">
                      Jl. Panglima Sudirman, Kota Kediri<br />
                      Jawa Timur
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative order-1 lg:order-2">
              <img 
                src="https://github.com/DaZraa/AwareStreetCoffee/blob/main/image/WhatsApp%20Image%202025-06-26%20at%2021.34.15_9457baf5.jpg?raw=true"
                alt="Cafe Interior"
                className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;