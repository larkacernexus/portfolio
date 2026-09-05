'use client';

import { FaRobot, FaCode, FaDatabase, FaCloud, FaTools, FaShieldAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Skills() {
  const skillCategories = [
    {
      icon: FaRobot,
      title: 'AI & Automation',
      skills: ['AI-Assisted Development', 'Workflow Automation', 'Prompt Engineering', 'AI Integration'],
      color: '#6366f1'
    },
    {
      icon: FaCode,
      title: 'Frontend Development',
      skills: ['ReactJS', 'VueJS', 'Next.js', 'Tailwind CSS', 'TypeScript'],
      color: '#06b6d4'
    },
    {
      icon: FaDatabase,
      title: 'Backend & Database',
      skills: ['PHP/Laravel', 'Node.js', 'MySQL', 'PostgreSQL', 'REST APIs'],
      color: '#10b981'
    },
    {
      icon: FaCloud,
      title: 'Cloud & DevOps',
      skills: ['AWS', 'Docker', 'Git/GitHub', 'CI/CD', 'Linux'],
      color: '#f59e0b'
    },
    {
      icon: FaTools,
      title: 'Tools & Workflows',
      skills: ['Google Apps Script', 'Figma', 'Agile/Scrum', 'Trello', 'Jira'],
      color: '#ec4899'
    },
    {
      icon: FaShieldAlt,
      title: 'System & Security',
      skills: ['System Architecture', 'Security Best Practices', 'Performance Optimization'],
      color: '#8b5cf6'
    }
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden" style={{ background: 'var(--bg-primary)' }}>
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-3xl"></div>
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
              My <span className="gradient-text">Skills</span>
            </h2>
            <p className="max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Expertise across the full spectrum of modern development
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="card-modern p-6 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div 
                  className="p-3 rounded-xl transition-all duration-300 group-hover:scale-110"
                  style={{ background: `${category.color}20` }}
                >
                  <category.icon className="w-6 h-6" style={{ color: category.color }} />
                </div>
                <h3 className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <motion.span
                    key={idx}
                    className="tag-glow text-xs"
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}