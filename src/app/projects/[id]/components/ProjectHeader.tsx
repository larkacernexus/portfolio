// 'use client';

// import { FaArrowLeft } from 'react-icons/fa';
// import { useRouter } from 'next/navigation';

// interface ProjectHeaderProps {
//   title: string;
//   category: string;
//   color: string;
// }

// export default function ProjectHeader({ title, category, color }: ProjectHeaderProps) {
//   const router = useRouter();

//   return (
//     <>
//       {/* Back Button */}
//       <button
//         onClick={() => router.back()}
//         className="flex items-center gap-2 text-sm font-medium mb-8 transition-colors hover:opacity-70"
//         style={{ color: 'var(--text-muted)' }}
//       >
//         <FaArrowLeft className="w-4 h-4" /> Back to projects
//       </button>

//       {/* Category */}
//       <span 
//         className="inline-block text-xs font-medium px-3 py-1 mb-4"
//         style={{
//           background: `${color}15`,
//           color: color,
//           border: `1px solid ${color}25`
//         }}
//       >
//         {category}
//       </span>

//       <h1 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
//         {title}
//       </h1>
//     </>
//   );
// }