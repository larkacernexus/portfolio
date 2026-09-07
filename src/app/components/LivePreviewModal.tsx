'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaExternalLinkAlt, FaSyncAlt } from 'react-icons/fa';
import { useState } from 'react';

interface LivePreviewModalProps {
  url: string | null;
  title: string;
  onClose: () => void;
}

export default function LivePreviewModal({ url, title, onClose }: LivePreviewModalProps) {
  const [iframeKey, setIframeKey] = useState(0);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (url) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [url]);

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (url) {
      window.addEventListener('keydown', handleEsc);
      return () => window.removeEventListener('keydown', handleEsc);
    }
  }, [url, onClose]);

  return (
    <AnimatePresence>
      {url && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center p-2 sm:p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/75 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-6xl h-[92vh] sm:h-[88vh] bg-white rounded-xl overflow-hidden shadow-2xl flex flex-col"
            initial={{ scale: 0.95, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 20, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Browser-style header bar */}
            <div className="flex items-center justify-between px-3 sm:px-4 py-2.5 bg-gray-900 text-white border-b border-gray-800 flex-shrink-0">
              <div className="flex items-center gap-3 min-w-0">
                {/* Traffic lights */}
                <div className="hidden sm:flex gap-1.5 flex-shrink-0">
                  <span className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500" />
                  <span className="w-3 h-3 rounded-full bg-green-500" />
                </div>

                {/* URL bar */}
                <div className="hidden md:flex items-center gap-2 px-3 py-1 bg-white/5 rounded-md text-xs text-gray-400 truncate max-w-md">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  <span className="truncate">{url}</span>
                </div>

                {/* Title (mobile) */}
                <span className="md:hidden text-sm font-medium truncate">{title}</span>
              </div>

              <div className="flex items-center gap-1.5 flex-shrink-0">
                {/* Reload */}
                <button
                  onClick={() => setIframeKey((k) => k + 1)}
                  className="p-2 rounded hover:bg-white/10 transition-colors"
                  aria-label="Reload preview"
                  title="Reload"
                >
                  <FaSyncAlt className="w-3.5 h-3.5" />
                </button>

                {/* Open in new tab */}
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 text-xs rounded bg-white/10 hover:bg-white/20 transition-colors"
                  title="Open in new tab"
                >
                  Open in new tab <FaExternalLinkAlt className="w-2.5 h-2.5" />
                </a>

                {/* Close */}
                <button
                  onClick={onClose}
                  className="p-2 rounded hover:bg-red-500/80 transition-colors"
                  aria-label="Close preview"
                  title="Close (Esc)"
                >
                  <FaTimes className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* The embedded website */}
            <div className="flex-1 relative bg-white">
              <iframe
                key={iframeKey}
                src={url}
                title={title}
                className="absolute inset-0 w-full h-full border-0"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
                loading="lazy"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}