import t1 from "../tablets/timg/t1.webp";
import t2 from "../tablets/timg/t2.webp";
import t3 from "../tablets/timg/t3.webp";
import t4 from "../tablets/timg/t4.webp";
import t5 from "../tablets/timg/t5.webp";

const Mcards = [
  {
    src: t2,
    model: "Redmi Pad 2 Wifi 27.94 cm (11), 9000 mAh",
    price: "$13,999",
  },
  {
    src: t3,
    model: "Redmi Pad 2 Wifi + Cellular 27.94 cm (11)",
    price: "From $15,999",
  },
  { src: t4, model: "Xiaomi Pad 7", price: "From $27,999" },
  { src: t5, model: "Redmi Pad Pro 5G", price: "From $23,999" },
];

function Tablets() {
  return (
    <div className="text-center pb-12 px-3 sm:px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative overflow-hidden bg-slate-200 rounded-lg">
        <img
          src={t1}
          alt="Tablets"
          className="p-4 w-full object-cover transition-transform duration-500 hover:scale-110 rounded-lg"
        />
        <div className="text-lg font-medium flex flex-col justify-center items-center p-6">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Xiaomi Pad 7</h3>
          <p className="text-base sm:text-lg">
            Powerful. Productive. Portable.
          </p>
          <button className="bg-black text-white px-4 py-2 rounded-lg mt-6 hover:bg-gray-800 transition">
            Learn more
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
        {Mcards.map((card) => (
          <div
            key={card.model}
            className="shadow-[0_4px_10px_rgba(0,0,0,0.25)] text-center overflow-hidden p-4 rounded-xl cursor-pointer bg-white hover:shadow-lg transition"
          >
            <img
              className="w-[80%] mx-auto transition-transform duration-500 hover:scale-110 rounded-xl"
              src={card.src}
              alt={card.model}
            />
            <p className="text-lg sm:text-xl font-semibold mt-3">
              {card.model}
            </p>
            <p className="text-base sm:text-lg font-medium mt-2">
              {card.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tablets;

/////////////////////////////////////////
//////////////////////////////////////////
// import t1 from "../tablets/timg/t1.webp";
// import t2 from "../tablets/timg/t2.webp";
// import t3 from "../tablets/timg/t3.webp";
// import t4 from "../tablets/timg/t4.webp";
// import t5 from "../tablets/timg/t5.webp";

// const Mcards = [
//   {
//     src: t2,
//     model: "Redmi Pad 2 Wifi 27.94 cm(11),9000 mAh.000",
//     price: "$13,999",
//   },
//   {
//     src: t3,
//     model: "Redmi Pad 2 Wifi + Cellular 27.94 cm (11),.. ",
//     price: "From $15,999",
//   },
//   { src: t4, model: "Xiaomi Pad 7", price: "From  $27,999" },
//   { src: t5, model: "Redmi Pad Pro 5G ", price: "From $23,999" },
// ];

// function Tablets() {
//   return (
//     <div className="text-center pb-12">
//       <div className="grid grid-flow-col grid-cols-2 gap-3 relative overflow-hidden bg-slate-200 rounded-lg">
//         <img
//           src={t1}
//           alt="Tablets"
//           className="p-6 w-full transition-transform duration-500 hover:scale-110 rounded-lg "
//         />
//         <div className="text-lg font-medium mt-16 ">
//           <h3 className="text-2xl font-bold mb-8">Xiaomi Pad 7</h3>
//           <p>Does it all</p>
//           {/* <p>Starting at $15,499*</p> */}
//           <button className=" bg-black text-white px-2 py-1 rounded-lg mt-8">
//             Learn more
//           </button>
//         </div>
//       </div>
//       <div className="grid grid-cols-4 gap-3 mx-2 pt-6">
//         {Mcards.map((card) => (
//           <div className="bg-slate-200 text-center overflow-hidden pt-10 rounded-xl cursor-pointer ">
//             <img
//               className="h-[60%] ml-7 pb-4 transition-transform duration-500 hover:scale-110 rounded-xl "
//               src={card.src}
//               alt={card.model}
//             />
//             <p className="text-2xl font-semibold mt-3">{card.model}</p>
//             <p className="text-xl font-medium mt-5">{card.price}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Tablets;
