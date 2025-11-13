import { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import Slider1 from "../imgs/Slider-imgs/Slider1.webp";
import Slider2 from "../imgs/Slider-imgs/Slider2.webp";
import Slider3 from "../imgs/Slider-imgs/Slider3.webp";
import Slider4 from "../imgs/Slider-imgs/Slider4.webp";
import Slider5 from "../imgs/Slider-imgs/Slider5.webp";
import Slider6 from "../imgs/Slider-imgs/Slider6.webp";

const images = [
  { src: Slider1, title: "Luxury Classic Watch", price: "Starting at ₹10,499" },
  {
    src: Slider2,
    title: "Modern Premium Watch",
    price: "Available at ₹12,599",
  },
  {
    src: Slider3,
    title: "Limited Edition Watch",
    price: "Starting at ₹44,499",
  },
  { src: Slider4, title: "Smart Premium Edition", price: "Now at ₹15,499" },
  {
    src: Slider5,
    title: "Elegant Classic Watch",
    price: "Starting at ₹10,400",
  },
  {
    src: Slider6,
    title: "Exclusive Offer Watch",
    price: "Offer Price ₹10,499",
  },
];

function ImageSlider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent((next) => (next === images.length - 1 ? 0 : next + 1));
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  return (
    <div className="relative w-full mt-10 overflow-hidden group">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, i) => (
          <div key={i} className="relative w-full flex-shrink-0">
            <img
              src={img.src}
              alt={img.title}
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
            />

            <div className="absolute ml-6 inset-0 flex flex-col items-start justify-center text-left text-black px-6 sm:px-12 md:px-20">
              <h2 className="text-lg sm:text-2xl md:text-4xl font-semibold mb-3 leading-snug">
                {img.title}
              </h2>
              <p className="text-sm sm:text-lg md:text-xl font-medium">
                {img.price}
              </p>
              <Link
                to="#"
                className="text-white bg-black py-2 px-5 rounded-md mt-4 hover:bg-gray-800 transition-all text-sm sm:text-base"
              >
                Shop Now
              </Link>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-5 top-1/2 -translate-y-1/2 bg-gray-300 text-white text-2xl sm:text-xl p-3 sm:p-4 hover:bg-gray-400 rounded-2xl transition-all"
      >
        <FaArrowLeft />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-5 rounded-2xl top-1/2 -translate-y-1/2 bg-gray-300 text-white text-2xl sm:text-xl p-3 sm:p-4 hover:bg-gray-400   transition-all"
      >
        <FaArrowRight />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 sm:gap-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-6 sm:w-10 h-0.5 rounded-full transition-all ${
              current === index ? "bg-black" : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;

/////////////////////////////////////////////////

// import { useState } from "react";
// import Slider1 from "../imgs/Slider-imgs/Slider1.webp";
// import Slider2 from "../imgs/Slider-imgs/Slider2.webp";
// import Slider3 from "../imgs/Slider-imgs/Slider3.webp";
// import Slider4 from "../imgs/Slider-imgs/Slider4.webp";
// import Slider5 from "../imgs/Slider-imgs/Slider5.webp";
// import Slider6 from "../imgs/Slider-imgs/Slider6.webp";
// import { Link } from "react-router-dom";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// const images = [
//   {
//     src: Slider1,
//     title: "Luxury Classic Watch",
//     link: "#",
//     price: "Starting at @10,499",
//   },
//   {
//     src: Slider2,
//     title: "Modern Premium Watch",
//     link: "#",
//     price: "Avaiabbe at @12,599",
//   },
//   {
//     src: Slider3,
//     title: "Limited Edition Watch",
//     link: "#",
//     price: "Starting at @44,499",
//   },
//   {
//     src: Slider4,
//     title: "Limited Edition Watch",
//     link: "#",
//     price: "Now book wit at @15,499",
//   },
//   {
//     src: Slider5,
//     title: "Limited Edition Watch",
//     link: "#",
//     price: "Starting at @10,400",
//   },
//   {
//     src: Slider6,
//     title: "Limited Edition Watch",
//     link: "#",
//     price: "Offer with @10,499",
//   },
// ];

// function ImageSlider() {
//   const [current, setCurrent] = useState(0);

//   const nextSlide = () => {
//     setCurrent((next) => (next === images.length - 1 ? 0 : next + 1));
//   };

//   const prevSlide = () => {
//     setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
//   };

//   return (
//     <div className="  mt-14 relative w-screen   overflow-hidden ">
//       <div
//         className="flex transition-transform duration-700 ease-in-out md"
//         style={{ transform: `translateX(-${current * 100}%)` }}
//       >
//         {images.map((img) => (
//           <div key={img.src} className="relative w-full flex-shrink-0">
//             <img
//               src={img.src}
//               alt={img.title}
//               className="w-full h-[350px] sm:h-[350px] md:h-[400px] lg:h-[500px] object-cover"
//             />

//             <div className="absolute inset-0 flex flex-col items-start justify-center text-left text-black px-4 sm:px-10 md:pl-24">
//               <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 leading-snug">
//                 {img.title}
//                 <br />
//                 <span> {img.price}</span>
//               </h2>
//               <Link
//                 to="#"
//                 className="text-white bg-black py-2 px-4 rounded-md mt-3 sm:mt-4 ml-2 sm:ml-6 hover:bg-gray-700 transition-all text-sm sm:text-base"
//               >
//                 Shop Now
//               </Link>
//             </div>
//             <div className="flex gap-10 absolute left-80  bottom-5">
//               <button
//                 className="w-20 bg-gray-200 h-0.5 rounded-full hover:bg-slate-400 "
//                 onClick={() => setCurrent(1)}
//               ></button>
//               <button
//                 className="w-20 bg-gray-200 h-0.5 rounded-full hover:bg-slate-400"
//                 onClick={() => setCurrent(1)}
//               ></button>
//               <button
//                 className="w-20 bg-gray-200 h-0.5 rounded-full hover:bg-slate-400"
//                 onClick={() => setCurrent(2)}
//               ></button>
//               <button
//                 className="w-20 bg-gray-200 h-0.5 rounded-full hover:bg-slate-400"
//                 onClick={() => setCurrent(3)}
//               ></button>
//               <button
//                 className="w-20 bg-gray-200 h-0.5 rounded-full  hover:bg-slate-400"
//                 onClick={() => setCurrent(4)}
//               ></button>
//               <button
//                 className="w-20 bg-gray-200 h-0.5 rounded-full  hover:bg-slate-400"
//                 onClick={() => setCurrent(5)}
//               ></button>
//             </div>
//           </div>
//         ))}
//       </div>

//       <button
//         onClick={prevSlide}
//         className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-200  text-white text-3xl px-4 py-4 hover:bg-slate-300 rounded-xl "
//       >
//         <FaArrowLeft className="text-xl text-white" />
//       </button>

//       <button
//         onClick={nextSlide}
//         className="absolute right-7 top-1/2 -translate-y-1/2 bg-gray-200  text-white text-3xl px-4 py-4 hover:bg-slate-300 rounded-xl "
//       >
//         <FaArrowRight className="text-xl text-white" />
//       </button>
//     </div>
//   );
// }

// export default ImageSlider;
