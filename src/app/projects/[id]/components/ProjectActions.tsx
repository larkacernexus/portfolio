// 'use client';

// import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// interface ProjectActionsProps {
//   demoLink: string;
//   githubLink: string;
// }

// export default function ProjectActions({ demoLink, githubLink }: ProjectActionsProps) {
//   return (
//     <div className="flex flex-wrap gap-4 pt-6 border-t" style={{ borderColor: 'var(--border-color)' }}>
//       <a 
//         href={demoLink}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="px-6 py-2 gradient-bg text-white text-sm font-medium transition-all duration-200 hover:opacity-85 inline-flex items-center gap-2"
//       >
//         Live Demo <FaExternalLinkAlt className="w-3 h-3" />
//       </a>
//       <a 
//         href={githubLink}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="px-6 py-2 text-sm font-medium border transition-all duration-200 hover:opacity-70 inline-flex items-center gap-2"
//         style={{ 
//           color: 'var(--text-secondary)',
//           borderColor: 'var(--border-color)'
//         }}
//       >
//         <FaGithub className="w-4 h-4" /> View Code
//       </a>
//     </div>
//   );
// }