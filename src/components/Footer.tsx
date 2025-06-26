import React from 'react';
import { Coffee, Clock, MapPin, Phone, Mail } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Footer: React.FC = () => {
  const { currentTheme } = useTheme();

  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Brand */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
             <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden">
  <img 
    src="https://github.com/DaZraa/AwareStreetCoffee/blob/main/image/Frame%2011.png?raw=true" 
    alt="Logo" 
    className="w-full h-full object-cover" 
  />
</div>
              <div>
                <h3 className="font-display font-bold text-xl">Aware</h3>
                <p className="text-sm text-warm-gray-400">Street Coffee</p>
              </div>
            </div>
            <p className="text-warm-gray-300 text-sm font-body leading-relaxed">
              Menyajikan kopi premium dengan atmosfer yang elegan dan pelayanan yang istimewa 
              untuk menciptakan pengalaman yang tak terlupakan.
            </p>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h4 className="font-display font-semibold text-lg mb-4">Informasi Kontak</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-warm-gray-300 text-sm font-body">
                  Jl. Panglima Sudirman, Kota Kediri
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="text-warm-gray-300 text-sm font-body">
                  +62 21 1234 5678
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="text-warm-gray-300 text-sm font-body break-all">
                  info@AwareStreetCoffee.com
                </span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="col-span-1">
            <h4 className="font-display font-semibold text-lg mb-4">Jam Operasional</h4>
            <div className="space-y-2">
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <div className="text-warm-gray-300 text-sm font-body">
                  <div>Rabu - Senin: 18.00 - 01.00</div>
                  <div>Selasa Closed</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-warm-gray-700 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-warm-gray-400 text-sm font-body">
            &copy; 2024 Aware Street Coffee. Semua hak dilindungi undang-undang.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;