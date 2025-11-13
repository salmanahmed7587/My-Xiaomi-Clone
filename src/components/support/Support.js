import { AiFillCar, AiOutlineCodepen } from "react-icons/ai";
import { BiAbacus } from "react-icons/bi";
import { CgAbstract } from "react-icons/cg";
import { Link } from "react-router-dom";

const cards = [
  {
    icon: <BiAbacus />,
    title: "Xiaomi Exchange",
    feature: "Save More & GO green with",
    state: "Your Old Device",
  },
  {
    icon: <CgAbstract />,
    title: "Mi Complete Prot...",
    feature: "Protect Your Device In Less",
    state: "Than 2$/Day",
  },
  {
    icon: <AiFillCar />,
    title: "Service Center",
    feature: "Right Where You Need Us",
  },
  {
    icon: <AiOutlineCodepen />,
    title: "Chat Now",
    feature: "Hindi/English",
  },
];

function Support() {
  return (
    <div className="min-h-screen w-full bg-slate-100 text-center px-4 py-10">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-10">
        Xiaomi Support
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 max-w-6xl mx-auto justify-items-center">
        {cards.map((card, i) => (
          <div
            key={i}
            className="rounded-2xl  p-6 w-[45vh]    transition-all duration-300 group"
          >
            <div className="flex items-center justify-center text-7xl sm:text-8xl text-gray-400 group-hover:text-slate-600 transition-colors duration-300 my-8">
              {card.icon}
            </div>

            <Link
              to="#"
              className="font-bold text-2xl sm:text-3xl text-gray-800 block"
            >
              {card.title}
            </Link>

            <p className="text-lg sm:text-xl text-gray-600 mt-4">
              {card.feature}
            </p>

            {card.state && (
              <p className="text-lg sm:text-xl text-gray-600 mt-2">
                {card.state}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Support;

//////////////////////////////////////
// ///////////////////////////////////////
// import { AiFillCar, AiOutlineCodepen } from "react-icons/ai";
// import { BiAbacus } from "react-icons/bi";
// import { CgAbstract } from "react-icons/cg";
// import { Link } from "react-router-dom";

// const cards = [
//   {
//     icon: <BiAbacus />,
//     title: "Xiaomi Exchange",
//     feature: "Save More & GO green with",
//     state: "Your Old Device",
//   },
//   {
//     icon: <CgAbstract />,
//     title: " Mi Complete Prot... ",
//     feature: "Protect Your Device In Less ",
//     state: "Than 2$/Day",
//   },
//   {
//     icon: <AiFillCar />,
//     title: "Service Center",
//     feature: "Right Where You Need Us",
//   },
//   {
//     icon: <AiOutlineCodepen />,
//     title: "Chat Now",
//     feature: "Hindi/English",
//   },
// ];
// function Support() {
//   return (
//     <div className="h-screen  w-screen   mt-0 text-center bg-slate-200">
//       <h2 className="text-4xl pt-16 font-bold"> Xiaomi support</h2>

//       <div className="grid grid-cols-1   m-10 p-4 mt-14 sm:grid-cols-2 md:grid-cols-4 gap-6  ">
//         {cards.map((card) => (
//           <div className="rounded-lg border-2 border-transparent transition-colors duration-300 group">
//             <div className="flex items-center justify-center text-8xl text-gray-400 group-hover:text-slate-600 transition-colors duration-300 my-12">
//               {card.icon}
//             </div>

//             <Link to="#" className="font-bold text-3xl">
//               {card.title}
//             </Link>

//             <div className="mt-7">
//               <Link to="#" className="text-2xl mt-7">
//                 {card.feature}
//               </Link>
//             </div>

//             <div className="mt-2 mb-12">
//               <Link to="#" className="text-2xl pt-14">
//                 {card.state}
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Support;
