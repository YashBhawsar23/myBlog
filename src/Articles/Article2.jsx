import React from "react";

const Article1 = () => {
  return (
    <>
      <div className="p-5 mx-auto sm:p-10 md:p-16 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded-2xl shadow-xl transition-transform duration-300 hover:scale-[1.02]">
          <img
            src="https://thumbs.dreamstime.com/b/pensioner-his-pets-senior-man-dog-cat-lap-bench-35172900.jpg?w=768"
            alt="Featured blog post"
            className="w-full h-60 sm:h-96 object-cover transition-transform duration-500 hover:scale-105"
          />

          <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-xl bg-white/95 backdrop-blur-sm shadow-lg">
            <div className="space-y-2">
              <a
                href="#"
                className="inline-block text-2xl font-semibold sm:text-3xl text-gray-900 hover:text-indigo-600 transition-colors duration-200"
              >
                The Best Activewear from the Nordstrom Anniversary Sale
              </a>

              <p className="text-sm text-gray-500">
                By{" "}
                <a
                  href="#"
                  className="text-indigo-600 hover:text-indigo-800 hover:underline transition-colors duration-200"
                >
                  Leroy Jenkins
                </a>
              </p>
            </div>

            <div className="text-gray-700 leading-relaxed">
              <p>Insert the actual text content here...</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Article1;

// import React from "react";

// const Article1 = () => {
//   return (
//     <>
//       <div className="p-5 mx-auto sm:p-10 md:p-16 bg-gradient-to-br from-indigo-50 to-purple-50">
//         <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded-2xl shadow-xl transition-transform duration-300 hover:scale-[1.02]">
//           <img
//             src="https://thumbs.dreamstime.com/b/pensioner-his-pets-senior-man-dog-cat-lap-bench-35172900.jpg?w=768"
//             alt="Featured blog post"
//             className="w-full h-60 sm:h-96 object-cover transition-transform duration-500 hover:scale-105"
//           />

//           <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-xl bg-white/95 shadow-lg">
//             <div className="space-y-2">
//               <a
//                 href="#"
//                 className="inline-block text-2xl font-semibold sm:text-3xl text-gray-900 hover:text-indigo-600 transition-colors duration-200"
//               >
//                 The Best Activewear from the Nordstrom Anniversary Sale
//               </a>

//               <p className="text-sm text-gray-500">
//                 By{" "}
//                 <a
//                   href="#"
//                   className="text-indigo-600 hover:text-indigo-800 hover:underline transition-colors duration-200"
//                 >
//                   Leroy Jenkins
//                 </a>
//               </p>
//             </div>

//             <div className="text-gray-700 leading-relaxed">
//               <p>Insert the actual text content here...</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* New */}
//       <div className="p-5 mx-auto sm:p-10 md:p-16 bg-gradient-to-br from-indigo-50 to-purple-50">
//         <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded-2xl shadow-xl transition-transform duration-300 hover:scale-[1.02]">
//           {/* Wrapper div to control image scaling */}
//           <div className="overflow-hidden transition-transform duration-500 hover:scale-105">
//             <img
//               src="https://thumbs.dreamstime.com/b/pensioner-his-pets-senior-man-dog-cat-lap-bench-35172900.jpg?w=768"
//               alt="Featured blog post"
//               className="w-full h-60 sm:h-96 object-cover"
//             />
//           </div>

//           <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-xl bg-white/95 shadow-lg">
//             <div className="space-y-2">
//               <a
//                 href="#"
//                 className="inline-block text-2xl font-semibold sm:text-3xl text-gray-900 hover:text-indigo-600 transition-colors duration-200"
//               >
//                 The Best Activewear from the Nordstrom Anniversary Sale
//               </a>

//               <p className="text-sm text-gray-500">
//                 By{" "}
//                 <a
//                   href="#"
//                   className="text-indigo-600 hover:text-indigo-800 hover:underline transition-colors duration-200"
//                 >
//                   Leroy Jenkins
//                 </a>
//               </p>
//             </div>

//             <div className="text-gray-700 leading-relaxed">
//               <p>Insert the actual text content here...</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Article1;
