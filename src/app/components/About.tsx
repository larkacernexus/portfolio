'use client';

import { FaCode, FaRocket, FaUsers, FaBrain, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function About() {
  const stats = [
    { icon: FaCode, label: 'Projects Completed', value: '15+', color: '#6366f1' },
    { icon: FaUsers, label: 'Happy Clients', value: '12+', color: '#8b5cf6' },
    { icon: FaRocket, label: 'Systems Built', value: '8', color: '#ec4899' },
    { icon: FaBrain, label: 'AI Workflows', value: '20+', color: '#06b6d4' },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden" style={{ background: 'var(--bg-primary)' }}>
      <div className="absolute inset-0 bg-grid">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
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
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              AI Automation Specialist & Lead Systems Architect at Larkacer Nexus
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
              AI Automation & <span className="gradient-text-2">Systems Specialist</span>
            </h3>
            <p className="leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
              With 3+ years of experience in implementing, troubleshooting, and optimizing 
              web-based systems, digital workflows, and client solutions. I specialize in 
              AI-assisted development, workflow automation, and system integrations.
            </p>
            <p className="leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
              As the <strong style={{ color: 'var(--text-primary)' }}>Lead Systems Architect at Larkacer Nexus</strong>, 
              I lead a team of elite Filipino engineers delivering premium IT infrastructure 
              and mission-critical systems to global enterprises.
            </p>
            <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              I'm passionate about analyzing how applications, APIs, databases, and workflows 
              connect, identifying root causes, and implementing practical solutions.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="tag-glow">AI Engineering</span>
              <span className="tag-glow">System Architecture</span>
              <span className="tag-glow">Workflow Automation</span>
              <span className="tag-glow">API Integration</span>
              <span className="tag-glow">Full-Stack Development</span>
            </div>

            <div className="mt-6 flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group"
              >
                <span>Let's work together</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="https://www.larkacer-nexus.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors group"
                style={{ color: 'var(--text-muted)' }}
              >
                <span>Visit Larkacer Nexus</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="card-modern p-6 text-center group"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div 
                  className="w-12 h-12 flex items-center justify-center mx-auto mb-3"
                  style={{ background: `${stat.color}15`, border: `1px solid ${stat.color}25` }}
                >
                  <stat.icon className="w-6 h-6" style={{ color: stat.color }} />
                </div>
                <div className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>{stat.value}</div>
                <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}