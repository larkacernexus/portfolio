'use client';

import Image from 'next/image';
import { FaGithub, FaLinkedin, FaArrowDown } from 'react-icons/fa';
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ArrowUpRightIcon,
} from '@heroicons/react/24/outline';
import ViewsCounter from './ViewsCounter';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden"
      style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)' }}
    >
      {/* Subtle background gradients + dot grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-indigo-500/5 via-purple-500/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-purple-500/5 via-pink-500/5 to-transparent" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'radial-gradient(circle, var(--text-primary) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      {/* Hero content */}
      <div className="relative max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 pt-32 pb-16">
        {/* Top: "Hi, I'm" */}
        <p
          className="text-center text-sm tracking-wide mb-2"
          style={{ color: 'var(--text-muted)' }}
        >
          Hi, I&apos;m
        </p>

        {/* Giant name — outlined + solid */}
        <div className="relative text-center select-none">
          <h1
            className="font-black leading-[0.85] text-[16vw] md:text-[10rem] lg:text-[12rem] tracking-tight uppercase"
            style={{
              color: 'transparent',
              WebkitTextStroke: '2px var(--text-primary)',
            }}
          >
            JANNDHELLE
          </h1>
          <h1
            className="font-black leading-[0.85] text-[20vw] md:text-[12rem] lg:text-[15rem] tracking-tight uppercase -mt-2 md:-mt-6 lg:-mt-10"
            style={{ color: 'var(--text-primary)' }}
          >
            MARTH
          </h1>
        </div>

        {/* Portrait overlapping the name — clickable, links to #projects */}
        <div className="relative -mt-24 md:-mt-48 lg:-mt-64 flex justify-center">
          <a
            href="#projects"
            aria-label="Jump to projects"
            className="group relative block w-[60%] max-w-sm md:max-w-md lg:max-w-lg cursor-pointer"
          >
            {/* Bottom fade to background */}
            <div
              className="absolute inset-x-0 bottom-0 h-1/3 z-20 pointer-events-none"
              style={{
                background:
                  'linear-gradient(to top, var(--bg-primary) 15%, transparent 100%)',
              }}
            />
            <Image
              src="/images/profile/FORMAL2X.png"
              alt="Janndhelle Marth Zulueta"
              width={800}
              height={1000}
              priority
              className="w-full h-auto object-cover grayscale contrast-110 transition-all duration-500 ease-out group-hover:grayscale-0 group-hover:contrast-100 group-hover:scale-[1.02]"
              style={{
                maskImage:
                  'linear-gradient(to bottom, black 70%, transparent 100%)',
                WebkitMaskImage:
                  'linear-gradient(to bottom, black 70%, transparent 100%)',
              }}
            />
          </a>
        </div>

        {/* Bottom row: left text/CTA, right contact pills */}
        <div className="relative -mt-10 md:-mt-20 lg:-mt-28 grid grid-cols-1 md:grid-cols-2 gap-10 items-end">
          {/* Left — headline + CTA */}
          <div className="max-w-sm">
            <h2
              className="text-2xl md:text-3xl font-bold mb-3"
              style={{ color: 'var(--text-primary)' }}
            >
              Full-Stack Developer
            </h2>

            <p
              className="text-xs md:text-sm tracking-widest uppercase mb-5"
              style={{ color: 'var(--text-muted)' }}
            >
              AI-Assisted Workflow · Founder of{' '}
              <a
                href="https://www.larkacer-nexus.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline transition-colors"
                style={{ color: 'var(--text-secondary)' }}
              >
                Larkacer Nexus
              </a>
            </p>

            <p
              className="max-w-md text-sm leading-relaxed mb-8"
              style={{ color: 'var(--text-muted)' }}
            >
              I build websites and mobile apps for businesses and startups — shipping faster with AI-assisted development.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full gradient-bg text-white text-sm font-medium transition-all duration-200 hover:opacity-90 hover:shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-0.5"
              >
                View Work
                <ArrowUpRightIcon className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 rounded-full border text-sm font-medium backdrop-blur-sm bg-white/5 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10"
                style={{
                  color: 'var(--text-secondary)',
                  borderColor: 'var(--border-color)',
                }}
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Right: vertical contact pills */}
          <div className="flex md:justify-end items-end">
            <div className="flex flex-row md:flex-col gap-2">
              <ContactPill
                icon={<FaGithub className="w-4 h-4" />}
                label="GitHub"
                href="https://github.com/larkacernexus"
              />
              <ContactPill
                icon={<FaLinkedin className="w-4 h-4" />}
                label="LinkedIn"
                href="https://www.linkedin.com/in/janndhelle-marth-zulueta"
              />
              <ContactPill
                icon={<EnvelopeIcon className="w-4 h-4" />}
                label="Email"
                href="mailto:zuluetajanndhellemarth@gmail.com"
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="mt-16 flex items-center justify-center gap-3 text-[10px] tracking-[0.3em]"
          style={{ color: 'var(--text-muted)' }}
        >
          <span
            className="h-px w-16"
            style={{ background: 'var(--border-color)' }}
          />
          <div className="flex flex-col items-center gap-1">
            <span
              className="flex h-6 w-4 items-start justify-center rounded-full border p-1"
              style={{ borderColor: 'var(--border-color)' }}
            >
              <span
                className="h-1.5 w-0.5 rounded-full animate-bounce"
                style={{ background: 'var(--text-muted)' }}
              />
            </span>
            <span>SCROLL</span>
          </div>
          <span
            className="h-px w-16"
            style={{ background: 'var(--border-color)' }}
          />
        </div>
      </div>

      {/* Stats strip */}
      <div
        className="border-t"
        style={{ borderColor: 'var(--border-color)' }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-3">
          <Stat value="3+" label="Years Experience" />
          <Stat value="16+" label="Projects" />
          <Stat
            value={
              <span className="text-4xl md:text-6xl font-black tracking-tight">
                <ViewsCounter />
              </span>
            }
            label="Portfolio Visits"
          />
        </div>
      </div>
    </section>
  );
}

function ContactPill({
  icon,
  label,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
}) {
  const isExternal =
    href.startsWith('http') ||
    href.startsWith('mailto') ||
    href.startsWith('tel');
  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border text-xs font-medium backdrop-blur-sm bg-white/5 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10"
      style={{
        borderColor: 'var(--border-color)',
        color: 'var(--text-secondary)',
      }}
    >
      {icon}
      <span>{label}</span>
    </a>
  );
}

function Stat({ value, label }: { value: React.ReactNode; label: string }) {
  return (
    <div
      className="py-10 md:py-14 text-center border-r last:border-r-0"
      style={{ borderColor: 'var(--border-color)' }}
    >
      <p
        className="text-4xl md:text-6xl font-black tracking-tight"
        style={{ color: 'var(--text-primary)' }}
      >
        {value}
      </p>
      {label ? (
        <p
          className="mt-2 text-xs tracking-[0.25em] uppercase"
          style={{ color: 'var(--text-muted)' }}
        >
          {label}
        </p>
      ) : null}
    </div>
  );
}