import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const image =
    "https://media.istockphoto.com/id/492735396/photo/girl-in-field-with-kitten-and-affectionate-puppy.jpg?s=612x612&w=0&k=20&c=wtUzoS8RJx1BfC54yvcXgQfobTqLSLUV3ScKzHbDSwU=";

  // Sample articles data
  const articles = [
    {
      id: "healing-companions",
      category: "Mental Health and Wellbeing",
      title:
        "Healing Companions: How Pets Support Mental and Emotional Well-Being",
      date: "February 19, 2024",
      image: image,
      excerpt:
        "Owning a pet offers more than companionship; it's a unique and fulfilling bond that enhances mental and emotional well-being. Whether it's a dog wagging its tail, a cat purring on the couch, or a fish gliding through water, pets bring a sense of connection that enriches their owners' lives.",
      featured: true,
    },

    {
      id: "ai-everyday-life",
      category: "Technology",
      title: "The Rise of AI in Everyday Life",
      date: "January 22, 2024",
      image:
        "https://urbeuniversity.edu/post_assets/Le9zsr8bQmv7gmZW40UXiVaPsGcpVwaY65mw28tU.webp",
      excerpt:
        "Artificial intelligence (AI) has swiftly transitioned from a futuristic concept to an integral part of our daily lives, transforming everything from how we work and communicate to how we shop, learn, and entertain ourselves.",
    },

    {
      id: "Fast fashion",
      category: "Lifestyle",
      title: "The Rise and Impact of Fast Fashion: A Look Behind the Seams",
      date: "January 22, 2024",
      image:
        "https://nextmsc.com/nextmsc-stg/blogimage/Things-You-Should-Know-about-Fast-Fashion.jpg",
      excerpt:
        "Fast fashion has become a defining characteristic of the modern clothing industry, providing affordable, on-trend styles at breakneck speeds.",
    },

    {
      id: "Breakfast",
      category: "Food and Nutrition",
      title: "The Power of Breakfast: Why Starting Your Day Right Matters",
      date: "January 22, 2024",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Breakfast_at_the_Black_Bear_Diner.jpg/800px-Breakfast_at_the_Black_Bear_Diner.jpg",
      excerpt:
        "Breakfast has long been hailed as the most important meal of the day—and for good reason. A well-balanced breakfast doesn’t just satisfy morning hunger; it sets the tone for energy, focus, and overall well-being throughout the day.",
    },
    // {
    //   id: "Travel",
    //   category: "Travel and Adventure",
    //   title:
    //     "The Joy of Traveling: Discovering New Places, Cultures, and Perspectives",
    //   date: "January 22, 2024",
    //   image:
    //     "https://akm-img-a-in.tosshub.com/aajtak/images/story/202406/66691948cf6a2-travelling-12430430-16x9.jpg?size=948:533",
    //   excerpt:
    //     "Traveling offers far more than just a change of scenery; it’s a transformative experience that enriches our understanding of the world and ourselves. Whether it’s a spontaneous weekend getaway, a cultural exploration across continents,",
    // },
    // {
    //   id: "5G Technology",
    //   category: "Technology",
    //   title:
    //     "5G Technology: Revolutionizing Connectivity and Shaping the Future",
    //   date: "January 22, 2024",
    //   image:
    //     "https://www.logic-fruit.com/wp-content/uploads/2023/05/The-Future-of-5G-Technology-Introduction-01.jpg.webp",
    //   excerpt:
    //     "The arrival of 5G technology is transforming the digital landscape, offering speeds up to 100 times faster than its predecessor, 4G. This fifth generation of mobile networks promises not only faster downloads but also improved connectivity,",
    // },
    // {
    //   id: "Self-Driving Cars",
    //   category: "Technology",
    //   title: "Self-Driving Cars: Navigating the Future of Transportation",
    //   date: "January 22, 2024",
    //   image:
    //     "https://mindy-support.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2019/06/self-drive-decis.jpeg.webp",
    //   excerpt:
    //     "Self-driving cars are no longer a distant dream; they’re a fast-evolving reality that promises to change how we think about transportation. Equipped with cutting-edge artificial intelligence, sensors, and complex algorithms,",
    // },
  ];

  return (
    <section className="bg-gradient-to-b from-slate-50 to-slate-100 min-h-screen py-12">
      <div className="container max-w-6xl p-6 mx-auto space-y-8">
        {/* Featured Article */}
        <Link
          to={`/article/${articles[0].id}`}
          className="block mx-auto group focus:outline-none"
        >
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl lg:grid lg:grid-cols-12 hover:-translate-y-1">
            <div className="lg:col-span-7 relative overflow-hidden">
              <img
                src={articles[0].image}
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
                  {articles[0].category}
                </span>
                <h3 className="text-3xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                  {articles[0].title}
                </h3>
                <span className="text-sm text-gray-500">
                  {articles[0].date}
                </span>
                <p className="text-gray-600 leading-relaxed">
                  {articles[0].excerpt}
                </p>
              </div>
            </div>
          </div>
        </Link>

        {/* Article Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {articles.slice(1).map((article, index) => (
            <Link
              key={article.id}
              to={`/article/${article.id}`}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="object-cover w-full h-48 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-6 space-y-3">
                <span className="text-sm font-medium text-indigo-600">
                  {article.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                  {article.title}
                </h3>
                <span className="text-sm text-gray-500">{article.date}</span>
                <p className="text-gray-600 line-clamp-3">{article.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* More Articles Button */}
        <div className="flex justify-center pt-8">
          <Link
            to="/allArticles"
            className="px-8 py-3 font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Read more articles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
