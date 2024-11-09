import React from "react";
import { Link } from "react-router-dom";

const Home2 = () => {
  const articles = [
    {
      id: 1,
      image:
        "https://media.istockphoto.com/id/492735396/photo/girl-in-field-with-kitten-and-affectionate-puppy.jpg?s=612x612&w=0&k=20&c=wtUzoS8RJx1BfC54yvcXgQfobTqLSLUV3ScKzHbDSwU=",
      title:
        "Healing Companions: How Pets Support Mental and Emotional Well-Being",
      category: "Mental Health and Wellbeing",
      date: "February 19, 2024",
      description: "Owning a pet offers more than companionship...",
    },
    {
      id: 2,
      image:
        "https://media.istockphoto.com/id/492735396/photo/girl-in-field-with-kitten-and-affectionate-puppy.jpg?s=612x612&w=0&k=20&c=wtUzoS8RJx1BfC54yvcXgQfobTqLSLUV3ScKzHbDSwU=",
      title:
        "Healing Companions: How Pets Support Mental and Emotional Well-Being",
      category: "Mental Health and Wellbeing",
      date: "February 19, 2024",
      description: "Owning a pet offers more than companionship...",
    },
    {
      id: 3,
      image:
        "https://media.istockphoto.com/id/492735396/photo/girl-in-field-with-kitten-and-affectionate-puppy.jpg?s=612x612&w=0&k=20&c=wtUzoS8RJx1BfC54yvcXgQfobTqLSLUV3ScKzHbDSwU=",
      title:
        "Healing Companions: How Pets Support Mental and Emotional Well-Being",
      category: "Mental Health and Wellbeing",
      date: "February 19, 2024",
      description: "Owning a pet offers more than companionship...",
    },
    {
      id: 4,
      image:
        "https://media.istockphoto.com/id/492735396/photo/girl-in-field-with-kitten-and-affectionate-puppy.jpg?s=612x612&w=0&k=20&c=wtUzoS8RJx1BfC54yvcXgQfobTqLSLUV3ScKzHbDSwU=",
      title:
        "Healing Companions: How Pets Support Mental and Emotional Well-Being",
      category: "Yash Bhawsar",
      date: "February 19, 2024",
      description: "Owning a pet offers more than companionship...",
    },
    {
      id: 5,
      image:
        "https://media.istockphoto.com/id/492735396/photo/girl-in-field-with-kitten-and-affectionate-puppy.jpg?s=612x612&w=0&k=20&c=wtUzoS8RJx1BfC54yvcXgQfobTqLSLUV3ScKzHbDSwU=",
      title:
        "Healing Companions: How Pets Support Mental and Emotional Well-Being",
      category: "Mental Health and Wellbeing",
      date: "February 19, 2024",
      description: "Owning a pet offers more than companionship...",
    },
    {
      id: 6,
      image:
        "https://media.istockphoto.com/id/492735396/photo/girl-in-field-with-kitten-and-affectionate-puppy.jpg?s=612x612&w=0&k=20&c=wtUzoS8RJx1BfC54yvcXgQfobTqLSLUV3ScKzHbDSwU=",
      title:
        "Healing Companions: How Pets Support Mental and Emotional Well-Being",
      category: "Mental Health and Wellbeing",
      date: "February 19, 2024",
      description: "Owning a pet offers more than companionship...",
    },
    // Add more articles with unique IDs
  ];

  return (
    <section className="bg-gradient-to-b from-slate-50 to-slate-100 min-h-screen py-12">
      <div className="container max-w-6xl p-6 mx-auto space-y-8">
        {articles.map((article) => (
          <Link
            key={article.id}
            to={`/article/${article.id}`}
            className="block mx-auto group focus:outline-none"
          >
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl lg:grid lg:grid-cols-12 hover:-translate-y-1">
              <div className="lg:col-span-7 relative overflow-hidden">
                <img
                  src={article.image}
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
                    {article.category}
                  </span>
                  <h3 className="text-3xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                    {article.title}
                  </h3>
                  <span className="text-sm text-gray-500">{article.date}</span>
                  <p className="text-gray-600 leading-relaxed">
                    {article.description}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Home2;
