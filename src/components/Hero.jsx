import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import { Button } from './Button';
import { Link } from 'react-router-dom';

export const Hero = () => {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black pt-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-full blur-3xl"
          animate={{
            x: [0, 30, -30, 0],
            y: [0, -30, 30, 0]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 30, 0],
            y: [0, 30, -30, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
        <motion.div
          className="w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Subtitle */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-2 mb-6 w-fit"
          >
            <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
            <span className="text-cyan-400 font-semibold text-sm uppercase tracking-widest">
              Premium Services
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              {t.hero.title}
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-300 mb-4 max-w-2xl"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-400 mb-8 max-w-2xl"
          >
            {t.hero.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <Link to="/services">
              <Button size="lg" className="w-full sm:w-auto">
                {t.hero.cta}
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                {t.nav.contact}
              </Button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-8 mt-16 max-w-2xl"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400">2500+</div>
              <div className="text-gray-400 text-sm mt-2">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400">5000+</div>
              <div className="text-gray-400 text-sm mt-2">Projects Done</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400">15+</div>
              <div className="text-gray-400 text-sm mt-2">Years Experience</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="text-gray-400 text-center">
            <div className="text-xs uppercase tracking-widest mb-2">Scroll Down</div>
            <div className="text-2xl">↓</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
