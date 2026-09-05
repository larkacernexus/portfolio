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

  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'];

  const isLight = theme === 'light';

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass shadow-xl shadow-black/20' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <motion.span 
              className="text-2xl font-black gradient-text"
              whileHover={{ scale: 1.05 }}
            >
              JMZ
            </motion.span>
            <span className={`ml-2 text-sm hidden sm:inline ${isLight ? 'text-slate-500' : 'text-slate-500'}`}>
              | Portfolio
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-white/5 ${
                  isLight ? 'text-slate-600 hover:text-slate-900' : 'text-slate-400 hover:text-white'
                }`}
              >
                {item}
              </a>
            ))}
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="ml-2 theme-toggle glass-light hover:scale-110 transition-transform"
              aria-label="Toggle theme"
            >
              {isLight ? (
                <MoonIcon className="w-5 h-5 text-slate-700" />
              ) : (
                <SunIcon className="w-5 h-5 text-yellow-400" />
              )}
            </button>
            
            <a
              href="#contact"
              className="ml-2 px-6 py-2 gradient-bg text-white rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Toggle theme"
            >
              {isLight ? (
                <MoonIcon className="w-6 h-6 text-slate-700" />
              ) : (
                <SunIcon className="w-6 h-6 text-yellow-400" />
              )}
            </button>
            <button
              className="p-2 rounded-lg hover:bg-white/10 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <XMarkIcon className={`w-6 h-6 ${isLight ? 'text-slate-700' : 'text-white'}`} />
              ) : (
                <Bars3Icon className={`w-6 h-6 ${isLight ? 'text-slate-700' : 'text-white'}`} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div 
          className="md:hidden glass"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="px-4 py-6 space-y-3">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`block px-4 py-3 text-sm font-medium transition-colors rounded-lg hover:bg-white/5 ${
                  isLight ? 'text-slate-600 hover:text-slate-900' : 'text-slate-300 hover:text-white'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a
              href="#contact"
              className="block px-4 py-3 gradient-bg text-white rounded-lg text-sm font-medium text-center"
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