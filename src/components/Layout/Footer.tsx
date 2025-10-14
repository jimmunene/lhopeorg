import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { X as XIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

// ✅ Import Templates directly
import Template1 from '../assets/Template1.pdf';
import Template2 from '../assets/Template2.pdf';
import Template3 from '../assets/Template3.pdf';

const Footer = () => {
  const { t } = useTranslation();
  const [showTemplates, setShowTemplates] = useState(false);
  const [password, setPassword] = useState('');
  const [accessGranted, setAccessGranted] = useState(false);

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === 'lhopeadmin') {
      setAccessGranted(true);
      setShowTemplates(false);
    } else {
      alert('Incorrect password. Please try again.');
    }
  };

  return (
    <footer className="bg-blue-500 text-neutral-300 font-sans">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <p className="text-neutral-300 text-sm leading-relaxed">
              {t('footer.mission')}
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/teensanchornitiative" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                 className="text-soft-blue hover:text-warm-gold transition-colors duration-300">
                <Facebook size={24} />
              </a>
              <a href="https://x.com/teensanchornitiative" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)"
                 className="text-soft-blue hover:text-warm-gold transition-colors duration-300">
                <XIcon size={24} />
              </a>
              <a href="https://instagram.com/teensanchornitiative" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                 className="text-soft-blue hover:text-warm-gold transition-colors duration-300">
                <Instagram size={24} />
              </a>
              <a href="https://linkedin.com/company/teensanchornitiative" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                 className="text-soft-blue hover:text-warm-gold transition-colors duration-300">
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
                <MapPin size={20} className="text-soft-blue mt-0.5" />
                <div>
                  <p className="text-white">United States Office</p>
                  <p className="text-neutral-300">928 Robinwood LN<br />Bowling Green, OH 43402</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-soft-blue mt-0.5" />
                <div>
                  <p className="text-white">Kenya Office</p>
                  <p className="text-neutral-300">P.O. Box 8745<br />Nairobi, Kenya</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-soft-blue" />
                <a href="mailto:info@teensanchornitiative.org" className="hover:text-warm-gold transition-colors duration-300">
                  info@teensanchornitiative.org
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-soft-blue" />
                <span>+1 (419) 315-0132</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white font-serif">Stay Updated</h3>
            <p className="text-neutral-300 mb-4">Subscribe to our newsletter for updates on our programs and impact.</p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 bg-neutral-800 border border-neutral-600 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-soft-blue"
              />
              <button className="w-full bg-soft-blue hover:bg-warm-gold text-black font-medium py-2 rounded-lg transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* 🔐 Company Templates (Password Protected) */}
        <div className="mt-12 border-t border-neutral-800 pt-8">
          <h3 className="text-lg font-semibold mb-4 text-white font-serif">Company Templates</h3>
          {!accessGranted ? (
            <>
              <button 
                onClick={() => setShowTemplates(!showTemplates)} 
                className="bg-soft-blue hover:bg-warm-gold text-black px-4 py-2 rounded-lg font-medium transition-colors duration-300"
              >
                Access Templates
              </button>
              {showTemplates && (
                <form onSubmit={handlePasswordSubmit} className="mt-4 space-y-3">
                  <input 
                    type="password" 
                    placeholder="Enter password" 
                    className="w-full px-4 py-2 bg-neutral-800 border border-neutral-600 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-soft-blue"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button 
                    type="submit" 
                    className="w-full bg-warm-gold text-black font-semibold py-2 rounded-lg"
                  >
                    Submit
                  </button>
                </form>
              )}
            </>
          ) : (
            <div className="space-y-3">
              {/* ✅ Using imported PDFs */}
              <a href={Template1} target="_blank" rel="noopener noreferrer" className="block text-soft-blue hover:text-warm-gold">
                📄 Template 1
              </a>
              <a href={Template2} target="_blank" rel="noopener noreferrer" className="block text-soft-blue hover:text-warm-gold">
                📄 Template 2
              </a>
              <a href={Template3} target="_blank" rel="noopener noreferrer" className="block text-soft-blue hover:text-warm-gold">
                📄 Template 3
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-neutral-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-neutral-300 mb-4 md:mb-0">
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
