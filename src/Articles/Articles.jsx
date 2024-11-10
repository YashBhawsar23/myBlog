import React from "react";
import { useParams, Link } from "react-router-dom";
import Notfound from "./Notfound";

const Article = () => {
  const { id } = useParams();

  const getArticle = (id) => {
    const articles = {
      "healing-companions": {
        title:
          "Healing Companions: How Pets Support Mental and Emotional Well-Being",
        category: "Mental Health and Wellbeing",
        date: "February 19, 2024",
        content: `Owning a pet brings more than just companionship. It’s a unique, deeply fulfilling relationship that can brighten lives and bring mental and emotional stability in ways many people never imagine. Whether it’s a dog wagging its tail at the door, a cat curled up purring on the couch, or even a small fish gliding through an aquarium, pets bring a sense of connection that positively impacts the lives of their owners.

One of the first things many people notice after bringing a pet into their lives is a drop in stress levels. Scientific studies show that simply petting an animal can lower stress by releasing oxytocin, often called the "love hormone." This small act promotes feelings of comfort and relaxation, calming us even in moments of high stress or anxiety. Pets seem to intuitively understand human emotions, often responding with nuzzles, purrs, or a warm presence when they sense their owners are distressed. For people living with anxiety, this predictable, comforting response provides a stable support system and helps them manage their feelings, keeping them grounded and at peace.

In a world where loneliness is a growing problem, pets offer a powerful counterbalance. In many ways, they are more than just animals; they are confidants, listeners, and friends who make a home feel warmer and more welcoming. For those living alone or far from loved ones, a pet provides the love and attention we crave. This is particularly true for dog owners who often find that the daily ritual of walking their dog introduces them to other pet owners, creating opportunities for friendship and social connection in their communities.

Beyond companionship, pets have shown tangible benefits for those with clinical mental health challenges. Therapy animals are becoming more common, providing comfort and support to people with PTSD, autism, or severe anxiety. These animals are trained to ground individuals in moments of panic, encouraging positive physical interaction that eases symptoms and allows for moments of relief and connection. In hospitals, therapy pets visit patients to reduce feelings of isolation and lift their spirits, providing a sense of comfort that medicine alone often can’t achieve.

Pets bring more than just joy; they bring healing, purpose, and a unique kind of companionship that supports us through life’s ups and downs. For those searching for ways to enhance their mental and emotional health, a pet can be one of life’s most fulfilling solutions, offering love and companionship that leaves a lasting, positive mark.`,
        image:
          "https://media.istockphoto.com/id/492735396/photo/girl-in-field-with-kitten-and-affectionate-puppy.jpg?s=612x612&w=0&k=20&c=wtUzoS8RJx1BfC54yvcXgQfobTqLSLUV3ScKzHbDSwU=",
      },
      // Second Article
      "ai-everyday-life": {
        title:
          "The Rise of AI in Everyday Life: Transforming How We Live and Work",
        category: "Technology",
        date: "February 19, 2024",
        content: `Artificial intelligence (AI) has swiftly transitioned from a futuristic concept to an integral part of our daily lives, transforming everything from how we work and communicate to how we shop, learn, and entertain ourselves. Initially, AI was primarily confined to research labs and specialized industries, but advancements in technology, machine learning, and data processing have brought it into mainstream use, with AI applications and systems now woven into our everyday experiences. This transformation marks a profound shift, revealing a world where machines and algorithms are becoming valuable allies in simplifying, enhancing, and personalizing life in unprecedented ways.

One of the most direct ways AI is enhancing daily life is through smart home technology. Devices like Amazon’s Alexa, Google Assistant, and Apple’s Siri have moved beyond simple voice-activated commands, now acting as central hubs for controlling our homes. These systems can dim lights, adjust thermostats, play music, and provide reminders, all while learning users' preferences over time to deliver a more customized experience.

AI has revolutionized the way we communicate, particularly in the realm of customer service. Chatbots and virtual assistants are now standard on many websites, helping people navigate services, answer questions, and even resolve issues in real time. These AI-powered systems have advanced natural language processing capabilities, enabling them to interpret and respond to inquiries in ways that feel increasingly human.

AI has fundamentally changed the entertainment landscape, offering personalized experiences across streaming, gaming, and social media. Services like Netflix, Spotify, and YouTube use AI algorithms to suggest movies, shows, music, and videos based on users’ preferences and past behavior. This personalization makes entertainment platforms more engaging by curating content that aligns with individual tastes, making it easy to discover new media we’re likely to enjoy.

In embracing AI, we’re not just advancing technology—we’re fundamentally transforming the way we live, work, and interact with the world around us. The rise of AI in everyday life may be just the beginning, and as it becomes more integrated, the possibilities of how it will shape the future are truly limitless.`,
        image:
          "https://urbeuniversity.edu/post_assets/Le9zsr8bQmv7gmZW40UXiVaPsGcpVwaY65mw28tU.webp",
      },
      // Third Article
      "Fast fashion": {
        title: "The Rise and Impact of Fast Fashion: A Look Behind the Seams",
        category: "Life Style",
        date: "February 19, 2024",
        content: `Fast fashion has become a defining characteristic of the modern clothing industry, providing affordable, on-trend styles at breakneck speeds. Brands like Zara, H&M, and Shein have mastered the art of quick-turnaround production, delivering catwalk-inspired pieces at prices accessible to the everyday shopper. While this model has democratized fashion, making it possible for consumers to frequently refresh their wardrobes, it also has significant environmental, social, and economic consequences. Let’s delve into the allure of fast fashion, its darker side, and the rising call for more sustainable alternatives.

Fast fashion is a business model characterized by the rapid production of high-volume, low-cost clothing designed to capture the latest trends. Rather than producing new styles seasonally, fast fashion brands drop collections continuously throughout the year, sometimes adding new items to stores every week. This model encourages consumers to buy more, as trends change rapidly and prices are kept low.

While fast fashion offers affordability and accessibility, it also has a significant environmental impact. The clothing industry is among the most polluting industries globally, and fast fashion is a major contributor. The mass production of cheap clothing requires large amounts of water, energy, and synthetic fibers like polyester, which can take hundreds of years to decompose. According to research, the fashion industry produces around 10% of global carbon emissions—more than international flights and maritime shipping combined.

Beyond the environmental impact, fast fashion raises significant ethical questions regarding labor practices. To keep prices low, many fast fashion brands rely on outsourcing production to countries with lower labor costs. While this can create economic opportunities in these regions, the work is often performed in factories where conditions are substandard, wages are low, and workers have little to no job security.

Fast fashion has undeniably changed the way we engage with clothing, making fashion accessible and affordable to a wider audience. However, its environmental and ethical costs are becoming harder to ignore. As awareness grows, so does the demand for a fashion industry that respects both people and the planet. Consumers, brands, and policymakers are beginning to explore new ways to make fashion sustainable, responsible, and less wasteful.`,
        image:
          "https://nextmsc.com/nextmsc-stg/blogimage/Things-You-Should-Know-about-Fast-Fashion.jpg",
      },
      // Fourth Article
      Breakfast: {
        title: "The Power of Breakfast: Why Starting Your Day Right Matters",
        category: "Food and Nutrition",
        date: "February 19, 2024",
        content: `Breakfast has long been hailed as the most important meal of the day—and for good reason. A well-balanced breakfast doesn’t just satisfy morning hunger; it sets the tone for energy, focus, and overall well-being throughout the day. Yet, with busy schedules and the lure of an extra few minutes of sleep, many people skip breakfast, relying on coffee or a snack later on. But research suggests that investing time in a nutritious breakfast can pay off in many ways, from boosting cognitive function to aiding in weight management. Here’s a closer look at the benefits of breakfast and some ideas for making it a delicious, nourishing start to your day.

When we wake up, our bodies have been in a “fasting” state for hours, typically without food since the night before. Breakfast literally “breaks the fast,” replenishing glucose levels, which fuel our muscles and brain. Without breakfast, the body has to work harder to maintain blood sugar levels, which can lead to feelings of sluggishness, irritability, and decreased focus.

Eating a balanced breakfast kick-starts your metabolism, helping your body burn calories throughout the day. In fact, studies have shown that people who eat breakfast are more likely to maintain a healthy weight because they’re less prone to overeating later. Additionally, a morning meal rich in nutrients provides essential vitamins and minerals that help improve mood and concentration, which is especially important for children and students, as breakfast can enhance memory and cognitive performance.

Eating breakfast doesn’t just benefit the body; it also boosts mental clarity and emotional health. Studies show that breakfast improves attention, memory, and cognitive performance, especially in children and teenagers. Additionally, eating a nutritious breakfast is associated with better mood regulation. Starting the day with the right foods can help manage stress, anxiety, and irritability, allowing us to approach daily tasks with a calm, focused mind.

Breakfast sets the stage for the day ahead, providing energy, stabilizing blood sugar, and enhancing mental clarity. By choosing nutrient-rich foods that are high in protein, fiber, and healthy fats, we can improve physical health, mental focus, and even mood. Whether you’re a traditional breakfast eater, a fan of grab-and-go options, or someone looking to try international flavors, taking the time to nourish yourself in the morning can make a big difference.`,
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Breakfast_at_the_Black_Bear_Diner.jpg/800px-Breakfast_at_the_Black_Bear_Diner.jpg",
      },
      // Fifth Article
      Travel: {
        title:
          "The Joy of Traveling: Discovering New Places, Cultures, and Perspectives",
        category: "Travel and Adventure",
        date: "February 19, 2024",
        content: `Traveling offers far more than just a change of scenery; it’s a transformative experience that enriches our understanding of the world and ourselves. Whether it’s a spontaneous weekend getaway, a cultural exploration across continents, or a relaxing beach vacation, traveling has a unique way of expanding horizons, creating memories, and fostering personal growth. As more people embrace travel for work, leisure, or adventure, let’s explore the many benefits of traveling and some ideas to make every trip meaningful.

One of the most thrilling aspects of traveling is exploring unfamiliar places. Each destination, whether a bustling city, serene mountain village, or tropical paradise, offers a unique combination of history, culture, and natural beauty. From wandering the ancient streets of Rome to hiking the serene trails of the Swiss Alps, travel allows us to immerse ourselves in the world's diversity and beauty.

Travel is one of the most engaging ways to learn about history, art, language, and customs. Through museums, local tours, and personal encounters, we gain insights into a destination’s past and present. Trying new foods, learning a few phrases in the local language, or participating in cultural festivals enriches the travel experience, offering a deeper connection to the places we visit.

Physically, travel often encourages us to be more active, whether we’re walking through historic streets, swimming in the ocean, or hiking in the mountains. Engaging with nature, in particular, has been shown to improve physical and mental health by reducing stress, improving focus, and enhancing creativity. Many people also find that travel rejuvenates them spiritually, allowing time for reflection, mindfulness, and even a renewed sense of purpose.

Traveling leaves an impact that goes beyond the trip itself. Each journey adds layers to our worldview, influences our values, and often brings newfound clarity or appreciation for our own lives. While it’s not always possible to travel frequently, even one meaningful trip can inspire a lifelong love of learning, exploration, and connection.`,
        image:
          "https://akm-img-a-in.tosshub.com/aajtak/images/story/202406/66691948cf6a2-travelling-12430430-16x9.jpg?size=948:533",
      },
      // Sixth Article
      "5G Technology": {
        title:
          "5G Technology: Revolutionizing Connectivity and Shaping the Future",
        category: "Technology",
        date: "February 19, 2024",
        content: `The arrival of 5G technology is transforming the digital landscape, offering speeds up to 100 times faster than its predecessor, 4G. This fifth generation of mobile networks promises not only faster downloads but also improved connectivity, reduced latency, and more reliable internet for users worldwide. Beyond simply enhancing smartphone experiences, 5G is expected to impact various industries, from healthcare and transportation to entertainment and smart cities, setting the stage for a more connected and efficient world. Here’s a look at what 5G technology is, how it works, and the ways it’s changing our lives.

While 5G promises numerous benefits, it also faces several challenges. For one, the high-frequency waves used for 5G can be easily obstructed by buildings, trees, and even weather, limiting coverage. Extensive infrastructure, including more small cell towers, is needed to provide consistent 5G coverage, especially in rural areas. The rollout of 5G also raises privacy concerns, as the expanded connectivity could increase the risk of cyberattacks and data breaches. Addressing these security issues will be critical to ensuring that 5G networks are safe and reliable.

As 5G continues to expand globally, we’ll likely see even more applications that make use of its impressive speed and connectivity. The technology will pave the way for future innovations, such as 6G, which is already in the early stages of research. Experts predict that 6G will be up to 100 times faster than 5G, enabling technologies we can only begin to imagine today, such as holographic communication and full-body haptic suits for immersive experiences.

5G is transforming how we live, work, and interact with technology, bringing the digital and physical worlds closer together. As it becomes more widespread, 5G will enable a connected, efficient, and innovative future, opening doors to advancements across industries and shaping a new era of connectivity.

The transition to 5G represents one of the most significant technological shifts in recent history. From faster streaming to smarter cities, 5G is revolutionizing connectivity and setting the stage for an unprecedented era of digital growth. While it’s not without challenges, 5G’s potential to transform healthcare, transportation, and entertainment is remarkable, offering a glimpse into a future where connectivity is more integrated, efficient, and innovative than ever before.`,
        image:
          "https://www.logic-fruit.com/wp-content/uploads/2023/05/The-Future-of-5G-Technology-Introduction-01.jpg.webp",
      },
      // Seventh Article
      "Self-Driving Cars": {
        title: "Self-Driving Cars: Navigating the Future of Transportation",
        category: "Technology",
        date: "February 19, 2024",
        content: `Self-driving cars are no longer a distant dream; they’re a fast-evolving reality that promises to change how we think about transportation. Equipped with cutting-edge artificial intelligence, sensors, and complex algorithms, these autonomous vehicles are designed to transport passengers with minimal or no human intervention. Self-driving technology holds the potential to make roads safer, reduce traffic congestion, and provide greater mobility options for people who are unable to drive. As companies race to develop and perfect this technology, self-driving cars have become a symbol of both innovation and debate, shaping the future of how we get from place to place.

Self-driving cars, also known as autonomous vehicles (AVs), rely on a network of sensors, cameras, radar, and LiDAR (Light Detection and Ranging) to perceive their surroundings. Using this data, the car creates a 3D map of its environment, allowing it to detect obstacles, lane markings, traffic lights, and other vehicles. Advanced algorithms then process this information, enabling the car to make decisions about steering, acceleration, and braking in real-time.

As self-driving technology continues to evolve, its potential applications are expanding. Experts believe that fully autonomous vehicles could become commonplace within the next decade, especially in urban areas with well-developed infrastructure. The technology is expected to continue advancing, eventually reaching a point where human intervention is rarely, if ever, required.

Self-driving cars have the potential to revolutionize transportation, offering benefits like improved safety, accessibility, and efficiency. While there are still many technical, ethical, and regulatory hurdles to overcome, the progress made so far is promising. As technology advances, autonomous vehicles could become an integral part of our transportation systems, changing not only how we move but also how we interact with the world around us.

The journey toward a fully autonomous future will likely be gradual, with both successes and setbacks along the way. But as self-driving cars continue to improve, they hold the promise of a more connected, accessible, and efficient transportation future. Whether navigating city streets or delivering goods across the country, these autonomous vehicles may soon become a familiar part of our everyday lives.`,
        image:
          "https://mindy-support.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2019/06/self-drive-decis.jpeg.webp",
      },
    };

    return articles[id];
  };

  const article = getArticle(id);

  if (!article) {
    return (
      <div>
        <Notfound />
      </div>
    );
  }

  // Split content by double line breaks to create paragraphs
  const paragraphs = article.content.split("\n\n");

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link
        to="/"
        className="text-indigo-600 hover:text-indigo-800 mb-8 inline-block"
      >
        ← Back to Home
      </Link>
      <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-96 object-cover"
        />
        <div className="p-8">
          <span className="text-indigo-600 font-medium">
            {article.category}
          </span>
          <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
            {article.title}
          </h1>
          <span className="text-gray-500">{article.date}</span>
          <div className="mt-6 prose prose-lg">
            {paragraphs.map((paragraph, index) => (
              <p key={index}>
                {paragraph} <br /> <br />
              </p>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
};

export default Article;
