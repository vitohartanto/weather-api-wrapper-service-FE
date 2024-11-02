
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
