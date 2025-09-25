import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "../assets/logo.jpg";
import LanguageDropdown from "./LanguageDropdown";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Common class for nav links
  const linkClass = "text-warm-gold font-medium";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-black/30 backdrop-blur-md shadow-md" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={Logo}
              alt="Legacy of Hope Logo"
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8 font-sans">
            <Link to="/" className={linkClass}>
              Home
            </Link>
            <Link to="/about" className={linkClass}>
              About
            </Link>
            <Link to="/programs" className={linkClass}>
              Programs
            </Link>
            <Link to="/help" className={linkClass}>
              Help
            </Link>
            <Link to="/contact" className={linkClass}>
              Contact
            </Link>
            <Link to="/faq" className={linkClass}>
              FAQ
            </Link>

            {/* Language Dropdown */}
            <LanguageDropdown className="text-warm-gold" />

            {/* Donate Button */}
            <Link
              to="/donate"
              className="bg-warm-gold text-black px-6 py-2 rounded-lg font-semibold"
            >
              Donate
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <LanguageDropdown className="text-warm-gold" />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-warm-gold"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Links */}
        {isOpen && (
          <div className="md:hidden bg-white/20 backdrop-blur-md border-t border-warm-gold">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className={`block px-3 py-2 ${linkClass}`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`block px-3 py-2 ${linkClass}`}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/programs"
                className={`block px-3 py-2 ${linkClass}`}
                onClick={() => setIsOpen(false)}
              >
                Programs
              </Link>
              <Link
                to="/help"
                className={`block px-3 py-2 ${linkClass}`}
                onClick={() => setIsOpen(false)}
              >
                Help
              </Link>
              <Link
                to="/contact"
                className={`block px-3 py-2 ${linkClass}`}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/faq"
                className={`block px-3 py-2 ${linkClass}`}
                onClick={() => setIsOpen(false)}
              >
                FAQ
              </Link>
              <Link
                to="/donate"
                className="block px-3 py-2 bg-warm-gold text-black font-semibold rounded-lg text-center mx-3 mt-4"
                onClick={() => setIsOpen(false)}
              >
                Donate
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
