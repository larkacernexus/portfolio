// 'use client';

// import Image from 'next/image';
// import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';
// import { useEffect } from 'react';

// interface FullscreenModalProps {
//   isOpen: boolean;
//   images: string[];
//   currentIndex: number;
//   onClose: () => void;
//   onPrevious: () => void;
//   onNext: () => void;
//   onThumbnailClick: (index: number) => void;
//   projectTitle: string;
// }

// export default function FullscreenModal({
//   isOpen,
//   images,
//   currentIndex,
//   onClose,
//   onPrevious,
//   onNext,
//   onThumbnailClick,
//   projectTitle
// }: FullscreenModalProps) {
//   const totalImages = images.length;

//   // Keyboard navigation
//   useEffect(() => {
//     const handleKeyDown = (e: KeyboardEvent) => {
//       if (isOpen) {
//         if (e.key === 'Escape') onClose();
//         else if (e.key === 'ArrowLeft') onPrevious();
//         else if (e.key === 'ArrowRight') onNext();
//       }
//     };
//     window.addEventListener('keydown', handleKeyDown);
//     return () => window.removeEventListener('keydown', handleKeyDown);
//   }, [isOpen, onClose, onPrevious, onNext]);

//   if (!isOpen || totalImages === 0) return null;

//   return (
//     <div 
//       className="fixed inset-0 z-[9999] flex items-center justify-center"
//       style={{ 
//         background: 'rgba(0,0,0,0.95)',
//         backdropFilter: 'blur(8px)'
//       }}
//       onClick={onClose}
//     >
//       {/* Close Button */}
//       <button
//         onClick={onClose}
//         className="absolute top-6 right-6 p-3 transition-all duration-200 hover:scale-110 hover:opacity-70"
//         style={{ color: 'white' }}
//         aria-label="Close fullscreen"
//       >
//         <FaTimes className="w-8 h-8" />
//       </button>

//       {/* Image Counter */}
//       <div className="absolute top-6 left-1/2 transform -translate-x-1/2 text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
//         {currentIndex + 1} / {totalImages}
//       </div>

//       {/* Main Fullscreen Image */}
//       <div 
//         className="relative w-full h-full max-w-7xl max-h-[90vh] cursor-pointer"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <Image
//           src={images[currentIndex]}
//           alt={`${projectTitle} - Fullscreen`}
//           fill
//           className="object-contain"
//           priority
//         />
//       </div>

//       {/* Navigation Arrows - Fullscreen */}
//       {totalImages > 1 && (
//         <>
//           <button
//             onClick={(e) => { e.stopPropagation(); onPrevious(); }}
//             className="absolute left-6 top-1/2 transform -translate-y-1/2 p-3 transition-all duration-200 hover:scale-110 hover:opacity-70"
//             style={{ 
//               background: 'rgba(255,255,255,0.1)',
//               color: 'white',
//               borderRadius: '50%'
//             }}
//             aria-label="Previous image"
//           >
//             <FaChevronLeft className="w-6 h-6" />
//           </button>
//           <button
//             onClick={(e) => { e.stopPropagation(); onNext(); }}
//             className="absolute right-6 top-1/2 transform -translate-y-1/2 p-3 transition-all duration-200 hover:scale-110 hover:opacity-70"
//             style={{ 
//               background: 'rgba(255,255,255,0.1)',
//               color: 'white',
//               borderRadius: '50%'
//             }}
//             aria-label="Next image"
//           >
//             <FaChevronRight className="w-6 h-6" />
//           </button>
//         </>
//       )}

//       {/* Thumbnails - Fullscreen */}
//       {totalImages > 1 && (
//         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 max-w-[80%] overflow-x-auto px-4 py-2" style={{
//           background: 'rgba(0,0,0,0.5)',
//           borderRadius: '8px'
//         }}>
//           {images.map((image, index) => (
//             <button
//               key={index}
//               onClick={(e) => { e.stopPropagation(); onThumbnailClick(index); }}
//               className={`relative w-16 h-12 border-2 transition-all duration-200 flex-shrink-0 ${
//                 currentIndex === index 
//                   ? 'border-indigo-500' 
//                   : 'border-transparent opacity-50 hover:opacity-100'
//               }`}
//               style={{ 
//                 overflow: 'hidden',
//                 background: 'var(--bg-secondary)'
//               }}
//             >
//               <Image
//                 src={image}
//                 alt={`Thumbnail ${index + 1}`}
//                 fill
//                 className="object-cover"
//               />
//             </button>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }