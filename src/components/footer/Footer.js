import { useState } from "react";
import { FaFacebookF, FaGlobe, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  const [email, setEmail] = useState("");

  return (
    <>
      <div className="bg-black text-white w-full px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 ">
        <div>
          <h3 className="font-bold text-2xl pb-4">Support</h3>
          <ul className="text-gray-400 space-y-2 text-sm sm:text-base">
            <li className="hover:underline cursor-pointer">Online Help</li>
            <li className="hover:underline cursor-pointer">Customer Service</li>
            <li className="hover:underline cursor-pointer">Shipping FAQ</li>
            <li className="hover:underline cursor-pointer">Warranty</li>
            <li className="hover:underline cursor-pointer">Xiaomi Exchange</li>
            <li className="hover:underline cursor-pointer">User Guide</li>
            <li className="hover:underline cursor-pointer">Laptop Drivers</li>
            <li className="hover:underline cursor-pointer">
              Mi Screen Protect
            </li>
            <li className="hover:underline cursor-pointer">
              Mi Extended Warranty
            </li>
            <li className="hover:underline cursor-pointer">
              Mi Complete Protect
            </li>
            <li className="hover:underline cursor-pointer">Certification</li>
            <li className="hover:underline cursor-pointer">Service Center</li>
            <li className="hover:underline cursor-pointer">
              Xiaomi Easy Finance
            </li>
            <li className="hover:underline cursor-pointer">
              Xiaomi Spotify India
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-2xl pb-4">Shop and Learn</h3>
          <ul className="text-gray-400 space-y-2 text-sm sm:text-base">
            <li className="hover:underline cursor-pointer">Xiaomi Phones</li>
            <li className="hover:underline cursor-pointer">Redmi Phones</li>
            <li className="hover:underline cursor-pointer">TVs</li>
            <li className="hover:underline cursor-pointer">
              Laptops & Tablets
            </li>
            <li className="hover:underline cursor-pointer">Audio</li>
            <li className="hover:underline cursor-pointer">Lifestyle</li>
            <li className="hover:underline cursor-pointer">Smart Home</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-2xl pb-4">Retail Store</h3>
          <ul className="text-gray-400 space-y-2 text-sm sm:text-base">
            <li className="hover:underline cursor-pointer">Mi Home</li>
            <li className="hover:underline cursor-pointer">
              Mi Authorized Store
            </li>
            <li className="hover:underline cursor-pointer">
              Mi Store Franchise
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-2xl pb-4">About Us</h3>
          <ul className="text-gray-400 space-y-2 text-sm sm:text-base">
            <li className="hover:underline cursor-pointer">Xiaomi</li>
            <li className="hover:underline cursor-pointer">Privacy Policy</li>
            <li className="hover:underline cursor-pointer">User Agreement</li>
            <li className="hover:underline cursor-pointer">
              Integrity & Compliance
            </li>
            <li className="hover:underline cursor-pointer">
              CSR & Disclosures
            </li>
            <li className="hover:underline cursor-pointer">
              E-Waste Management
            </li>
            <li className="hover:underline cursor-pointer">In The Press</li>
            <li className="hover:underline cursor-pointer">Trust Center</li>
            <li className="hover:underline cursor-pointer">Culture</li>
            <li className="hover:underline cursor-pointer">
              Smartphone Quality
            </li>
            <li className="hover:underline cursor-pointer">TV Quality</li>
            <li className="hover:underline cursor-pointer">Service Quality</li>
            <li className="hover:underline cursor-pointer">Xiaomi HyperOS</li>
            <li className="hover:underline cursor-pointer">Join Our Team</li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h3 className="font-bold text-2xl pb-4">Follow Mi</h3>
          <div className="flex gap-4 pb-6">
            <FaFacebookF className="bg-white text-black p-2 text-3xl rounded-md hover:bg-gray-400 hover:text-white transition duration-300" />
            <FaInstagram className="bg-white text-black p-2 text-3xl rounded-md hover:bg-gray-400 hover:text-white transition duration-300" />
            <FaTwitter className="bg-white text-black p-2 text-3xl rounded-md hover:bg-gray-400 hover:text-white transition duration-300" />
          </div>

          <h3 className="font-bold text-2xl mt-6 pb-3">Let’s stay in touch</h3>
          <div className="flex items-center justify-between p-2 border rounded-md border-gray-400">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email address"
              className="bg-transparent text-white placeholder-gray-400 focus:outline-none w-full px-2"
            />
            <button className="text-white text-2xl">→</button>
          </div>

          <div className="mt-8 text-center border border-gray-400 rounded-lg p-4">
            <h3 className="font-bold text-xl pb-2">Get Mi Store App</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Scan for up-to-date information <br /> for better shopping
              experience
            </p>
            <div className="mt-5">
              <Link to="#" className="underline hover:text-gray-300">
                Download on Google Play
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center text-gray-300 bg-black border-t border-gray-700 px-6 py-5 text-sm sm:text-base gap-3">
        <p className="text-center">
          © 2010 - 2025 Xiaomi. All Rights Reserved{" "}
          <span className="ml-2 hover:underline cursor-pointer">Sitemap</span>
        </p>
        <div className="flex items-center gap-3">
          <p className="hover:underline cursor-pointer">India / English</p>
          <FaGlobe className="text-lg" />
        </div>
      </div>
    </>
  );
}

export default Footer;

////////////////////////////////////////////
//////////////////////////////////////////////
// import { useState } from "react";
// import { FaFacebookF, FaGlobe, FaInstagram, FaTwitter } from "react-icons/fa";
// import { Link } from "react-router-dom";

// function Footer() {
//   const [email, setEmail] = useState("");
//   return (
//     <>
//       <div className=" pt-16 grid grid-cols-2 md:grid-cols-6  bg-black min-h-screen text-white w-screen ">
//         <div className="   text p-10 ">
//           <h3 className="font-bold text-2xl pb-5    ">Support</h3>
//           <ul className="text-gray-400 leading-[2.8]  ">
//             <li className="hover:underline cursor-pointer">Online Help</li>
//             <li className="hover:underline cursor-pointer">Customer Service</li>
//             <li className="hover:underline cursor-pointer">Shipping FAq</li>
//             <li className="hover:underline cursor-pointer">Warranty</li>
//             <li className="hover:underline cursor-pointer">Xiaomi Exchange</li>
//             <li className="hover:underline cursor-pointer">User Guide</li>
//             <li className="hover:underline cursor-pointer">Laptop Drivers</li>
//             <li className="hover:underline cursor-pointer">
//               Mi Screen Protect
//             </li>
//             <li className="hover:underline cursor-pointer">
//               Mi Extended Warranty
//             </li>
//             <li className="hover:underline cursor-pointer">
//               Mi complete Protect
//             </li>
//             <li className="hover:underline cursor-pointer">Certification</li>
//             <li className="hover:underline cursor-pointer">Service Center</li>
//             <li className="hover:underline cursor-pointer">
//               Xiaomi Easy Finance
//             </li>
//             <li className="hover:underline cursor-pointer">
//               Xiaomi Spotify India
//             </li>
//           </ul>
//         </div>
//         <div className="  text p-10">
//           <h3 className="font-bold text-2xl pb-5    ">SHOP AND LEARN</h3>
//           <ul className="text-gray-400 leading-[2.8]  ">
//             <li className="hover:underline cursor-pointer">Xiaomi phones</li>
//             <li className="hover:underline cursor-pointer">Redmi phones</li>
//             <li className="hover:underline cursor-pointer">Tv's</li>
//             <li className="hover:underline cursor-pointer">
//               Laptops and Tablets
//             </li>
//             <li className="hover:underline cursor-pointer">Audio</li>
//             <li className="hover:underline cursor-pointer">LifeStyle</li>
//             <li className="hover:underline cursor-pointer">Smart Home </li>
//           </ul>
//         </div>
//         <div className="   text p-10">
//           <h3 className="font-bold text-2xl pb-5    ">RETAIL STORE</h3>
//           <ul className="text-gray-400 leading-[2.8]  ">
//             <li className="hover:underline cursor-pointer">Mi Home</li>
//             <li className="hover:underline cursor-pointer">
//               Mi Autorized Store
//             </li>
//             <li className="hover:underline cursor-pointer">
//               Mi Store Franchise
//             </li>
//           </ul>
//         </div>
//         <div className="    text p-10">
//           <h3 className="font-bold text-2xl pb-5    ">ABOUT US</h3>
//           <ul className="text-gray-400 leading-[2.8]  ">
//             <li className="hover:underline cursor-pointer">Xiaomi</li>
//             <li className="hover:underline cursor-pointer">Privacy Policy</li>
//             <li className="hover:underline cursor-pointer">User Agreement</li>
//             <li className="hover:underline cursor-pointer">
//               Integrity & Compliance
//             </li>
//             <li className="hover:underline cursor-pointer">
//               CSR and Disclousers
//             </li>
//             <li className="hover:underline cursor-pointer">
//               E-Waste Management
//             </li>
//             <li className="hover:underline cursor-pointer">In The Press</li>
//             <li className="hover:underline cursor-pointer">Trust Center</li>
//             <li className="hover:underline cursor-pointer">Culture</li>
//             <li className="hover:underline cursor-pointer">
//               Smartphone Quality
//             </li>
//             <li className="hover:underline cursor-pointer">TV Quality</li>
//             <li className="hover:underline cursor-pointer">Service Quality</li>
//             <li className="hover:underline cursor-pointer">Xiaomi HyperOS</li>
//             <li className="hover:underline cursor-pointer">Join our Team</li>
//           </ul>
//         </div>
//         <div className="   text p-10 col-span-2    ">
//           <h3 className="font-bold text-2xl pb-5    ">Follow Mi</h3>
//           <div className="flex gap-5 pb-6">
//             <FaFacebookF className="hover:bg-gray-400 hover:text-white  bg-white  text-black p-1 text-4xl rounded-lg transition duration-300 " />
//             <FaInstagram className="hover:bg-gray-400 hover:text-white transition duration-300   bg-white  text-black p-1 text-4xl rounded-lg " />
//             <FaTwitter className="hover:bg-gray-400 hover:text-white transition duration-300  bg-white  text-black p-1 text-4xl rounded-lg  " />
//           </div>
//           <div>
//             <h3 className="font-bold text-2xl mt-3 pb-5    ">
//               Lets stay in touch
//             </h3>
//             <div className=" flex justify-between p-2 border-2 mt-1 rounded-lg border-white">
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Enter email address"
//                 className=" placeholder:bg-black  border-none   outline-none bg-transparent  "
//               />
//               <button className="text-white text-2xl  "> →</button>
//             </div>
//             <div className="  mt-10 text-center border-2 rounded-xl border-white  ">
//               {/* <div>
//               <img src="../footer/foot1.webp" alt="barcode mi " />
//             </div> */}
//               <div>
//                 <h3 className="font-bold text-2xl mt-5 pb-5    ">
//                   Get mi store app
//                 </h3>
//                 <p>
//                   Scan for our up-to-date information <br />
//                   for better shopping experience
//                 </p>
//               </div>
//               <div className="m-10  border2 border-t-2  pt-6 ">
//                 <Link to="#">Download on Google play</Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className=" flex p-7 text-xl items-center justify-between bg-black text-white  px-7 border2 border-t-2  pt-6  ">
//         <div>
//           <p>
//             Copyright @ 2010 - 2025 Xiaomi. All Rights Reserved{" "}
//             <span className="ml-10 cursor-pointer hover:underline ">
//               {" "}
//               Sitemap
//             </span>
//           </p>
//         </div>
//         <div className="flex items-center">
//           <p className="hover:underline cursor-pointer">India / English</p>
//           <p className="ml-7 cursor-pointer ">
//             <FaGlobe />
//           </p>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Footer;
