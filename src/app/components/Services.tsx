'use client';

import { FaServer, FaUsers, FaRocket, FaShieldAlt, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Services() {
  const services = [
    {
      icon: FaServer,
      title: 'Digital Product Development',
      description: 'Engineering bespoke digital infrastructure. Full-stack applications designed for global scale.',
      features: ['Full-stack custom apps', 'Enterprise platforms', 'API-first design'],
      color: '#6366f1'
    },
    {
      icon: FaUsers,
      title: 'Digital Workforce Solutions',
      description: 'Direct integration of elite Filipino engineering talent into your internal workflows.',
      features: ['Dedicated engineering pods', 'L3 support units', 'Seamless workflow sync'],
      color: '#8b5cf6'
    },
    {
      icon: FaRocket,
      title: 'Technology Transformation',
      description: 'Modernizing legacy systems with surgical precision. Bridging technical debt and future-readiness.',
      features: ['Legacy migration', 'Cloud-native optimization', 'Security audits'],
      color: '#ec4899'
    },
    {
      icon: FaShieldAlt,
      title: 'Continuous Engineering',
      description: '24/7 system integrity with persistent monitoring and iterative improvement.',
      features: ['24/7 telemetry', 'Proactive patches', 'Strategic consulting'],
      color: '#06b6d4'
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden" style={{ background: 'var(--bg-secondary)' }}>
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-sm font-medium px-4 py-1.5 mb-4 border" style={{ 
              color: 'var(--text-secondary)',
              borderColor: 'var(--border-color)'
            }}>
              ⚡ Larkacer Nexus
            </span>
            <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: 'var(--text-primary)' }}>
              Precision <span className="gradient-text">Digital Solutions</span>
            </h2>
            <p className="max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Premium IT infrastructure and dedicated engineering teams from the top 1% of technical talent.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="card-modern p-8 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 flex-shrink-0" style={{ 
                  background: `${service.color}15`,
                  border: `1px solid ${service.color}25`
                }}>
                  <service.icon className="w-6 h-6" style={{ color: service.color }} />
                </div>
                <div>
                  <h3 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>{service.title}</h3>
                  <p className="text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>{service.description}</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {service.features.map((feature, idx) => (
                  <span key={idx} className="text-xs px-3 py-1" style={{ 
                    color: 'var(--text-muted)',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-color)'
                  }}>
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <a
            href="https://www.larkacer-nexus.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 font-medium transition-all duration-300 hover:scale-105"
            style={{ 
              color: 'var(--text-primary)',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)'
            }}
          >
            <span>Visit Larkacer Nexus</span>
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}