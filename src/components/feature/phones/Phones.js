import p1 from "../phones/pimg/p1.webp";
import p2 from "../phones/pimg/p2.webp";
import p3 from "../phones/pimg/p3.webp";
import p4 from "../phones/pimg/p4.webp";
import p5 from "../phones/pimg/p5.webp";

const Mcards = [
  { src: p2, model: "Xiaomi 15 Ultra", price: "₹1,09,999" },
  { src: p3, model: "Redmi Note 14 Pro+ 5G", price: "₹26,999" },
  { src: p4, model: "Redmi Note 14 Pro 5G", price: "₹21,999" },
  { src: p5, model: "Redmi A5", price: "₹6,499" },
];

function Phones() {
  return (
    <div className="text-center pb-12 px-4 sm:px-6 lg:px-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center bg-white rounded-xl overflow-hidden shadow-sm">
        <div className="overflow-hidden">
          <img
            src={p1}
            alt="phones"
            className="w-full h-auto transition-transform duration-500 hover:scale-105 rounded-lg"
          />
        </div>

        <div className="text-lg font-medium px-4 md:px-8 py-8">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Redmi Note 14 Series
          </h3>
          <p className="text-base sm:text-lg mb-1">Lowest Price Ever</p>
          <p className="text-base sm:text-lg mb-5">Starting at ₹15,499*</p>
          <button className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition-all">
            Learn More
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mt-10">
        {Mcards.map((card, index) => (
          <div
            key={index}
            className="bg-slate-200 text-center rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-all"
          >
            <div className="overflow-hidden p-4">
              <img
                className="w-full h-44 sm:h-56 object-contain transition-transform duration-500 hover:scale-105"
                src={card.src}
                alt={card.model}
              />
            </div>
            <p className="text-base sm:text-lg md:text-xl font-semibold mt-3">
              {card.model}
            </p>
            <p className="text-sm sm:text-base md:text-lg font-medium mb-5">
              {card.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Phones;

//////////////////////////////////////////////
//////////////////////////////////////////
// import p1 from "../phones/pimg/p1.webp";
// import p2 from "../phones/pimg/p2.webp";
// import p3 from "../phones/pimg/p3.webp";
// import p4 from "../phones/pimg/p4.webp";
// import p5 from "../phones/pimg/p5.webp";

// const Mcards = [
//   { src: p2, model: "Xiaomi 15 Ultra", price: "$1,09,999" },
//   { src: p3, model: "Redmi 14 Note pro+ 5G ", price: "$26,999" },
//   { src: p4, model: "Redni Note 14 pro 5G", price: "$21,9999" },
//   { src: p5, model: "Redmi A5 ", price: "6,499" },
// ];

// function Phones() {
//   return (
//     <div className="text-center pb-12">
//       <div className="grid grid-flow-col grid-cols-2 gap-3 relative overflow-hidden  rounded-lg">
//         <img
//           src={p1}
//           alt="phones"
//           className="p-6 transition-transform duration-500 hover:scale-110 rounded-lg  overflow-hidden  "
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

// export default Phones;
