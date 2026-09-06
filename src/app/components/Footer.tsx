'use client';

import { FaHeart } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="py-8 border-t" style={{ 
      background: 'var(--bg-secondary)',
      borderColor: 'var(--border-color)'
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} Janndhelle Marth Zulueta · 
            <a 
              href="https://www.larkacer-nexus.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity ml-1"
              style={{ color: 'var(--text-secondary)' }}
            >
              Larkacer Nexus
            </a>
          </p>
          
          <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-muted)' }}>
            <span>Built with</span>
            <FaHeart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>by</span>
            <a 
              href="https://www.larkacer-nexus.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-medium hover:opacity-80 transition-opacity"
              style={{ color: 'var(--text-secondary)' }}
            >
              Larkacer Nexus
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}