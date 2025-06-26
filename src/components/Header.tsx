import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Coffee, Menu, X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();
  const { currentTheme } = useTheme();

  const navItems = [
    { path: '/', label: 'Beranda' },
    { path: '/menu', label: 'Menu' },
    { path: '/contact', label: 'Kontak' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3 group">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden">
  <img 
    src="https://github.com/DaZraa/AwareStreetCoffee/blob/main/image/Group%203.png?raw=true" 
    alt="Logo" 
    className="w-full h-full object-cover" 
  />
</div>

            <div className="flex flex-col">
              <span className="font-display font-bold text-lg sm:text-xl text-charcoal group-hover:opacity-80 transition-opacity">
                Aware
              </span>
              <span className="text-xs text-warm-gray-500 font-body hidden sm:block">Street Coffee</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-body text-sm font-medium transition-colors duration-200 relative ${
                  isActive(item.path)
                    ? 'text-charcoal'
                    : 'text-warm-gray-600 hover:text-charcoal'
                }`}
              >
                {item.label}
                {isActive(item.path) && (
                  <span 
                    className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full transition-colors duration-300"
                    style={{ backgroundColor: currentTheme.primary }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-warm-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-charcoal" />
            ) : (
              <Menu className="w-6 h-6 text-charcoal" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-warm-gray-200 animate-fade-in">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-body text-sm font-medium py-2 px-3 rounded-lg transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'text-charcoal bg-warm-gray-100'
                      : 'text-warm-gray-600 hover:text-charcoal hover:bg-warm-gray-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;