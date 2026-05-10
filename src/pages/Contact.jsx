import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components';
import { useLanguage } from '../hooks/useLanguage';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

export const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    
    // Simulate form submission
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    }, 1500);
  };

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

  return (
    <div>
      {/* Page Header */}
      <section className="min-h-screen pt-32 pb-24 bg-gradient-to-b from-gray-900 via-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              {t.contact.title}
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              {t.contact.subtitle}
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12"
          >
            {/* Contact Info Cards */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center">
                <FaPhone className="text-white text-2xl" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{t.contact.phone}</h3>
              <p className="text-gray-400">+1 (555) 123-4567</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center">
                <FaEnvelope className="text-white text-2xl" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{t.contact.email}</h3>
              <p className="text-gray-400">info@homeservices.com</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center">
                <FaClock className="text-white text-2xl" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{t.contact.hours}</h3>
              <p className="text-gray-400">{t.contact.hoursText}</p>
            </motion.div>
          </motion.div>

          {/* Contact Form and Map */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            {/* Form */}
            <motion.div variants={itemVariants}>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700">
                <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      {t.contact.form.name}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                      placeholder="Your Name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      {t.contact.form.email}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      {t.contact.form.phone}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      {t.contact.form.message}
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none"
                      placeholder="Your message..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={status === 'sending'}
                  >
                    {status === 'sending' ? t.contact.form.sending : t.contact.form.submit}
                  </Button>

                  {status === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-300 text-center"
                    >
                      {t.contact.form.success}
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>

            {/* Map and Additional Info */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col gap-8"
            >
              {/* Map Placeholder */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700 h-96 flex items-center justify-center">
                <div className="text-center">
                  <FaMapMarkerAlt className="text-4xl text-cyan-400 mx-auto mb-4" />
                  <p className="text-gray-300 mb-2">123 Main Street</p>
                  <p className="text-gray-400">New York, NY 10001</p>
                </div>
              </div>

              {/* Additional Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-blue-900/50 to-cyan-900/50 rounded-2xl p-6 border border-cyan-500/30"
              >
                <h3 className="text-lg font-bold text-white mb-4">Service Areas</h3>
                <p className="text-gray-300 leading-relaxed">
                  We proudly serve the greater New York metropolitan area including Manhattan, 
                  Brooklyn, Queens, The Bronx, and Westchester County. Emergency services are 
                  available 24/7 for all service areas.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
