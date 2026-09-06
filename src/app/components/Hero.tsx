'use client';

import Image from 'next/image';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowDown, FaFacebook, FaInstagram } from 'react-icons/fa';
import { EnvelopeIcon } from '@heroicons/react/24/outline';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center relative overflow-hidden"
      style={{ background: 'var(--bg-primary)' }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid">
        <div className="absolute top-20 left-10 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl float-animation"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl float-animation" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-block px-5 py-2 glass-light rounded-full text-sm font-medium text-indigo-300 mb-8 fade-in">
              <span className="inline-block w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></span>
              Available for Work
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-4 fade-in fade-in-delay-1">
              <span style={{ color: 'var(--text-primary)' }}>Hi, I'm</span>
              <br />
              <span className="gradient-text">Janndhelle</span>
            </h1>
            
            <div className="text-xl md:text-2xl font-light mb-6 fade-in fade-in-delay-2" style={{ color: 'var(--text-secondary)' }}>
              <span className="gradient-text-2">AI Automation & Systems Specialist</span>
            </div>
            
            <p className="max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed fade-in fade-in-delay-3" style={{ color: 'var(--text-secondary)' }}>
              Building intelligent systems and digital solutions that transform 
              businesses through AI-powered automation.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start fade-in fade-in-delay-4">
              <a
                href="#contact"
                className="px-8 py-4 gradient-bg text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/25 relative overflow-hidden group"
              >
                <span className="relative z-10">Get in Touch</span>
                <div className="absolute inset-0 bg-white/20 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              </a>
              <a
                href="#projects"
                className="px-8 py-4 glass-light rounded-full font-semibold border border-white/10 hover:border-indigo-400/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/10"
                style={{ color: 'var(--text-primary)' }}
              >
                View My Work
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start mt-10 fade-in fade-in-delay-5">
              <SocialLink icon={<FaGithub className="w-5 h-5" />} href="https://github.com/larkacernexus" />
              <SocialLink icon={<FaLinkedin className="w-5 h-5" />} href="https://www.linkedin.com/in/janndhelle-marth-zulueta" />
              <SocialLink icon={<EnvelopeIcon className="w-5 h-5" />} href="mailto:zuluetajanndhellemarth@gmail.com" />
              <SocialLink icon={<FaFacebook className="w-5 h-5" />} href="https://www.facebook.com/janndhellemarth.zulita.3/" />
              <SocialLink icon={<FaInstagram className="w-5 h-5" />} href="https://www.instagram.com/jann_dhelle/" />
            </div>
          </div>

          {/* Right - Profile Image (Static, no 3D movement) */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow rings */}
              <div className="absolute -inset-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full opacity-20 blur-2xl animate-pulse"></div>
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full opacity-30 blur-xl" style={{ animation: 'pulse 4s ease-in-out infinite' }}></div>
              
              {/* Profile Image */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-2 border-white/10 shadow-2xl glow-blue">
                <Image
                  src="/images/profile/FORMAL2X.png"
                  alt="Janndhelle Marth Zulueta"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 glass-light px-4 py-2 rounded-full text-xs font-medium text-indigo-300 border border-indigo-500/20 float-animation">
                🚀 AI Expert
              </div>
              <div className="absolute -bottom-4 -left-4 glass-light px-4 py-2 rounded-full text-xs font-medium text-pink-300 border border-pink-500/20 float-animation" style={{ animationDelay: '2s' }}>
                ⚡ 3+ Years
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce hidden lg:flex">
          <span className="text-xs uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>Scroll</span>
          <FaArrowDown className="w-5 h-5" style={{ color: 'var(--text-muted)' }} />
        </div>
      </div>
    </section>
  );
}

function SocialLink({ icon, href }: { icon: React.ReactNode; href: string }) {
  return (
    <a 
      href={href}
      className="p-3 glass rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-indigo-500/10 group"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="group-hover:text-indigo-400 transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>
        {icon}
      </span>
    </a>
  );
}