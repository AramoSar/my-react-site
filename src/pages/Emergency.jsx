import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components';
import { useLanguage } from '../hooks/useLanguage';
import { FaPhone, FaClock, FaTruck, FaShieldAlt, FaTools, FaHeadset } from 'react-icons/fa';

export const Emergency = () => {
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

  return (
    <div>
      {/* Emergency Header */}
      <section className="min-h-screen pt-32 pb-24 bg-gradient-to-b from-red-900/20 via-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-8xl mb-6 inline-block"
            >
              🚨
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              {t.emergency.title}
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              {t.emergency.subtitle}
            </p>

            {/* Emergency CTA */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mb-12"
            >
              <a href="tel:+15551234567">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white shadow-2xl hover:shadow-3xl"
                >
                  <FaPhone className="mr-2" />
                  {t.emergency.callNow}
                </Button>
              </a>
            </motion.div>

            <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-lg font-semibold">
              <div className="text-cyan-400">
                <div className="text-3xl mb-2">⏱️</div>
                {t.emergency.responseTime}
              </div>
              <div className="text-green-400">
                <div className="text-3xl mb-2">✓</div>
                {t.emergency.available}
              </div>
            </div>
          </motion.div>

          {/* Emergency Services Features */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24"
          >
            {[
              {
                icon: FaPhone,
                title: 'Instant Response',
                description: 'Call us immediately and we dispatch a team within 30 minutes'
              },
              {
                icon: FaTruck,
                title: 'Mobile Units',
                description: 'Fully equipped emergency response vehicles ready 24/7'
              },
              {
                icon: FaTools,
                title: 'Expert Technicians',
                description: 'Certified professionals trained in emergency procedures'
              },
              {
                icon: FaShieldAlt,
                title: 'Fully Insured',
                description: 'All emergency work covered by comprehensive insurance'
              },
              {
                icon: FaHeadset,
                title: 'Expert Support',
                description: 'Professional support team available for guidance'
              },
              {
                icon: FaClock,
                title: 'Always Available',
                description: 'Round the clock service 365 days a year'
              }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-red-500/50 transition-all group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    className="w-14 h-14 rounded-full bg-gradient-to-r from-red-600 to-orange-600 flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-red-500/50"
                  >
                    <Icon className="text-white text-2xl" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Emergency Situations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-red-900/30 to-orange-900/30 rounded-3xl p-12 border border-red-500/30 mb-24"
          >
            <h2 className="text-3xl font-bold text-white mb-8">Common Emergency Situations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                '🚿 Burst Pipes & Flooding',
                '⚡ Electrical Outages',
                '🔥 Heating System Failures',
                '❄️ AC Breakdowns',
                '🔧 Gas Leaks',
                '🪠 Clogged Sewers'
              ].map((situation, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700"
                >
                  <span className="text-2xl">{situation.split(' ')[0]}</span>
                  <span className="text-gray-300 font-semibold">{situation.split(' ').slice(1).join(' ')}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Process */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <h2 className="text-3xl font-bold text-white mb-12 text-center">How Our Emergency Service Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: '1', title: 'Call Us', description: 'Dial our emergency hotline' },
                { step: '2', title: 'Assessment', description: 'We assess the situation' },
                { step: '3', title: 'Dispatch', description: 'Team dispatched immediately' },
                { step: '4', title: 'Resolution', description: 'Expert solution on-site' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 text-center h-full">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, delay: index * 0.3 }}
                      className="text-5xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent mb-4"
                    >
                      {item.step}
                    </motion.div>
                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        →
                      </motion.div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-r from-red-900/50 to-orange-900/50 rounded-3xl p-12 border border-red-500/30"
          >
            <h2 className="text-4xl font-bold text-white mb-6">In an Emergency, Don't Hesitate</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our emergency response team is trained to handle any situation. Call immediately to get professional help on the way.
            </p>
            <a href="tel:+15551234567">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white shadow-2xl"
              >
                <FaPhone className="mr-2" />
                Call Emergency: +1 (555) 123-4567
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
