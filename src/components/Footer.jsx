import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { useLanguage } from '../hooks/useLanguage';

export const Footer = () => {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const socialLinks = [
    { icon: FaFacebook, href: '#' },
    { icon: FaTwitter, href: '#' },
    { icon: FaInstagram, href: '#' },
    { icon: FaLinkedin, href: '#' }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black pt-20 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              {t.footer.company}
            </h3>
            <p className="text-gray-400 leading-relaxed">
              {t.footer.description}
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold text-white mb-6">{t.footer.quickLinks}</h4>
            <ul className="space-y-3">
              {[
                { label: t.footer.services, path: '/services' },
                { label: t.footer.about, path: '/about' },
                { label: t.footer.contact, path: '/contact' },
                { label: t.footer.emergency, path: '/emergency' }
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold text-white mb-6">{t.footer.contactInfo}</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-400">
                <FaPhone className="text-cyan-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <FaEnvelope className="text-cyan-400" />
                <span>info@homeservices.com</span>
              </div>
              <div className="flex items-start gap-3 text-gray-400">
                <FaMapMarkerAlt className="text-cyan-400 mt-1" />
                <span>123 Main Street<br />New York, NY 10001</span>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold text-white mb-6">{t.footer.followUs}</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 rounded-full bg-gray-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-600 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                  >
                    <Icon />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          variants={itemVariants}
          className="border-t border-gray-800 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>{t.footer.copyright}</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
