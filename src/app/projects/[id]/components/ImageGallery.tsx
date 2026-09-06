// 'use client';

// import Image from 'next/image';
// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// interface ImageGalleryProps {
//   images: string[];
//   currentIndex: number;
//   onPrevious: () => void;
//   onNext: () => void;
//   onImageClick: (index: number) => void;
//   onThumbnailClick: (index: number) => void;
// }

// export default function ImageGallery({
//   images,
//   currentIndex,
//   onPrevious,
//   onNext,
//   onImageClick,
//   onThumbnailClick
// }: ImageGalleryProps) {
//   const totalImages = images.length;

//   if (totalImages === 0) return null;

//   return (
//     <div className="mb-8">
//       {/* Main Image */}
//       <div className="relative border" style={{ 
//         background: 'var(--bg-secondary)',
//         borderColor: 'var(--border-color)',
//         overflow: 'hidden',
//         height: '400px'
//       }}>
//         <div 
//           className="w-full h-full cursor-pointer"
//           onClick={() => onImageClick(currentIndex)}
//         >
//           <Image
//             src={images[currentIndex]}
//             alt={`Image ${currentIndex + 1}`}
//             fill
//             className="object-contain hover:opacity-90 transition-opacity"
//             priority
//           />
//         </div>
        
//         {/* Navigation Arrows */}
//         {totalImages > 1 && (
//           <>
//             <button
//               onClick={(e) => { e.stopPropagation(); onPrevious(); }}
//               className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 transition-all duration-200 hover:opacity-70"
//               style={{ 
//                 background: 'rgba(0,0,0,0.5)',
//                 color: 'white'
//               }}
//               aria-label="Previous image"
//             >
//               <FaChevronLeft className="w-5 h-5" />
//             </button>
//             <button
//               onClick={(e) => { e.stopPropagation(); onNext(); }}
//               className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 transition-all duration-200 hover:opacity-70"
//               style={{ 
//                 background: 'rgba(0,0,0,0.5)',
//                 color: 'white'
//               }}
//               aria-label="Next image"
//             >
//               <FaChevronRight className="w-5 h-5" />
//             </button>
//           </>
//         )}

//         {/* Click to expand hint */}
//         <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xs px-3 py-1" style={{
//           background: 'rgba(0,0,0,0.6)',
//           color: 'white',
//           borderRadius: '4px'
//         }}>
//           Click image to expand
//         </div>
//       </div>

//       {/* Thumbnails */}
//       {totalImages > 1 && (
//         <div className="flex flex-wrap gap-2 mt-4">
//           {images.map((image, index) => (
//             <button
//               key={index}
//               onClick={() => onThumbnailClick(index)}
//               className={`relative w-20 h-16 border transition-all duration-200 ${
//                 currentIndex === index 
//                   ? 'border-indigo-500' 
//                   : 'opacity-60 hover:opacity-100'
//               }`}
//               style={{ 
//                 borderColor: currentIndex === index ? '#6366f1' : 'var(--border-color)',
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