import React from 'react';
import { useTranslation } from 'react-i18next';
import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { X as XIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useTranslation();

  return (
  <footer className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-yellow-400" />
              <span className="text-2xl font-bold">Legacy of Hope</span>
            </div>
            <p className="text-gray-300">
              {t('footer.mission')}
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/legacyofhope" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-yellow-400 transition-colors duration-300" aria-label="Facebook">
                <Facebook size={24} />
              </a>
              <a href="https://x.com/legacyofhope" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-yellow-400 transition-colors duration-300" aria-label="X (Twitter)">
                <XIcon size={24} />
              </a>
              <a href="https://instagram.com/legacyofhope" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-yellow-400 transition-colors duration-300" aria-label="Instagram">
                <Instagram size={24} />
              </a>
              <a href="https://linkedin.com/company/legacyofhope" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-yellow-400 transition-colors duration-300" aria-label="LinkedIn">
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.quick_links')}</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors duration-300">{t('nav.about')}</Link></li>
              <li><Link to="/programs" className="text-gray-300 hover:text-white transition-colors duration-300">{t('nav.programs')}</Link></li>
              <li><Link to="/help" className="text-gray-300 hover:text-white transition-colors duration-300">{t('nav.help')}</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors duration-300">{t('nav.contact')}</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-white transition-colors duration-300">{t('nav.faq')}</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.contact_info')}</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">United States Office</p>
                  <p className="text-gray-400 text-sm">123 Hope Street, Suite 100<br />New York, NY 10001</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Kenya Office</p>
                  <p className="text-gray-400 text-sm">P.O. Box 12345<br />Nairobi, Kenya</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-blue-400" />
                <a href="mailto:info@legacyofhope.org" className="text-gray-300 hover:text-white transition-colors duration-300">
                  info@legacyofhope.org
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-blue-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-4">Subscribe to our newsletter for updates on our programs and impact.</p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors duration-300"
              />
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm mb-4 md:mb-0">
              {t('footer.copyright')}
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors duration-300">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-300 hover:text-white transition-colors duration-300">Terms of Service</Link>
              <button 
                onClick={() => {
                  localStorage.removeItem('cookie-consent');
                  window.location.reload();
                }}
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                {t('footer.cookie_settings')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;