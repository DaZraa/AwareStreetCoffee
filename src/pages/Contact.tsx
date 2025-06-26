import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

const Contact: React.FC = () => {
  const { currentTheme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Alamat',
      content: 'Jl. Panglima Sudirman, Kota Kediri, Jawa Timur'
    },
    {
      icon: Phone,
      title: 'Telepon',
      content: '+62 21 1234 5678'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@AwareStreetCoffee.com'
    },
    {
      icon: Clock,
      title: 'Jam Operasional',
      content: 'Rabu - Senin: 18.00 - 01.00 \nSelasa Closed'
    }
  ];

  return (
    <div className="min-h-screen bg-cream animate-fade-in">
      {/* Header */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-charcoal mb-4 sm:mb-6">
            Hubungi Kami
          </h1>
          <p className="font-body text-warm-gray-600 text-lg sm:text-xl max-w-3xl mx-auto px-4">
            Kami senang mendengar dari Anda. Jangan ragu untuk menghubungi kami untuk 
            pertanyaan, saran, atau reservasi.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-12 sm:py-16 lg:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Information */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-charcoal mb-4 sm:mb-6">
                  Informasi Kontak
                </h2>
                <p className="font-body text-warm-gray-600 text-base sm:text-lg mb-6 sm:mb-8">
                  Kunjungi kami atau hubungi melalui informasi kontak berikut.
                </p>
              </div>

              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((info, index) => (
                  <div 
                    key={index}
                    className="flex items-start space-x-3 sm:space-x-4 p-4 sm:p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div 
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: currentTheme.primary }}
                    >
                      <info.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display font-semibold text-lg sm:text-xl text-charcoal mb-1 sm:mb-2">
                        {info.title}
                      </h3>
                      <p className="font-body text-warm-gray-600 whitespace-pre-line text-sm sm:text-base break-words">
                        {info.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm">
                <h3 className="font-display font-semibold text-lg sm:text-xl text-charcoal mb-3 sm:mb-4">
                  Lokasi Kami
                </h3>
                <div className="w-full h-48 sm:h-64 rounded-xl overflow-hidden">
  <img 
    src="https://github.com/DaZraa/AwareStreetCoffee/blob/main/image/Screenshot%202025-06-26%20214914.png?raw=true"
    alt="Peta Lokasi Aware Street Coffee"
    className="w-full h-full object-cover"
  />
</div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-charcoal mb-4 sm:mb-6">
                Kirim Pesan
              </h2>
              
              {isSubmitted ? (
                <div className="text-center py-8 sm:py-12 animate-scale-in">
                  <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-green-500 mx-auto mb-3 sm:mb-4" />
                  <h3 className="font-display text-xl sm:text-2xl font-semibold text-charcoal mb-2">
                    Terima Kasih!
                  </h3>
                  <p className="font-body text-warm-gray-600 text-sm sm:text-base">
                    Pesan Anda telah terkirim. Kami akan segera menghubungi Anda.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="name" className="block font-body text-sm font-medium text-charcoal mb-2">
                        Nama Lengkap *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-warm-gray-300 rounded-xl focus:ring-2 focus:ring-gold focus:border-transparent transition-colors font-body text-sm sm:text-base"
                        placeholder="Masukkan nama lengkap"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block font-body text-sm font-medium text-charcoal mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-warm-gray-300 rounded-xl focus:ring-2 focus:ring-gold focus:border-transparent transition-colors font-body text-sm sm:text-base"
                        placeholder="nama@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="phone" className="block font-body text-sm font-medium text-charcoal mb-2">
                        Nomor Telepon
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-warm-gray-300 rounded-xl focus:ring-2 focus:ring-gold focus:border-transparent transition-colors font-body text-sm sm:text-base"
                        placeholder="+62 xxx xxxx xxxx"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block font-body text-sm font-medium text-charcoal mb-2">
                        Subjek *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-warm-gray-300 rounded-xl focus:ring-2 focus:ring-gold focus:border-transparent transition-colors font-body text-sm sm:text-base"
                      >
                        <option value="">Pilih subjek</option>
                        <option value="reservation">Reservasi</option>
                        <option value="inquiry">Pertanyaan</option>
                        <option value="feedback">Feedback</option>
                        <option value="complaint">Keluhan</option>
                        <option value="other">Lainnya</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block font-body text-sm font-medium text-charcoal mb-2">
                      Pesan *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-warm-gray-300 rounded-xl focus:ring-2 focus:ring-gold focus:border-transparent transition-colors font-body resize-none text-sm sm:text-base"
                      placeholder="Tulis pesan Anda di sini..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center space-x-2 py-3 sm:py-4 rounded-xl font-body font-semibold text-white transition-colors duration-300 hover:opacity-90 text-sm sm:text-base"
                    style={{ backgroundColor: currentTheme.primary }}
                  >
                    <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Kirim Pesan</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 lg:py-20 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">
            Kunjungi Aware Street Coffee Hari Ini
          </h2>
          <p className="font-body text-warm-gray-300 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Rasakan pengalaman kopi premium. 
            Kami menanti kehadiran Anda.
          </p>
          <div className="flex justify-center">
            <Link 
              to="/menu"
              className="px-6 sm:px-8 py-3 rounded-full font-body font-semibold text-white border-2 border-white hover:bg-white hover:text-charcoal transition-all duration-300 text-sm sm:text-base"
            >
              Lihat Menu
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;