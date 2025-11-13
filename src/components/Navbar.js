import { useState } from "react";
import {
  HiOutlineHome,
  HiOutlineMagnifyingGlass,
  HiOutlineShoppingBag,
  HiOutlineUser,
  HiOutlineBars3,
  HiXMark,
} from "react-icons/hi2";
import { Link } from "react-router-dom";
import n1 from "../components/navPhoneimg/n1.webp";
import n2 from "../components/navPhoneimg/n2.webp";
import n3 from "../components/navPhoneimg/n3.webp";
import n4 from "../components/navPhoneimg/n4.webp";
import r1 from "../components/navPhoneimg/r1.webp";
import r2 from "../components/navPhoneimg/r2.webp";
import r3 from "../components/navPhoneimg/r3.webp";
import r4 from "../components/navPhoneimg/r4.webp";
import r5 from "../components/navPhoneimg/r5.webp";

const Ncard = [
  { src: n1, model: "Redmi Note 14 Pro 5G" },
  { src: n2, model: "Redmi Note 15 Pro 5G" },
  { src: n3, model: "Redmi Note A5 Pro 5G" },
  { src: n4, model: "Redmi A4 5G" },
];

const Tcard = [
  { src: r1, model: "Redmi Pad Pro 5G" },
  { src: r2, model: "Redmi Pad Pro Wifi" },
  { src: r3, model: "Redmi Note A5 Pro 5G" },
  { src: r4, model: "Redmi A4 5G" },
  { src: r5, model: "Redmi A4 5G" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [expandedMenu, setExpandedMenu] = useState(null);

  const toggleSubmenu = (menu) => {
    setExpandedMenu(expandedMenu === menu ? null : menu);
  };

  const linkStyle =
    "relative text-gray-800 font-semibold pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full px-2 hover:text-orange-500";

  return (
    <nav className="fixed w-full px-7 top-0 z-50 flex h-20 bg-white items-center justify-between shadow-md">
      <div className="flex items-center gap-4">
        <button className="relative bg-orange-500 text-white font-extrabold px-4 py-2 rounded-md overflow-hidden group w-14 h-14 flex items-center justify-center">
          <HiOutlineHome className="absolute text-3xl transition-all duration-500 transform group-hover:translate-x-full opacity-100 group-hover:opacity-0" />
          <HiOutlineUser className="absolute text-3xl transition-all duration-500 transform -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100" />
        </button>

        <div className="hidden md:flex gap-6">
          <Link to="#" className={linkStyle}>
            Store
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setHoveredItem("phones")}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <Link to="#" className={linkStyle}>
              Phones
            </Link>
            {hoveredItem === "phones" && (
              <div className="absolute left-0 top-full bg-white shadow-lg border rounded-lg p-4 w-[80vw] grid grid-cols-5 gap-5">
                {Ncard.map((card, i) => (
                  <div key={i} className="text-center">
                    <img
                      src={card.src}
                      alt={card.model}
                      className="h-36 mx-auto hover:-translate-y-2 transition-transform duration-300"
                    />
                    <p className="mt-2 hover:text-orange-500 cursor-pointer">
                      {card.model}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div
            className="relative"
            onMouseEnter={() => setHoveredItem("tablets")}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <Link to="#" className={linkStyle}>
              Tablets
            </Link>
            {hoveredItem === "tablets" && (
              <div className="absolute left-0 top-full bg-white shadow-lg border rounded-lg p-4 w-[80vw] grid grid-cols-5 gap-5">
                {Tcard.map((card, i) => (
                  <div key={i} className="text-center">
                    <img
                      src={card.src}
                      alt={card.model}
                      className="h-36 mx-auto hover:-translate-y-2 transition-transform duration-300"
                    />
                    <p className="mt-2 hover:text-orange-500 cursor-pointer">
                      {card.model}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          <Link to="#" className={linkStyle}>
            TV & Smart Home
          </Link>
          <Link to="#" className={linkStyle}>
            Smart Watch & Audio
          </Link>
          <Link to="#" className={linkStyle}>
            Discover
          </Link>
          <Link to="#" className={linkStyle}>
            Support
          </Link>
        </div>
      </div>

      <div className="flex items-center gap-6 text-2xl">
        <HiOutlineMagnifyingGlass />
        <HiOutlineShoppingBag />
        <HiOutlineUser />
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <HiXMark /> : <HiOutlineBars3 />}
        </button>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 p-6 overflow-y-auto transition-transform duration-500 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-5">
          <p className="font-semibold text-gray-700">Sign in / Sign up</p>
          <HiXMark
            className="text-3xl cursor-pointer"
            onClick={() => setOpen(false)}
          />
        </div>

        <ul className="text-lg font-semibold space-y-4">
          <li className="hover:text-orange-500 cursor-pointer">Store</li>

          <li
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleSubmenu("phones")}
          >
            <span>Phones</span>
            <span>{expandedMenu === "phones" ? "-" : "+"}</span>
          </li>
          {expandedMenu === "phones" && (
            <ul className="pl-4 text-gray-600 space-y-2">
              {Ncard.map((c, i) => (
                <li key={i}>{c.model}</li>
              ))}
            </ul>
          )}

          <li
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleSubmenu("tablets")}
          >
            <span>Tablets</span>
            <span>{expandedMenu === "tablets" ? "-" : "+"}</span>
          </li>
          {expandedMenu === "tablets" && (
            <ul className="pl-4 text-gray-600 space-y-2">
              {Tcard.map((c, i) => (
                <li key={i}>{c.model}</li>
              ))}
            </ul>
          )}

          <li className="hover:text-orange-500 cursor-pointer">
            TV & Smart Home
          </li>
          <li className="hover:text-orange-500 cursor-pointer">
            Smart Watch & Audio
          </li>
          <li className="hover:text-orange-500 cursor-pointer">Discover</li>
          <li className="hover:text-orange-500 cursor-pointer">Support</li>
        </ul>

        <div className="border-t mt-8 pt-5 space-y-3 text-sm text-gray-600">
          <p>SHOP AND LEARN</p>
          <p>RETAIL STORE</p>
          <p>ABOUT US</p>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

///////////////////////////////////
////////////////////////////////////
/// import { useState } from "react";
// import {
//   HiOutlineHome,
//   HiOutlineMagnifyingGlass,
//   HiOutlineShoppingBag,
//   HiOutlineUser,
//   HiOutlineBars3,
//   HiXMark,
// } from "react-icons/hi2";
// import { Link } from "react-router-dom";
// import n1 from "../components/navPhoneimg/n1.webp";
// import n2 from "../components/navPhoneimg/n2.webp";
// import n3 from "../components/navPhoneimg/n3.webp";
// import n4 from "../components/navPhoneimg/n4.webp";
// import r1 from "../components/navPhoneimg/r1.webp";
// import r2 from "../components/navPhoneimg/r2.webp";
// import r3 from "../components/navPhoneimg/r3.webp";
// import r4 from "../components/navPhoneimg/r4.webp";
// import r5 from "../components/navPhoneimg/r5.webp";

// const Ncard = [
//   { src: n1, model: "Redmi note 14 pro 5G" },
//   { src: n2, model: "Redmi note 15 pro 5G" },
//   { src: n3, model: "Redmi note A5 pro 5G" },
//   { src: n4, model: "Redmi  A4  5G" },
// ];

// const Tcard = [
//   { src: r1, model: "Redmi Pad Pro 5G" },
//   { src: r2, model: "Redmi Pad Pro Wifi" },
//   { src: r3, model: "Redmi note A5 pro 5G" },
//   { src: r4, model: "Redmi  A4  5G" },
//   { src: r5, model: "Redmi  A4  5G" },
// ];
// function PhonesMenu() {
//   return (
//     <>
//       <div className="absolute -left-48  top-11 bg-white shadow-lg border rounded-lg p-4 w-screen grid grid-cols-5 pt-10 transition-all duration-500 ">
//         <div className=" text-center flex-col inline-flex p-7">
//           <Link className="text-1xl font-semibold mt-4 hover:text-orange-500 ">
//             Xiaomi Phones
//           </Link>
//         </div>
//         <div className="flex text-center gap-9 justify-center border-l-2 items-center col-span-4 p-10">
//           {Ncard.map((card) => (
//             <div className="bg-slate-200 text-center rounded-2xl justify-center p-5">
//               <img
//                 className="h-48 mr-10 ml-2 hover:text-orange-500 transition-all duration-500 hover:-translate-y-2"
//                 src={card.src}
//                 alt={card.model}
//               />
//               <p className="my-5 cursor-pointer hover:text-orange-500">
//                 {card.model}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

// function TabletsMenu() {
//   return (
//     <>
//       <div className="absolute -left-72 mt-2 top-10 bg-white shadow-lg border rounded-lg p-4 w-screen grid grid-cols-5 pt-10 transition-all duration-500 ">
//         <div className=" text-center flex-col inline-flex p-7">
//           <Link className="text-1xl font-semibold mt-4 hover:text-orange-500 ">
//             Xiaomi Tablets
//           </Link>
//         </div>
//         <div className="flex text-center gap-5 justify-center border-l-2 items-center col-span-4 p-10">
//           {Tcard.map((Tcard) => (
//             <div className="bg-slate-200 text-center rounded-2xl justify-center p-5">
//               <img
//                 className="h-48 mr-10 ml-2 hover:text-orange-500 transition-all duration-500 hover:-translate-y-2"
//                 src={Tcard.src}
//                 alt={Tcard.model}
//               />
//               <p className="my-5 cursor-pointer hover:text-orange-500">
//                 {Tcard.model}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

// function TvMenu() {
//   return (
//     <>
//       <div className="absolute -left-96 mt-1 top-10 bg-white shadow-lg border rounded-lg p-4 px-10 w-screen grid grid-cols-2 pt-10 transition-all duration-500 cursor-pointer  ">
//         <div>
//           <ul>
//             <li className="font-semibold text-xl p-5 pl-0 hover:text-orange-500 cursor-pointer block ">
//               TV
//             </li>
//             <li className="pb-3 hover:text-orange-500 cursor-pointer">
//               Xiaomi TV
//             </li>
//             <li className="pb-3 hover:text-orange-500 cursor-pointer">
//               TV Accessories
//             </li>
//           </ul>
//         </div>
//         <div>
//           <ul>
//             <li className="font-semibold text-xl p-5 pl-0 hover:text-orange-500 cursor-pointer">
//               Smart Home
//             </li>
//             <li className="pb-3 hover:text-orange-500 cursor-pointer">
//               Air Purifier
//             </li>
//             <li className="pb-3 hover:text-orange-500 cursor-pointer">
//               Smart Vacuum Cleaner
//             </li>
//             <li className="pb-3 hover:text-orange-500 cursor-pointer">
//               Vaccum Cleaner Accessories{" "}
//             </li>
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// }

// function SignMenu() {
//   return (
//     <div className="absolute  rounded-xl bg-white text-lg w-32 p-5 pt-3 -left-16">
//       <p className="p-2 text-xl font-semibold hover:underline">Sign In</p>
//       <p className="p-2  font-semibold hover:underline border-t-2">Sign Up</p>
//     </div>
//   );
// }

// function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [hoveredItem, setHoveredItem] = useState(null);

//   const linkStyle =
//     "relative text-gray-800 font-semibold pb-5  after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full px-2 hover:text-orange-500 ";

//   return (
//     <nav className="fixed w-full px-7 pt-3 top-0 z-50 flex h-20 bg-white items-center justify-between shadow-[0_4px_6px_rgba(0,0,0,0.2)]  ">
//       <div className="flex items-center gap-4">
//         <button className="relative bg-orange-500 text-white font-extrabold px-4 py-2 mb-3 rounded-md overflow-hidden group w-14 h-14 flex items-center justify-center">
//           <HiOutlineHome className="absolute text-3xl transition-all duration-500 transform group-hover:translate-x-full opacity-100 group-hover:opacity-0" />

//           <HiOutlineUser className="absolute text-3xl transition-all duration-500 transform -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100" />
//         </button>
//         <div
//           className={`absolute top-full left-0 w-full flex-col gap-6 bg-white p-4 md:flex md:flex-row md:static md:w-auto md:p-0 ${
//             open ? "flex" : "hidden"
//           }`}
//         >
//           <Link to="#" className={linkStyle}>
//             Store
//           </Link>

//           <div
//             className="relative"
//             onMouseEnter={() => setHoveredItem("phones")}
//             onMouseLeave={() => setHoveredItem(null)}
//           >
//             <Link to="#" className={linkStyle}>
//               Phones
//             </Link>
//             {hoveredItem === "phones" && <PhonesMenu />}
//           </div>

//           <div
//             className="relative"
//             onMouseEnter={() => setHoveredItem("tablets")}
//             onMouseLeave={() => setHoveredItem(null)}
//           >
//             <Link to="#" className={linkStyle}>
//               Tablets
//             </Link>
//             {hoveredItem === "tablets" && <TabletsMenu />}
//           </div>

//           <div
//             className="relative"
//             onMouseEnter={() => setHoveredItem("Tv")}
//             onMouseLeave={() => setHoveredItem(null)}
//           >
//             <Link to="#" className={linkStyle}>
//               TV & Smart Home
//             </Link>
//             {hoveredItem === "Tv" && <TvMenu />}
//           </div>

//           <Link to="#" className={linkStyle}>
//             Smart Watch & Audio
//           </Link>

//           <Link to="#" className={linkStyle}>
//             Discover
//           </Link>
//           <Link to="#" className={linkStyle}>
//             Support
//           </Link>
//         </div>
//       </div>

//       <div className="flex items-center gap-10 text-3xl pb-2 pr-7">
//         <Link to="#">
//           <HiOutlineMagnifyingGlass />
//         </Link>
//         <Link to="#">
//           <HiOutlineShoppingBag />
//         </Link>

//         <div
//           className="relative  "
//           onMouseEnter={() => setHoveredItem("sign")}
//           onMouseLeave={() => setHoveredItem(null)}
//         >
//           <Link to="#">
//             <HiOutlineUser />
//           </Link>
//           {hoveredItem === "sign" && <SignMenu />}
//         </div>

//         <button className="md:hidden ml-2" onClick={() => setOpen(!open)}>
//           {open ? <HiXMark /> : <HiOutlineBars3 />}
//         </button>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

////////////////////////////////////////////////
////////////////////////////////////////////

// import { useState } from "react";
// import {
//   HiOutlineHome,
//   HiOutlineMagnifyingGlass,
//   HiOutlineShoppingBag,
//   HiOutlineUser,
//   HiOutlineBars3,
//   HiXMark,
// } from "react-icons/hi2";
// import { Link } from "react-router-dom";
// import n1 from "../components/navPhoneimg/n1.webp";
// import n2 from "../components/navPhoneimg/n2.webp";
// import n3 from "../components/navPhoneimg/n3.webp";
// import n4 from "../components/navPhoneimg/n4.webp";
// import r1 from "../components/navPhoneimg/r1.webp";
// import r2 from "../components/navPhoneimg/r2.webp";
// import r3 from "../components/navPhoneimg/r3.webp";
// import r4 from "../components/navPhoneimg/r4.webp";
// import r5 from "../components/navPhoneimg/r5.webp";

// const Ncard = [
//   { src: n1, model: "Redmi note 14 pro 5G" },
//   { src: n2, model: "Redmi note 15 pro 5G" },
//   { src: n3, model: "Redmi note A5 pro 5G" },
//   { src: n4, model: "Redmi  A4  5G" },
// ];

// const Tcard = [
//   { src: r1, model: "Redmi Pad Pro 5G" },
//   { src: r2, model: "Redmi Pad Pro Wifi" },
//   { src: r3, model: "Redmi note A5 pro 5G" },
//   { src: r4, model: "Redmi  A4  5G" },
//   { src: r5, model: "Redmi  A4  5G" },
// ];
// function PhonesMenu() {
//   return (
//     <>
//       <div className="absolute -left-48  top-11 bg-white shadow-lg border rounded-lg p-4 w-screen grid grid-cols-5 pt-10 transition-all duration-500 ">
//         <div className=" text-center flex-col inline-flex p-7">
//           <Link className="text-1xl font-semibold mt-4 hover:text-orange-500 ">
//             Xiaomi Phones
//           </Link>
//         </div>
//         <div className="flex text-center gap-9 justify-center border-l-2 items-center col-span-4 p-10">
//           {Ncard.map((card) => (
//             <div className="bg-slate-200 text-center rounded-2xl justify-center p-5">
//               <img
//                 className="h-48 mr-10 ml-2 hover:text-orange-500 transition-all duration-500 hover:-translate-y-2"
//                 src={card.src}
//                 alt={card.model}
//               />
//               <p className="my-5 cursor-pointer hover:text-orange-500">
//                 {card.model}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

// function TabletsMenu() {
//   return (
//     <>
//       <div className="absolute -left-72 mt-2 top-10 bg-white shadow-lg border rounded-lg p-4 w-screen grid grid-cols-5 pt-10 transition-all duration-500 ">
//         <div className=" text-center flex-col inline-flex p-7">
//           <Link className="text-1xl font-semibold mt-4 hover:text-orange-500 ">
//             Xiaomi Tablets
//           </Link>
//         </div>
//         <div className="flex text-center gap-5 justify-center border-l-2 items-center col-span-4 p-10">
//           {Tcard.map((Tcard) => (
//             <div className="bg-slate-200 text-center rounded-2xl justify-center p-5">
//               <img
//                 className="h-48 mr-10 ml-2 hover:text-orange-500 transition-all duration-500 hover:-translate-y-2"
//                 src={Tcard.src}
//                 alt={Tcard.model}
//               />
//               <p className="my-5 cursor-pointer hover:text-orange-500">
//                 {Tcard.model}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

// function TvMenu() {
//   return (
//     <>
//       <div className="absolute -left-96 mt-1 top-10 bg-white shadow-lg border rounded-lg p-4 px-10 w-screen grid grid-cols-2 pt-10 transition-all duration-500 cursor-pointer  ">
//         <div>
//           <ul>
//             <li className="font-semibold text-xl p-5 pl-0 hover:text-orange-500 cursor-pointer block ">
//               TV
//             </li>
//             <li className="pb-3 hover:text-orange-500 cursor-pointer">
//               Xiaomi TV
//             </li>
//             <li className="pb-3 hover:text-orange-500 cursor-pointer">
//               TV Accessories
//             </li>
//           </ul>
//         </div>
//         <div>
//           <ul>
//             <li className="font-semibold text-xl p-5 pl-0 hover:text-orange-500 cursor-pointer">
//               Smart Home
//             </li>
//             <li className="pb-3 hover:text-orange-500 cursor-pointer">
//               Air Purifier
//             </li>
//             <li className="pb-3 hover:text-orange-500 cursor-pointer">
//               Smart Vacuum Cleaner
//             </li>
//             <li className="pb-3 hover:text-orange-500 cursor-pointer">
//               Vaccum Cleaner Accessories{" "}
//             </li>
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// }

// function SignMenu() {
//   return (
//     <div className="absolute  rounded-xl bg-white text-lg w-32 p-5 pt-3 -left-16">
//       <p className="p-2 text-xl font-semibold hover:underline">Sign In</p>
//       <p className="p-2  font-semibold hover:underline border-t-2">Sign Up</p>
//     </div>
//   );
// }

// function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [hoveredItem, setHoveredItem] = useState(null);

//   const linkStyle =
//     "relative text-gray-800 font-semibold pb-5  after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full px-2 hover:text-orange-500 ";

//   return (
//     <nav className="fixed w-full px-7 pt-3 top-0 z-50 flex h-20 bg-white items-center justify-between shadow-[0_4px_6px_rgba(0,0,0,0.2)]  ">
//       <div className="flex items-center gap-4">
//         <button className="relative bg-orange-500 text-white font-extrabold px-4 py-2 mb-3 rounded-md overflow-hidden group w-14 h-14 flex items-center justify-center">
//           <HiOutlineHome className="absolute text-3xl transition-all duration-500 transform group-hover:translate-x-full opacity-100 group-hover:opacity-0" />

//           <HiOutlineUser className="absolute text-3xl transition-all duration-500 transform -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100" />
//         </button>
//         <div
//           className={`absolute top-full left-0 w-full flex-col gap-6 bg-white p-4 md:flex md:flex-row md:static md:w-auto md:p-0 ${
//             open ? "flex" : "hidden"
//           }`}
//         >
//           <Link to="#" className={linkStyle}>
//             Store
//           </Link>

//           <div
//             className="relative"
//             onMouseEnter={() => setHoveredItem("phones")}
//             onMouseLeave={() => setHoveredItem(null)}
//           >
//             <Link to="#" className={linkStyle}>
//               Phones
//             </Link>
//             {hoveredItem === "phones" && <PhonesMenu />}
//           </div>

//           <div
//             className="relative"
//             onMouseEnter={() => setHoveredItem("tablets")}
//             onMouseLeave={() => setHoveredItem(null)}
//           >
//             <Link to="#" className={linkStyle}>
//               Tablets
//             </Link>
//             {hoveredItem === "tablets" && <TabletsMenu />}
//           </div>

//           <div
//             className="relative"
//             onMouseEnter={() => setHoveredItem("Tv")}
//             onMouseLeave={() => setHoveredItem(null)}
//           >
//             <Link to="#" className={linkStyle}>
//               TV & Smart Home
//             </Link>
//             {hoveredItem === "Tv" && <TvMenu />}
//           </div>

//           <Link to="#" className={linkStyle}>
//             Smart Watch & Audio
//           </Link>

//           <Link to="#" className={linkStyle}>
//             Discover
//           </Link>
//           <Link to="#" className={linkStyle}>
//             Support
//           </Link>
//         </div>
//       </div>

//       <div className="flex items-center gap-10 text-3xl pb-2 pr-7">
//         <Link to="#">
//           <HiOutlineMagnifyingGlass />
//         </Link>
//         <Link to="#">
//           <HiOutlineShoppingBag />
//         </Link>

//         <div
//           className="relative  "
//           onMouseEnter={() => setHoveredItem("sign")}
//           onMouseLeave={() => setHoveredItem(null)}
//         >
//           <Link to="#">
//             <HiOutlineUser />
//           </Link>
//           {hoveredItem === "sign" && <SignMenu />}
//         </div>

//         <button className="md:hidden ml-2" onClick={() => setOpen(!open)}>
//           {open ? <HiXMark /> : <HiOutlineBars3 />}
//         </button>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

////////////////////////////////////
// import { useState } from "react";
// import {
//   HiOutlineHome,
//   HiOutlineMagnifyingGlass,
//   HiOutlineShoppingBag,
//   HiOutlineUser,
//   HiOutlineBars3,
//   HiXMark,
// } from "react-icons/hi2";
// import { Link } from "react-router-dom";

// function Navbar() {
//   const [open, setOpen] = useState(false);

//   const linkStyle =
//     "relative text-gray-800 font-semibold pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full px-2     hover:text-orange-500 mt-3";

//   return (
//     <nav className=" fixed w-full px-7 top-0 z-50 flex h-20 bg-white items-center justify-between  shadow-[0_4px_6px_rgba(0,0,0,0.2)] ">
//       <div className="flex items-center gap-4">
//         <button className="bg-orange-500 text-white font-extrabold px-4 py-2 rounded-md">
//           <HiOutlineHome className="text-3xl" />
//         </button>

//         <div
//           className={`absolute top-full left-0 w-full flex-col gap-6 bg-white p-4 md:flex md:flex-row md:static md:w-auto md:p-0 ${
//             open ? "flex" : "hidden"
//           }`}
//         >
//           <Link to="#" className={linkStyle}>
//             Store
//           </Link>
//           <Link to="#" className={linkStyle}>
//             Phones
//           </Link>
//           <Link to="#" className={linkStyle}>
//             Tablets
//           </Link>
//           <Link to="#" className={linkStyle}>
//             TV & Smart Home
//           </Link>
//           <Link to="#" className={linkStyle}>
//             Smart Watch & Audio
//           </Link>
//           <Link to="#" className={linkStyle}>
//             Discover
//           </Link>
//           <Link to="#" className={linkStyle}>
//             Support
//           </Link>
//         </div>
//       </div>

//       <div className="flex items-center gap-10 text-3xl">
//         <Link to="#">
//           <HiOutlineMagnifyingGlass />
//         </Link>
//         <Link to="#">
//           <HiOutlineShoppingBag />
//         </Link>
//         <Link to="#">
//           <HiOutlineUser />
//         </Link>

//         <button className="md:hidden ml-2" onClick={() => setOpen(!open)}>
//           {open ? <HiXMark /> : <HiOutlineBars3 />}
//         </button>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
