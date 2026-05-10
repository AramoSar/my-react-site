import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';
import { useLanguage } from '../hooks/useLanguage';

export const ServiceCard = ({ service }) => {
  const { t } = useLanguage();
  const Icon = service.icon;

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    hover: { y: -10, transition: { duration: 0.3 } }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: '-50px' }}
      className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden"
    >
      {/* Background gradient on hover */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-3xl`}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 10 }}
          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg`}
        >
          <Icon className="text-white text-3xl" />
        </motion.div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-white mb-3">
          {t.services[service.key]}
        </h3>

        {/* Description */}
        <p className="text-gray-400 mb-6 leading-relaxed">
          {t.services[`${service.key}Desc`]}
        </p>

        {/* Button */}
        <motion.div
          whileHover={{ x: 5 }}
          className="inline-block"
        >
          <Button variant="secondary" size="sm">
            {t.common.button}
          </Button>
        </motion.div>
      </div>

      {/* Border gradient animation */}
      <motion.div
        className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/0 via-cyan-500/0 to-cyan-500/0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"
        style={{ 
          backgroundImage: `linear-gradient(90deg, transparent, rgba(34, 211, 238, 0.5), transparent)`,
          backgroundPosition: '200% center'
        }}
      />
    </motion.div>
  );
};
