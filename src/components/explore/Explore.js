import { useRef } from "react";
import e1 from "../explore/img/e1.webp";
import e2 from "../explore/img/e2.webp";
import e3 from "../explore/img/e3.webp";
import e4 from "../explore/img/e4.webp";
import e5 from "../explore/img/e5.webp";

const prints = [
  { src: e1, title: "Xiaomi x Leica" },
  { src: e2, title: "Xiaomi : 10 Years of Tomorrow" },
  { src: e3, title: "Xiaomi HyperOs" },
  { src: e4, title: "Xiaomi Priority Club" },
  { src: e5, title: "Xiaomi Rewards Club" },
];

function Explore() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      const cardWidth = window.innerHeight * 0.7 + 16;
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;

      scrollRef.current.scrollTo({
        left: scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const preventScroll = (e) => e.preventDefault();

  return (
    <div className="bg-slate-100 w-screen text-center relative py-10 select-none">
      <h3 className="font-bold text-2xl mb-6">Explore Xiaomi</h3>

      <div className="absolute right-10 flex gap-4 z-10 hidden md:flex">
        <button
          className="bg-gray-300 text-black text-2xl px-3 py-1 rounded-lg hover:bg-gray-400 transition"
          onClick={() => scroll("left")}
        >
          &lt;
        </button>
        <button
          className="bg-gray-300 text-black text-2xl px-3 py-1 rounded-lg hover:bg-gray-400 transition"
          onClick={() => scroll("right")}
        >
          &gt;
        </button>
      </div>

      <div
        ref={scrollRef}
        onWheel={preventScroll}
        className="
          md:flex md:overflow-x-hidden md:scroll-smooth md:space-x-4 md:no-scrollbar 
          mt-24 pb-10 px-6
          flex flex-col gap-10 md:gap-0 md:flex-row
        "
      >
        {prints.map((print, i) => (
          <div
            key={i}
            className="
              w-full md:min-w-[95vh] flex flex-col items-center text-black
            "
          >
            <div className="overflow-hidden rounded-lg">
              <img
                src={print.src}
                alt={print.title}
                className="w-full hover:scale-110 transform rounded-lg transition-transform duration-700"
              />
            </div>
            <p className="mt-3 font-semibold">{print.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Explore;

/////////////////////////////////
/////////////////////////////////
// import { useRef } from "react";
// import e1 from "../explore/img/e1.webp";
// import e2 from "../explore/img/e2.webp";
// import e3 from "../explore/img/e3.webp";
// import e4 from "../explore/img/e4.webp";
// import e5 from "../explore/img/e5.webp";

// const prints = [
//   {
//     src: e1,
//     title: "Xiaomi x Leica",
//   },
//   {
//     src: e2,
//     title: "Xiaomi : 10 Years of Tomorrow",
//   },
//   {
//     src: e3,
//     title: "Xiaomi HyperOs",
//   },
//   {
//     src: e4,
//     title: "Xiaomi Priority Club ",
//   },
//   {
//     src: e5,
//     title: "Xiaomi Rewards Club ",
//   },
// ];

// function Explore() {
//   const scrollRef = useRef(null);

//   const scroll = (direction) => {
//     if (scrollRef.current) {
//       const { scrollLeft } = scrollRef.current;

//       const cardWidth = 250 + 16; // card width (250px) + gap (space-x-4 = 16px)
//       const scrollAmount = direction === "left" ? -cardWidth : cardWidth;

//       scrollRef.current.scrollTo({
//         left: scrollLeft + scrollAmount,
//         behavior: "smooth",
//       });
//     }
//   };

//   return (
//     <div className="bg-slate-100 w-screen   text-center">
//       <div>
//         <h3 className="py-7 font-bold text-2xl ">Explore Xiaomi</h3>
//         <div className="absolute right-14 top-15 -translate-y-1/2 flex  gap-4 ">
//           <button
//             className="  bg-gray-200  text-white text-3xl px-3 py-2 hover:bg-slate-300 rounded-xl"
//             onClick={() => scroll("left")}
//           >
//             &lt;
//           </button>
//           <button
//             className=" bg-gray-200  text-white text-3xl px-3 py-2 hover:bg-slate-300 rounded-xl"
//             onClick={() => scroll("right")}
//           >
//             &gt;
//           </button>
//         </div>
//         <div
//           ref={scrollRef}
//           className="flex overflow-x-scroll scroll-smooth space-x-4 no-scrollbar mt-11"
//         >
//           {prints.map((print, i) => (
//             <div
//               key={i}
//               className="min-w-[60%] f items-center justify-center  rounded-lg text-white text-xl  py-10 "
//             >
//               <img
//                 className="absolute- w-[90%] mx-auto hover:scale-110 overflow-hidden transform transition-transform duration-700 rounded-lg  "
//                 src={print.src}
//                 alt={print.title}
//               />
//               <p className="h-[30vh] py-14 font-bold text-black">
//                 {print.title}
//               </p>{" "}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Explore;
