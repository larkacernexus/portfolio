'use client';

import { useState } from 'react';
import { FaExternalLinkAlt, FaEye, FaCheckCircle, FaClock, FaTools } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import ProjectModal from './ProjectModal';
import LivePreviewModal from './LivePreviewModal';

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [previewTitle, setPreviewTitle] = useState('');

  const categories = ['all', 'Web', 'Desktop', 'Mobile', 'HTML Sites', 'Personal'];

  const projects = [
    // ============ WEB SYSTEMS ============
    {
      id: 'barangay-management-system',
      title: 'Barangay Management System',
      description: 'Digitized certificate issuance, resident records, and online transaction processing for a local barangay office. Built with Laravel and React.',
      tech: ['Laravel', 'React', 'MySQL', 'Tailwind CSS'],
      features: ['Certificate Issuance', 'Resident Records', 'Transaction Processing'],
      color: '#6366f1',
      category: 'Web',
      client: 'Local Barangay Office',
      deployment: 'Internal web system',
      statusLabel: 'Pending Deployment',
      status: 'pending',
      image: '/images/projects/barangay/barangay-system-1.jpg',
      fullDescription: 'The Barangay Management System digitizes everyday barangay operations — certificate issuance, resident record keeping, and processing of online transactions. The system was built with Laravel on the backend and React on the frontend, using MySQL for data storage. It is currently awaiting legal and administrative approval before public rollout.',
      challenges: 'Designing workflows that match existing barangay procedures while still being simpler and faster than the manual process.',
      outcome: 'A complete, tested system ready for deployment once local approval is granted.',
      images: [
        '/images/projects/barangay/barangay-system-1.jpg',
        '/images/projects/barangay/barangay-system-2.jpg',
        '/images/projects/barangay/barangay-system-3.jpg',
        '/images/projects/barangay/barangay-system-4.jpg',
        '/images/projects/barangay/barangay-system-5.jpg',
        '/images/projects/barangay/barangay-system-6.jpg',
      ]
    },
    {
      id: 'ds-mini-mart-pos',
      title: "D's Mini Mart & Cuisine POS",
      description: 'Customized Point of Sale system for a mini mart and food business — inventory tracking, sales reporting, and receipt generation.',
      tech: ['Laravel', 'MySQL', 'Tailwind CSS'],
      features: ['POS Transactions', 'Inventory Tracking', 'Sales Reports'],
      color: '#8b5cf6',
      category: 'Web',
      client: 'Mini Mart & Food Business',
      deployment: 'Web system',
      statusLabel: 'Delivered',
      status: 'completed',
      image: '/images/projects/ds-pos/ds-pos-1.jpg',
      fullDescription: 'A Point of Sale system for D\'s Mini Mart and Cuisine. The client originally purchased a ready-made POS solution, and I was responsible for customizing the entire system to match their operational needs — modifying both backend and frontend, redesigning UI components, updating workflows, and thoroughly testing the final build.',
      challenges: 'Adapting a pre-built POS system to meet specific business requirements while keeping it stable and reliable for daily use.',
      outcome: 'A customized POS system that fits the client\'s day-to-day operations.',
      images: [
        '/images/projects/ds-pos/ds-pos-1.jpg',
        '/images/projects/ds-pos/ds-pos-2.jpg',
        '/images/projects/ds-pos/ds-pos-3.jpg',
        '/images/projects/ds-pos/ds-pos-4.jpg',
        '/images/projects/ds-pos/ds-pos-5.jpg',
      ]
    },
    {
      id: 'healthcare-system',
      title: 'Healthcare Management System',
      description: 'Clinic management system with patient records, appointment scheduling, and billing — built as a capstone project for a BSIT student.',
      tech: ['Laravel', 'MySQL'],
      features: ['Patient Records', 'Appointment Scheduling', 'Billing'],
      color: '#10b981',
      category: 'Web',
      client: 'Capstone Project (BSIT Student)',
      deployment: 'Web system',
      statusLabel: 'Delivered · Defended',
      status: 'completed',
      image: '/images/projects/healthcare/healthcare-1.jpg',
      fullDescription: 'A healthcare management system built for a student capstone project. It handles patient records, appointment scheduling, and billing. The project was successfully defended before a panel.',
      challenges: 'Structuring patient data cleanly and building workflows that would hold up under panel review.',
      outcome: 'Successfully defended as a capstone project.',
      images: [
        '/images/projects/healthcare/healthcare-1.jpg',
        '/images/projects/healthcare/healthcare-2.jpg',
        '/images/projects/healthcare/healthcare-3.jpg',
        '/images/projects/healthcare/healthcare-4.jpg',
      ]
    },
    {
      id: 'cbi-grade-system',
      title: 'Central Bukidnon Institute — Grade & Account System',
      description: 'School system for viewing grades and account balances, with role-based login and secure access. Also served as the school\'s public website.',
      tech: ['Laravel', 'Blade', 'MySQL', 'Tailwind CSS'],
      features: ['Grade Viewing', 'Account Balances', 'Role-Based Access'],
      color: '#f43f5e',
      category: 'Web',
      client: 'Educational Institution',
      deployment: 'Web system (internal)',
      statusLabel: 'Delivered · Replaced',
      status: 'completed',
      image: '/images/projects/cbi/cbi-website-1.jpg',
      fullDescription: 'A web-based system built with Laravel and Blade that allowed students to view their grades and account balances. It also served as the school\'s public website, including uploading of grades and management of student and faculty records. The school later moved to a newer system.',
      challenges: 'Building a secure role-based login and keeping grade and payment data accurate across semesters.',
      outcome: 'Delivered and used by the school until it was replaced by a newer system.',
      images: [
        '/images/projects/cbi/cbi-website-1.jpg',
        '/images/projects/cbi/cbi-website-2.jpg',
      ]
    },
    {
      id: 'student-grading-system',
      title: 'Student Grading System',
      description: 'Internal grading system for managing student records, grades, and academic reports — built for school staff use.',
      tech: ['Laravel', 'React', 'MySQL'],
      features: ['Student Records', 'Grade Entry', 'Academic Reports'],
      color: '#14b8a6',
      category: 'Web',
      client: 'Educational Institution',
      deployment: 'Web system (internal)',
      statusLabel: 'Delivered',
      status: 'completed',
      image: '/images/projects/grading/grading-1.jpg',
      fullDescription: 'An internal grading system used by school staff to manage student records, enter grades, and generate academic reports. Built with Laravel and React.',
      challenges: 'Keeping grade entry simple enough for non-technical staff while ensuring data accuracy.',
      outcome: 'Delivered and used by school staff for grade management.',
      images: [
        '/images/projects/grading/grading-1.jpg',
      ]
    },
    {
      id: 'qr-attendance-system',
      title: 'QR Code Attendance System',
      description: 'Attendance tracking system using QR code scanning — built as a capstone project for a student client.',
      tech: ['Laravel', 'MySQL'],
      features: ['QR Code Scanning', 'Attendance Logging', 'Reports'],
      color: '#3b82f6',
      category: 'Web',
      client: 'Capstone Project (Student)',
      deployment: 'Web system',
      statusLabel: 'Delivered · Defended',
      status: 'completed',
      image: '/images/projects/qr-attendance/qr-1.jpg',
      fullDescription: 'An attendance tracking system that uses QR code scanning to log attendance automatically. Built as a student capstone project and successfully defended before a panel.',
      challenges: 'Making QR scanning reliable and fast, and structuring attendance data for easy reporting.',
      outcome: 'Successfully defended as a capstone project.',
      images: [
        '/images/projects/qr-attendance/qr-1.jpg',
      ]
    },
    {
      id: 'motobrad-riders-club',
      title: 'Motobrad Riders Alliance Club PH',
      description: 'Club management system with role-based login, QR code attendance, member accounts, announcements, and dues tracking.',
      tech: ['Laravel', 'MySQL', 'JavaScript', 'Bootstrap', 'QR Code'],
      features: ['Role-Based Login', 'QR Attendance', 'Announcements', 'Dues Tracking'],
      color: '#ef4444',
      category: 'Web',
      client: 'Motorcycle Club',
      deployment: 'Web system',
      statusLabel: 'Delivered',
      status: 'completed',
      image: '/images/projects/motobrad/motobrad-4.jpg',
      fullDescription: 'A club management website with role-based login (Admin, Officers, Members), QR code attendance scanning, account management, and an announcements system. The system tracked dues, contributions, and member attendance. The club later became inactive.',
      challenges: 'Building a scalable role-based access system and making QR attendance work reliably for events.',
      outcome: 'Delivered and used by club officers until the club became inactive.',
      images: [
        '/images/projects/motobrad/motobrad-4.jpg',
        '/images/projects/motobrad/motobrad-1.jpg',
        '/images/projects/motobrad/motobrad-2.jpg',
        '/images/projects/motobrad/motobrad-3.jpg',
      ]
    },
    {
      id: 'villamor-twins-shop',
      title: 'Villamor Twins Shop',
      description: 'E-commerce platform for content creators — product catalog, shopping cart, and order management.',
      tech: ['Next.js', 'Laravel'],
      features: ['Product Catalog', 'Shopping Cart', 'Order Management'],
      color: '#f97316',
      category: 'Web',
      client: 'Content Creators',
      deployment: 'Web system',
      statusLabel: 'Delivered',
      status: 'completed',
      image: '/images/projects/villamor/villamor-shop-1.jpg',
      fullDescription: 'An e-commerce platform built for the Villamor Twins, featuring a product catalog, shopping cart, and order management system. Built with Next.js on the frontend and Laravel on the backend. The project concluded when the client moved to a different platform.',
      challenges: 'Building a clean product and checkout flow for creators who were not technical.',
      outcome: 'Delivered and used until the client pivoted.',
      images: [
        '/images/projects/villamor/villamor-shop-1.jpg',
        '/images/projects/villamor/villamor-shop-2.jpg',
        '/images/projects/villamor/villamor-shop-3.jpg',
        '/images/projects/villamor/villamor-shop-4.jpg',
        '/images/projects/villamor/villamor-shop-5.jpg',
        '/images/projects/villamor/villamor-shop-6.jpg',
      ],
      liveUrl: 'https://the-villamor-twins.larkacer-nexus.com',
    },
    {
      id: 'dental-clinic-website',
      title: 'Dental Clinic Website',
      description: 'Modern, responsive dental clinic website with online appointment booking, service showcase, and patient testimonials.',
      tech: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
      features: ['Appointment Booking', 'Service Showcase', 'Patient Testimonials', 'Digital Check-in'],
      color: '#06b6d4',
      category: 'Web',
      client: 'Dental Clinic',
      deployment: 'Web system',
      statusLabel: 'Delivered',
      status: 'completed',
      image: '/images/projects/dental/dental-website-1.jpg',
      fullDescription: 'A modern dental clinic website designed to attract new patients and provide a seamless booking experience. Features include an online appointment booking system, detailed service descriptions, patient testimonials, and a contact form. Built with Next.js, Tailwind CSS, and Framer Motion for smooth animations.',
      challenges: 'Creating an intuitive appointment booking flow and a professional, trust-building design.',
      outcome: 'Delivered as a live, responsive website for the clinic.',
      images: [
        '/images/projects/dental/dental-website-1.jpg',
        '/images/projects/dental/dental-website-2.jpg',
        '/images/projects/dental/dental-website-3.jpg',
        '/images/projects/dental/dental-website-4.jpg',
        '/images/projects/dental/dental-website-5.jpg',
      ],
      liveUrl: 'https://dental-clinic-website.larkacer-nexus.com',
    },

    // ============ DESKTOP ============
    {
      id: 'moraineco-calibration-system',
      title: 'Moraineco Calibration Inventory System',
      description: 'Desktop inventory and calibration tracking system for a calibration services business — equipment records, calibration schedules, and certificate generation.',
      tech: ['Electron', 'React', 'Laravel', 'MySQL', 'Tailwind CSS'],
      features: ['Equipment Records', 'Calibration Scheduling', 'Certificate Generation', 'Client Management'],
      color: '#14b8a6',
      category: 'Desktop',
      client: 'Calibration Services Business',
      deployment: 'Desktop application (Electron)',
      statusLabel: 'Delivered',
      status: 'completed',
      image: '/images/projects/moraineco/moraineco-system-1.jpg',
      fullDescription: 'A desktop inventory and calibration tracking system for Moraineco Calibration Center. It manages equipment records, calibration schedules, certificate generation, client details, and reports. Built with Laravel and React, packaged as a desktop application using Electron.',
      challenges: 'Building a desktop application with Electron that connects cleanly to a Laravel backend and MySQL database.',
      outcome: 'Delivered as an installed desktop system for the client\'s calibration operations.',
      images: [
        '/images/projects/moraineco/moraineco-system-1.jpg',
        '/images/projects/moraineco/moraineco-system-2.jpg',
        '/images/projects/moraineco/moraineco-system-3.jpg',
        '/images/projects/moraineco/moraineco-system-4.jpg',
        '/images/projects/moraineco/moraineco-system-5.jpg',
      ]
    },

    // ============ MOBILE ============
    {
      id: 'tindahan-inventory-app',
      title: 'Tindahan Inventory App',
      description: 'Offline-first mobile inventory app for a local sari-sari store — stock tracking, sales monitoring, and low-inventory alerts. No internet required.',
      tech: ['Flutter', 'Dart', 'SQLite'],
      features: ['Stock Tracking', 'Sales Monitoring', 'Low-Stock Alerts', 'Offline-First'],
      color: '#0ea5e9',
      category: 'Mobile',
      client: 'Local Sari-Sari Store',
      deployment: 'Mobile app (Android · offline)',
      statusLabel: 'In Use',
      status: 'completed',
      image: '/images/projects/tindahan/tindahan-1.jpg',
      fullDescription: 'A simple offline inventory system for a neighborhood sari-sari store. It tracks stock, records sales, and alerts the owner when items run low. Built with Flutter and SQLite — the app runs entirely on the store\'s device with no internet connection required.',
      challenges: 'Keeping the app simple enough for a non-technical store owner while still being reliable for daily use.',
      outcome: 'Currently in use at the store for daily inventory tracking.',
      images: [
        '/images/projects/tindahan/tindahan-1.jpg',
      ]
    },

    // ============ HTML STATIC SITES ============
    {
      id: 'nimbus-co',
      title: 'Nimbus & Co. Pet Essentials',
      description: 'Premium pet essentials landing page with fullscreen video hero, animated particles, product showcase, testimonials, and a lead-capture funnel.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Font Awesome', 'Google Fonts'],
      features: ['Video Hero', 'Animated Particles', 'Product Grid', 'Lead Funnel', 'Responsive Design'],
      color: '#C87A3A',
      category: 'HTML Sites',
      client: 'Static Landing Page',
      deployment: 'Static site (HTML/CSS/JS)',
      statusLabel: 'Demo',
      status: 'completed',
      image: '/images/projects/nimbus/nimbus-1.jpg',
      fullDescription: 'Nimbus & Co. is a luxury pet essentials landing page built with vanilla HTML, CSS, and JavaScript. It features a fullscreen autoplay video hero, floating animated particles, a curated product showcase with hover effects, customer testimonials, a newsletter lead-capture funnel, and an embedded Google Map. Fully responsive and dependency-free aside from CDN-loaded fonts and icons.',
      challenges: 'Creating a premium, editorial feel using only vanilla HTML/CSS/JS while keeping the page lightweight and animation-rich.',
      outcome: 'A fully responsive, animation-rich landing page with zero build step — ready to deploy as a static file.',
      images: ['/images/projects/nimbus/nimbus-1.jpg'],
      liveUrl: '/projects/nimbus-co/index.html',
    },
    {
      id: 'ao-constructions',
      title: 'A&O Constructions',
      description: 'Industrial-grade construction company website with fullscreen project hero, animated blueprint overlays, services, project gallery, and a free-estimate lead funnel.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Font Awesome', 'Google Fonts'],
      features: ['Video Hero', 'Animated Blueprints', 'Services Grid', 'Projects Gallery', 'Lead Funnel'],
      color: '#F59E0B',
      category: 'HTML Sites',
      client: 'Static Landing Page',
      deployment: 'Static site (HTML/CSS/JS)',
      statusLabel: 'Demo',
      status: 'completed',
      image: '/images/projects/ao-constructions/ao-constructions-1.jpg',
      fullDescription: 'A&O Constructions is a bold, industrial-grade landing page built with vanilla HTML, CSS, and JavaScript for a full-service construction company. It opens with a fullscreen autoplay video hero, layered with floating animated blueprint-style overlays. The page walks through core services, showcases completed projects in a hover-animated gallery, features client testimonials, and closes with a free-estimate lead-capture funnel.',
      challenges: 'Capturing an industrial brand feel using only vanilla HTML/CSS/JS while keeping animations fast and clean.',
      outcome: 'A fully responsive, animation-rich landing page ready to deploy as a static file.',
      images: [
        '/images/projects/ao-constructions/ao-constructions-1.jpg',
        '/images/projects/ao-constructions/ao-constructions-2.jpg',
        '/images/projects/ao-constructions/ao-constructions-3.jpg',
        '/images/projects/ao-constructions/ao-constructions-4.jpg',
        '/images/projects/ao-constructions/ao-constructions-5.jpg',
      ],
      liveUrl: '/projects/ao-constructions/index.html',
    },
    {
      id: 'plumbing-protection-plan-canada',
      title: 'Plumbing Protection Plan of Canada Inc.',
      description: 'Trust-focused plumbing protection website with fullscreen service hero, animated pipe-flow graphics, coverage plans, claim process, and a free-quote funnel.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Font Awesome', 'Google Fonts'],
      features: ['Video Hero', 'Animated Pipe Flow', 'Coverage Plans', 'Claim Process', 'Lead Funnel'],
      color: '#0EA5E9',
      category: 'HTML Sites',
      client: 'Static Landing Page',
      deployment: 'Static site (HTML/CSS/JS)',
      statusLabel: 'Demo',
      status: 'completed',
      image: '/images/projects/plumbing-protection/plumbing-protection-1.jpg',
      fullDescription: 'Plumbing Protection Plan of Canada Inc. is a trust-driven landing page built with vanilla HTML, CSS, and JavaScript for a plumbing protection provider. It opens with a fullscreen autoplay video hero, layered with animated pipe-flow graphics. The page walks through available coverage plans, a step-by-step claim process, verified testimonials, and closes with a free-quote lead-capture funnel.',
      challenges: 'Building trust for a protection-style service using only vanilla HTML/CSS/JS while keeping the quote-request flow frictionless.',
      outcome: 'A fully responsive, animation-rich landing page ready to deploy as a static file.',
      images: [
        '/images/projects/plumbing-protection/plumbing-protection-1.jpg',
        '/images/projects/plumbing-protection/plumbing-protection-2.jpg',
        '/images/projects/plumbing-protection/plumbing-protection-3.jpg',
        '/images/projects/plumbing-protection/plumbing-protection-4.jpg',
        '/images/projects/plumbing-protection/plumbing-protection-5.jpg',
      ],
      liveUrl: '/projects/plumbing-protection/index.html',
    },

    // ============ PERSONAL ============
    {
      id: 'romantic-album',
      title: 'Romantic Album',
      description: 'Interactive digital album for couples — photo gallery, love notes, music player, and timeline. Sold as a customizable template.',
      tech: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'Spotify API'],
      features: ['Photo Gallery', 'Love Notes', 'Music Player', 'Timeline'],
      color: '#ec4899',
      category: 'Personal',
      client: 'Personal Project · Sold Per Use',
      deployment: 'Web app',
      statusLabel: 'Available',
      status: 'completed',
      image: '/images/projects/romantic/romantic-album-1.jpg',
      fullDescription: 'Romantic Album is a personal project that combines photos, music, and love notes into an interactive experience. It features a photo gallery with smooth transitions, an embedded music player, a timeline of special moments, and personalized love notes. Sold as a customizable template per use.',
      challenges: 'Building a smooth, emotional user experience with subtle animations.',
      outcome: 'Available as a customizable template for couples.',
      images: [
        '/images/projects/romantic/romantic-album-1.jpg',
        '/images/projects/romantic/romantic-album-2.jpg',
        '/images/projects/romantic/romantic-album-3.jpg',
        '/images/projects/romantic/romantic-album-4.jpg',
        '/images/projects/romantic/romantic-album-5.jpg',
      ]
    },
    {
      id: 'student-marketplace',
      title: 'Student Marketplace',
      description: 'Marketplace platform for students to buy and sell items within their campus. Personal startup project — development paused pending funding.',
      tech: ['Laravel', 'React', 'MySQL'],
      features: ['Listings', 'Buyer/Seller Accounts', 'Campus-Only Marketplace'],
      color: '#8b5cf6',
      category: 'Personal',
      client: 'Personal Startup Project',
      deployment: 'Web app',
      statusLabel: 'In Development',
      status: 'pending',
      image: '/images/projects/marketplace/marketplace-1.jpg',
      fullDescription: 'A marketplace platform for students to buy and sell items within their campus. Built with Laravel and React. Development is currently paused pending funding.',
      challenges: 'Designing a campus-scoped marketplace that feels trustworthy and easy to use.',
      outcome: 'In development — not yet launched.',
      images: [
        '/images/projects/marketplace/marketplace-1.jpg',
      ]
    },
  ];

  const sortedProjects = [...projects].sort((a, b) => {
    if (a.status === 'completed' && b.status !== 'completed') return -1;
    if (a.status !== 'completed' && b.status === 'completed') return 1;
    return 0;
  });

  const filteredProjects = filter === 'all'
    ? sortedProjects
    : sortedProjects.filter(p => p.category === filter);

  const openModal = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const openPreview = (url: string, title: string) => {
    setPreviewUrl(url);
    setPreviewTitle(title);
  };

  const renderStatusBadge = (status: string) => {
    if (status === 'pending') {
      return (
        <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider px-2 py-1"
          style={{ color: '#f59e0b', border: '1px solid #f59e0b40', background: '#f59e0b10' }}>
          <FaClock className="w-2.5 h-2.5" /> In Progress
        </span>
      );
    }
    return null;
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden" style={{ background: 'var(--bg-primary)' }}>
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: 'var(--text-primary)' }}>
            Selected <span className="gradient-text">Work</span>
          </h2>
          <p className="max-w-2xl mx-auto text-sm" style={{ color: 'var(--text-secondary)' }}>
            Web systems, desktop tools, and mobile apps — built for businesses, schools, and local organizations.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 text-sm font-medium transition-all duration-300 border ${
                  filter === cat
                    ? 'gradient-bg text-white shadow-lg shadow-indigo-500/25 border-transparent'
                    : 'hover:border-indigo-500/30'
                }`}
                style={{
                  color: filter === cat ? 'white' : 'var(--text-secondary)',
                  borderColor: filter === cat ? 'transparent' : 'var(--border-color)',
                  background: filter === cat ? 'transparent' : 'var(--bg-card)'
                }}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="card-modern overflow-hidden relative group cursor-pointer flex flex-col"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => openModal(project)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -4 }}
              >
                <div className="relative w-full h-48 overflow-hidden bg-neutral-800">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      unoptimized={project.image?.startsWith('https://')}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <FaTools className="w-8 h-8 opacity-20" style={{ color: 'var(--text-muted)' }} />
                    </div>
                  )}
                  {project.status === 'pending' && (
                    <div className="absolute top-2 right-2">
                      <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider px-2 py-1 bg-yellow-500/90 text-white">
                        <FaClock className="w-2.5 h-2.5" /> In Progress
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <span
                    className="inline-block text-xs font-medium px-3 py-1 mb-4 self-start"
                    style={{
                      background: `${project.color}15`,
                      color: project.color,
                      border: `1px solid ${project.color}25`
                    }}
                  >
                    {project.category}
                  </span>

                  <h3 className="text-lg font-bold mb-1" style={{ color: 'var(--text-primary)' }}>
                    {project.title}
                  </h3>

                  <p className="text-xs mb-3" style={{ color: 'var(--text-muted)' }}>
                    {project.client} · {project.deployment}
                  </p>

                  <p className="text-sm leading-relaxed mb-4 flex-grow" style={{ color: 'var(--text-secondary)' }}>
                    {project.description}
                  </p>

                  <div className="mb-3">
                    <span className="inline-flex items-center gap-1 text-xs"
                      style={{ color: project.status === 'completed' ? '#22c55e' : '#f59e0b' }}>
                      {project.status === 'completed' ? (
                        <><FaCheckCircle className="w-3 h-3" /> {project.statusLabel}</>
                      ) : (
                        <><FaClock className="w-3 h-3" /> {project.statusLabel}</>
                      )}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="text-xs px-2.5 py-1 border" style={{
                        color: 'var(--text-muted)',
                        borderColor: 'var(--border-color)'
                      }}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4 pt-4 border-t mt-auto" style={{ borderColor: 'var(--border-color)' }}>
                    <button
                      onClick={(e) => { e.stopPropagation(); openModal(project); }}
                      className="text-sm font-medium inline-flex items-center gap-1 transition-colors hover:opacity-70"
                      style={{ color: '#818cf8' }}
                    >
                      Details <FaExternalLinkAlt className="w-3 h-3" />
                    </button>

                    {project.liveUrl && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          openPreview(project.liveUrl!, project.title);
                        }}
                        className="text-sm font-medium inline-flex items-center gap-1 transition-colors hover:opacity-70"
                        style={{ color: '#22c55e' }}
                      >
                        Live Preview <FaEye className="w-3 h-3" />
                      </button>
                    )}

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-sm font-medium inline-flex items-center gap-1 transition-colors hover:opacity-70"
                        style={{ color: '#22c55e' }}
                      >
                        Live Demo <FaExternalLinkAlt className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="text-center mt-12 max-w-2xl mx-auto">
          <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            Most systems were built for internal, offline, or desktop use — so they are not publicly deployed.
            Screenshots and code walkthroughs are available on request.
          </p>
          <div className="mt-4">
            <a
              href="#contact"
              className="inline-block px-6 py-2.5 text-sm font-medium border transition-all duration-200 hover:opacity-70 hover:border-indigo-500/30"
              style={{
                color: 'var(--text-secondary)',
                borderColor: 'var(--border-color)'
              }}
            >
              Request a Walkthrough →
            </a>
          </div>
          <p className="text-sm mt-6" style={{ color: 'var(--text-muted)' }}>
            Showing {filteredProjects.length} of {projects.length} projects
            {filter !== 'all' && ` in ${filter}`}
          </p>
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />

      <LivePreviewModal
        url={previewUrl}
        title={previewTitle}
        onClose={() => setPreviewUrl(null)}
      />
    </section>
  );
}