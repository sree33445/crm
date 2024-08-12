// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { SlOptionsVertical } from "react-icons/sl";
// import { IoPersonCircleOutline } from "react-icons/io5";
// import { IoIosNotifications } from "react-icons/io";

// const NavBar = () => {
//   const [dropdownVisible, setDropdownVisible] = useState(false);

//   const toggleDropdown = () => {
//     setDropdownVisible(!dropdownVisible);
//   };

//   return (
//     <div className="bg-gray-800 flex justify-between items-center py-4 px-6 relative">
//       <div className="flex items-center space-x-3">
//         <Image src="/image/crmLogo.png" alt="CRM Logo" width={48} height={48} />
//         <h1 className="font-bold text-white">CRM</h1>
//       </div>

//       <div className="flex items-center space-x-4">
//         <div className="flex items-center bg-neutral-200 rounded-full py-1 px-3 space-x-2">
//           <IoPersonCircleOutline color="black" className="w-8 h-8" />
//           <div className="leading-tight">
//             <h2 className="text-sm text-black font-semibold">John Doe</h2>
//             <span className="text-xs text-black">johndoe@gmail.com</span>
//           </div>
//         </div>
        
//         <IoIosNotifications color="white" className="cursor-pointer h-8 w-8" />
//         <SlOptionsVertical
//           color="white"
//           onClick={toggleDropdown}
//           className="cursor-pointer h-6 w-6"
//         />
//       </div>

//       {dropdownVisible && (
//         <div className="absolute right-6 top-14 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-10">
//           <ul className="list-none p-0 m-0">
//             <li className="border-b border-gray-300">
//               <Link
//                 href="/login"
//                 className="block px-4 py-2 text-black hover:bg-gray-200"
//               >
//                 Login
//               </Link>
//             </li>
//             <li className="border-b border-gray-300">
//               <Link
//                 href="/signup"
//                 className="block px-4 py-2 text-black hover:bg-gray-200"
//               >
//                 Signup
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="/login"
//                 className="block px-4 py-2 text-black hover:bg-gray-200"
//               >
//                 LogOut
//               </Link>
//             </li>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default NavBar;






"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SlOptionsVertical } from "react-icons/sl";
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";

const NavBar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className="bg-gray-800 flex justify-between items-center py-3 px-4 md:px-5 relative">
      <div className="flex items-center space-x-2 md:space-x-3">
        <Image src="/image/crmLogo.png" alt="CRM Logo" width={36} height={36} />
        <h1 className="font-bold text-white text-base md:text-lg">CRM</h1>
      </div>

      <div className="flex items-center space-x-1 md:space-x-2">
        <div className="flex items-center bg-neutral-200 rounded-full py-1 px-2 md:px-2 space-x-1">
          <IoPersonCircleOutline
            color="black"
            className="w-4 h-4 md:w-5 md:h-5"
          />
          <div className="leading-tight">
            <span className="text-xs text-black">johndoe@gmail.com</span>
          </div>
        </div>
        
        <IoIosNotifications
          color="white"
          className="cursor-pointer w-4 h-4 md:w-5 md:h-5"
        />
        <SlOptionsVertical
          color="white"
          onClick={toggleDropdown}
          className="cursor-pointer w-4 h-4 md:w-5 md:h-5"
        />
      </div>

      {dropdownVisible && (
        <div className="absolute right-4 top-12 mt-2 w-40 bg-white border border-gray-300 rounded-md shadow-lg z-10">
          <ul className="list-none p-0 m-0">
            <li className="border-b border-gray-300">
              <Link
                href="/login"
                className="block px-3 py-2 text-black hover:bg-gray-200"
              >
                Login
              </Link>
            </li>
            <li className="border-b border-gray-300">
              <Link
                href="/signup"
                className="block px-3 py-2 text-black hover:bg-gray-200"
              >
                Signup
              </Link>
            </li>
            <li>
              <Link
                href="/login"
                className="block px-3 py-2 text-black hover:bg-gray-200"
              >
                LogOut
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;
