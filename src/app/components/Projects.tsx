'use client';

import { useState } from 'react';
import { FaExternalLinkAlt, FaEye, FaCheckCircle, FaClock, FaTools } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import ProjectModal from './ProjectModal';
import LivePreviewModal from './LivePreviewModal';
import { projects as sharedProjects } from './projectData';

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [previewTitle, setPreviewTitle] = useState('');

  const categories = ['all', 'Web', 'Desktop', 'Mobile', 'HTML Sites', 'Personal'];

  const projects = sharedProjects;

  const sortedProjects = [...projects].sort((a, b) => {
    if (a.status === 'completed' && b.status !== 'completed') return -1;
    if (a.status !== 'completed' && b.status === 'completed') return 1;
    return 0;
  });

  const filteredProjects = filter === 'all'
    ? sortedProjects
    : sortedProjects.filter(p => p.category === filter);

  const openModal = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const openPreview = (url: string, title: string) => {
    setPreviewUrl(url);
    setPreviewTitle(title);
  };

  const renderStatusBadge = (status: string) => {
    if (status === 'pending') {
      return (
        <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider px-2 py-1"
          style={{ color: '#f59e0b', border: '1px solid #f59e0b40', background: '#f59e0b10' }}>
          <FaClock className="w-2.5 h-2.5" /> In Progress
        </span>
      );
    }
    return null;
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden" style={{ background: 'var(--bg-primary)' }}>
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="jm-work-heading mb-16">
          <h2 className="jm-work-title font-black mb-4" style={{ color: 'var(--text-primary)' }}>
            <span className="jm-work-index">02 / PROJECT ARCHIVE</span>Selected <span className="gradient-text">Work.</span>
          </h2>
          <p className="max-w-2xl mx-auto text-sm" style={{ color: 'var(--text-secondary)' }}>
            Web systems, desktop tools, and mobile apps — built for businesses, schools, and local organizations.
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 text-sm font-medium transition-all duration-300 border ${
                  filter === cat
                    ? 'gradient-bg text-white shadow-lg shadow-indigo-500/25 border-transparent'
                    : 'hover:border-indigo-500/30'
                }`}
                style={{
                  color: filter === cat ? 'white' : 'var(--text-secondary)',
                  borderColor: filter === cat ? 'transparent' : 'var(--border-color)',
                  background: filter === cat ? 'transparent' : 'var(--bg-card)'
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
            className="portfolio-project-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="portfolio-project-card card-modern overflow-hidden relative group flex flex-col"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -4 }}
              >
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-neutral-800">
                  {project.id === 'fitlife-fitness-gym' ? (
                    <div className="jm-fitlife w-full h-full flex flex-col justify-center p-6 text-white">
                      <span className="text-xs tracking-widest text-sky-300">INTERACTIVE WEB EXPERIENCE</span>
                      <strong className="jm-fitlife-name font-black mt-3">FITLIFE</strong><div className="jm-barbell" aria-hidden="true"><i/><i/><i/><i/></div>
                      <span className="text-sm text-sky-300">FITNESS GYM</span>
                    </div>
                  ) : project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      unoptimized={project.image?.startsWith('https://') || project.image?.endsWith('.svg')}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <FaTools className="w-8 h-8 opacity-20" style={{ color: 'var(--text-muted)' }} />
                    </div>
                  )}
                  {project.status === 'pending' && (
                    <div className="absolute top-2 right-2">
                      <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider px-2 py-1 bg-yellow-500/90 text-white">
                        <FaClock className="w-2.5 h-2.5" /> In Progress
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <span
                    className="inline-block text-xs font-medium px-3 py-1 mb-4 self-start"
                    style={{
                      background: `${project.color}15`,
                      color: project.color,
                      border: `1px solid ${project.color}25`
                    }}
                  >
                    {project.category}
                  </span>

                  <h3 className="text-lg font-bold mb-1" style={{ color: 'var(--text-primary)' }}>
                    {project.title}
                  </h3>

                  <p className="text-xs mb-3" style={{ color: 'var(--text-muted)' }}>
                    {project.client} · {project.deployment}
                  </p>

                  <p className="text-sm leading-relaxed mb-4 flex-grow" style={{ color: 'var(--text-secondary)' }}>
                    {project.description}
                  </p>

                  <div className="mb-3">
                    <span className="inline-flex items-center gap-1 text-xs"
                      style={{ color: project.status === 'completed' ? '#22c55e' : '#f59e0b' }}>
                      {project.status === 'completed' ? (
                        <><FaCheckCircle className="w-3 h-3" /> {project.statusLabel}</>
                      ) : (
                        <><FaClock className="w-3 h-3" /> {project.statusLabel}</>
                      )}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="text-xs px-2.5 py-1 border" style={{
                        color: 'var(--text-muted)',
                        borderColor: 'var(--border-color)'
                      }}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4 pt-4 border-t mt-auto" style={{ borderColor: 'var(--border-color)' }}>
                    <button
                      onClick={(e) => { e.stopPropagation(); openModal(project); }}
                      className="text-sm font-medium inline-flex items-center gap-1 transition-colors hover:opacity-70"
                      style={{ color: '#818cf8' }}
                    >
                      Details <FaExternalLinkAlt className="w-3 h-3" />
                    </button>

                    {project.liveUrl && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          openPreview(project.liveUrl!, project.title);
                        }}
                        className="text-sm font-medium inline-flex items-center gap-1 transition-colors hover:opacity-70"
                        style={{ color: '#22c55e' }}
                      >
                        Live Preview <FaEye className="w-3 h-3" />
                      </button>
                    )}

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-sm font-medium inline-flex items-center gap-1 transition-colors hover:opacity-70"
                        style={{ color: '#22c55e' }}
                      >
                        Visit Site <FaExternalLinkAlt className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="text-center mt-12 max-w-2xl mx-auto">
          <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            Most systems were built for internal, offline, or desktop use — so they are not publicly deployed.
            Screenshots and code walkthroughs are available on request.
          </p>
          <div className="mt-4">
            <a
              href="#contact"
              className="inline-block px-6 py-2.5 text-sm font-medium border transition-all duration-200 hover:opacity-70 hover:border-indigo-500/30"
              style={{
                color: 'var(--text-secondary)',
                borderColor: 'var(--border-color)'
              }}
            >
              Request a Walkthrough →
            </a>
          </div>
          <p className="text-sm mt-6" style={{ color: 'var(--text-muted)' }}>
            Showing {filteredProjects.length} of {projects.length} projects
            {filter !== 'all' && ` in ${filter}`}
          </p>
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />

      <LivePreviewModal
        url={previewUrl}
        title={previewTitle}
        onClose={() => setPreviewUrl(null)}
      />
    </section>
  );
}