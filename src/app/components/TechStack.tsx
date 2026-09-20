'use client';

import { 
  SiJavascript, SiTypescript, SiPhp, SiReact, SiVuedotjs, 
  SiLaravel, SiNextdotjs, SiTailwindcss, SiMysql, SiPostgresql,
  SiGit, SiDocker, SiPython, SiNodedotjs, SiFirebase, SiFlutter,
  SiHtml5, SiCss, SiBootstrap, SiElectron
} from 'react-icons/si';
import { FaRobot } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function TechStack() {
  const productionTechs = [
    { icon: SiLaravel, name: 'Laravel', color: '#FF2D20' },
    { icon: SiReact, name: 'React', color: '#61DAFB' },
    { icon: SiNextdotjs, name: 'Next.js', color: '#ffffff' },
    { icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' },
    { icon: SiPhp, name: 'PHP', color: '#777BB4' },
    { icon: SiMysql, name: 'MySQL', color: '#4479A1' },
    { icon: SiTailwindcss, name: 'Tailwind CSS', color: '#06B6D4' },
    { icon: SiHtml5, name: 'HTML5', color: '#E34F26' },
    { icon: SiCss, name: 'CSS', color: '#1572B6' },
    { icon: SiGit, name: 'Git', color: '#F05032' },
    { icon: SiFlutter, name: 'Flutter', color: '#02569B' },
    { icon: SiElectron, name: 'Electron', color: '#47848F' },
  ];

  const workingTechs = [
    { icon: SiVuedotjs, name: 'Vue.js', color: '#4FC08D' },
    { icon: SiNodedotjs, name: 'Node.js', color: '#339933' },
    { icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
    { icon: SiPostgresql, name: 'PostgreSQL', color: '#336791' },
    { icon: SiFirebase, name: 'Firebase', color: '#FFCA28' },
    { icon: SiBootstrap, name: 'Bootstrap', color: '#7952B3' },
    { icon: SiDocker, name: 'Docker', color: '#2496ED' },
  ];

  const learningTechs = [
    { icon: SiPython, name: 'Python', color: '#3776AB' },
  ];

  // All 9 AI tools you listed
  const aiTools = [
    { name: 'Claude',          color: '#7C3AED' },
    { name: 'ChatGPT',         color: '#10A37F' },
    { name: 'Gemini',          color: '#4285F4' },
    { name: 'DeepSeek',        color: '#6366f1' },
    { name: 'GitHub Copilot',  color: '#6e40c9' },
    { name: 'Grok',            color: '#111827' },
    { name: 'DeepSite',        color: '#8b5cf6' },
    { name: 'Lovable',         color: '#f43f5e' },
    { name: 'Blackbox',        color: '#ef4444' },
  ];

  const renderTechCard = (tech: any, index: number) => (
    <motion.div
      key={tech.name}
      className="flex items-center gap-3 p-3 border transition-all duration-300 cursor-pointer group"
      style={{ 
        background: 'var(--bg-card)',
        borderColor: 'var(--border-color)'
      }}
      whileHover={{ 
        y: -3,
        borderColor: 'rgba(99,102,241,0.3)',
        transition: { type: 'spring', stiffness: 300 }
      }}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04 }}
      viewport={{ once: true }}
    >
      <div className="relative flex-shrink-0">
        <div 
          className="absolute -inset-2 rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"
          style={{ backgroundColor: tech.color }}
        ></div>
        <tech.icon 
          className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:scale-110" 
          style={{ color: tech.color }}
        />
      </div>
      <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
        {tech.name}
      </span>
    </motion.div>
  );

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
              🛠️ Tools &amp; Stack
            </span>
            <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: 'var(--text-primary)' }}>
              Tech <span className="gradient-text">Stack</span>
            </h2>
            <p className="max-w-2xl mx-auto text-sm" style={{ color: 'var(--text-secondary)' }}>
              What I use to build — split by how deep I am in each tool
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Production Ready */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="mb-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <h3 className="text-sm font-bold uppercase tracking-wider" style={{ color: 'var(--text-primary)' }}>
                  Production Ready
                </h3>
              </div>
              <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                I can build and ship with these today
              </p>
            </div>
            <div className="space-y-2">
              {productionTechs.map((tech, i) => renderTechCard(tech, i))}
            </div>
          </motion.div>

          {/* Working Knowledge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="mb-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                <h3 className="text-sm font-bold uppercase tracking-wider" style={{ color: 'var(--text-primary)' }}>
                  Working Knowledge
                </h3>
              </div>
              <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                I&apos;ve used these — can be productive quickly
              </p>
            </div>
            <div className="space-y-2">
              {workingTechs.map((tech, i) => renderTechCard(tech, i))}
            </div>
          </motion.div>

          {/* Learning + AI Tools */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Learning */}
            <div className="mb-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-sky-500"></span>
                <h3 className="text-sm font-bold uppercase tracking-wider" style={{ color: 'var(--text-primary)' }}>
                  Currently Learning
                </h3>
              </div>
              <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                Actively studying
              </p>
            </div>
            <div className="space-y-2 mb-8">
              {learningTechs.map((tech, i) => renderTechCard(tech, i))}
            </div>

            {/* AI Tools */}
            <div className="mb-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-violet-500"></span>
                <h3 className="text-sm font-bold uppercase tracking-wider" style={{ color: 'var(--text-primary)' }}>
                  AI Tools Used Daily
                </h3>
              </div>
              <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                For faster development, debugging &amp; docs
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {aiTools.map((tool, i) => (
                <motion.div
                  key={tool.name}
                  className="flex items-center gap-2 p-3 border"
                  style={{ 
                    background: 'var(--bg-card)',
                    borderColor: 'var(--border-color)'
                  }}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  viewport={{ once: true }}
                >
                  <FaRobot className="w-4 h-4 flex-shrink-0" style={{ color: tool.color }} />
                  <span className="text-xs font-medium truncate" style={{ color: 'var(--text-secondary)' }}>
                    {tool.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Footer */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-8 px-8 py-4 border flex-wrap justify-center" style={{ 
            borderColor: 'var(--border-color)',
            background: 'var(--bg-card)'
          }}>
            <div className="text-center">
              <div className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
                {productionTechs.length + workingTechs.length + learningTechs.length}
              </div>
              <div className="text-xs" style={{ color: 'var(--text-muted)' }}>Technologies</div>
            </div>
            <div className="w-px h-10" style={{ background: 'var(--border-color)' }}></div>
            <div className="text-center">
              <div className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
                {productionTechs.length}
              </div>
              <div className="text-xs" style={{ color: 'var(--text-muted)' }}>Production Ready</div>
            </div>
            <div className="w-px h-10" style={{ background: 'var(--border-color)' }}></div>
            <div className="text-center">
              <div className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>3+</div>
              <div className="text-xs" style={{ color: 'var(--text-muted)' }}>Years Experience</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}