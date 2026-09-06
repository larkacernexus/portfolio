'use client';

import Image from 'next/image';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowDown, FaFacebook, FaInstagram } from 'react-icons/fa';
import { EnvelopeIcon } from '@heroicons/react/24/outline';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center relative"
      style={{ background: 'var(--bg-primary)' }}
    >
      {/* Premium Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-indigo-500/5 via-purple-500/5 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-purple-500/5 via-pink-500/5 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 text-xs font-medium tracking-wider uppercase mb-6" style={{ color: 'var(--text-muted)' }}>
              <span className="w-6 h-px bg-emerald-500"></span>
              Available for work
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              <span style={{ color: 'var(--text-primary)' }}>Janndhelle</span>
              <span style={{ color: 'var(--text-secondary)' }}> · </span>
              <span className="gradient-text">Systems</span>
              <span style={{ color: 'var(--text-secondary)' }}> + </span>
              <span className="gradient-text">AI</span>
            </h1>
            
            <p className="text-base md:text-lg mb-3" style={{ color: 'var(--text-secondary)' }}>
              AI Automation · Systems Architecture · Full-Stack
            </p>
            
            <p className="max-w-md text-sm leading-relaxed mb-8" style={{ color: 'var(--text-muted)' }}>
              Building intelligent systems at{' '}
              <a 
                href="https://www.larkacer-nexus.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-medium hover:underline"
                style={{ color: 'var(--text-primary)' }}
              >
                Larkacer Nexus
              </a>
              .
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href="#contact"
                className="px-6 py-2.5 gradient-bg text-white text-sm font-medium transition-all duration-200 hover:opacity-85 hover:shadow-lg hover:shadow-indigo-500/25"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="px-6 py-2.5 text-sm font-medium border transition-all duration-200 hover:opacity-70"
                style={{ 
                  color: 'var(--text-secondary)',
                  borderColor: 'var(--border-color)'
                }}
              >
                View Work
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-8">
              <SocialLink icon={<FaGithub className="w-4 h-4" />} href="https://github.com/larkacernexus" />
              <SocialLink icon={<FaLinkedin className="w-4 h-4" />} href="https://www.linkedin.com/in/janndhelle-marth-zulueta" />
              <SocialLink icon={<EnvelopeIcon className="w-4 h-4" />} href="mailto:zuluetajanndhellemarth@gmail.com" />
              <SocialLink icon={<FaFacebook className="w-4 h-4" />} href="https://www.facebook.com/janndhellemarth.zulita.3/" />
              <SocialLink icon={<FaInstagram className="w-4 h-4" />} href="https://www.instagram.com/jann_dhelle/" />
            </div>
          </div>

          {/* Right - Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-3 border-2" style={{ borderColor: 'var(--border-color)' }}></div>
              
              {/* Profile Image */}
              <div className="relative w-64 h-64 md:w-72 md:h-72 overflow-hidden">
                <Image
                  src="/images/profile/FORMAL2X.png"
                  alt="Janndhelle Marth Zulueta"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>

              {/* Tags */}
              <div className="absolute -top-2 -right-2 px-3 py-1 text-xs bg-white/5 backdrop-blur border" style={{ 
                borderColor: 'var(--border-color)',
                color: 'var(--text-secondary)'
              }}>
                AI Expert
              </div>
              <div className="absolute -bottom-2 -left-2 px-3 py-1 text-xs bg-white/5 backdrop-blur border" style={{ 
                borderColor: 'var(--border-color)',
                color: 'var(--text-secondary)'
              }}>
                3+ Years
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:flex flex-col items-center gap-1 text-xs tracking-widest" style={{ color: 'var(--text-muted)' }}>
          <span>SCROLL</span>
          <FaArrowDown className="w-3 h-3 opacity-50" />
        </div>
      </div>
    </section>
  );
}

function SocialLink({ icon, href }: { icon: React.ReactNode; href: string }) {
  return (
    <a 
      href={href}
      className="p-2 transition-all duration-200 hover:opacity-60 hover:translate-y-px"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span style={{ color: 'var(--text-muted)' }}>
        {icon}
      </span>
    </a>
  );
}