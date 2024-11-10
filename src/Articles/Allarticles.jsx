import React from "react";
import { Link } from "react-router-dom";

const AllArticles = () => {
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
      id: "fast-fashion",
      category: "Lifestyle",
      title: "The Rise and Impact of Fast Fashion: A Look Behind the Seams",
      date: "January 22, 2024",
      image:
        "https://nextmsc.com/nextmsc-stg/blogimage/Things-You-Should-Know-about-Fast-Fashion.jpg",
      excerpt:
        "Fast fashion has become a defining characteristic of the modern clothing industry, providing affordable, on-trend styles at breakneck speeds.",
    },
    {
      id: "breakfast",
      category: "Food and Nutrition",
      title: "The Power of Breakfast: Why Starting Your Day Right Matters",
      date: "January 22, 2024",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Breakfast_at_the_Black_Bear_Diner.jpg/800px-Breakfast_at_the_Black_Bear_Diner.jpg",
      excerpt:
        "Breakfast has long been hailed as the most important meal of the day—and for good reason. A well-balanced breakfast doesn’t just satisfy morning hunger; it sets the tone for energy, focus, and overall well-being throughout the day.",
    },
    {
      id: "travel",
      category: "Travel and Adventure",
      title:
        "The Joy of Traveling: Discovering New Places, Cultures, and Perspectives",
      date: "January 22, 2024",
      image:
        "https://akm-img-a-in.tosshub.com/aajtak/images/story/202406/66691948cf6a2-travelling-12430430-16x9.jpg?size=948:533",
      excerpt:
        "Traveling offers far more than just a change of scenery; it’s a transformative experience that enriches our understanding of the world and ourselves.",
    },
    {
      id: "5g-technology",
      category: "Technology",
      title:
        "5G Technology: Revolutionizing Connectivity and Shaping the Future",
      date: "January 22, 2024",
      image:
        "https://www.logic-fruit.com/wp-content/uploads/2023/05/The-Future-of-5G-Technology-Introduction-01.jpg.webp",
      excerpt:
        "The arrival of 5G technology is transforming the digital landscape, offering speeds up to 100 times faster than its predecessor, 4G. This fifth generation of mobile networks promises not only faster downloads but also improved connectivity.",
    },
    {
      id: "self-driving-cars",
      category: "Technology",
      title: "Self-Driving Cars: Navigating the Future of Transportation",
      date: "January 22, 2024",
      image:
        "https://mindy-support.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2019/06/self-drive-decis.jpeg.webp",
      excerpt:
        "Self-driving cars are no longer a distant dream; they’re a fast-evolving reality that promises to change how we think about transportation.",
    },
    {
      id: "climate-change",
      category: "Environment",
      title: "Climate Change: Urgency and Global Response",
      date: "February 10, 2024",
      image:
        "https://dattmedi.com/blog/wp-content/uploads/2023/02/What-is-Climate-Change-and-what-are-its-causes_-1024x767.webp",
      excerpt:
        "The impact of climate change is undeniable, and it's reshaping ecosystems, weather patterns, and entire communities. As global temperatures rise, so does the urgency for a unified response.",
    },
    {
      id: "electric-vehicles",
      category: "Technology",
      title: "Electric Vehicles: Paving the Road to a Sustainable Future",
      date: "February 12, 2024",
      image:
        "https://www.godigit.com/content/dam/godigit/directportal/en/contenthm/electric-vehicle.jpg",
      excerpt:
        "Electric vehicles are at the forefront of the shift toward eco-friendly transportation, promising reduced emissions and cleaner air. Discover the innovations driving this change.",
    },
    {
      id: "urban-gardening",
      category: "Lifestyle",
      title: "Urban Gardening: Cultivating Green Spaces in Cities",
      date: "February 15, 2024",
      image:
        "https://celebrateurbanbirds.org/wp-content/uploads/2016/09/stock-photo-garden-in-urban-at-sukumwit-bangkok-360954980-1920x1235.jpg",
      excerpt:
        "In dense urban environments, green spaces can be scarce. Urban gardening offers a sustainable solution, allowing city dwellers to cultivate their own slices of nature.",
    },
    {
      id: "mindfulness-at-work",
      category: "Wellness",
      title: "Mindfulness at Work: Enhancing Productivity and Well-being",
      date: "February 18, 2024",
      image:
        "https://www.alliancevirtualoffices.com/virtual-office-blog/wp-content/uploads/2022/01/00-Featured-Mindfulness-at-Work-1140x500.png",
      excerpt:
        "Mindfulness practices are transforming workplaces, helping employees reduce stress, boost focus, and enhance overall well-being.",
    },
    {
      id: "cryptocurrency",
      category: "Finance",
      title: "Cryptocurrency 101: Navigating the World of Digital Currency",
      date: "February 20, 2024",
      image:
        "https://www.shutterstock.com/image-illustration/top-7-cryptocurrency-tokens-by-600nw-2152214777.jpg",
      excerpt:
        "Cryptocurrencies like Bitcoin and Ethereum are reshaping financial landscapes, offering new opportunities—and challenges—in the digital economy.",
    },
    {
      id: "the-gig-economy",
      category: "Economy",
      title: "The Gig Economy: Redefining the Future of Work",
      date: "February 25, 2024",
      image:
        "https://www.safetyandhealthmagazine.com/ext/resources/images/2017/11-nov/gig.jpg?t=1508425591&width=768",
      excerpt:
        "With freelance platforms and remote work on the rise, the gig economy is transforming traditional job structures and offering flexible employment options.",
    },
    {
      id: "smart-homes",
      category: "Technology",
      title: "Smart Homes: Living in the Age of Connectivity",
      date: "February 27, 2024",
      image: "https://www.techtarget.com/rms/onlineImages/iota-smart_home.jpg",
      excerpt:
        "Smart homes are revolutionizing how we live, allowing us to control lighting, security, and even appliances from our smartphones, creating a seamless digital lifestyle.",
    },
    {
      id: "sustainable-fashion",
      category: "Lifestyle",
      title: "Sustainable Fashion: Style with a Conscience",
      date: "February 28, 2024",
      image:
        "https://images.squarespace-cdn.com/content/v1/59a706d4f5e2319b70240ef9/1517960975081-02LAD012OV2D2J812AHW/AdobeStock_54132491.jpeg?format=1500w",
      excerpt:
        "As awareness of environmental impact grows, sustainable fashion is challenging the traditional industry by offering eco-friendly and ethical alternatives.",
    },
    {
      id: "sustainable-fashion",
      category: "Lifestyle",
      title: "Sustainable Fashion: Style with a Conscience",
      date: "February 28, 2024",
      image:
        "https://www.fashionbystyles.com/wordpress/wp-content/uploads/2024/02/DALL%C2%B7E-2024-05-22-10.22.03-A-vibrant-and-inspirational-header-image-for-an-article-titled-Embracing-a-Greener-Future_-Eco-Friendly-and-Sustainable-Fashion-Trends-for-2024.-The-1536x878.webp",
      excerpt:
        "As awareness of environmental impact grows, sustainable fashion is challenging the traditional industry by offering eco-friendly and ethical alternatives.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-slate-50 to-slate-100 min-h-screen py-12">
      <div className="container max-w-6xl p-6 mx-auto space-y-8">
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
        {/* <div className="flex justify-center pt-8">
          <Link
            to="/allArticles"
            className="px-8 py-3 font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Read more articles
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default AllArticles;
