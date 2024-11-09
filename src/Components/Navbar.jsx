// import React, { useState } from "react";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <header className="p-4 bg-white shadow-sm sticky top-0 z-50">
//       <div className="container flex justify-between h-16 mx-auto">
//         <div className="flex">
//           <a href="#" className="flex items-center p-2">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               className="w-8 h-8 text-indigo-600"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
//               />
//             </svg>
//             <span className="ml-2 text-xl font-bold text-gray-800">
//               BlogHub
//             </span>
//           </a>

//           {/* Desktop Navigation */}
//           <ul className="items-stretch hidden space-x-3 lg:flex">
//             <li className="flex">
//               <a
//                 href="#"
//                 className="flex items-center px-4 -mb-1 border-b-2 border-transparent hover:border-indigo-600 hover:text-indigo-600 transition-colors"
//               >
//                 Home
//               </a>
//             </li>
//             <li className="flex">
//               <a
//                 href="#"
//                 className="flex items-center px-4 -mb-1 border-b-2 border-transparent hover:border-indigo-600 hover:text-indigo-600 transition-colors"
//               >
//                 Categories
//               </a>
//             </li>
//             <li className="flex">
//               <a
//                 href="#"
//                 className="flex items-center px-4 -mb-1 border-b-2 border-transparent hover:border-indigo-600 hover:text-indigo-600 transition-colors"
//               >
//                 Featured
//               </a>
//             </li>
//             <li className="flex">
//               <a
//                 href="#"
//                 className="flex items-center px-4 -mb-1 border-b-2 border-transparent hover:border-indigo-600 hover:text-indigo-600 transition-colors"
//               >
//                 About
//               </a>
//             </li>
//           </ul>
//         </div>

//         {/* Desktop Buttons */}
//         <div className="items-center flex-shrink-0 hidden lg:flex space-x-4">
//           {/* <button className="px-5 py-2 font-medium text-gray-600 hover:text-indigo-600 transition-colors">
//             Sign in
//           </button> */}
//           <button className="px-5 py-2 font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors">
//             Sign In
//           </button>
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           className="p-4 lg:hidden"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             className="w-6 h-6 text-gray-800"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M4 6h16M4 12h16M4 18h16"
//             ></path>
//           </svg>
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="lg:hidden mt-2 py-4 bg-white border-t">
//           <div className="container mx-auto px-4 space-y-3">
//             <a
//               href="#"
//               className="block px-4 py-2 text-gray-800 hover:bg-indigo-50 rounded-lg"
//             >
//               Home
//             </a>
//             <a
//               href="#"
//               className="block px-4 py-2 text-gray-800 hover:bg-indigo-50 rounded-lg"
//             >
//               Categories
//             </a>
//             <a
//               href="#"
//               className="block px-4 py-2 text-gray-800 hover:bg-indigo-50 rounded-lg"
//             >
//               Featured
//             </a>
//             <a
//               href="#"
//               className="block px-4 py-2 text-gray-800 hover:bg-indigo-50 rounded-lg"
//             >
//               Aboutf
//             </a>
//             <div className="pt-4 space-y-3">
//               {/* <button className="w-full px-5 py-2 text-gray-600 hover:text-indigo-600 transition-colors">
//                 Sign in
//               </button> */}
//               <button className="w-full px-5 py-2 font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors">
//                 Start Writing
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="p-4 bg-white shadow-sm sticky top-0 z-50">
      <div className="container flex justify-between h-16 mx-auto">
        <div className="flex">
          <Link to="/" className="flex items-center p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="w-8 h-8 text-indigo-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
            <span className="ml-2 text-xl font-bold text-gray-800">
              BlogHub
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="items-stretch hidden space-x-3 lg:flex">
            <li className="flex">
              <Link
                to="/"
                className="flex items-center px-4 -mb-1 border-b-2 border-transparent hover:border-indigo-600 hover:text-indigo-600 transition-colors"
              >
                Home
              </Link>
            </li>
            <li className="flex">
              <Link
                to="/categories"
                className="flex items-center px-4 -mb-1 border-b-2 border-transparent hover:border-indigo-600 hover:text-indigo-600 transition-colors"
              >
                Categories
              </Link>
            </li>
            <li className="flex">
              <Link
                to="/featured"
                className="flex items-center px-4 -mb-1 border-b-2 border-transparent hover:border-indigo-600 hover:text-indigo-600 transition-colors"
              >
                Featured
              </Link>
            </li>
            <li className="flex">
              <Link
                to="/about"
                className="flex items-center px-4 -mb-1 border-b-2 border-transparent hover:border-indigo-600 hover:text-indigo-600 transition-colors"
              >
                About
              </Link>
            </li>
          </ul>
        </div>

        {/* Desktop Buttons */}
        <div className="items-center flex-shrink-0 hidden lg:flex space-x-4">
          <Link to="/signup">
            <button className="px-5 py-2 font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors">
              Sign In
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="p-4 lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-gray-800"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden mt-2 py-4 bg-white border-t">
          <div className="container mx-auto px-4 space-y-3">
            <Link
              to="/"
              className="block px-4 py-2 text-gray-800 hover:bg-indigo-50 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/categories"
              className="block px-4 py-2 text-gray-800 hover:bg-indigo-50 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Categories
            </Link>
            <Link
              to="/featured"
              className="block px-4 py-2 text-gray-800 hover:bg-indigo-50 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Featured
            </Link>
            <Link
              to="/about"
              className="block px-4 py-2 text-gray-800 hover:bg-indigo-50 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>

            <div className="pt-4 space-y-3">
              <Link to="/signup">
                <button className="w-full px-5 py-2 font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors">
                  Sign In
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
