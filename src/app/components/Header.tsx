'use client';

import { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'About', 'Services', 'Projects', 'Experience', 'Contact'];
  const isLight = theme === 'light';

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'border-b' : 'bg-transparent'
      }`}
      style={{
        background: isScrolled ? 'var(--bg-card)' : 'transparent',
        borderColor: isScrolled ? 'var(--border-color)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(20px)' : 'none'
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <a 
              href="#home"
              className="text-lg font-bold tracking-tight gradient-text hover:opacity-80 transition-opacity"
            >
              JMZ
            </a>
            <span className="hidden sm:block text-xs" style={{ color: 'var(--text-muted)' }}>|</span>
            <span className="hidden sm:block text-xs" style={{ color: 'var(--text-muted)' }}>
              <a 
                href="https://www.larkacer-nexus.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
                style={{ color: 'var(--text-secondary)' }}
              >
                Larkacer Nexus
              </a>
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="px-3 py-1.5 text-xs font-medium transition-colors hover:opacity-70"
                style={{ color: 'var(--text-secondary)' }}
              >
                {item}
              </a>
            ))}
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="ml-2 p-1.5 transition-opacity hover:opacity-70"
              aria-label="Toggle theme"
            >
              {isLight ? (
                <MoonIcon className="w-4 h-4" style={{ color: 'var(--text-secondary)' }} />
              ) : (
                <SunIcon className="w-4 h-4 text-yellow-400" />
              )}
            </button>
            
            <a
              href="#contact"
              className="ml-2 px-4 py-1.5 gradient-bg text-white text-xs font-medium transition-all duration-200 hover:opacity-85"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-1.5 transition-opacity hover:opacity-70"
              aria-label="Toggle theme"
            >
              {isLight ? (
                <MoonIcon className="w-5 h-5" style={{ color: 'var(--text-secondary)' }} />
              ) : (
                <SunIcon className="w-5 h-5 text-yellow-400" />
              )}
            </button>
            <button
              className="p-1.5 transition-opacity hover:opacity-70"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <XMarkIcon className="w-5 h-5" style={{ color: 'var(--text-secondary)' }} />
              ) : (
                <Bars3Icon className="w-5 h-5" style={{ color: 'var(--text-secondary)' }} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div 
          className="md:hidden border-b"
          style={{
            background: 'var(--bg-card)',
            borderColor: 'var(--border-color)'
          }}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-3 py-2 text-sm font-medium transition-colors hover:opacity-70"
                style={{ color: 'var(--text-secondary)' }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a
              href="https://www.larkacer-nexus.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2 text-sm font-medium transition-colors hover:opacity-70"
              style={{ color: 'var(--text-muted)' }}
              onClick={() => setIsMenuOpen(false)}
            >
              Larkacer Nexus
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 gradient-bg text-white text-sm font-medium text-center transition-opacity hover:opacity-85"
              onClick={() => setIsMenuOpen(false)}
            >
              Hire Me
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}