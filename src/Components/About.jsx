import React from "react";

const AboutPage = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle subscription logic here
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <main className="max-w-4xl mx-auto px-4 py-12">
          <div className="p-8 bg-white shadow rounded-lg">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <img
                src="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHx8MA%3D%3D"
                alt="Profile"
                className="rounded-full w-48 h-48 object-cover"
              />

              <div className="flex-1">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  Hello, I'm Yash Bhawsar
                </h1>

                <p className="text-gray-600 mb-6">
                  Welcome to my corner of the internet! I'm a tech enthusiast,
                  writer, and lifelong learner based in San Francisco. With over
                  8 years of experience in software development, I'm passionate
                  about sharing knowledge and exploring the intersection of
                  technology and everyday life.
                </p>

                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-gray-800">
                    What I Write About
                  </h2>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Web Development & Programming</li>
                    <li>Tech Industry Insights</li>
                    <li>Digital Lifestyle & Productivity</li>
                    <li>Career Growth in Tech</li>
                  </ul>
                </div>
              </div>
            </div>

            <hr className="my-8 border-gray-200" />

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  My Journey
                </h2>
                <p className="text-gray-600">
                  I started this blog in 2020 as a way to document my learning
                  journey and share insights with fellow developers. What began
                  as a personal project has grown into a community of tech
                  enthusiasts who learn and grow together.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Let's Connect
                </h2>
                <p className="text-gray-600 mb-4">
                  I love hearing from readers and fellow tech enthusiasts. Feel
                  free to reach out through any of these channels:
                </p>

                <div className="flex justify-start space-x-3">
                  <a
                    href="#"
                    title="Facebook"
                    className="flex items-center p-1 text-gray-500 hover:text-indigo-600"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      className="w-5 h-5"
                    >
                      <path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    title="Twitter"
                    className="flex items-center p-1 text-gray-500 hover:text-indigo-600"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                    >
                      <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    title="Instagram"
                    className="flex items-center p-1 text-gray-500 hover:text-indigo-600"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path d="M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.704 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.391 2.181 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.704-0.084 2.865-0.355 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.891-0.885 1.443-1.776 1.849-2.833 0.391-1.020 0.661-2.181 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.704-0.355-2.871-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.776-1.443-2.833-1.849-1.020-0.396-2.181-0.661-3.885-0.745-1.703-0.077-2.244-0.093-6.593-0.093zM16 2.88c4.271 0 4.781 0.021 6.469 0.093 1.557 0.073 2.405 0.333 2.968 0.553 0.751 0.291 1.276 0.635 1.844 1.197 0.557 0.557 0.901 1.088 1.192 1.839 0.22 0.563 0.48 1.411 0.553 2.968 0.072 1.688 0.093 2.199 0.093 6.469s-0.021 4.781-0.099 6.469c-0.084 1.557-0.344 2.405-0.563 2.968-0.303 0.751-0.641 1.276-1.199 1.844-0.563 0.557-1.099 0.901-1.844 1.192-0.556 0.22-1.416 0.48-2.979 0.553-1.697 0.072-2.197 0.093-6.479 0.093s-4.781-0.021-6.48-0.099c-1.557-0.084-2.416-0.344-2.979-0.563-0.76-0.303-1.281-0.641-1.839-1.199-0.563-0.563-0.921-1.099-1.197-1.844-0.224-0.556-0.48-1.416-0.563-2.979-0.057-1.677-0.084-2.197-0.084-6.459 0-4.26 0.027-4.781 0.084-6.479 0.083-1.563 0.339-2.421 0.563-2.979 0.276-0.761 0.635-1.281 1.197-1.844 0.557-0.557 1.079-0.917 1.839-1.199 0.563-0.219 1.401-0.479 2.964-0.557 1.697-0.061 2.197-0.083 6.473-0.083zM16 7.787c-4.541 0-8.213 3.677-8.213 8.213 0 4.541 3.677 8.213 8.213 8.213 4.541 0 8.213-3.677 8.213-8.213 0-4.541-3.677-8.213-8.213-8.213zM16 21.333c-2.948 0-5.333-2.385-5.333-5.333s2.385-5.333 5.333-5.333c2.948 0 5.333 2.385 5.333 5.333s-2.385 5.333-5.333 5.333zM26.464 7.459c0 1.063-0.865 1.921-1.923 1.921-1.063 0-1.921-0.859-1.921-1.921 0-1.057 0.864-1.917 1.921-1.917s1.923 0.86 1.923 1.917z"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    title="LinkedIn"
                    className="flex items-center p-1 text-gray-500 hover:text-indigo-600"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.042-1.852-3.042-1.853 0-2.136 1.445-2.136 2.94v5.671h-3.555V9h3.414v1.561h.049c.475-.9 1.634-1.847 3.361-1.847 3.592 0 4.254 2.364 4.254 5.439v6.299zM5.337 7.433c-1.144 0-2.067-.927-2.067-2.071 0-1.145.923-2.071 2.067-2.071s2.071.926 2.071 2.071c0 1.144-.927 2.071-2.071 2.071zm1.777 13.019H3.559V9h3.555v11.452zM22.225 0H1.771C.791 0 0 .784 0 1.75v20.497c0 .967.791 1.753 1.771 1.753h20.451c.979 0 1.773-.786 1.773-1.753V1.75C23.998.784 23.204 0 22.225 0z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    title="GitHub"
                    className="flex items-center p-1 text-gray-500 hover:text-indigo-600"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                    >
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.415-4.042-1.415-.546-1.386-1.333-1.756-1.333-1.756-1.087-.744.084-.729.084-.729 1.205.085 1.837 1.236 1.837 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.776.42-1.305.764-1.605-2.665-.305-5.467-1.335-5.467-5.93 0-1.31.465-2.38 1.235-3.22-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.47 11.47 0 013.004-.404c1.018.004 2.044.137 3.003.404 2.292-1.552 3.297-1.23 3.297-1.23.656 1.653.244 2.874.12 3.176.77.84 1.231 1.91 1.231 3.22 0 4.61-2.807 5.62-5.478 5.92.43.372.823 1.102.823 2.222 0 1.606-.014 2.896-.014 3.287 0 .32.217.694.825.577C20.565 22.092 24 17.592 24 12.297 24 5.67 18.63.297 12 .297z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-gray-50 p-6 shadow rounded-lg">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Newsletter
              </h2>
              <p className="text-gray-600 mb-4">
                Subscribe to my newsletter for weekly updates on tech,
                development tips, and industry insights.
              </p>
              <form
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row gap-4"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 p-2 border border-gray-300 rounded"
                />
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default AboutPage;
