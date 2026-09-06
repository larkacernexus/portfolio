// 'use client';

// interface ProjectContentProps {
//   fullDescription: string;
//   tech: string[];
//   features: string[];
//   challenges?: string;
//   outcome?: string;
// }

// export default function ProjectContent({
//   fullDescription,
//   tech,
//   features,
//   challenges,
//   outcome
// }: ProjectContentProps) {
//   return (
//     <>
//       <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
//         {fullDescription}
//       </p>

//       {/* Tech Stack */}
//       <div className="mb-6">
//         <h4 className="text-sm font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Tech Stack</h4>
//         <div className="flex flex-wrap gap-2">
//           {tech.map((item, idx) => (
//             <span key={idx} className="text-xs px-3 py-1 border" style={{ 
//               color: 'var(--text-muted)',
//               borderColor: 'var(--border-color)'
//             }}>
//               {item}
//             </span>
//           ))}
//         </div>
//       </div>

//       {/* Features */}
//       <div className="mb-6">
//         <h4 className="text-sm font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Key Features</h4>
//         <div className="flex flex-wrap gap-2">
//           {features.map((feature, idx) => (
//             <span key={idx} className="text-xs px-3 py-1" style={{ 
//               color: 'var(--text-muted)',
//               background: 'var(--bg-primary)',
//               border: '1px solid var(--border-color)'
//             }}>
//               ✓ {feature}
//             </span>
//           ))}
//         </div>
//       </div>

//       {/* Challenges & Outcome */}
//       {challenges && (
//         <div className="mb-6">
//           <h4 className="text-sm font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Challenges</h4>
//           <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{challenges}</p>
//         </div>
//       )}
//       {outcome && (
//         <div className="mb-6">
//           <h4 className="text-sm font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Outcome</h4>
//           <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{outcome}</p>
//         </div>
//       )}
//     </>
//   );
// }