import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe, Heart } from 'lucide-react';
import Logo from '../assets/logo.jpg';
import LanguageDropdown from './LanguageDropdown';

const Navbar = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = location.pathname === '/';
  
  const navClass = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled || !isHomePage
      ? 'navbar-glass border-b'
      : 'bg-transparent'
  }`;

  const linkClass = `text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300`;
  const activeLinkClass = `text-blue-600 font-semibold`;

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={navClass}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={Logo} alt="Legacy of Hope Logo" className="h-10 w-auto object-contain" style={{ background: 'transparent' }} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={isActive('/') ? activeLinkClass : linkClass}
            >
              {t('nav.home')}
            </Link>
            <Link
              to="/about"
              className={isActive('/about') ? activeLinkClass : linkClass}
            >
              {t('nav.about')}
            </Link>
            <Link
              to="/programs"
              className={isActive('/programs') ? activeLinkClass : linkClass}
            >
              {t('nav.programs')}
            </Link>
            <Link
              to="/help"
              className={isActive('/help') ? activeLinkClass : linkClass}
            >
              {t('nav.help')}
            </Link>
            <Link
              to="/contact"
              className={isActive('/contact') ? activeLinkClass : linkClass}
            >
              {t('nav.contact')}
            </Link>
            <Link
              to="/faq"
              className={isActive('/faq') ? activeLinkClass : linkClass}
            >
              {t('nav.faq')}
            </Link>
            
            <LanguageDropdown />
            
            <Link to="/donate" className="btn-donate">
              {t('nav.donate')}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <LanguageDropdown />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <Link
                to="/"
                className={`block px-3 py-2 ${isActive('/') ? activeLinkClass : linkClass}`}
                onClick={() => setIsOpen(false)}
              >
                {t('nav.home')}
              </Link>
              <Link
                to="/about"
                className={`block px-3 py-2 ${isActive('/about') ? activeLinkClass : linkClass}`}
                onClick={() => setIsOpen(false)}
              >
                {t('nav.about')}
              </Link>
              <Link
                to="/programs"
                className={`block px-3 py-2 ${isActive('/programs') ? activeLinkClass : linkClass}`}
                onClick={() => setIsOpen(false)}
              >
                {t('nav.programs')}
              </Link>
              <Link
                to="/help"
                className={`block px-3 py-2 ${isActive('/help') ? activeLinkClass : linkClass}`}
                onClick={() => setIsOpen(false)}
              >
                {t('nav.help')}
              </Link>
              <Link
                to="/contact"
                className={`block px-3 py-2 ${isActive('/contact') ? activeLinkClass : linkClass}`}
                onClick={() => setIsOpen(false)}
              >
                {t('nav.contact')}
              </Link>
              <Link
                to="/faq"
                className={`block px-3 py-2 ${isActive('/faq') ? activeLinkClass : linkClass}`}
                onClick={() => setIsOpen(false)}
              >
                {t('nav.faq')}
              </Link>
              <Link
                to="/donate"
                className="block px-3 py-2 btn-donate inline-block text-center mx-3 mt-4"
                onClick={() => setIsOpen(false)}
              >
                {t('nav.donate')}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;