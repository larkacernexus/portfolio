'use client';

import { FaCode, FaDatabase, FaPlug, FaBrain } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Services() {
  const services = [
    {
      icon: FaCode,
      title: 'Web App Development',
      description: 'Full-stack web applications built end-to-end — from database design to deployed frontend.',
      features: ['Laravel', 'React / Next.js', 'Tailwind CSS'],
      color: '#6366f1'
    },
    {
      icon: FaDatabase,
      title: 'Business Systems',
      description: 'Custom systems that replace spreadsheets and paper processes for clinics, schools, and small businesses.',
      features: ['Records Management', 'Inventory & POS', 'Scheduling & Billing'],
      color: '#8b5cf6'
    },
    {
      icon: FaPlug,
      title: 'API Integration & Automation',
      description: 'Connecting third-party services, syncing data between systems, and automating repetitive workflows.',
      features: ['REST APIs', 'Google Apps Script', 'Data Sync'],
      color: '#ec4899'
    },
    {
      icon: FaBrain,
      title: 'AI-Assisted Development',
      description: 'Using AI tools to ship faster — cleaner code, faster debugging, and quicker documentation for every project.',
      features: ['Claude / ChatGPT', 'GitHub Copilot', 'Faster Delivery'],
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
            <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: 'var(--text-primary)' }}>
              What I <span className="gradient-text">Do</span>
            </h2>
            <p className="max-w-2xl mx-auto text-sm" style={{ color: 'var(--text-secondary)' }}>
              Building web systems and solving practical problems with code.
            </p>
            <p className="max-w-2xl mx-auto text-xs mt-2" style={{ color: 'var(--text-muted)' }}>
              Founder &amp; Developer at{' '}
              <a 
                href="https://www.larkacer-nexus.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:underline font-medium"
                style={{ color: 'var(--text-secondary)' }}
              >
                Larkacer Nexus
              </a>
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-8 border transition-all duration-300 hover:border-indigo-500/30"
              style={{ 
                background: 'var(--bg-card)',
                borderColor: 'var(--border-color)'
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-2.5 flex-shrink-0" style={{ 
                  background: `${service.color}15`,
                  border: `1px solid ${service.color}25`
                }}>
                  <service.icon className="w-5 h-5" style={{ color: service.color }} />
                </div>
                <div>
                  <h3 className="text-base font-bold" style={{ color: 'var(--text-primary)' }}>{service.title}</h3>
                  <p className="text-sm mt-1 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{service.description}</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {service.features.map((feature, idx) => (
                  <span key={idx} className="text-xs px-3 py-1" style={{ 
                    color: 'var(--text-muted)',
                    background: 'var(--bg-primary)',
                    border: '1px solid var(--border-color)'
                  }}>
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-xs mb-3" style={{ color: 'var(--text-muted)' }}>
            Have a project in mind?
          </p>
          <a
            href="#contact"
            className="inline-block px-6 py-2.5 text-sm font-medium border transition-all duration-200 hover:opacity-70 hover:border-indigo-500/30"
            style={{ 
              color: 'var(--text-secondary)',
              borderColor: 'var(--border-color)'
            }}
          >
            Get in Touch →
          </a>
        </motion.div>
      </div>
    </section>
  );
}