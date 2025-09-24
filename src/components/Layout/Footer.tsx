import React from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { X as XIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-black text-neutral-300 font-sans">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <p className="text-neutral-400 text-sm leading-relaxed">
              {t('footer.mission')}
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/legacyofhope" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                 className="text-soft-teal hover:text-warm-gold transition-colors duration-300">
                <Facebook size={24} />
              </a>
              <a href="https://x.com/legacyofhope" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)"
                 className="text-soft-teal hover:text-warm-gold transition-colors duration-300">
                <XIcon size={24} />
              </a>
              <a href="https://instagram.com/legacyofhope" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                 className="text-soft-teal hover:text-warm-gold transition-colors duration-300">
                <Instagram size={24} />
              </a>
              <a href="https://linkedin.com/company/legacyofhope" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                 className="text-soft-teal hover:text-warm-gold transition-colors duration-300">
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white font-serif">{t('footer.quick_links')}</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-warm-gold transition-colors duration-300">{t('nav.about')}</Link></li>
              <li><Link to="/programs" className="hover:text-warm-gold transition-colors duration-300">{t('nav.programs')}</Link></li>
              <li><Link to="/help" className="hover:text-warm-gold transition-colors duration-300">{t('nav.help')}</Link></li>
              <li><Link to="/contact" className="hover:text-warm-gold transition-colors duration-300">{t('nav.contact')}</Link></li>
              <li><Link to="/faq" className="hover:text-warm-gold transition-colors duration-300">{t('nav.faq')}</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white font-serif">{t('footer.contact_info')}</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-soft-teal mt-0.5" />
                <div>
                  <p className="text-white">United States Office</p>
                  <p className="text-neutral-400">123 Hope Street, Suite 100<br />New York, NY 10001</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-soft-teal mt-0.5" />
                <div>
                  <p className="text-white">Kenya Office</p>
                  <p className="text-neutral-400">P.O. Box 12345<br />Nairobi, Kenya</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-soft-teal" />
                <a href="mailto:info@legacyofhope.org" className="hover:text-warm-gold transition-colors duration-300">
                  info@legacyofhope.org
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-soft-teal" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white font-serif">Stay Updated</h3>
            <p className="text-neutral-400 mb-4">Subscribe to our newsletter for updates on our programs and impact.</p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 bg-neutral-800 border border-neutral-600 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-soft-teal"
              />
              <button className="w-full bg-soft-teal hover:bg-warm-gold text-black font-medium py-2 rounded-lg transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-neutral-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-neutral-400 mb-4 md:mb-0">
            {t('footer.copyright')}
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="hover:text-warm-gold transition-colors duration-300">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-warm-gold transition-colors duration-300">Terms of Service</Link>
            <button 
              onClick={() => {
                localStorage.removeItem('cookie-consent');
                window.location.reload();
              }}
              className="hover:text-warm-gold transition-colors duration-300"
            >
              {t('footer.cookie_settings')}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
