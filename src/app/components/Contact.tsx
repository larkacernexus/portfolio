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
      {/* Background effects */}
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
            <p className="max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Have a project in mind? Let's work together and create something amazing!
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            className="card-modern p-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8" style={{ color: 'var(--text-primary)' }}>Contact Information</h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start gap-4 group"
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div 
                    className="p-3 rounded-xl transition-all duration-300 group-hover:scale-110"
                    style={{ background: `${info.color}20` }}
                  >
                    <info.icon className="w-6 h-6" style={{ color: info.color }} />
                  </div>
                  <div>
                    <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{info.label}</p>
                    {info.href ? (
                      <a 
                        href={info.href} 
                        className="font-medium transition-colors hover:text-indigo-400"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span className="font-medium" style={{ color: 'var(--text-primary)' }}>{info.value}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t" style={{ borderColor: 'var(--border-color)' }}>
              <h4 className="text-sm font-semibold mb-4" style={{ color: 'var(--text-muted)' }}>Connect with me</h4>
              <div className="flex gap-3">
                <SocialIcon icon={<FaLinkedin />} href="#" label="LinkedIn" />
                <SocialIcon icon={<FaGithub />} href="#" label="GitHub" />
                <SocialIcon icon={<FaTwitter />} href="#" label="Twitter" />
              </div>
            </div>

            {/* Remote Ready Badge */}
            <motion.div 
              className="mt-6 p-5 rounded-xl border"
              style={{
                background: 'rgba(16, 185, 129, 0.05)',
                borderColor: 'rgba(16, 185, 129, 0.15)'
              }}
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="flex items-center gap-3" style={{ color: '#34d399' }}>
                <span className="text-2xl">⚡</span>
                <span className="font-semibold">Remote Ready</span>
              </div>
              <p className="text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>
                High-speed fiber, backup power, and dedicated workspace
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="card-modern p-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8" style={{ color: 'var(--text-primary)' }}>Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
                  Your Name
                </label>
                <input
                  type="text"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-5 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-primary)'
                  }}
                  placeholder="John Doe"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
                  Email Address
                </label>
                <input
                  type="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-5 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-primary)'
                  }}
                  placeholder="john@example.com"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
                  Message
                </label>
                <textarea
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-5 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none transition-all"
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-primary)'
                  }}
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                className="w-full px-6 py-4 gradient-bg text-white rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-indigo-500/25 relative overflow-hidden group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Send Message
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SocialIcon({ icon, href, label }: { icon: React.ReactNode; href: string; label: string }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 rounded-xl transition-all duration-300 group"
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border-color)'
      }}
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
      aria-label={label}
    >
      <span className="transition-colors duration-300 group-hover:text-indigo-400" style={{ color: 'var(--text-muted)' }}>
        {icon}
      </span>
    </motion.a>
  );
}