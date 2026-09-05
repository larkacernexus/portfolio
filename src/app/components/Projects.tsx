'use client';

import { useState } from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [filter, setFilter] = useState('all');

  const categories = ['all', 'AI/ML', 'Web Apps', 'Systems', 'Automation'];

  const projects = [
    {
      title: 'Barangay Management System',
      description: 'Complete digitized clearance processing, incident tracking, and resident records management with database-driven workflows.',
      tech: ['Laravel', 'ReactJS', 'MySQL', 'Tailwind CSS'],
      features: ['Clearance Processing', 'Incident Tracking', 'Resident Records'],
      image: '🏛️',
      color: '#6366f1',
      category: 'Systems'
    },
    {
      title: 'AI-Powered Inventory System',
      description: 'Intelligent inventory and business management system reducing manual workload by 50%+ with predictive analytics.',
      tech: ['VueJS', 'Python', 'PostgreSQL', 'FastAPI'],
      features: ['Predictive Analytics', 'Automated Reporting', 'Smart Notifications'],
      image: '📊',
      color: '#8b5cf6',
      category: 'AI/ML'
    },
    {
      title: 'Workflow Automation Suite',
      description: 'Custom automation workflows integrating multiple APIs, databases, and AI tools to streamline business operations.',
      tech: ['Node.js', 'Google Apps Script', 'REST APIs', 'Claude AI'],
      features: ['API Integration', 'Data Synchronization', 'Smart Notifications'],
      image: '⚙️',
      color: '#ec4899',
      category: 'Automation'
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-featured e-commerce solution with payment integration, inventory management, and analytics dashboard.',
      tech: ['Next.js', 'Stripe', 'PostgreSQL', 'Redis'],
      features: ['Payment Gateway', 'Order Management', 'Real-time Analytics'],
      image: '🛒',
      color: '#06b6d4',
      category: 'Web Apps'
    },
    {
      title: 'Healthcare Management System',
      description: 'Medical clinic management with patient records, appointment scheduling, and billing automation.',
      tech: ['React', 'Node.js', 'MySQL', 'Docker'],
      features: ['Patient Portal', 'Appointment Scheduling', 'Billing System'],
      image: '🏥',
      color: '#10b981',
      category: 'Systems'
    },
    {
      title: 'AI Chatbot Solution',
      description: 'Intelligent chatbot powered by Claude AI for customer support and lead generation across multiple platforms.',
      tech: ['Python', 'Claude API', 'WebSocket', 'MongoDB'],
      features: ['24/7 Support', 'Lead Capture', 'Multi-platform'],
      image: '🤖',
      color: '#f59e0b',
      category: 'AI/ML'
    }
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 relative overflow-hidden" style={{ background: 'var(--bg-primary)' }}>
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: 'var(--text-primary)' }}>
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Real-world solutions that make a difference
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === cat
                    ? 'gradient-bg text-white shadow-lg shadow-indigo-500/25'
                    : 'glass-light border border-white/5 hover:border-white/20'
                }`}
                style={{ 
                  color: filter === cat ? 'white' : 'var(--text-secondary)',
                  borderColor: filter === cat ? 'transparent' : 'var(--border-color)'
                }}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                className="card-modern overflow-hidden relative group"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                {/* Glow background */}
                <div 
                  className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(ellipse at center, ${project.color}20 0%, transparent 70%)`,
                    borderRadius: '1.5rem'
                  }}
                ></div>

                <div className="relative p-8">
                  {/* Image/Icon */}
                  <div 
                    className="text-6xl mb-6 float-animation"
                    style={{ animationDelay: `${index * 0.5}s` }}
                  >
                    {project.image}
                  </div>

                  {/* Category tag */}
                  <span 
                    className="inline-block text-xs font-medium px-3 py-1 rounded-full mb-4"
                    style={{
                      background: `${project.color}20`,
                      color: project.color,
                      border: `1px solid ${project.color}30`
                    }}
                  >
                    {project.category}
                  </span>

                  <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>{project.title}</h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>{project.description}</p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="tag-glow text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.features.map((feature, idx) => (
                      <span key={idx} className="text-xs px-2.5 py-1 rounded-full" style={{ 
                        color: 'var(--text-muted)',
                        background: 'var(--bg-card)',
                        border: '1px solid var(--border-color)'
                      }}>
                        ✓ {feature}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-4 border-t" style={{ borderColor: 'var(--border-color)' }}>
                    <a 
                      href="#" 
                      className="text-sm font-medium inline-flex items-center gap-1 transition-colors"
                      style={{ color: '#818cf8' }}
                    >
                      View Project <FaExternalLinkAlt className="w-3 h-3" />
                    </a>
                    <a 
                      href="#" 
                      className="text-sm font-medium inline-flex items-center gap-1 transition-colors"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      <FaGithub className="w-3 h-3" /> Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}