// 'use client';

// import { useRef, useState } from 'react';
// import Image from 'next/image';
// import { getIconSource } from '@/utils/getIconSource';

// const WeatherSlider = ({ hourlyData }) => {
//   const sliderRef = useRef(null);
//   const [isDragging, setIsDragging] = useState(false);
//   const [startPosition, setStartPosition] = useState(0);
//   const [scrollLeft, setScrollLeft] = useState(0);

//   const handleMouseDown = (e) => {
//     setIsDragging(true);
//     setStartPosition(e.pageX - sliderRef.current.offsetLeft);
//     setScrollLeft(sliderRef.current.scrollLeft);
//     sliderRef.current.style.cursor = 'grabbing';
//   };

//   const handleMouseLeave = () => {
//     setIsDragging(false);
//     sliderRef.current.style.cursor = 'grab';
//   };

//   const handleMouseUp = () => {
//     setIsDragging(false);
//     sliderRef.current.style.cursor = 'grab';
//   };

//   const handleMouseMove = (e) => {
//     if (!isDragging) return;
//     e.preventDefault();
//     const x = e.pageX - sliderRef.current.offsetLeft;
//     const walk = (x - startPosition) * 1.5; // Adjust scroll speed if needed
//     sliderRef.current.scrollLeft = scrollLeft - walk;
//   };

//   return (
//     <div
//       className="mb-8 wrapper-slider cursor-grab"
//       ref={sliderRef}
//       onMouseDown={handleMouseDown}
//       onMouseUp={handleMouseUp}
//       onMouseLeave={handleMouseLeave}
//       onMouseMove={handleMouseMove}
//     >
//       <div className="flex flex-col bg-indigo-400 flex-ccolgap-4 slider">
//         {hourlyData.map((hour, index) => (
//           <div
//             key={index}
//             className="min-w-[150px] flex flex-col items-center p-4 bg-white rounded-lg shadow-md"
//           >
//             <h3 className="text-lg font-semibold">{hour.datetime}</h3>
//             <Image
//               src={getIconSource(hour.icon)}
//               alt={hour.conditions}
//               width={50}
//               height={50}
//             />
//             <p className="text-xl">{hour.temp}°C</p>
//             <p className="text-sm">{hour.conditions}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default WeatherSlider;
