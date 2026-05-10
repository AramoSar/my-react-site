import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle, ServiceCard } from '../components';
import { services } from '../data/services';
import { useLanguage } from '../hooks/useLanguage';

export const Services = () => {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
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
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-1 w-12 bg-gradient-to-r from-transparent to-blue-500 rounded-full" />
              <span className="text-cyan-400 font-semibold text-sm uppercase tracking-widest">
                Complete Solutions
              </span>
              <div className="h-1 w-12 bg-gradient-to-l from-transparent to-blue-500 rounded-full" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              {t.services.title}
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              {t.services.subtitle}
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24"
          >
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </motion.div>

          {/* Service Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-12 border border-gray-700"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Why Our Services Stand Out</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Expert Technicians',
                  description: 'Our team consists of certified professionals with years of experience'
                },
                {
                  title: '24/7 Availability',
                  description: 'Emergency services available around the clock for your peace of mind'
                },
                {
                  title: 'Competitive Pricing',
                  description: 'Best value for money without compromising on quality'
                },
                {
                  title: 'Guaranteed Work',
                  description: '100% satisfaction guarantee backed by our warranty'
                },
                {
                  title: 'Quick Response',
                  description: 'Average response time of 30 minutes for emergency calls'
                },
                {
                  title: 'Fully Insured',
                  description: 'All work is covered by comprehensive insurance'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-1 h-12 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full" />
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
