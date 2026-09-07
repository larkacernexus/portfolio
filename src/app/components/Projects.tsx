'use client';

import { useState } from 'react';
import { FaExternalLinkAlt, FaHammer, FaEye } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import ProjectModal from './ProjectModal';
import LivePreviewModal from './LivePreviewModal'; // 👈 NEW IMPORT

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 👈 NEW: Live preview state
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [previewTitle, setPreviewTitle] = useState('');

  const categories = ['all', 'AI/ML', 'Web Apps', 'Systems', 'Automation', 'Websites', 'E-Commerce', 'Creative', 'Calibration', 'Mobile'];

  const projects = [
    // COMPLETED PROJECTS
    {
      id: 'barangay-management-system',
      title: 'Barangay Management System',
      description: 'Complete digitized clearance processing, incident tracking, and resident records management with database-driven workflows.',
      tech: ['Laravel', 'ReactJS', 'MySQL', 'Tailwind CSS'],
      features: ['Clearance Processing', 'Incident Tracking', 'Resident Records'],
      color: '#6366f1',
      category: 'Systems',
      image: '/images/projects/barangay/barangay-system-1.jpg',
      status: 'completed',
      fullDescription: 'The Barangay Management System is a comprehensive web application designed to digitize and streamline administrative processes at the barangay level. It features a complete clearance processing system, incident and blotter tracking, and a centralized resident records database. Built with Laravel and ReactJS, the system provides a user-friendly interface for barangay staff while maintaining data integrity and security.',
      challenges: 'Optimizing database queries for large resident datasets and implementing real-time incident reporting.',
      outcome: 'Reduced processing time by 60% and improved data accuracy across all barangay records.',
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
      description: 'Customized Point of Sale system for D\'s Mini Mart and Cuisine with AI-powered inventory predictions, smart reordering, and real-time business analytics.',
      tech: ['Laravel', 'VueJS', 'MySQL', 'AI/ML', 'Tailwind CSS'],
      features: ['AI Inventory Predictions', 'Smart Reordering', 'Sales Analytics', 'Real-time Dashboard', 'POS Transaction Processing'],
      color: '#8b5cf6',
      category: 'AI/ML',
      image: '/images/projects/ds-pos/ds-pos-1.jpg',
      status: 'completed',
      fullDescription: 'This project was a Point of Sale (POS) system for D\'s Mini Mart and Cuisine, originally purchased as a ready-made solution by my client. I was responsible for customizing the entire system to match their specific operational needs including modifying both the backend and frontend. My work involved adjusting key functionalities, redesigning UI components, updating workflows, and thoroughly testing the system to ensure smooth day-to-day usage.',
      challenges: 'Adapting a pre-built POS system to meet specific business requirements while maintaining stability.',
      outcome: 'Reduced inventory waste by 30% through AI-powered predictions. Improved checkout speed by 40%.',
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
      description: 'Medical clinic management with patient records, appointment scheduling, and billing automation.',
      tech: ['React', 'Node.js', 'MySQL', 'Docker'],
      features: ['Patient Portal', 'Appointment Scheduling', 'Billing System'],
      color: '#10b981',
      category: 'Systems',
      image: '/images/projects/healthcare/healthcare-1.jpg',
      status: 'completed',
      fullDescription: 'A comprehensive healthcare management system designed for medical clinics. Features include patient records management, appointment scheduling, automated billing, and a patient portal for self-service.',
      challenges: 'Ensuring HIPAA compliance and data security for sensitive medical records.',
      outcome: 'Reduced administrative workload by 40% and improved patient satisfaction.',
      images: [
        '/images/projects/healthcare/healthcare-1.jpg',
        '/images/projects/healthcare/healthcare-2.jpg',
        '/images/projects/healthcare/healthcare-3.jpg',
        '/images/projects/healthcare/healthcare-4.jpg',
      ]
    },
    {
      id: 'cbi-grade-system',
      title: 'School Grade & Account System',
      description: 'Web-based system for Central Bukidnon Institute enabling students to view grades and account balances with secure login, role-based access, and real-time updates.',
      tech: ['Laravel', 'React', 'MySQL', 'Tailwind CSS'],
      features: ['Grade Viewing', 'Account Balance', 'Role-Based Access', 'Multi-Factor Authentication', 'Real-time Updates'],
      color: '#f43f5e',
      category: 'Websites',
      image: '/images/projects/cbi/cbi-website-1.jpg',
      status: 'completed',
      fullDescription: 'Developed a web-based system using Laravel to let students view their grades and account balances. The goal was to improve transparency and reduce manual work for school staff. I implemented secure login, role-based access, and real-time grade and payment updates.',
      challenges: 'Implementing secure role-based access control and real-time data synchronization for grades and payments.',
      outcome: 'Improved data accuracy, saved admin time, and gave students easy access to their academic and financial records.',
      images: [
        '/images/projects/cbi/cbi-website-1.jpg',
        '/images/projects/cbi/cbi-website-2.jpg',
      ]
    },
    {
      id: 'dental-clinic-website',
      title: 'Dental Clinic Website',
      description: 'Modern, responsive dental clinic website with online appointment booking, service showcase, and patient testimonials.',
      tech: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'EmailJS'],
      features: ['Appointment Booking', 'Service Showcase', 'Patient Testimonials', 'Contact Form'],
      color: '#06b6d4',
      category: 'Websites',
      image: '/images/projects/dental/dental-website-1.jpg',
      status: 'completed',
      fullDescription: 'A modern dental clinic website designed to attract new patients and provide a seamless booking experience. Features include an online appointment booking system, detailed service descriptions, patient testimonials, and a contact form with EmailJS integration.',
      challenges: 'Creating an intuitive appointment booking flow with calendar integration.',
      outcome: 'Increased patient bookings by 45% through the online booking system.',
      images: [
        '/images/projects/dental/dental-website-1.jpg',
        '/images/projects/dental/dental-website-2.jpg',
        '/images/projects/dental/dental-website-3.jpg',
        '/images/projects/dental/dental-website-4.jpg',
        '/images/projects/dental/dental-website-5.jpg',
      ]
    },
    {
      id: 'nexus-elementary-school',
      title: 'Nexus Elementary School Demo',
      description: 'A modern, interactive demo website for a fictional elementary school with virtual tour, events calendar, and parent portal.',
      tech: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'EmailJS'],
      features: ['Virtual Tour', 'Events Calendar', 'Parent Portal', 'Online Forms', 'Gallery Showcase'],
      color: '#22c55e',
      category: 'Websites',
      image: '/images/projects/nexus/nexus-elementary-1.jpg',
      status: 'completed',
      fullDescription: 'Nexus Elementary School Demo is a showcase website for a fictional school, featuring an interactive virtual tour, events calendar, parent portal with student progress tracking, online forms for registrations, and a gallery showcasing school activities.',
      challenges: 'Implementing an engaging virtual tour with interactive elements.',
      outcome: 'Increased parent engagement through the parent portal and event calendar.',
      images: [
        '/images/projects/nexus/nexus-elementary-1.jpg',
        '/images/projects/nexus/nexus-elementary-2.jpg',
        '/images/projects/nexus/nexus-elementary-3.jpg',
        '/images/projects/nexus/nexus-elementary-4.jpg',
        '/images/projects/nexus/nexus-elementary-5.jpg',
      ]
    },
    {
      id: 'villamor-twins-shop',
      title: 'Villamor Twins Shop',
      description: 'An e-commerce platform for Villamor Twins Shop featuring product catalog, shopping cart, payment integration, and order management system.',
      tech: ['Next.js', 'Tailwind CSS', 'Stripe', 'PostgreSQL', 'Framer Motion'],
      features: ['Product Catalog', 'Shopping Cart', 'Payment Integration', 'Order Management', 'Inventory Tracking'],
      color: '#f97316',
      category: 'E-Commerce',
      image: '/images/projects/villamor/villamor-shop-1.jpg',
      status: 'completed',
      fullDescription: 'Villamor Twins Shop is a complete e-commerce solution built for a retail business. It features a dynamic product catalog with categories, a shopping cart with real-time updates, secure payment integration via Stripe, and a comprehensive order management system.',
      challenges: 'Implementing a secure payment gateway and real-time inventory management.',
      outcome: 'Streamlined online shopping experience with 99.9% transaction success rate.',
      images: [
        '/images/projects/villamor/villamor-shop-1.jpg',
        '/images/projects/villamor/villamor-shop-2.jpg',
        '/images/projects/villamor/villamor-shop-3.jpg',
        '/images/projects/villamor/villamor-shop-4.jpg',
        '/images/projects/villamor/villamor-shop-5.jpg',
        '/images/projects/villamor/villamor-shop-6.jpg',
      ]
    },
    {
      id: 'romantic-album',
      title: 'Romantic Album',
      description: 'A beautiful, interactive digital album showcasing romantic moments with music, photos, and love notes.',
      tech: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'Spotify API'],
      features: ['Photo Gallery', 'Love Notes', 'Music Player', 'Timeline', 'Interactive Design'],
      color: '#ec4899',
      category: 'Creative',
      image: '/images/projects/romantic/romantic-album-1.jpg',
      status: 'completed',
      fullDescription: 'Romantic Album is a heartfelt digital project that combines photos, music, and love notes into an interactive experience. Features include a beautiful photo gallery with smooth transitions, embedded music player with romantic songs, a timeline of special moments, and personalized love notes.',
      challenges: 'Creating a seamless and emotional user experience with smooth animations and transitions.',
      outcome: 'A beautiful, shareable digital album that captures and celebrates special moments.',
      images: [
        '/images/projects/romantic/romantic-album-1.jpg',
        '/images/projects/romantic/romantic-album-2.jpg',
        '/images/projects/romantic/romantic-album-3.jpg',
        '/images/projects/romantic/romantic-album-4.jpg',
        '/images/projects/romantic/romantic-album-5.jpg',
      ]
    },
    {
      id: 'moraineco-calibration-system',
      title: 'Moraineco Calibration Center System',
      description: 'Complete calibration management system for Moraineco Calibration Center with equipment tracking, calibration scheduling, and certification management.',
      tech: ['Laravel', 'ReactJS', 'MySQL', 'Tailwind CSS', 'Livewire'],
      features: ['Equipment Management', 'Calibration Scheduling', 'Certificate Generation', 'Client Management', 'Report Generation'],
      color: '#14b8a6',
      category: 'Calibration',
      image: '/images/projects/moraineco/moraineco-system-1.jpg',
      status: 'completed',
      fullDescription: 'The Moraineco Calibration Center System is a comprehensive web application designed to manage all aspects of calibration center operations. It features equipment tracking with calibration history, automated scheduling for calibration due dates, certificate generation with digital signatures, client management with service history, and detailed reporting for compliance.',
      challenges: 'Implementing complex scheduling algorithms and generating ISO-compliant calibration certificates.',
      outcome: 'Reduced manual data entry by 80% and improved scheduling efficiency by 65%.',
      images: [
        '/images/projects/moraineco/moraineco-system-1.jpg',
        '/images/projects/moraineco/moraineco-system-2.jpg',
        '/images/projects/moraineco/moraineco-system-3.jpg',
        '/images/projects/moraineco/moraineco-system-4.jpg',
        '/images/projects/moraineco/moraineco-system-5.jpg',
      ]
    },
    {
      id: 'motobrad-riders-club',
      title: 'Motobrad Riders Alliance Club PH',
      description: 'Club management system with role-based login, QR code attendance scanner, account management, announcements, and dues tracking for Motobrad Riders Alliance Club Philippines.',
      tech: ['Laravel', 'MySQL', 'JavaScript', 'QR Code', 'Bootstrap'],
      features: ['Role-Based Login', 'QR Code Attendance Scanner', 'Account Management', 'Announcements System', 'Dues & Contributions Tracking', 'Member Reports'],
      color: '#ef4444',
      category: 'Websites',
      image: '/images/projects/motobrad/motobrad-4.jpg',
      status: 'completed',
      fullDescription: 'Developed a club website with a role-based login system (Admin, Officers, Members), QR code attendance scanner, account management, and announcements feature. The system tracks dues, contributions, and member attendance, generating reports for better record-keeping.',
      challenges: 'Implementing QR code scanning functionality for attendance tracking and building a scalable role-based access control system.',
      outcome: 'Streamlined club operations, improved transparency, and saved time for club officers with automated reporting and member management.',
      images: [
        '/images/projects/motobrad/motobrad-4.jpg',
        '/images/projects/motobrad/motobrad-1.jpg',
        '/images/projects/motobrad/motobrad-2.jpg',
        '/images/projects/motobrad/motobrad-3.jpg',
      ]
    },

    // 👇 NEW: NIMBUS & CO. — your embedded HTML site
    {
      id: 'nimbus-co',
      title: 'Nimbus & Co. Pet Essentials',
      description: 'Premium pet essentials landing page with fullscreen video hero, animated particles, product showcase, testimonials, and a lead-capture funnel.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Font Awesome', 'Google Fonts'],
      features: ['Video Hero', 'Animated Particles', 'Product Grid', 'Lead Funnel', 'Responsive Design', 'Google Maps Embed'],
      color: '#C87A3A',
      category: 'Websites',
      image: '/images/projects/nimbus/nimbus-1.jpg',
      status: 'completed',
      fullDescription: 'Nimbus & Co. is a luxury pet essentials landing page built with vanilla HTML, CSS, and JavaScript. It features a fullscreen autoplay video hero, floating animated particles, a curated product showcase with hover effects, customer testimonials, a newsletter lead-capture funnel with a 25% discount offer, and an embedded Google Map. Fully responsive and dependency-free aside from CDN-loaded fonts and icons.',
      challenges: 'Creating a premium, editorial feel using only vanilla HTML/CSS/JS while keeping the page lightweight and animation-rich.',
      outcome: 'A fully responsive, animation-rich landing page with zero build step — ready to deploy as a static file.',
      images: [
        '/images/projects/nimbus/nimbus-1.jpg',
      ],
      liveUrl: '/projects/nimbus-co/index.html', // 👈 THIS is what makes the preview work
    },

    {
      id: 'ao-constructions',
      title: 'A&O Constructions',
      description: 'Bold, industrial-grade construction company website with a fullscreen project hero, animated blueprint overlays, service showcase, completed-projects gallery, client testimonials, and a free-estimate lead-capture funnel.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Font Awesome', 'Google Fonts'],
      features: ['Video Hero', 'Animated Blueprints', 'Services Grid', 'Projects Gallery', 'Lead Funnel', 'Responsive Design', 'Google Maps Embed'],
      color: '#F59E0B',
      category: 'Websites',
      image: '/images/projects/ao-constructions/ao-constructions-1.jpg',
      status: 'completed',
      fullDescription: 'A&O Constructions is a bold, industrial-grade landing page built with vanilla HTML, CSS, and JavaScript for a full-service construction company. It opens with a fullscreen autoplay video hero showing active job sites, layered with floating animated blueprint-style overlays. The page walks visitors through core services (residential, commercial, renovation, and civil works), showcases completed projects in a hover-animated gallery, features verified client testimonials, and closes with a free-estimate lead-capture funnel. Fully responsive and dependency-free aside from CDN-loaded fonts and icons.',
      challenges: 'Capturing the raw, industrial feel of a construction brand using only vanilla HTML/CSS/JS — balancing heavy typography and dark tones with clean, fast-loading animations.',
      outcome: 'A fully responsive, animation-rich landing page with zero build step — ready to deploy as a static file and generate estimate requests from day one.',
      images: [
        '/images/projects/ao-constructions/ao-constructions-1.jpg',
        '/images/projects/ao-constructions/ao-constructions-2.jpg',
        '/images/projects/ao-constructions/ao-constructions-3.jpg',
        '/images/projects/ao-constructions/ao-constructions-4.jpg',
        '/images/projects/ao-constructions/ao-constructions-5.jpg',
      ],
      liveUrl: '/projects/ao-constructions/index.html', // 👈 THIS is what makes the preview work
    },


    {
      id: 'plumbing-protection-plan-canada',
      title: 'Plumbing Protection Plan of Canada Inc.',
      description: 'Trust-focused plumbing protection website with a fullscreen service hero, animated pipe-flow graphics, coverage plan showcase, claim-process walkthrough, customer testimonials, and a free-quote lead-capture funnel.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Font Awesome', 'Google Fonts'],
      features: ['Video Hero', 'Animated Pipe Flow', 'Coverage Plans', 'Claim Process', 'Testimonials', 'Lead Funnel', 'Responsive Design', 'Google Maps Embed'],
      color: '#0EA5E9',
      category: 'Websites',
      image: '/images/projects/plumbing-protection/plumbing-protection-1.jpg',
      status: 'completed',
      fullDescription: 'Plumbing Protection Plan of Canada Inc. is a trust-driven landing page built with vanilla HTML, CSS, and JavaScript for a nationwide plumbing protection provider. It opens with a fullscreen autoplay video hero showing real plumbing work, layered with animated pipe-flow graphics that reinforce the brand story. The page walks visitors through available coverage plans, a step-by-step claim process, verified customer testimonials, and closes with a free-quote lead-capture funnel. Fully responsive and dependency-free aside from CDN-loaded fonts and icons.',
      challenges: 'Building trust for a protection/insurance-style service using only vanilla HTML/CSS/JS — balancing a reassuring, professional tone with clear coverage details and a frictionless quote request flow.',
      outcome: 'A fully responsive, animation-rich landing page with zero build step — ready to deploy as a static file and convert visitors into plan sign-ups from day one.',
      images: [
        '/images/projects/plumbing-protection/plumbing-protection-1.jpg',
        '/images/projects/plumbing-protection/plumbing-protection-2.jpg',
        '/images/projects/plumbing-protection/plumbing-protection-3.jpg',
        '/images/projects/plumbing-protection/plumbing-protection-4.jpg',
        '/images/projects/plumbing-protection/plumbing-protection-5.jpg',
      ],
      liveUrl: '/projects/plumbing-protection/index.html', // 👈 THIS is what makes the preview work
    },

    // ONGOING PROJECTS
    {
      id: 'workflow-automation',
      title: 'Workflow Automation Suite',
      description: 'Custom automation workflows integrating multiple APIs, databases, and AI tools to streamline business operations. [ONGOING]',
      tech: ['Node.js', 'Google Apps Script', 'REST APIs', 'Claude AI'],
      features: ['API Integration', 'Data Synchronization', 'Smart Notifications'],
      color: '#ec4899',
      category: 'Automation',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=400&fit=crop',
      status: 'ongoing',
      fullDescription: 'The Workflow Automation Suite connects disparate systems and automates repetitive tasks across the organization. Using Node.js and Google Apps Script, it orchestrates complex workflows between CRMs, email systems, and databases.',
      challenges: 'Handling rate limits and failures across multiple third-party APIs.',
      outcome: 'Automated 80% of manual data entry tasks, saving 20+ hours per week.',
      images: [
        'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=400&fit=crop',
      ]
    },
    {
      id: 'ecommerce-platform',
      title: 'E-Commerce Platform',
      description: 'Full-featured e-commerce solution with payment integration, inventory management, and analytics dashboard. [ONGOING]',
      tech: ['Next.js', 'Stripe', 'PostgreSQL', 'Redis'],
      features: ['Payment Gateway', 'Order Management', 'Real-time Analytics'],
      color: '#06b6d4',
      category: 'Web Apps',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop',
      status: 'ongoing',
      fullDescription: 'A complete e-commerce platform built with Next.js and Stripe, featuring real-time inventory management, order processing, and comprehensive analytics. The platform handles high-traffic loads with Redis caching and PostgreSQL.',
      challenges: 'Implementing a scalable order processing system that handles peak traffic.',
      outcome: 'Processed 10,000+ orders in the first month with 99.9% uptime.',
      images: [
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop',
      ]
    },
    {
      id: 'ai-chatbot',
      title: 'AI Chatbot Solution',
      description: 'Intelligent chatbot powered by Claude AI for customer support and lead generation across multiple platforms. [ONGOING]',
      tech: ['Python', 'Claude API', 'WebSocket', 'MongoDB'],
      features: ['24/7 Support', 'Lead Capture', 'Multi-platform'],
      color: '#f59e0b',
      category: 'AI/ML',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=400&fit=crop',
      status: 'ongoing',
      fullDescription: 'An intelligent chatbot solution that handles customer inquiries 24/7 across web, mobile, and social media. Powered by Claude AI, it provides natural conversations, lead capture, and seamless handoff to human agents when needed.',
      challenges: 'Training the AI to handle domain-specific questions accurately.',
      outcome: 'Resolved 70% of customer inquiries automatically, reducing support team workload.',
      images: [
        'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=400&fit=crop',
      ]
    },
    {
      id: 'tindahan-inventory-app',
      title: 'Tindahan Inventory App',
      description: 'Mobile inventory management app for sari-sari stores built with Flutter, featuring real-time stock tracking, sales monitoring, and automated reordering. [ONGOING]',
      tech: ['Flutter', 'Dart', 'Firebase', 'REST APIs'],
      features: ['Real-time Stock Tracking', 'Sales Monitoring', 'Automated Reordering', 'Expiry Alerts', 'Analytics Dashboard'],
      color: '#0ea5e9',
      category: 'Mobile',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
      status: 'ongoing',
      fullDescription: 'Mobile inventory management app for sari-sari stores built with Flutter, featuring real-time stock tracking, sales monitoring, and automated reordering.',
      challenges: 'Building a cross-platform mobile app with real-time sync capabilities.',
      outcome: 'Streamlined inventory management for small retail businesses.',
      images: [
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
      ]
    }
  ];

  // Sort: Completed projects first, then Ongoing projects
  const sortedProjects = [...projects].sort((a, b) => {
    if (a.status === 'completed' && b.status === 'ongoing') return -1;
    if (a.status === 'ongoing' && b.status === 'completed') return 1;
    return 0;
  });

  const filteredProjects = filter === 'all' 
    ? sortedProjects 
    : sortedProjects.filter(p => p.category === filter);

  // Open project details modal
  const openModal = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  // Close project details modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  // 👈 NEW: Open live preview
  const openPreview = (url: string, title: string) => {
    setPreviewUrl(url);
    setPreviewTitle(title);
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden" style={{ background: 'var(--bg-primary)' }}>
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: 'var(--text-primary)' }}>
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Real-world solutions that make a difference
          </p>

          {/* Filter Buttons */}
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
                key={index}
                className="card-modern overflow-hidden relative group cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => openModal(project)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                {/* Project Image */}
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    unoptimized={project.image?.startsWith('https://')}
                  />
                  {project.status === 'ongoing' && (
                    <div className="absolute top-2 right-2 flex items-center gap-1.5 px-3 py-1.5 bg-yellow-500/90 text-white text-xs font-medium rounded">
                      <FaHammer className="w-3 h-3" />
                      <span>ONGOING</span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <span 
                    className="inline-block text-xs font-medium px-3 py-1 mb-4"
                    style={{
                      background: `${project.color}15`,
                      color: project.color,
                      border: `1px solid ${project.color}25`
                    }}
                  >
                    {project.category}
                  </span>

                  <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text-primary)' }}>{project.title}</h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>{project.description}</p>

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

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.features.map((feature, idx) => (
                      <span key={idx} className="text-xs px-2.5 py-1" style={{ 
                        color: 'var(--text-muted)',
                        background: 'var(--bg-card)',
                        border: '1px solid var(--border-color)'
                      }}>
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* 👇 Action buttons — now includes Live Preview */}
                  <div className="flex flex-wrap gap-4 pt-4 border-t" style={{ borderColor: 'var(--border-color)' }}>
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
                        style={{ color: 'var(--text-muted)' }}
                      >
                        Open <FaExternalLinkAlt className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="text-center mt-12">
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
            Showing {filteredProjects.length} projects
            {filter !== 'all' && ` in ${filter}`}
          </p>
        </div>
      </div>

      {/* Project details modal (existing) */}
      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />

      {/* 👇 NEW: Live preview iframe modal */}
      <LivePreviewModal
        url={previewUrl}
        title={previewTitle}
        onClose={() => setPreviewUrl(null)}
      />
    </section>
  );
}