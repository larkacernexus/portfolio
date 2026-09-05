'use client';

import { 
  SiJavascript, SiTypescript, SiPhp, SiReact, SiVuedotjs, 
  SiLaravel, SiNextdotjs, SiTailwindcss, SiMysql, SiPostgresql,
  SiGit, SiDocker, SiPython, SiNodedotjs, SiRedis, SiGraphql,
  SiMongodb, SiFirebase, SiTerraform, SiKubernetes
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function TechStack() {
  const techs = [
    // Languages
    { icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E', category: 'Languages' },
    { icon: SiTypescript, name: 'TypeScript', color: '#3178C6', category: 'Languages' },
    { icon: SiPython, name: 'Python', color: '#3776AB', category: 'Languages' },
    { icon: SiPhp, name: 'PHP', color: '#777BB4', category: 'Languages' },
    
    // Frameworks & Libraries
    { icon: SiReact, name: 'React', color: '#61DAFB', category: 'Frontend' },
    { icon: SiVuedotjs, name: 'Vue.js', color: '#4FC08D', category: 'Frontend' },
    { icon: SiNextdotjs, name: 'Next.js', color: '#ffffff', category: 'Frontend' },
    { icon: SiLaravel, name: 'Laravel', color: '#FF2D20', category: 'Backend' },
    { icon: SiNodedotjs, name: 'Node.js', color: '#339933', category: 'Backend' },
    { icon: SiTailwindcss, name: 'Tailwind', color: '#06B6D4', category: 'Frontend' },
    
    // Databases
    { icon: SiMysql, name: 'MySQL', color: '#4479A1', category: 'Database' },
    { icon: SiPostgresql, name: 'PostgreSQL', color: '#336791', category: 'Database' },
    { icon: SiMongodb, name: 'MongoDB', color: '#47A248', category: 'Database' },
    { icon: SiRedis, name: 'Redis', color: '#DC382D', category: 'Database' },
    
    // DevOps & Tools
    { icon: SiGit, name: 'Git', color: '#F05032', category: 'DevOps' },
    { icon: SiDocker, name: 'Docker', color: '#2496ED', category: 'DevOps' },
    { icon: SiKubernetes, name: 'K8s', color: '#326CE5', category: 'DevOps' },
    { icon: SiTerraform, name: 'Terraform', color: '#7B42BC', category: 'DevOps' },
    { icon: FaAws, name: 'AWS', color: '#FF9900', category: 'DevOps' },
    
    // Additional
    { icon: SiGraphql, name: 'GraphQL', color: '#E10098', category: 'API' },
    { icon: SiFirebase, name: 'Firebase', color: '#FFCA28', category: 'Backend' },
  ];

  const categories = ['Languages', 'Frontend', 'Backend', 'Database', 'DevOps', 'API'];
  const groupedTechs = categories.map(cat => ({
    name: cat,
    items: techs.filter(t => t.category === cat)
  }));

  return (
    <section className="py-24 relative overflow-hidden" style={{ background: 'var(--bg-secondary)' }}>
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-sm font-medium text-indigo-400 bg-indigo-400/10 px-4 py-1.5 rounded-full mb-4 border border-indigo-400/10">
              🛠️ My Arsenal
            </span>
            <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: 'var(--text-primary)' }}>
              Tech <span className="gradient-text">Stack</span>
            </h2>
            <p className="max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Technologies and tools I work with daily to build amazing solutions
            </p>
          </motion.div>
        </div>

        {/* Horizontal List Layout */}
        <div className="overflow-x-auto pb-4 hide-scrollbar">
          <div className="flex gap-12 min-w-max">
            {groupedTechs.map((group, groupIndex) => (
              <motion.div
                key={group.name}
                className="flex-shrink-0 w-56"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: groupIndex * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                {/* Category Header */}
                <div className="mb-4">
                  <h3 className="text-sm font-semibold uppercase tracking-wider flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
                    <span className="w-6 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500"></span>
                    {group.name}
                    <span className="text-xs font-normal" style={{ color: 'var(--text-muted)' }}>
                      ({group.items.length})
                    </span>
                  </h3>
                </div>

                {/* Tech Items List */}
                <div className="space-y-3">
                  {group.items.map((tech, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-xl glass-light transition-all duration-300 cursor-pointer group"
                      whileHover={{ 
                        x: 6,
                        scale: 1.02,
                        transition: { type: 'spring', stiffness: 300 }
                      }}
                      whileTap={{ scale: 0.98 }}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      {/* Icon with glow */}
                      <div className="relative flex-shrink-0">
                        <div 
                          className="absolute -inset-2 rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"
                          style={{ backgroundColor: tech.color }}
                        ></div>
                        <tech.icon 
                          className="w-6 h-6 relative z-10 transition-transform duration-300 group-hover:scale-110" 
                          style={{ color: tech.color }}
                        />
                      </div>
                      
                      {/* Tech Name */}
                      <span className="text-sm font-medium transition-colors duration-300 flex-1" style={{ color: 'var(--text-secondary)' }}>
                        {tech.name}
                      </span>
                      
                      {/* Hover indicator line */}
                      <div className="w-0 h-0.5 group-hover:w-8 transition-all duration-300" 
                           style={{ backgroundColor: tech.color }}></div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-8 px-8 py-4 rounded-2xl glass-light border border-white/5 flex-wrap justify-center">
            <div className="text-center">
              <div className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>{techs.length}</div>
              <div className="text-xs" style={{ color: 'var(--text-muted)' }}>Technologies</div>
            </div>
            <div className="w-px h-10" style={{ background: 'var(--border-color)' }}></div>
            <div className="text-center">
              <div className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>6</div>
              <div className="text-xs" style={{ color: 'var(--text-muted)' }}>Categories</div>
            </div>
            <div className="w-px h-10" style={{ background: 'var(--border-color)' }}></div>
            <div className="text-center">
              <div className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>3+</div>
              <div className="text-xs" style={{ color: 'var(--text-muted)' }}>Years Experience</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Hide scrollbar styles */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}