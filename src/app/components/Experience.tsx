'use client';

import { FaBriefcase, FaCalendarAlt, FaBuilding, FaAward } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Experience() {
  const experiences = [
    {
      title: 'Lead Developer & Systems Architect',
      company: 'Larkacer-Nexus IT Solutions',
      period: 'Jan 2026 – Present',
      description: [
        'Design and maintain full-stack web applications using Laravel, ReactJS, VueJS, and PostgreSQL',
        'Manage full development lifecycle from requirements to deployment and maintenance',
        'Built Barangay Management System with digitized clearance and incident tracking',
        'Reduced manual workload by 50%+ through business management systems'
      ],
      achievements: ['15+ Systems Built', 'Team Leadership', 'AI Integration']
    },
    {
      title: 'Freelance Web Developer',
      company: 'Self-Employed / Independent Projects',
      period: '2023 – Present',
      description: [
        'Developed responsive websites using HTML5, CSS3, JavaScript, and Bootstrap',
        'Managed complete project lifecycles from consultation to post-launch support',
        'Integrated frontend applications with backend services and APIs',
        'Provided ongoing troubleshooting and operational support to clients'
      ],
      achievements: ['12+ Clients', 'Custom Solutions', 'Ongoing Support']
    }
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden" style={{ background: 'var(--bg-primary)' }}>
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
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
              Work <span className="gradient-text">Experience</span>
            </h2>
            <p className="max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Professional journey building innovative solutions
            </p>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative pl-8 pb-16 last:pb-0"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-[2px]">
                <div className="w-full h-full bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 opacity-30"></div>
              </div>
              
              {/* Timeline dot */}
              <div className="absolute left-[-8px] top-6 w-4 h-4 rounded-full gradient-bg shadow-lg shadow-indigo-500/50">
                <div className="absolute inset-0 rounded-full animate-ping bg-indigo-400 opacity-50"></div>
              </div>
              
              <div className="ml-8 card-modern p-8 group">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>{exp.title}</h3>
                    <div className="flex items-center gap-2 mt-1" style={{ color: '#818cf8' }}>
                      <FaBuilding className="w-4 h-4" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm px-4 py-2 rounded-full border" style={{ 
                    color: 'var(--text-secondary)',
                    background: 'var(--bg-card)',
                    borderColor: 'var(--border-color)'
                  }}>
                    <FaCalendarAlt className="w-3 h-3" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {exp.description.map((item, idx) => (
                    <motion.li 
                      key={idx} 
                      className="text-sm flex items-start gap-3 leading-relaxed" 
                      style={{ color: 'var(--text-secondary)' }}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-indigo-400 mt-1">▸</span>
                      {item}
                    </motion.li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3 pt-4 border-t" style={{ borderColor: 'var(--border-color)' }}>
                  {exp.achievements.map((achievement, idx) => (
                    <motion.span 
                      key={idx} 
                      className="flex items-center gap-1.5 text-xs px-4 py-1.5 rounded-full font-medium border"
                      style={{
                        background: 'rgba(99, 102, 241, 0.1)',
                        color: '#818cf8',
                        borderColor: 'rgba(99, 102, 241, 0.15)'
                      }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <FaAward className="w-3 h-3" style={{ color: '#818cf8' }} />
                      {achievement}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}