import { useState } from "react";
import box1 from "../Exclusiveoffres/imgs/box1.webp";
import box2 from "../Exclusiveoffres/imgs/box2.webp";
import box3 from "../Exclusiveoffres/imgs/box3.webp";
import Sbox1 from "../Exclusiveoffres/imgs/Sbox1.webp";
import Sbox2 from "../Exclusiveoffres/imgs/Sbox2.webp";
import Sbox3 from "../Exclusiveoffres/imgs/Sbox3.webp";

const items = [
  {
    id: 1,
    title: "Xiaomi Exchange",
    description: "Smartest way to upgrade",
    src: box1,
  },
  {
    id: 2,
    title: "Power Banks",
    description: "Power up, pay less",
    src: box2,
  },
  {
    id: 3,
    title: "Audio Products",
    description: "For the love of Music",
    src: box3,
  },
];

const Secitems = [
  {
    id: 1,
    title: "Xiaomi Exchange",
    description: "Smartest way to upgrade",
    src: Sbox1,
  },
  {
    id: 2,
    title: "Power Banks",
    description: "Power up, pay less",
    src: Sbox2,
  },
  {
    id: 3,
    title: "Audio Products",
    description: "For the love of Music",
    src: Sbox3,
  },
];

function Offers() {
  const [activeDiv, setActiveDiv] = useState(0);
  const totalDivs = 2;

  const handleNext = () => {
    setActiveDiv((prev) => Math.min(prev + 1, totalDivs - 1));
  };

  const handlePrev = () => {
    setActiveDiv((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="text-center relative w-screen overflow-hidden p-4">
      <h2 className="font-bold mt-7 mb-10 text-3xl">Exclusive Offers</h2>

      {/* Buttons — hidden on mobile */}
      <div className="absolute right-10 top-16 -translate-y-1/2 gap-4 hidden sm:flex">
        <button
          onClick={handlePrev}
          className={`px-4 py-2 text-xl font-bold rounded-xl ${
            activeDiv === 0
              ? "bg-gray-400 text-white cursor-not-allowed"
              : "bg-black text-white hover:bg-gray-800"
          }`}
          disabled={activeDiv === 0}
        >
          &lt;
        </button>

        <button
          onClick={handleNext}
          className={`px-4 py-2 text-xl font-bold rounded-xl ${
            activeDiv === totalDivs - 1
              ? "bg-gray-400 text-white cursor-not-allowed"
              : "bg-black text-white hover:bg-gray-800"
          }`}
          disabled={activeDiv === totalDivs - 1}
        >
          &gt;
        </button>
      </div>

      <div
        className="hidden sm:flex transition-transform duration-700 p-10"
        style={{
          transform: `translateX(-${activeDiv * 100}%)`,
        }}
      >
        <div className="grid grid-cols-3 min-w-full justify-center gap-4">
          {Secitems.map((item) => (
            <div
              className="text-center rounded-lg p-8 text-black mb-5"
              key={item.id}
            >
              <div className="w-full overflow-hidden rounded-xl bg-white flex justify-center items-center h-60">
                <img
                  src={item.src}
                  alt={item.description}
                  className="w-[90%] h-auto shadow-xl rounded-xl transform transition-transform duration-700 hover:scale-105"
                />
              </div>
              <h3 className="font-bold text-2xl mt-6">{item.title}</h3>
              <p className="m-5">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 min-w-full justify-center gap-4">
          {items.map((item) => (
            <div
              className="text-center rounded-lg p-8 text-black mb-5"
              key={item.id}
            >
              <div className="w-full overflow-hidden rounded-xl bg-white flex justify-center items-center h-60">
                <img
                  src={item.src}
                  alt={item.description}
                  className="w-[90%] h-auto shadow-xl rounded-xl transform transition-transform duration-700 hover:scale-105"
                />
              </div>
              <h3 className="font-bold text-2xl mt-6">{item.title}</h3>
              <p className="m-5">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:hidden gap-6 mt-6">
        {[...Secitems, ...items].map((item) => (
          <div
            className="text-center rounded-lg bg-white text-black p-6 shadow-md"
            key={item.id}
          >
            <div className="overflow-hidden rounded-xl flex justify-center items-center h-56">
              <img
                src={item.src}
                alt={item.description}
                className="w-[85%] h-auto object-contain transition-transform duration-500 hover:scale-105"
              />
            </div>
            <h3 className="font-bold text-xl mt-4">{item.title}</h3>
            <p className="mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Offers;

//////////////////////////////////////////
/////////////////////////////////////////
// import { useState } from "react";
// import box1 from "../Exclusiveoffres/imgs/box1.webp";
// import box2 from "../Exclusiveoffres/imgs/box2.webp";
// import box3 from "../Exclusiveoffres/imgs/box3.webp";
// import Sbox1 from "../Exclusiveoffres/imgs/Sbox1.webp";
// import Sbox2 from "../Exclusiveoffres/imgs/Sbox2.webp";
// import Sbox3 from "../Exclusiveoffres/imgs/Sbox3.webp";

// const items = [
//   {
//     id: 1,
//     title: "Xiaomi Exchange",
//     description: "Smartest way to upgrade",
//     src: box1,
//   },
//   { id: 2, title: "Power Banks", description: "Power up, pay less", src: box2 },
//   {
//     id: 3,
//     title: "Audio Products",
//     description: "For the love of Music",
//     src: box3,
//   },
// ];

// const Secitems = [
//   {
//     id: 1,
//     title: "Xiaomi Exchange",
//     description: "Smartest way to upgrade",
//     src: Sbox1,
//   },
//   {
//     id: 2,
//     title: "Power Banks",
//     description: "Power up, pay less",
//     src: Sbox2,
//   },
//   {
//     id: 3,
//     title: "Audio Products",
//     description: "For the love of Music",
//     src: Sbox3,
//   },
// ];

// function Offers() {
//   const [activeDiv, setActiveDiv] = useState(0);
//   const totalDivs = 2;

//   const handleNext = () =>
//     setActiveDiv((prev) => Math.min(prev + 1, totalDivs - 1));
//   const handlePrev = () => setActiveDiv((prev) => Math.max(prev - 1, 0));

//   return (
//     <div className="text-center relative w-full min-h-screen overflow-hidden p-4 bg-gray-50">
//       {/* Heading */}
//       <h2 className="font-bold mt-10 mb-12 text-3xl sm:text-4xl">
//         Exclusive Offers
//       </h2>

//       {/* Navigation Buttons */}
//       <div className="absolute right-5 top-12 flex gap-3 sm:gap-4">
//         <button
//           onClick={handlePrev}
//           className={`px-4 py-2 text-lg sm:text-xl font-bold rounded-xl transition-all ${
//             activeDiv === 0
//               ? "bg-gray-300 cursor-not-allowed"
//               : "bg-black text-white hover:bg-gray-800"
//           }`}
//           disabled={activeDiv === 0}
//         >
//           &lt;
//         </button>
//         <button
//           onClick={handleNext}
//           className={`px-4 py-2 text-lg sm:text-xl font-bold rounded-xl transition-all ${
//             activeDiv === totalDivs - 1
//               ? "bg-gray-300 cursor-not-allowed"
//               : "bg-black text-white hover:bg-gray-800"
//           }`}
//           disabled={activeDiv === totalDivs - 1}
//         >
//           &gt;
//         </button>
//       </div>

//       {/* Slide Container */}
//       <div
//         className="flex transition-transform duration-700 ease-in-out"
//         style={{ transform: `translateX(-${activeDiv * 100}%)` }}
//       >
//         {/* 1️⃣ First Slide */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 min-w-full justify-items-center px-4">
//           {Secitems.map((item) => (
//             <div
//               key={item.id}
//               className="text-center bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-500 p-6"
//             >
//               <div className="overflow-hidden rounded-xl">
//                 <img
//                   src={item.src}
//                   alt={item.description}
//                   className="w-full rounded-xl transition-transform duration-500 hover:scale-105"
//                 />
//               </div>
//               <h3 className="font-bold text-xl sm:text-2xl mt-5">
//                 {item.title}
//               </h3>
//               <p className="text-gray-600 mt-2">{item.description}</p>
//             </div>
//           ))}
//         </div>

//         {/* 2️⃣ Second Slide */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 min-w-full justify-items-center px-4">
//           {items.map((item) => (
//             <div
//               key={item.id}
//               className="text-center bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-500 p-6"
//             >
//               <div className="overflow-hidden rounded-xl">
//                 <img
//                   src={item.src}
//                   alt={item.description}
//                   className="w-full rounded-xl transition-transform duration-500 hover:scale-105"
//                 />
//               </div>
//               <h3 className="font-bold text-xl sm:text-2xl mt-5">
//                 {item.title}
//               </h3>
//               <p className="text-gray-600 mt-2">{item.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Offers;

/////////////////////////////////////
///////////////////////////////////

// import { useState } from "react";
// import box1 from "../Exclusiveoffres/imgs/box1.webp";
// import box2 from "../Exclusiveoffres/imgs/box2.webp";
// import box3 from "../Exclusiveoffres/imgs/box3.webp";
// import Sbox1 from "../Exclusiveoffres/imgs/Sbox1.webp";
// import Sbox2 from "../Exclusiveoffres/imgs/Sbox2.webp";
// import Sbox3 from "../Exclusiveoffres/imgs/Sbox3.webp";
// const items = [
//   {
//     id: 1,
//     title: "Xiaomi Exchange",
//     description: "Smartest way to upgrade",
//     src: box1,
//   },
//   {
//     id: 2,
//     title: " Power Banks",
//     description: "Power up ,pay less",
//     src: box2,
//   },
//   {
//     id: 3,
//     title: " Audio Products",
//     description: "For the love of Music",
//     src: box3,
//   },
// ];

// const Secitems = [
//   {
//     id: 1,
//     title: "Xiaomi Exchange",
//     description: "Smartest way to upgrade",
//     src: Sbox1,
//   },
//   {
//     id: 2,
//     title: " Power Banks",
//     description: "Power up ,pay less",
//     src: Sbox2,
//   },
//   {
//     id: 3,
//     title: " Audio Products",
//     description: "For the love of Music",
//     src: Sbox3,
//   },
// ];

// function Offers() {
//   const [activeDiv, setActiveDiv] = useState(0);
//   const totalDivs = 2;

//   const handleNext = () => {
//     setActiveDiv((prev) => Math.min(prev + 1, totalDivs - 1));
//   };

//   const handlePrev = () => {
//     setActiveDiv((prev) => Math.max(prev - 1, 0));
//   };

//   return (
//     <div className="  text-center  relative w-screen h-screen  overflow-hidden p-4 ">
//       <div>
//         <h2 className="font-bold  mt-7 mb-10 text-3xl   ">Exclusive Offers</h2>
//         <div className="absolute right-14 top-15 -translate-y-1/2 flex  gap-4 ">
//           <button
//             onClick={handlePrev}
//             className={`bg-black text-white px-4 py-2 text-xl font-bold rounded-xl  ${
//               activeDiv === 0
//                 ? "bg-gray-400 "
//                 : "bg-black text-white hover:bg-gray-800"
//             }`}
//             disabled={activeDiv === 0}
//           >
//             &lt;
//           </button>

//           <button
//             onClick={handleNext}
//             className={`bg-black text-white px-4 py-2 text-xl font-bold rounded-xl  ${
//               activeDiv === totalDivs - 1
//                 ? "bg-gray-400 "
//                 : "bg-black text-white hover:bg-gray-800"
//             }`}
//             disabled={activeDiv === totalDivs - 1}
//           >
//             &gt;
//           </button>
//         </div>
//       </div>
//       <div
//         className="flex transition-transform duration-700 p-10   "
//         style={{
//           transform: `translateX(-${activeDiv * 100}%)`,
//         }}
//       >
//         <div className="grid grid-cols-3 min-w-full justify-center gap-4">
//           {Secitems.map((item) => (
//             <div
//               className="text-center rounded-lg   p-10 text-black  mb-5    "
//               key={item.id}
//             >
//               <div className="ml-2  w-full overflow-hidden rounded-xl">
//                 <img
//                   className="m-4 w-[90%] shadow-xl rounded-xl transform transition-transform duration-700 hover:scale-90     "
//                   src={item.src}
//                   alt={item.description}
//                 />
//               </div>
//               <h3 className="font-bold text-2xl mt-6">{item.title}</h3>
//               <p className="m-5  ">{item.description}</p>
//             </div>
//           ))}
//         </div>

//         <div className="flex min-w-full m-5 ml-14 p-6 justify-center gap-4">
//           {items.map((item) => (
//             <div
//               className="text-center rounded-lg  bg-white text-black  mb-5    "
//               key={item.id}
//             >
//               <div className="ml-2 overflow-hidden rounded-xl">
//                 <img
//                   className="m-4   w-[90%] shadow-xl rounded-xl transform transition-transform duration-700 hover:scale-90                 "
//                   src={item.src}
//                   alt={item.description}
//                 />
//               </div>
//               <h3 className="font-bold text-2xl mt-6">{item.title}</h3>
//               <p className="m-5  ">{item.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Offers;
