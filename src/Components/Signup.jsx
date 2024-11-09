// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const Signup = () => {
//   const [isLogin, setIsLogin] = useState(true);

//   return (
//     <>
//       <div className="flex min-h-screen w-full flex-col items-center justify-center bg-slate-100">
//         <div className="form-container w-80 rounded-lg bg-white p-5 shadow-md">
//           <div className="form-toggle mb-5 flex justify-between">
//             <button
//               className={`rounded-md px-10 py-2 hover:bg-primary-500 hover:text-white ${
//                 isLogin ? "bg-secondary-500" : "bg-gray-200"
//               }`}
//               onClick={() => setIsLogin(true)}
//               type="button"
//             >
//               Sign In
//             </button>
//             <button
//               className={`rounded-md px-10 py-2 hover:bg-primary-500 hover:text-white ${
//                 !isLogin ? "bg-secondary-500" : "bg-gray-200"
//               }`}
//               onClick={() => setIsLogin(false)}
//               type="button"
//             >
//               Sign Up
//             </button>
//           </div>
//           <form className="form flex flex-col">
//             {isLogin ? (
//               <>
//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   className="mb-2 rounded-md border border-gray-300 p-2"
//                   required
//                 />
//                 <input
//                   type="password"
//                   placeholder="Enter your password"
//                   className="mb-2 rounded-md border border-gray-300 p-2"
//                   required
//                 />
//                 <a href="#" className="mt-2 text-right text-blue-500">
//                   Forgot Password?
//                 </a>
//                 <button
//                   type="submit"
//                   className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white"
//                 >
//                   Sign In
//                 </button>
//                 <p className="mt-2 text-center">
//                   Not a Member?{" "}
//                   <a
//                     href="#"
//                     onClick={() => setIsLogin(false)}
//                     className="text-blue-500"
//                     role="button"
//                   >
//                     Sign Up now
//                   </a>
//                 </p>
//               </>
//             ) : (
//               <>
//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   className="mb-2 rounded-md border border-gray-300 p-2"
//                   required
//                 />
//                 <input
//                   type="password"
//                   placeholder="Enter your password"
//                   className="mb-2 rounded-md border border-gray-300 p-2"
//                   required
//                 />
//                 <input
//                   type="password"
//                   placeholder="Confirm your password"
//                   className="mb-2 rounded-md border border-gray-300 p-2"
//                   required
//                 />
//                 <button
//                   type="submit"
//                   className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white"
//                 >
//                   Sign Up
//                 </button>
//                 <p className="mt-2 text-center">
//                   Already a Member?{" "}
//                   <a
//                     href="#"
//                     onClick={() => setIsLogin(true)}
//                     className="text-blue-500"
//                     role="button"
//                   >
//                     Sign In now
//                   </a>
//                 </p>
//               </>
//             )}
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Signup;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Signup = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <div className="flex min-h-screen w-full flex-col items-center justify-center bg-gradient-to-br from-indigo-50 to-violet-50">
        <div className="w-96 rounded-2xl bg-white p-8 shadow-xl">
          <div className="mb-8 flex gap-4">
            <button
              className={`flex-1 rounded-lg py-3 text-sm font-medium transition-all duration-200 ${
                isLogin
                  ? "bg-indigo-600 text-white shadow-md"
                  : "bg-gray-100 text-gray-500 hover:bg-gray-200"
              }`}
              onClick={() => setIsLogin(true)}
              type="button"
            >
              Sign In
            </button>
            <button
              className={`flex-1 rounded-lg py-3 text-sm font-medium transition-all duration-200 ${
                !isLogin
                  ? "bg-indigo-600 text-white shadow-md"
                  : "bg-gray-100 text-gray-500 hover:bg-gray-200"
              }`}
              onClick={() => setIsLogin(false)}
              type="button"
            >
              Sign Up
            </button>
          </div>

          <form className="space-y-4">
            {isLogin ? (
              <>
                <div className="space-y-4">
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full rounded-lg border border-gray-200 p-3 text-sm outline-none transition-all duration-200 hover:border-gray-300 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600"
                    required
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full rounded-lg border border-gray-200 p-3 text-sm outline-none transition-all duration-200 hover:border-gray-300 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600"
                    required
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 text-sm text-gray-500">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    Remember me
                  </label>
                  <a
                    href="#"
                    className="text-sm font-medium text-indigo-600 hover:text-indigo-700"
                  >
                    Forgot Password?
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-indigo-600 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
                >
                  Sign In
                </button>

                <p className="text-center text-sm text-gray-500">
                  Not a member?{" "}
                  <button
                    type="button"
                    onClick={() => setIsLogin(false)}
                    className="font-medium text-indigo-600 hover:text-indigo-700"
                  >
                    Sign up now
                  </button>
                </p>
              </>
            ) : (
              <>
                <div className="space-y-4">
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full rounded-lg border border-gray-200 p-3 text-sm outline-none transition-all duration-200 hover:border-gray-300 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600"
                    required
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full rounded-lg border border-gray-200 p-3 text-sm outline-none transition-all duration-200 hover:border-gray-300 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600"
                    required
                  />
                  <input
                    type="password"
                    placeholder="Confirm password"
                    className="w-full rounded-lg border border-gray-200 p-3 text-sm outline-none transition-all duration-200 hover:border-gray-300 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600"
                    required
                  />
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    required
                  />
                  <label className="text-sm text-gray-500">
                    I agree to the{" "}
                    <a
                      href="#"
                      className="font-medium text-indigo-600 hover:text-indigo-700"
                    >
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a
                      href="#"
                      className="font-medium text-indigo-600 hover:text-indigo-700"
                    >
                      Privacy Policy
                    </a>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-indigo-600 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
                >
                  Create Account
                </button>

                <p className="text-center text-sm text-gray-500">
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={() => setIsLogin(true)}
                    className="font-medium text-indigo-600 hover:text-indigo-700"
                  >
                    Sign in
                  </button>
                </p>
              </>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
