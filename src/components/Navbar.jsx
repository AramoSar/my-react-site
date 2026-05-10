import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useLanguage } from '../hooks/useLanguage';
import { Button } from './Button';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, changeLanguage, t } = useLanguage();

  const navLinks = [
    { label: t.nav.home, path: '/' },
    { label: t.nav.services, path: '/services' },
    { label: t.nav.about, path: '/about' },
    { label: t.nav.contact, path: '/contact' },
    { label: t.nav.emergency, path: '/emergency' }
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.nav 
      className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-md border-b border-gray-800 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
            >
              HomeServices
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.div
                key={link.path}
                whileHover={{ scale: 1.05 }}
              >
                <Link
                  to={link.path}
                  className="text-gray-300 hover:text-white transition-colors duration-300 font-medium"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Right side - Language switcher and Mobile menu button */}
          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <div className="hidden md:flex gap-2 bg-gray-800 rounded-lg p-1">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => changeLanguage('en')}
                className={`px-3 py-1 rounded font-semibold transition-all ${
                  language === 'en'
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                EN
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => changeLanguage('hy')}
                className={`px-3 py-1 rounded font-semibold transition-all ${
                  language === 'hy'
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                ՀՀ
              </motion.button>
            </div>

            {/* Mobile menu button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleMenu}
              className="md:hidden text-white text-2xl"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden pb-4 space-y-2 border-t border-gray-800"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
            {/* Mobile Language Switcher */}
            <div className="flex gap-2 px-4 pt-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  changeLanguage('en');
                  setIsOpen(false);
                }}
                className={`px-4 py-2 rounded font-semibold transition-all flex-1 ${
                  language === 'en'
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                    : 'bg-gray-800 text-gray-400'
                }`}
              >
                English
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  changeLanguage('hy');
                  setIsOpen(false);
                }}
                className={`px-4 py-2 rounded font-semibold transition-all flex-1 ${
                  language === 'hy'
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                    : 'bg-gray-800 text-gray-400'
                }`}
              >
                Հայերեն
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};
