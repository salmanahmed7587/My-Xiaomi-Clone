import { useState } from "react";
import Phones from "./phones/Phones";
import Smart from "./smart/Smart";
import Tablets from "./tablets/Tablets";
import Lifestyle from "./lifestyle/Lifestyle";

function Featurepro() {
  const [activeCop, setActiveCop] = useState("phones");

  const onrender = () => {
    switch (activeCop) {
      case "phones":
        return <Phones />;
      case "smart":
        return <Smart />;
      case "tablets":
        return <Tablets />;
      case "lifestyle":
        return <Lifestyle />;
      default:
        return <Phones />;
    }
  };

  const activeStyle = (name) =>
    `transition-colors duration-300 ${
      activeCop === name
        ? "text-orange-500 underline underline-offset-4"
        : "text-gray-700 hover:text-orange-400"
    }`;

  return (
    <div className="text-center bg-slate-300 pb-11 w-full">
      <h3 className="text-2xl sm:text-3xl font-bold p-6">Featured Products</h3>

      <div className="bg-white mx-auto w-[90%] sm:w-[85%] md:w-[80%] rounded-lg shadow-sm">
        <div className="flex flex-wrap justify-center gap-5 sm:gap-10 text-base sm:text-lg md:text-xl font-medium pt-6 pb-4">
          <button
            className={activeStyle("phones")}
            onClick={() => setActiveCop("phones")}
          >
            Phones
          </button>
          <button
            className={activeStyle("smart")}
            onClick={() => setActiveCop("smart")}
          >
            Smart TVs
          </button>
          <button
            className={activeStyle("tablets")}
            onClick={() => setActiveCop("tablets")}
          >
            Tablets
          </button>
          <button
            className={activeStyle("lifestyle")}
            onClick={() => setActiveCop("lifestyle")}
          >
            Lifestyle
          </button>
        </div>

        <div className="mt-8 px-4">{onrender()}</div>
      </div>
    </div>
  );
}

export default Featurepro;

///////////////////////////////////////////
////////////////////////////////////////

// import { useState } from "react";
// import Phones from "./phones/Phones";
// import Smart from "./smart/Smart";
// import Tablets from "./tablets/Tablets";
// import Lifestyle from "./lifestyle/Lifestyle";

// function Featurepro() {
//   const [activeCop, setActiveCop] = useState("phones");

//   const onrender = () => {
//     switch (activeCop) {
//       case "phones":
//         return <Phones />;
//       case "smart":
//         return <Smart />;
//       case "tablets":
//         return <Tablets />;
//       case "lifestyle":
//         return <Lifestyle />;
//       default:
//         return <Phones />;
//     }
//   };

//   const avtiveStyle = (name) =>
//     `${activeCop === name ? "text-orange-500 underline " : ""}`;

//   return (
//     <div className=" text-center bg-slate-300 pb-11 w-screen">
//       <h3 className="text-3xl font-bold p-7">Featured Proucts</h3>
//       <div className="text-center bg-white items-center inline-block w-[80%]">
//         <div className="flex gap-10 text-xl   ml-96 font-medium pt-6 bg-">
//           <button
//             className={avtiveStyle("phones")}
//             style={{ marginLeft: 0 }}
//             onClick={() => setActiveCop("phones")}
//           >
//             Phones
//           </button>
//           <button
//             className={avtiveStyle("smart")}
//             onClick={() => setActiveCop("smart")}
//           >
//             Smart Tvs
//           </button>
//           <button
//             className={avtiveStyle("tablets")}
//             onClick={() => setActiveCop("tablets")}
//           >
//             Tablets
//           </button>
//           <button
//             className={avtiveStyle("lifestyle")}
//             onClick={() => setActiveCop("lifestyle")}
//           >
//             LifeStyle
//           </button>
//         </div>
//         <div className="mt-11">{onrender()}</div>
//       </div>
//     </div>
//   );
// }

// export default Featurepro;
