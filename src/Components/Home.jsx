import React from "react";

const Home = () => {
  const image =
    "https://media.istockphoto.com/id/492735396/photo/girl-in-field-with-kitten-and-affectionate-puppy.jpg?s=612x612&w=0&k=20&c=wtUzoS8RJx1BfC54yvcXgQfobTqLSLUV3ScKzHbDSwU=";
  const placeholderImage =
    "https://images.unsplash.com/photo-1731005446956-2851a5e79534?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <section className="bg-gradient-to-b from-slate-50 to-slate-100 min-h-screen py-12">
      <div className="container max-w-6xl p-6 mx-auto space-y-8">
        {/* Featured Article */}
        <a href="#" className="block mx-auto group focus:outline-none">
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl lg:grid lg:grid-cols-12 hover:-translate-y-1">
            <div className="lg:col-span-7 relative overflow-hidden">
              <img
                src={image}
                alt="Featured post"
                className="object-cover w-full h-64 sm:h-96 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                Featured
              </div>
            </div>
            <div className="p-8 lg:col-span-5 flex flex-col justify-center">
              <div className="space-y-4">
                <span className="text-indigo-600 font-medium">
                  Mental Health and Wellbeing
                </span>
                <h3 className="text-3xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                  Healing Companions: How Pets Support Mental and Emotional
                  Well-Being
                </h3>
                <span className="text-sm text-gray-500">February 19, 2024</span>
                <p className="text-gray-600 leading-relaxed">
                  Owning a pet offers more than companionship; it's a unique and
                  fulfilling bond that enhances mental and emotional well-being.
                  Whether it’s a dog wagging its tail, a cat purring on the
                  couch, or a fish gliding through water, pets bring a sense of
                  connection that enriches their owners' lives.
                </p>
              </div>
            </div>
          </div>
        </a>

        {/* Article Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Article 1 */}
          <a
            href="#"
            className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="relative overflow-hidden">
              <img
                src={placeholderImage}
                alt="Article 1"
                className="object-cover w-full h-48 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="p-6 space-y-3">
              <span className="text-sm font-medium text-indigo-600">
                Design
              </span>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                Creating Beautiful User Experiences
              </h3>
              <span className="text-sm text-gray-500">January 21, 2024</span>
              <p className="text-gray-600 line-clamp-3">
                Exploring the principles of modern design and how they
                contribute to creating engaging and intuitive user experiences
                that delight users.
              </p>
            </div>
          </a>

          {/* Article 2 */}
          <a
            href="#"
            className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="relative overflow-hidden">
              <img
                src={placeholderImage}
                alt="Article 2"
                className="object-cover w-full h-48 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="p-6 space-y-3">
              <span className="text-sm font-medium text-indigo-600">
                Technology
              </span>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                The Rise of AI in Everyday Life
              </h3>
              <span className="text-sm text-gray-500">January 22, 2024</span>
              <p className="text-gray-600 line-clamp-3">
                An overview of how AI is reshaping everyday life, from personal
                assistants to smart home devices.
              </p>
            </div>
          </a>
          <a
            href="#"
            className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="relative overflow-hidden">
              <img
                src={placeholderImage}
                alt="Article 2"
                className="object-cover w-full h-48 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="p-6 space-y-3">
              <span className="text-sm font-medium text-indigo-600">
                Technology
              </span>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                The Rise of AI in Everyday Life
              </h3>
              <span className="text-sm text-gray-500">January 22, 2024</span>
              <p className="text-gray-600 line-clamp-3">
                An overview of how AI is reshaping everyday life, from personal
                assistants to smart home devices.
              </p>
            </div>
          </a>
          <a
            href="#"
            className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="relative overflow-hidden">
              <img
                src={placeholderImage}
                alt="Article 2"
                className="object-cover w-full h-48 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="p-6 space-y-3">
              <span className="text-sm font-medium text-indigo-600">
                Technology
              </span>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                The Rise of AI in Everyday Life
              </h3>
              <span className="text-sm text-gray-500">January 22, 2024</span>
              <p className="text-gray-600 line-clamp-3">
                An overview of how AI is reshaping everyday life, from personal
                assistants to smart home devices.
              </p>
            </div>
          </a>
          <a
            href="#"
            className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="relative overflow-hidden">
              <img
                src={placeholderImage}
                alt="Article 2"
                className="object-cover w-full h-48 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="p-6 space-y-3">
              <span className="text-sm font-medium text-indigo-600">
                Technology
              </span>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                The Rise of AI in Everyday Life
              </h3>
              <span className="text-sm text-gray-500">January 22, 2024</span>
              <p className="text-gray-600 line-clamp-3">
                An overview of how AI is reshaping everyday life, from personal
                assistants to smart home devices.
              </p>
            </div>
          </a>
          <a
            href="#"
            className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="relative overflow-hidden">
              <img
                src={placeholderImage}
                alt="Article 2"
                className="object-cover w-full h-48 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="p-6 space-y-3">
              <span className="text-sm font-medium text-indigo-600">
                Technology
              </span>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                The Rise of AI in Everyday Life
              </h3>
              <span className="text-sm text-gray-500">January 22, 2024</span>
              <p className="text-gray-600 line-clamp-3">
                An overview of how AI is reshaping everyday life, from personal
                assistants to smart home devices.
              </p>
            </div>
          </a>
        </div>

        {/* More Articles Button */}
        <div className="flex justify-center pt-8">
          <button
            type="button"
            className="px-8 py-3 font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Read more articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
