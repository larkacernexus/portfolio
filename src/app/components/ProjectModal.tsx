'use client';

import { useState, useEffect } from 'react';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import Image from 'next/image';

interface ProjectModalProps {
  project: any;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      const originalTouch = document.body.style.touchAction;
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
      return () => {
        document.body.style.overflow = originalOverflow;
        document.body.style.touchAction = originalTouch;
      };
    }
  }, [isOpen]);

  // Reset image index when project changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [project?.id]);

  // Escape key: close fullscreen first, then modal
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isFullscreen) setIsFullscreen(false);
        else onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
      return () => window.removeEventListener('keydown', handleEsc);
    }
  }, [isOpen, isFullscreen, onClose]);

  // Arrow key navigation
  useEffect(() => {
    if (!isOpen) return;
    const handleKeys = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
    };
    window.addEventListener('keydown', handleKeys);
    return () => window.removeEventListener('keydown', handleKeys);
  }, [isOpen, currentImageIndex]);

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
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
  };

  // Unified swipe handler — works for both gallery and fullscreen
  const handleSwipe = (_: unknown, info: PanInfo) => {
    const swipeX = info.offset.x;
    const velocityX = info.velocity.x;
    const threshold = 50;

    if (swipeX < -threshold || velocityX < -500) {
      goToNext();
    } else if (swipeX > threshold || velocityX > 500) {
      goToPrevious();
    }
  };

  return (
    <>
      {/* Main Modal */}
      <AnimatePresence>
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(12px)' }}
        >
          <motion.div
            className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto p-5 sm:p-8 md:p-10"
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: '0px',
              boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
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
              className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 transition-colors hover:opacity-70 z-20"
              style={{ color: 'var(--text-muted)' }}
              aria-label="Close modal"
            >
              <FaTimes className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Content */}
            <div>
              {/* Category */}
              <span
                className="inline-block text-xs font-medium uppercase tracking-wider px-3 py-1.5 mb-4"
                style={{
                  background: `${project.color}15`,
                  color: project.color,
                  border: `1px solid ${project.color}25`,
                  letterSpacing: '0.05em',
                }}
              >
                {project.category}
              </span>

              <h3
                className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5 sm:mb-6 tracking-tight pr-10"
                style={{ color: 'var(--text-primary)' }}
              >
                {project.title}
              </h3>

              {/* Image Gallery */}
              {totalImages > 0 && (
                <div className="mb-6 sm:mb-8">
                  {/* Image counter (mobile only) */}
                  {isMobile && totalImages > 1 && (
                    <div
                      className="flex justify-center mb-2 text-xs font-medium tracking-wider"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      {currentImageIndex + 1} / {totalImages}
                    </div>
                  )}

                  {/* Gallery container — swipeable on mobile, clickable for fullscreen */}
                  <motion.div
                    className="relative w-full h-56 sm:h-72 md:h-80 lg:h-96 overflow-hidden border cursor-pointer group touch-pan-y select-none"
                    style={{ borderColor: 'var(--border-color)' }}
                    onClick={openFullscreen}
                    drag={isMobile && totalImages > 1 ? 'x' : false}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.15}
                    onDragEnd={handleSwipe}
                  >
                    <AnimatePresence initial={false} mode="popLayout">
                      <motion.div
                        key={currentImageIndex}
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -40 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                        className="absolute inset-0"
                      >
                        <Image
                          src={images[currentImageIndex]}
                          alt={`${project.title} - Image ${currentImageIndex + 1}`}
                          fill
                          className="object-cover pointer-events-none select-none"
                          unoptimized={images[currentImageIndex]?.startsWith('https://')}
                          priority
                          draggable={false}
                        />
                      </motion.div>
                    </AnimatePresence>

                    {/* Navigation Arrows — DESKTOP ONLY */}
                    {!isMobile && totalImages > 1 && (
                      <>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            goToPrevious();
                          }}
                          className="absolute left-3 top-1/2 transform -translate-y-1/2 p-2.5 transition-all duration-200 hover:opacity-80 hover:scale-110 z-10"
                          style={{
                            background: 'rgba(0,0,0,0.6)',
                            color: 'white',
                            backdropFilter: 'blur(4px)',
                          }}
                          aria-label="Previous image"
                        >
                          <FaChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            goToNext();
                          }}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2.5 transition-all duration-200 hover:opacity-80 hover:scale-110 z-10"
                          style={{
                            background: 'rgba(0,0,0,0.6)',
                            color: 'white',
                            backdropFilter: 'blur(4px)',
                          }}
                          aria-label="Next image"
                        >
                          <FaChevronRight className="w-5 h-5" />
                        </button>
                      </>
                    )}

                    {/* Expand hint — DESKTOP ONLY */}
                    {!isMobile && (
                      <div
                        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xs px-4 py-1.5 opacity-80 z-10"
                        style={{
                          background: 'rgba(0,0,0,0.7)',
                          color: 'white',
                          backdropFilter: 'blur(4px)',
                          letterSpacing: '0.05em',
                        }}
                      >
                        Click to expand
                      </div>
                    )}
                  </motion.div>

                  {/* Thumbnails — shown on BOTH mobile and desktop */}
                  {totalImages > 1 && (
                    <div className="flex gap-2 mt-4 overflow-x-auto pb-1 scrollbar-hide">
                      {images.map((image: string, index: number) => (
                        <button
                          key={index}
                          onClick={() => goToImage(index)}
                          className={`relative w-16 h-12 sm:w-20 sm:h-14 border-2 flex-shrink-0 transition-all duration-200 ${
                            currentImageIndex === index
                              ? 'border-indigo-500 shadow-lg shadow-indigo-500/20'
                              : 'border-transparent opacity-50 hover:opacity-100'
                          }`}
                          style={{
                            overflow: 'hidden',
                            background: 'var(--bg-secondary)',
                          }}
                          aria-label={`Go to image ${index + 1}`}
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
                <p
                  className="text-sm sm:text-base leading-relaxed"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {project.fullDescription || project.description}
                </p>
              </div>

              {/* Tech Stack */}
              <div className="mb-6">
                <h4
                  className="text-sm font-semibold uppercase tracking-wider mb-3"
                  style={{ color: 'var(--text-primary)' }}
                >
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech: string, idx: number) => (
                    <span
                      key={idx}
                      className="text-sm px-3.5 py-1.5 border"
                      style={{
                        color: 'var(--text-secondary)',
                        borderColor: 'var(--border-color)',
                        background: 'var(--bg-primary)',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4
                  className="text-sm font-semibold uppercase tracking-wider mb-3"
                  style={{ color: 'var(--text-primary)' }}
                >
                  Key Features
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.features.map((feature: string, idx: number) => (
                    <span
                      key={idx}
                      className="text-sm px-3.5 py-1.5"
                      style={{
                        color: 'var(--text-secondary)',
                        background: 'var(--bg-primary)',
                        border: '1px solid var(--border-color)',
                      }}
                    >
                      ✓ {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Challenges & Outcome */}
              <div
                className="grid md:grid-cols-2 gap-6 mt-6 pt-6 border-t"
                style={{ borderColor: 'var(--border-color)' }}
              >
                {project.challenges && (
                  <div>
                    <h4
                      className="text-sm font-semibold uppercase tracking-wider mb-2"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      Challenges
                    </h4>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {project.challenges}
                    </p>
                  </div>
                )}
                {project.outcome && (
                  <div>
                    <h4
                      className="text-sm font-semibold uppercase tracking-wider mb-2"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      Outcome
                    </h4>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {project.outcome}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {isFullscreen && totalImages > 0 && (
          <motion.div
            className="fixed inset-0 z-[99999] flex items-center justify-center touch-none"
            style={{
              background: 'rgba(0,0,0,0.97)',
              backdropFilter: 'blur(8px)',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeFullscreen}
          >
            {/* Close Button */}
            <button
              onClick={closeFullscreen}
              className="absolute top-5 right-5 sm:top-8 sm:right-8 p-3 transition-all duration-200 hover:scale-110 hover:opacity-70 z-20"
              style={{ color: 'white' }}
              aria-label="Close fullscreen"
            >
              <FaTimes className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>

            {/* Image Counter */}
            <div
              className="absolute top-6 sm:top-8 left-1/2 transform -translate-x-1/2 text-sm font-medium z-20"
              style={{ color: 'rgba(255,255,255,0.6)' }}
            >
              {currentImageIndex + 1} / {totalImages}
            </div>

            {/* Swipeable image container */}
            <motion.div
              className="relative w-full h-full max-w-7xl max-h-[90vh] px-2 sm:px-0 select-none"
              onClick={(e) => e.stopPropagation()}
              drag={isMobile && totalImages > 1 ? 'x' : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.15}
              onDragEnd={handleSwipe}
            >
              <AnimatePresence initial={false} mode="popLayout">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="absolute inset-0"
                >
                  <Image
                    src={images[currentImageIndex]}
                    alt={`${project.title} - Fullscreen`}
                    fill
                    className="object-contain pointer-events-none select-none"
                    unoptimized={images[currentImageIndex]?.startsWith('https://')}
                    priority
                    draggable={false}
                  />
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Navigation Arrows — DESKTOP ONLY */}
            {!isMobile && totalImages > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goToPrevious();
                  }}
                  className="absolute left-8 top-1/2 transform -translate-y-1/2 p-4 transition-all duration-200 hover:scale-110 hover:opacity-70 z-10"
                  style={{
                    background: 'rgba(255,255,255,0.08)',
                    color: 'white',
                    borderRadius: '50%',
                    backdropFilter: 'blur(4px)',
                  }}
                  aria-label="Previous image"
                >
                  <FaChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goToNext();
                  }}
                  className="absolute right-8 top-1/2 transform -translate-y-1/2 p-4 transition-all duration-200 hover:scale-110 hover:opacity-70 z-10"
                  style={{
                    background: 'rgba(255,255,255,0.08)',
                    color: 'white',
                    borderRadius: '50%',
                    backdropFilter: 'blur(4px)',
                  }}
                  aria-label="Next image"
                >
                  <FaChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            {/* Thumbnails — shown on BOTH mobile and desktop */}
            {totalImages > 1 && (
              <div
                className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 flex gap-2 max-w-[92%] sm:max-w-[85%] overflow-x-auto px-3 sm:px-4 py-2 z-10 scrollbar-hide"
                style={{
                  background: 'rgba(0,0,0,0.6)',
                  borderRadius: '8px',
                  backdropFilter: 'blur(8px)',
                }}
              >
                {images.map((image: string, index: number) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(index);
                    }}
                    className={`relative w-14 h-10 sm:w-20 sm:h-14 border-2 transition-all duration-200 flex-shrink-0 ${
                      currentImageIndex === index
                        ? 'border-indigo-500 shadow-lg shadow-indigo-500/30'
                        : 'border-transparent opacity-40 hover:opacity-100'
                    }`}
                    style={{
                      overflow: 'hidden',
                      background: 'var(--bg-secondary)',
                    }}
                    aria-label={`Go to image ${index + 1}`}
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
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}