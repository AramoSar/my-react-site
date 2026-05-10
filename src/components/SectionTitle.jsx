import React from 'react';
import { motion } from 'framer-motion';

export const SectionTitle = ({ title, subtitle, align = 'center' }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const alignClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className={`${alignClass[align]} mb-12`}
    >
      {/* Top decoration line */}
      {align === 'center' && (
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-4 mb-4"
        >
          <div className="h-1 w-12 bg-gradient-to-r from-transparent to-blue-500 rounded-full" />
          <span className="text-cyan-400 font-semibold text-sm uppercase tracking-widest">
            Excellence
          </span>
          <div className="h-1 w-12 bg-gradient-to-l from-transparent to-blue-500 rounded-full" />
        </motion.div>
      )}

      {/* Title */}
      <motion.h2
        variants={itemVariants}
        className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
      >
        {title}
      </motion.h2>

      {/* Subtitle */}
      {subtitle && (
        <motion.p
          variants={itemVariants}
          className="text-lg text-gray-400 max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};
