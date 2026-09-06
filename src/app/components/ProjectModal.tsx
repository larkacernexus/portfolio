'use client';

import { useState } from 'react';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface ProjectModalProps {
  project: any;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  if (!isOpen || !project) return null;

  const images = project.images || [];
  const totalImages = images.length;

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? totalImages - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev === totalImages - 1 ? 0 : prev + 1));
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  const openFullscreen = () => {
    setIsFullscreen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
    document.body.style.overflow = 'auto';
  };

  const goToFullscreenPrevious = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? totalImages - 1 : prev - 1));
  };

  const goToFullscreenNext = () => {
    setCurrentImageIndex((prev) => (prev === totalImages - 1 ? 0 : prev + 1));
  };

  return (
    <>
      {/* Modal */}
      <motion.div
        className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(12px)' }}
      >
        <motion.div
          className="relative max-w-4xl w-full max-h-[92vh] overflow-y-auto p-8 md:p-10"
          style={{ 
            background: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
            borderRadius: '0px',
            boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)'
          }}
          initial={{ scale: 0.95, y: 30, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.95, y: 30, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 transition-colors hover:opacity-70 z-10"
            style={{ color: 'var(--text-muted)' }}
            aria-label="Close modal"
          >
            <FaTimes className="w-6 h-6" />
          </button>

          {/* Modal Content */}
          <div>
            {/* Category */}
            <span 
              className="inline-block text-xs font-medium uppercase tracking-wider px-3 py-1.5 mb-4"
              style={{
                background: `${project.color}15`,
                color: project.color,
                border: `1px solid ${project.color}25`,
                letterSpacing: '0.05em'
              }}
            >
              {project.category}
            </span>

            <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight" style={{ color: 'var(--text-primary)' }}>
              {project.title}
            </h3>

            {/* Image Gallery */}
            {totalImages > 0 && (
              <div className="mb-8">
                <div 
                  className="relative w-full h-72 md:h-80 lg:h-96 overflow-hidden border cursor-pointer group"
                  style={{ borderColor: 'var(--border-color)' }}
                  onClick={openFullscreen}
                >
                  <Image
                    src={images[currentImageIndex]}
                    alt={`${project.title} - Image ${currentImageIndex + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    unoptimized={images[currentImageIndex]?.startsWith('https://')}
                    priority
                  />
                  
                  {/* Navigation Arrows */}
                  {totalImages > 1 && (
                    <>
                      <button
                        onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 p-2.5 transition-all duration-200 hover:opacity-80 hover:scale-110"
                        style={{ 
                          background: 'rgba(0,0,0,0.6)',
                          color: 'white',
                          backdropFilter: 'blur(4px)'
                        }}
                        aria-label="Previous image"
                      >
                        <FaChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); goToNext(); }}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2.5 transition-all duration-200 hover:opacity-80 hover:scale-110"
                        style={{ 
                          background: 'rgba(0,0,0,0.6)',
                          color: 'white',
                          backdropFilter: 'blur(4px)'
                        }}
                        aria-label="Next image"
                      >
                        <FaChevronRight className="w-5 h-5" />
                      </button>
                    </>
                  )}

                  {/* Click to expand hint */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xs px-4 py-1.5 opacity-80" style={{
                    background: 'rgba(0,0,0,0.7)',
                    color: 'white',
                    backdropFilter: 'blur(4px)',
                    letterSpacing: '0.05em'
                  }}>
                    Click to expand
                  </div>
                </div>

                {/* Thumbnails */}
                {totalImages > 1 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {images.map((image: string, index: number) => (
                      <button
                        key={index}
                        onClick={() => goToImage(index)}
                        className={`relative w-20 h-14 border-2 transition-all duration-200 ${
                          currentImageIndex === index 
                            ? 'border-indigo-500 shadow-lg shadow-indigo-500/20' 
                            : 'border-transparent opacity-50 hover:opacity-100'
                        }`}
                        style={{ 
                          overflow: 'hidden',
                          background: 'var(--bg-secondary)'
                        }}
                      >
                        <Image
                          src={image}
                          alt={`Thumbnail ${index + 1}`}
                          fill
                          className="object-cover"
                          unoptimized={image?.startsWith('https://')}
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Description */}
            <div className="mb-8">
              <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {project.fullDescription || project.description}
              </p>
            </div>

            {/* Tech Stack */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--text-primary)' }}>
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech: string, idx: number) => (
                  <span key={idx} className="text-sm px-3.5 py-1.5 border" style={{ 
                    color: 'var(--text-secondary)',
                    borderColor: 'var(--border-color)',
                    background: 'var(--bg-primary)'
                  }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--text-primary)' }}>
                Key Features
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.features.map((feature: string, idx: number) => (
                  <span key={idx} className="text-sm px-3.5 py-1.5" style={{ 
                    color: 'var(--text-secondary)',
                    background: 'var(--bg-primary)',
                    border: '1px solid var(--border-color)'
                  }}>
                    ✓ {feature}
                  </span>
                ))}
              </div>
            </div>

            {/* Challenges & Outcome */}
            <div className="grid md:grid-cols-2 gap-6 mt-6 pt-6 border-t" style={{ borderColor: 'var(--border-color)' }}>
              {project.challenges && (
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--text-primary)' }}>
                    Challenges
                  </h4>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {project.challenges}
                  </p>
                </div>
              )}
              {project.outcome && (
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--text-primary)' }}>
                    Outcome
                  </h4>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {project.outcome}
                  </p>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Fullscreen Modal */}
      {isFullscreen && totalImages > 0 && (
        <div 
          className="fixed inset-0 z-[99999] flex items-center justify-center"
          style={{ 
            background: 'rgba(0,0,0,0.97)',
            backdropFilter: 'blur(8px)'
          }}
          onClick={closeFullscreen}
        >
          {/* Close Button */}
          <button
            onClick={closeFullscreen}
            className="absolute top-8 right-8 p-3 transition-all duration-200 hover:scale-110 hover:opacity-70 z-10"
            style={{ color: 'white' }}
            aria-label="Close fullscreen"
          >
            <FaTimes className="w-8 h-8" />
          </button>

          {/* Image Counter */}
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-sm font-medium" style={{ color: 'rgba(255,255,255,0.6)' }}>
            {currentImageIndex + 1} / {totalImages}
          </div>

          {/* Main Fullscreen Image */}
          <div 
            className="relative w-full h-full max-w-7xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[currentImageIndex]}
              alt={`${project.title} - Fullscreen`}
              fill
              className="object-contain"
              unoptimized={images[currentImageIndex]?.startsWith('https://')}
              priority
            />
          </div>

          {/* Navigation Arrows - Fullscreen */}
          {totalImages > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); goToFullscreenPrevious(); }}
                className="absolute left-8 top-1/2 transform -translate-y-1/2 p-4 transition-all duration-200 hover:scale-110 hover:opacity-70"
                style={{ 
                  background: 'rgba(255,255,255,0.08)',
                  color: 'white',
                  borderRadius: '50%',
                  backdropFilter: 'blur(4px)'
                }}
                aria-label="Previous image"
              >
                <FaChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); goToFullscreenNext(); }}
                className="absolute right-8 top-1/2 transform -translate-y-1/2 p-4 transition-all duration-200 hover:scale-110 hover:opacity-70"
                style={{ 
                  background: 'rgba(255,255,255,0.08)',
                  color: 'white',
                  borderRadius: '50%',
                  backdropFilter: 'blur(4px)'
                }}
                aria-label="Next image"
              >
                <FaChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Thumbnails - Fullscreen */}
          {totalImages > 1 && (
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-2 max-w-[85%] overflow-x-auto px-4 py-2" style={{
              background: 'rgba(0,0,0,0.6)',
              borderRadius: '8px',
              backdropFilter: 'blur(8px)'
            }}>
              {images.map((image: string, index: number) => (
                <button
                  key={index}
                  onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(index); }}
                  className={`relative w-20 h-14 border-2 transition-all duration-200 flex-shrink-0 ${
                    currentImageIndex === index 
                      ? 'border-indigo-500 shadow-lg shadow-indigo-500/30' 
                      : 'border-transparent opacity-40 hover:opacity-100'
                  }`}
                  style={{ 
                    overflow: 'hidden',
                    background: 'var(--bg-secondary)'
                  }}
                >
                  <Image
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                    unoptimized={image?.startsWith('https://')}
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}