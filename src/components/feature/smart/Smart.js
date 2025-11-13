import s1 from "../smart/simg/s1.webp";
import s2 from "../smart/simg/s2.webp";
import s3 from "../smart/simg/s3.webp";
import s4 from "../smart/simg/s4.webp";
import s5 from "../smart/simg/s5.webp";

const Mcards = [
  { src: s2, model: "Xiaomi Smart TV FX F 32 (80 cm) 2025", price: "$12,999" },
  {
    src: s3,
    model: "Xiaomi Smart TV FX Pro QLED Series 43 (108..)",
    price: "$24,999",
  },
  { src: s4, model: "Xiaomi 4k LED TV FX Series 55 (138)", price: "$33,999" },
  { src: s5, model: "Xiaomi Smart TV X Series 43 (108 cm)", price: "$23,999" },
];

function Smart() {
  return (
    <div className="text-center pb-12 px-3 sm:px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative overflow-hidden bg-slate-200 rounded-lg">
        <img
          src={s1}
          alt="smart-tv"
          className="p-4 w-full object-cover rounded-2xl transition-transform duration-500 hover:scale-110"
        />
        <div className="text-lg font-medium flex flex-col justify-center items-center p-6">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Xiaomi & Redmi TVs
          </h3>
          <p className="text-base sm:text-lg">
            Beyond Watching. Start Experiencing.
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
              className="w-[80%] mx-auto transition-transform duration-500 hover:scale-110"
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

export default Smart;

///////////////////////////////////////////
// ///////////////////////////////////////////
// import s1 from "../smart/simg/s1.webp";
// import s2 from "../smart/simg/s2.webp";
// import s3 from "../smart/simg/s3.webp";
// import s4 from "../smart/simg/s4.webp";
// import s5 from "../smart/simg/s5.webp";

// const Mcards = [
//   { src: s2, model: "Xiaomi Smart TV FX F 32 (80 cm) 2025 ", price: "$12,999" },
//   {
//     src: s3,
//     model: "Xiaomi Smart TV FX Pro QLED Series 43 (108..) ",
//     price: "$24,999",
//   },
//   {
//     src: s4,
//     model: "Xiaomi 4k LED TV FX Series 55 (138)  ",
//     price: "$33,9999",
//   },
//   { src: s5, model: "Xiaomi Smart TV X Series 43 (108 cm) ", price: "23,999" },
// ];

// function Smart() {
//   return (
//     <div className="text-center pb-12">
//       <div className="grid grid-flow-col grid-cols-2 gap-3 relative overflow-hidden bg-slate-200 rounded-lg">
//         <img
//           src={s1}
//           alt="phones"
//           className="p-6 w-full transition-transform duration-500 hover:scale-110  "
//         />
//         <div className="text-lg font-medium mt-16 ">
//           <h3 className="text-2xl font-bold mb-8">Xiaomi & Redmi TVs</h3>
//           <p>Beyond Watching.Start Experiencing</p>
//           <button className=" bg-black text-white px-2 py-1 rounded-lg mt-8">
//             Learn more
//           </button>
//         </div>
//       </div>
//       <div className="grid grid-cols-4 gap-3 mx-2 pt-6">
//         {Mcards.map((card) => (
//           <div className="shadow-[0_4px_10px_rgba(0,0,0,0.25)] text-center overflow-hidden pt-10 rounded-xl cursor-pointer ">
//             <img
//               className="h-[50%] ml-7 transition-transform duration-500 hover:scale-110 "
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

// export default Smart;
