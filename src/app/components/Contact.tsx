'use client';

import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { FaLinkedin, FaGithub, FaTwitter, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormState({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    { icon: EnvelopeIcon, label: 'Email', value: 'Zuluetajanndhellemarth@gmail.com', href: 'mailto:Zuluetajanndhellemarth@gmail.com', color: '#6366f1' },
    { icon: PhoneIcon, label: 'Phone', value: '0965 933 4337', href: 'tel:+639659334337', color: '#8b5cf6' },
    { icon: MapPinIcon, label: 'Location', value: 'City of Valencia, Philippines', href: null, color: '#ec4899' },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden" style={{ background: 'var(--bg-secondary)' }}>
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
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
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="max-w-2xl mx-auto text-sm" style={{ color: 'var(--text-secondary)' }}>
              Have a project in mind? Let's work together.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            className="p-8 border transition-all duration-300 hover:border-indigo-500/30"
            style={{ 
              background: 'var(--bg-card)',
              borderColor: 'var(--border-color)'
            }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>Contact</h3>
            
            <div className="space-y-5">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="p-2 flex-shrink-0" style={{ 
                    background: `${info.color}15`,
                    border: `1px solid ${info.color}25`
                  }}>
                    <info.icon className="w-5 h-5" style={{ color: info.color }} />
                  </div>
                  <div>
                    <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{info.label}</p>
                    {info.href ? (
                      <a 
                        href={info.href} 
                        className="text-sm font-medium transition-colors hover:opacity-70"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t" style={{ borderColor: 'var(--border-color)' }}>
              <p className="text-xs font-semibold mb-3" style={{ color: 'var(--text-muted)' }}>Connect</p>
              <div className="flex gap-3">
                <SocialIcon icon={<FaLinkedin />} href="#" label="LinkedIn" />
                <SocialIcon icon={<FaGithub />} href="#" label="GitHub" />
                <SocialIcon icon={<FaTwitter />} href="#" label="Twitter" />
              </div>
            </div>

            {/* Remote Ready */}
            <div className="mt-6 p-4 border" style={{
              borderColor: 'rgba(16, 185, 129, 0.2)',
              background: 'rgba(16, 185, 129, 0.05)'
            }}>
              <div className="flex items-center gap-2 text-sm" style={{ color: '#34d399' }}>
                <span>⚡</span>
                <span className="font-medium">Remote Ready</span>
              </div>
              <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>
                Fiber · Backup Power · Dedicated Workspace
              </p>
            </div>

            {/* Larkacer Nexus */}
            <div className="mt-4 pt-4 border-t" style={{ borderColor: 'var(--border-color)' }}>
              <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                Founder & Lead Architect at{' '}
                <a 
                  href="https://www.larkacer-nexus.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-medium hover:underline"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  Larkacer Nexus
                </a>
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="p-8 border transition-all duration-300 hover:border-indigo-500/30"
            style={{ 
              background: 'var(--bg-card)',
              borderColor: 'var(--border-color)'
            }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium mb-1.5" style={{ color: 'var(--text-secondary)' }}>
                  Name
                </label>
                <input
                  type="text"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all"
                  style={{
                    background: 'var(--bg-primary)',
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-primary)'
                  }}
                  placeholder="John Doe"
                  required
                />
              </div>
              
              <div>
                <label className="block text-xs font-medium mb-1.5" style={{ color: 'var(--text-secondary)' }}>
                  Email
                </label>
                <input
                  type="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all"
                  style={{
                    background: 'var(--bg-primary)',
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-primary)'
                  }}
                  placeholder="john@example.com"
                  required
                />
              </div>
              
              <div>
                <label className="block text-xs font-medium mb-1.5" style={{ color: 'var(--text-secondary)' }}>
                  Message
                </label>
                <textarea
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all resize-none"
                  style={{
                    background: 'var(--bg-primary)',
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-primary)'
                  }}
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-2.5 gradient-bg text-white text-sm font-medium transition-all duration-200 hover:opacity-85"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SocialIcon({ icon, href, label }: { icon: React.ReactNode; href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 transition-opacity hover:opacity-60"
      aria-label={label}
    >
      <span style={{ color: 'var(--text-muted)' }}>
        {icon}
      </span>
    </a>
  );
}