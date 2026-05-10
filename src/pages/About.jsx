import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle, Button } from '../components';
import { useLanguage } from '../hooks/useLanguage';
import { FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const About = () => {
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
              {t.about.title}
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              {t.about.subtitle}
            </p>
          </motion.div>

          {/* About Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24"
          >
            {/* Text Content */}
            <motion.div variants={itemVariants}>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                {t.about.description1}
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                {t.about.description2}
              </p>
              <Link to="/contact">
                <Button size="lg">
                  {t.nav.contact}
                </Button>
              </Link>
            </motion.div>

            {/* Image/Visual */}
            <motion.div
              variants={itemVariants}
              className="relative h-96 rounded-3xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 flex items-center justify-center"
            >
              <motion.div
                animate={{
                  y: [0, -20, 0]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="text-center"
              >
                <div className="text-8xl mb-4">🏢</div>
                <p className="text-gray-400">Professional Team at Work</p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Why Choose Us */}
          <SectionTitle
            title={t.about.why}
            subtitle="What makes us the preferred choice"
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
          >
            {[
              t.about.feature1,
              t.about.feature2,
              t.about.feature3,
              t.about.feature4,
              t.about.feature5,
              t.about.feature6
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start gap-4 p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 hover:border-cyan-500/50 transition-all"
              >
                <FaCheckCircle className="text-cyan-400 text-2xl flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-white">{feature}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-24 bg-gradient-to-r from-blue-900/50 to-cyan-900/50 rounded-3xl p-12 border border-cyan-500/30 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
              To provide exceptional home services that exceed customer expectations, 
              delivered by skilled professionals with a commitment to quality, reliability, 
              and customer satisfaction. We aim to be the most trusted home services provider 
              in the community.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
