import l1 from "../lifestyle/limg/l1.webp";
import l2 from "../lifestyle/limg/l2.webp";
import l3 from "../lifestyle/limg/l3.webp";
import l4 from "../lifestyle/limg/l4.webp";
import l5 from "../lifestyle/limg/l5.webp";

const Mcards = [
  { src: l2, model: "Redmi Watch Move", price: "$1,799" },
  { src: l3, model: "Redmi Buds 6", price: "$2,999" },
  { src: l4, model: "Redmi Watch 5 Active", price: "$2,199" },
  { src: l5, model: "Redmi Buds 5A", price: "$1,299" },
];

function Lifestyle() {
  return (
    <div className="text-center pb-12 px-3 sm:px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative overflow-hidden bg-slate-200 rounded-lg">
        <img
          src={l1}
          alt="Lifestyle"
          className="p-4 w-full object-cover transition-transform duration-500 hover:scale-110 rounded-lg"
        />
        <div className="text-lg font-medium flex flex-col justify-center items-center p-6">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Xiaomi Lifestyle Series
          </h3>
          <p className="text-base sm:text-lg">Style Meets Innovation</p>
          <button className="bg-black text-white px-4 py-2 rounded-lg mt-6 hover:bg-gray-800 transition">
            Learn more
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
        {Mcards.map((card) => (
          <div
            key={card.model}
            className="shadow-[0_4px_10px_rgba(0,0,0,0.25)] text-center  overflow-hidden p-4 rounded-xl cursor-pointer bg-white hover:shadow-lg transition"
          >
            <img
              className="w-[80%] mx-auto rounded-2xl transition-transform duration-500 hover:scale-110 "
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

export default Lifestyle;

//////////////////////////////////////////////////////
//////////////////////////////////////////////////

// import l1 from "../lifestyle/limg/l1.webp";
// import l2 from "../lifestyle/limg/l2.webp";
// import l3 from "../lifestyle/limg/l3.webp";
// import l4 from "../lifestyle/limg/l4.webp";
// import l5 from "../lifestyle/limg/l5.webp";

// const Mcards = [
//   { src: l2, model: "Redmi Watch Move", price: "$1,799" },
//   { src: l3, model: "Redmi Buds 6 ", price: "$2,999" },
//   { src: l4, model: "Redmi Watch 5 Active ", price: "$2,199" },
//   { src: l5, model: "Redmi Buds  5A ", price: "$1,299" },
// ];

// function Lifestyle() {
//   return (
//     <div className="text-center pb-12">
//       <div className="grid grid-flow-col grid-cols-2 gap-3 relative overflow-hidden bg-slate-200 rounded-lg">
//         <img
//           src={l1}
//           alt="lifestyle"
//           className="p-6 w-full transition-transform duration-500 hover:scale-110  "
//         />
//         <div className="text-lg font-medium mt-16 ">
//           <h3 className="text-2xl font-bold mb-8">RedMi Note 14 Series</h3>
//           <p>Lowest Price ever</p>
//           <p>Starting at $15,499*</p>
//           <button className=" bg-black text-white px-2 py-1 rounded-lg mt-8">
//             Learn more
//           </button>
//         </div>
//       </div>
//       <div className="grid grid-cols-4 gap-3 mx-2 pt-6">
//         {Mcards.map((card) => (
//           <div className="bg-slate-200 text-center overflow-hidden pt-10 rounded-xl cursor-pointer ">
//             <img
//               className="h-[70%] ml-7 transition-transform duration-500 hover:scale-110 "
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

// export default Lifestyle;
