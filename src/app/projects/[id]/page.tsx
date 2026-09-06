// 'use client';

// import { useParams, useRouter } from 'next/navigation';
// import Link from 'next/link';
// import { useState } from 'react';
// import Header from '@/app/components/Header';
// import Footer from '@/app/components/Footer';
// import ProjectHeader from './components/ProjectHeader';
// import ImageGallery from './components/ImageGallery';
// import ProjectContent from './components/ProjectContent';
// import FullscreenModal from './components/FullscreenModal';

// // Project data - keep in sync with Projects.tsx
// const projects = [
//   {
//     id: 'barangay-management-system',
//     title: 'Barangay Management System',
//     description: 'Complete digitized clearance processing, incident tracking, and resident records management with database-driven workflows.',
//     fullDescription: 'The Barangay Management System is a comprehensive web application designed to digitize and streamline administrative processes at the barangay level. It features a complete clearance processing system, incident and blotter tracking, and a centralized resident records database. Built with Laravel and ReactJS, the system provides a user-friendly interface for barangay staff while maintaining data integrity and security.',
//     tech: ['Laravel', 'ReactJS', 'MySQL', 'Tailwind CSS'],
//     features: ['Clearance Processing', 'Incident Tracking', 'Resident Records', 'Automated Reports', 'Admin Dashboard'],
//     color: '#6366f1',
//     category: 'Systems',
//     images: [
//       '/images/projects/barangay/barangay-system-1.jpg',
//       '/images/projects/barangay/barangay-system-2.jpg',
//       '/images/projects/barangay/barangay-system-3.jpg',
//       '/images/projects/barangay/barangay-system-4.jpg',
//       '/images/projects/barangay/barangay-system-5.jpg',
//       '/images/projects/barangay/barangay-system-6.jpg',
//       '/images/projects/barangay/barangay-system-7.jpg',
//       '/images/projects/barangay/barangay-system-8.jpg',
//       '/images/projects/barangay/barangay-system-9.jpg',
//       '/images/projects/barangay/barangay-system-10.jpg',
//     ],
//     challenges: 'Optimizing database queries for large resident datasets and implementing real-time incident reporting.',
//     outcome: 'Reduced processing time by 60% and improved data accuracy across all barangay records.'
//   },
//   {
//     id: 'ds-mini-mart-pos',
//     title: "D's Mini Mart & Cuisine POS",
//     description: 'Customized Point of Sale system for D\'s Mini Mart and Cuisine with AI-powered inventory predictions, smart reordering, and real-time business analytics.',
//     fullDescription: 'This project was a Point of Sale (POS) system for D\'s Mini Mart and Cuisine, originally purchased as a ready-made solution by my client. I was responsible for customizing the entire system to match their specific operational needs including modifying both the backend and frontend. My work involved adjusting key functionalities, redesigning UI components, updating workflows, and thoroughly testing the system to ensure smooth day-to-day usage. I also integrated AI-driven features for inventory prediction and smart reordering, helping the business reduce waste and optimize stock levels. This project helped me strengthen my Laravel expertise and taught me how to adapt and optimize existing systems for real business environments.',
//     tech: ['Laravel', 'VueJS', 'MySQL', 'AI/ML', 'Tailwind CSS'],
//     features: [
//       'AI Inventory Predictions', 
//       'Smart Reordering', 
//       'Sales Analytics', 
//       'Real-time Dashboard',
//       'POS Transaction Processing',
//       'Automated Reporting',
//       'User Role Management'
//     ],
//     color: '#8b5cf6',
//     category: 'AI/ML',
//     images: [
//       '/images/projects/ds-pos/ds-pos-1.jpg',
//       '/images/projects/ds-pos/ds-pos-2.jpg',
//       '/images/projects/ds-pos/ds-pos-3.jpg',
//       '/images/projects/ds-pos/ds-pos-4.jpg',
//       '/images/projects/ds-pos/ds-pos-5.jpg',
//     ],
//     challenges: 'Adapting a pre-built POS system to meet specific business requirements while maintaining stability. Implementing AI-driven inventory predictions with limited historical data.',
//     outcome: 'Reduced inventory waste by 30% through AI-powered predictions. Improved checkout speed by 40% and provided real-time business insights to the owner.'
//   },
//   {
//     id: 'workflow-automation',
//     title: 'Workflow Automation Suite',
//     description: 'Custom automation workflows integrating multiple APIs, databases, and AI tools to streamline business operations.',
//     fullDescription: 'The Workflow Automation Suite connects disparate systems and automates repetitive tasks across the organization. Using Node.js and Google Apps Script, it orchestrates complex workflows between CRMs, email systems, and databases.',
//     tech: ['Node.js', 'Google Apps Script', 'REST APIs', 'Claude AI'],
//     features: ['API Integration', 'Data Synchronization', 'Smart Notifications', 'Task Automation', 'Error Handling'],
//     color: '#ec4899',
//     category: 'Automation',
//     images: [
//       '/images/projects/automation-1.jpg',
//       '/images/projects/automation-2.jpg',
//       '/images/projects/automation-3.jpg',
//       '/images/projects/automation-4.jpg',
//       '/images/projects/automation-5.jpg',
//       '/images/projects/automation-6.jpg',
//     ],
//     challenges: 'Handling rate limits and failures across multiple third-party APIs.',
//     outcome: 'Automated 80% of manual data entry tasks, saving 20+ hours per week.'
//   },
//   {
//     id: 'ecommerce-platform',
//     title: 'E-Commerce Platform',
//     description: 'Full-featured e-commerce solution with payment integration, inventory management, and analytics dashboard.',
//     fullDescription: 'A complete e-commerce platform built with Next.js and Stripe, featuring real-time inventory management, order processing, and comprehensive analytics. The platform handles high-traffic loads with Redis caching and PostgreSQL.',
//     tech: ['Next.js', 'Stripe', 'PostgreSQL', 'Redis'],
//     features: ['Payment Gateway', 'Order Management', 'Real-time Analytics', 'Inventory Tracking', 'Customer Management'],
//     color: '#06b6d4',
//     category: 'Web Apps',
//     images: [
//       '/images/projects/ecommerce-1.jpg',
//       '/images/projects/ecommerce-2.jpg',
//       '/images/projects/ecommerce-3.jpg',
//       '/images/projects/ecommerce-4.jpg',
//       '/images/projects/ecommerce-5.jpg',
//     ],
//     challenges: 'Implementing a scalable order processing system that handles peak traffic.',
//     outcome: 'Processed 10,000+ orders in the first month with 99.9% uptime.'
//   },
//   {
//     id: 'healthcare-system',
//     title: 'Healthcare Management System',
//     description: 'Medical clinic management with patient records, appointment scheduling, and billing automation.',
//     fullDescription: 'A comprehensive healthcare management system designed for medical clinics. Features include patient records management, appointment scheduling, automated billing, and a patient portal for self-service.',
//     tech: ['React', 'Node.js', 'MySQL', 'Docker'],
//     features: ['Patient Portal', 'Appointment Scheduling', 'Billing System', 'Medical Records', 'Prescription Management'],
//     color: '#10b981',
//     category: 'Systems',
//     images: [
//       '/images/projects/healthcare/healthcare-1.jpg',
//       '/images/projects/healthcare/healthcare-2.jpg',
//       '/images/projects/healthcare/healthcare-3.jpg',
//       '/images/projects/healthcare/healthcare-4.jpg',
//     ],
//     challenges: 'Ensuring HIPAA compliance and data security for sensitive medical records.',
//     outcome: 'Reduced administrative workload by 40% and improved patient satisfaction.'
//   },
//   {
//     id: 'ai-chatbot',
//     title: 'AI Chatbot Solution',
//     description: 'Intelligent chatbot powered by Claude AI for customer support and lead generation across multiple platforms.',
//     fullDescription: 'An intelligent chatbot solution that handles customer inquiries 24/7 across web, mobile, and social media. Powered by Claude AI, it provides natural conversations, lead capture, and seamless handoff to human agents when needed.',
//     tech: ['Python', 'Claude API', 'WebSocket', 'MongoDB'],
//     features: ['24/7 Support', 'Lead Capture', 'Multi-platform', 'Human Handoff', 'Analytics Dashboard'],
//     color: '#f59e0b',
//     category: 'AI/ML',
//     images: [
//       '/images/projects/chatbot-1.jpg',
//       '/images/projects/chatbot-2.jpg',
//       '/images/projects/chatbot-3.jpg',
//       '/images/projects/chatbot-4.jpg',
//       '/images/projects/chatbot-5.jpg',
//     ],
//     challenges: 'Training the AI to handle domain-specific questions accurately.',
//     outcome: 'Resolved 70% of customer inquiries automatically, reducing support team workload.'
//   },
//   {
//     id: 'cbi-grade-system',
//     title: 'School Grade & Account System',
//     description: 'Web-based system for Central Bukidnon Institute enabling students to view grades and account balances with secure login, role-based access, and real-time updates.',
//     fullDescription: 'Developed a web-based system using Laravel to let students view their grades and account balances. The goal was to improve transparency and reduce manual work for school staff. I implemented secure login, role-based access, and real-time grade and payment updates. The system improved data accuracy, saved admin time, and gave students easy access to their academic and financial records.',
//     tech: ['Laravel', 'React', 'MySQL', 'Tailwind CSS'],
//     features: [
//       'Grade Viewing', 
//       'Account Balance', 
//       'Role-Based Access',
//       'Multi-Factor Authentication',
//       'Real-time Updates',
//       'Data Entry',
//       'Student Portal'
//     ],
//     color: '#f43f5e',
//     category: 'Websites',
//     images: [
//       '/images/projects/cbi/cbi-website-1.jpg',
//       '/images/projects/cbi/cbi-website-2.jpg',
//     ],
//     challenges: 'Implementing secure role-based access control and real-time data synchronization for grades and payments.',
//     outcome: 'Improved data accuracy, saved admin time, and gave students easy access to their academic and financial records.'
//   },
//   {
//     id: 'dental-clinic-website',
//     title: 'Dental Clinic Website',
//     description: 'Modern, responsive dental clinic website with online appointment booking, service showcase, and patient testimonials.',
//     fullDescription: 'A modern dental clinic website designed to attract new patients and provide a seamless booking experience. Features include an online appointment booking system, detailed service descriptions, patient testimonials, and a contact form with EmailJS integration.',
//     tech: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'EmailJS'],
//     features: ['Appointment Booking', 'Service Showcase', 'Patient Testimonials', 'Contact Form', 'Gallery'],
//     color: '#06b6d4',
//     category: 'Websites',
//     images: [
//       '/images/projects/dental/dental-website-1.jpg',
//       '/images/projects/dental/dental-website-2.jpg',
//       '/images/projects/dental/dental-website-3.jpg',
//       '/images/projects/dental/dental-website-4.jpg',
//       '/images/projects/dental/dental-website-5.jpg',
//       '/images/projects/dental/dental-website-6.jpg',
//       '/images/projects/dental/dental-website-7.jpg',
//       '/images/projects/dental/dental-website-8.jpg',
//       '/images/projects/dental/dental-website-9.jpg',
//     ],
//     challenges: 'Creating an intuitive appointment booking flow with calendar integration.',
//     outcome: 'Increased patient bookings by 45% through the online booking system.'
//   },
//   {
//     id: 'nexus-elementary-school',
//     title: 'Nexus Elementary School Demo',
//     description: 'A modern, interactive demo website for a fictional elementary school with virtual tour, events calendar, and parent portal.',
//     fullDescription: 'Nexus Elementary School Demo is a showcase website for a fictional school, featuring an interactive virtual tour, events calendar, parent portal with student progress tracking, online forms for registrations, and a gallery showcasing school activities. Built with Next.js and Framer Motion for smooth animations.',
//     tech: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'EmailJS'],
//     features: ['Virtual Tour', 'Events Calendar', 'Parent Portal', 'Online Forms', 'Gallery Showcase', 'Newsletter'],
//     color: '#22c55e',
//     category: 'Websites',
//     images: [
//       '/images/projects/nexus/nexus-elementary-1.jpg',
//       '/images/projects/nexus/nexus-elementary-2.jpg',
//       '/images/projects/nexus/nexus-elementary-3.jpg',
//       '/images/projects/nexus/nexus-elementary-4.jpg',
//       '/images/projects/nexus/nexus-elementary-5.jpg',
//       '/images/projects/nexus/nexus-elementary-6.jpg',
//       '/images/projects/nexus/nexus-elementary-7.jpg',
//       '/images/projects/nexus/nexus-elementary-8.jpg',
//       '/images/projects/nexus/nexus-elementary-9.jpg',
//       '/images/projects/nexus/nexus-elementary-10.jpg',
//     ],
//     challenges: 'Implementing an engaging virtual tour with interactive elements.',
//     outcome: 'Increased parent engagement through the parent portal and event calendar.'
//   },
//   {
//     id: 'villamor-twins-shop',
//     title: 'Villamor Twins Shop',
//     description: 'An e-commerce platform for Villamor Twins Shop featuring product catalog, shopping cart, payment integration, and order management system.',
//     fullDescription: 'Villamor Twins Shop is a complete e-commerce solution built for a retail business. It features a dynamic product catalog with categories, a shopping cart with real-time updates, secure payment integration via Stripe, and a comprehensive order management system. The platform also includes inventory tracking, customer accounts, and order history.',
//     tech: ['Next.js', 'Tailwind CSS', 'Stripe', 'PostgreSQL', 'Framer Motion'],
//     features: ['Product Catalog', 'Shopping Cart', 'Payment Integration', 'Order Management', 'Inventory Tracking', 'Customer Accounts'],
//     color: '#f97316',
//     category: 'E-Commerce',
//     images: [
//       '/images/projects/villamor/villamor-shop-1.jpg',
//       '/images/projects/villamor/villamor-shop-2.jpg',
//       '/images/projects/villamor/villamor-shop-3.jpg',
//       '/images/projects/villamor/villamor-shop-4.jpg',
//       '/images/projects/villamor/villamor-shop-5.jpg',
//       '/images/projects/villamor/villamor-shop-6.jpg',
//     ],
//     challenges: 'Implementing a secure payment gateway and real-time inventory management.',
//     outcome: 'Streamlined online shopping experience with 99.9% transaction success rate.'
//   },
//   {
//     id: 'romantic-album',
//     title: 'Romantic Album',
//     description: 'A beautiful, interactive digital album showcasing romantic moments with music, photos, and love notes.',
//     fullDescription: 'Romantic Album is a heartfelt digital project that combines photos, music, and love notes into an interactive experience. Features include a beautiful photo gallery with smooth transitions, embedded music player with romantic songs, a timeline of special moments, and personalized love notes. Built with Next.js and Framer Motion for smooth animations.',
//     tech: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'Spotify API'],
//     features: ['Photo Gallery', 'Love Notes', 'Music Player', 'Timeline', 'Interactive Design', 'Responsive'],
//     color: '#ec4899',
//     category: 'Creative',
//     images: [
//       '/images/projects/romantic/romantic-album-1.jpg',
//       '/images/projects/romantic/romantic-album-2.jpg',
//       '/images/projects/romantic/romantic-album-3.jpg',
//       '/images/projects/romantic/romantic-album-4.jpg',
//       '/images/projects/romantic/romantic-album-5.jpg',
//       '/images/projects/romantic/romantic-album-6.jpg',
//       '/images/projects/romantic/romantic-album-7.jpg',
//       '/images/projects/romantic/romantic-album-8.jpg',
//     ],
//     challenges: 'Creating a seamless and emotional user experience with smooth animations and transitions.',
//     outcome: 'A beautiful, shareable digital album that captures and celebrates special moments.'
//   },
//   {
//     id: 'moraineco-calibration-system',
//     title: 'Moraineco Calibration Center System',
//     description: 'Complete calibration management system for Moraineco Calibration Center with equipment tracking, calibration scheduling, and certification management.',
//     fullDescription: 'The Moraineco Calibration Center System is a comprehensive web application designed to manage all aspects of calibration center operations. It features equipment tracking with calibration history, automated scheduling for calibration due dates, certificate generation with digital signatures, client management with service history, and detailed reporting for compliance. Built with Laravel and ReactJS, the system streamlines the entire calibration workflow from equipment registration to certificate issuance.',
//     tech: ['Laravel', 'ReactJS', 'MySQL', 'Tailwind CSS', 'Livewire'],
//     features: ['Equipment Management', 'Calibration Scheduling', 'Certificate Generation', 'Client Management', 'Report Generation', 'Inventory Tracking'],
//     color: '#14b8a6',
//     category: 'Calibration',
//     images: [
//       '/images/projects/moraineco/moraineco-system-1.jpg',
//       '/images/projects/moraineco/moraineco-system-2.jpg',
//       '/images/projects/moraineco/moraineco-system-3.jpg',
//       '/images/projects/moraineco/moraineco-system-4.jpg',
//       '/images/projects/moraineco/moraineco-system-5.jpg',
//     ],
//     challenges: 'Implementing complex scheduling algorithms and generating ISO-compliant calibration certificates.',
//     outcome: 'Reduced manual data entry by 80% and improved scheduling efficiency by 65%.'
//   },
//   {
//     id: 'motobrad-riders-club',
//     title: 'Motobrad Riders Alliance Club PH',
//     description: 'Club management system with role-based login, QR code attendance scanner, account management, announcements, and dues tracking for Motobrad Riders Alliance Club Philippines.',
//     fullDescription: 'Developed a club website with a role-based login system (Admin, Officers, Members), QR code attendance scanner, account management, and announcements feature. The system tracks dues, contributions, and member attendance, generating reports for better record-keeping. Announcements are posted for easy communication with members. The site offers a responsive, user-friendly interface accessible on both mobile and desktop, streamlining operations, improving transparency, and saving time for club officers.',
//     tech: ['Laravel', 'MySQL', 'JavaScript', 'QR Code', 'Bootstrap'],
//     features: [
//       'Role-Based Login (Admin, Officers, Members)',
//       'QR Code Attendance Scanner',
//       'Account Management',
//       'Announcements System',
//       'Dues & Contributions Tracking',
//       'Member Reports',
//       'Responsive Design',
//       'Mobile & Desktop Access'
//     ],
//     color: '#ef4444',
//     category: 'Websites',
//     images: [
//       '/images/projects/motobrad/motobrad-4.jpg',
//       '/images/projects/motobrad/motobrad-1.jpg',
//       '/images/projects/motobrad/motobrad-2.jpg',
//       '/images/projects/motobrad/motobrad-3.jpg',
//     ],
//     challenges: 'Implementing QR code scanning functionality for attendance tracking and building a scalable role-based access control system.',
//     outcome: 'Streamlined club operations, improved transparency, and saved time for club officers with automated reporting and member management.'
//   }
// ];

// export default function ProjectDetail() {
//   const params = useParams();
//   const router = useRouter();
//   const projectId = params.id as string;
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [isFullscreen, setIsFullscreen] = useState(false);
//   const [fullscreenImageIndex, setFullscreenImageIndex] = useState(0);
  
//   const project = projects.find(p => p.id === projectId);

//   if (!project) {
//     return (
//       <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
//         <Header />
//         <div className="flex items-center justify-center min-h-[80vh]">
//           <div className="text-center">
//             <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Project not found</h2>
//             <Link href="/#projects" className="text-indigo-400 hover:underline">← Back to projects</Link>
//           </div>
//         </div>
//         <Footer />
//       </div>
//     );
//   }

//   const images = project.images || [];
//   const totalImages = images.length;

//   const goToPrevious = () => {
//     setCurrentImageIndex((prev) => (prev === 0 ? totalImages - 1 : prev - 1));
//   };

//   const goToNext = () => {
//     setCurrentImageIndex((prev) => (prev === totalImages - 1 ? 0 : prev + 1));
//   };

//   const goToImage = (index: number) => {
//     setCurrentImageIndex(index);
//   };

//   // Fullscreen functions
//   const openFullscreen = (index: number) => {
//     setFullscreenImageIndex(index);
//     setIsFullscreen(true);
//     document.body.style.overflow = 'hidden';
//   };

//   const closeFullscreen = () => {
//     setIsFullscreen(false);
//     document.body.style.overflow = 'auto';
//   };

//   const goToFullscreenPrevious = () => {
//     setFullscreenImageIndex((prev) => (prev === 0 ? totalImages - 1 : prev - 1));
//   };

//   const goToFullscreenNext = () => {
//     setFullscreenImageIndex((prev) => (prev === totalImages - 1 ? 0 : prev + 1));
//   };

//   return (
//     <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
//       <Header />
      
//       <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
//         <ProjectHeader 
//           title={project.title}
//           category={project.category}
//           color={project.color}
//         />

//         <div className="border p-8" style={{ 
//           background: 'var(--bg-card)',
//           borderColor: 'var(--border-color)'
//         }}>
//           <ImageGallery
//             images={images}
//             currentIndex={currentImageIndex}
//             onPrevious={goToPrevious}
//             onNext={goToNext}
//             onImageClick={openFullscreen}
//             onThumbnailClick={goToImage}
//           />

//           <ProjectContent
//             fullDescription={project.fullDescription || project.description}
//             tech={project.tech}
//             features={project.features}
//             challenges={project.challenges}
//             outcome={project.outcome}
//           />
//         </div>
//       </div>
      
//       <Footer />

//       <FullscreenModal
//         isOpen={isFullscreen}
//         images={images}
//         currentIndex={fullscreenImageIndex}
//         onClose={closeFullscreen}
//         onPrevious={goToFullscreenPrevious}
//         onNext={goToFullscreenNext}
//         onThumbnailClick={setFullscreenImageIndex}
//         projectTitle={project.title}
//       />
//     </div>
//   );
// }