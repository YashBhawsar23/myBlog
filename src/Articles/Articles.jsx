// import React from "react";
// import { useParams, Link } from "react-router-dom";

// const Article = () => {
//   const { id } = useParams();

//   // In a real application, you would fetch the article data based on the ID
//   // This is just a mock example
//   const getArticle = (id) => {
//     const articles = {
//       "healing-companions": {
//         title:
//           "Healing Companions: How Pets Support Mental and Emotional Well-Being",
//         category: "Mental Health and Wellbeing",
//         date: "February 19, 2024",
//         content:
//           "Owning a pet brings more than just companionship. It’s a unique, deeply fulfilling relationship that can brighten lives and bring mental and emotional stability in ways many people never imagine. Whether it’s a dog wagging its tail at the door, a cat curled up purring on the couch, or even a small fish gliding through an aquarium, pets bring a sense of connection that positively impacts the lives of their owners.\n\n" +
//           "Studies have shown that pets can reduce stress, anxiety, and depression, while also promoting feelings of happiness and relaxation. The presence of a pet, especially dogs, encourages physical activity like walking, which has long-term mental health benefits. Animals offer unconditional love and support, helping people cope with feelings of loneliness or isolation. They also provide structure and routine to daily life, which is particularly important for individuals struggling with mental health conditions.\n\n" +
//           "Beyond emotional support, pets also play a role in enhancing social interaction. Pet owners often engage in conversations with other pet owners during walks or at pet-friendly gatherings, fostering a sense of community and connection. For individuals with social anxiety or difficulty in making connections, having a pet can be a safe, comforting bridge to the outside world.\n\n" +
//           "In addition, animals have a unique ability to sense their owners' emotions. Many pet owners report that their animals instinctively know when they’re feeling down or stressed, and will offer comfort by sitting close, nuzzling, or even just resting quietly by their side. This empathetic behavior helps promote emotional regulation and healing, especially in challenging times.\n\n" +
//           "For individuals living with conditions such as PTSD or autism spectrum disorder (ASD), service animals and emotional support animals provide crucial therapeutic benefits. The presence of a trained animal can offer grounding, calmness, and a sense of security, making it easier for individuals to navigate daily life.\n\n" +
//           "While not every pet is suited for every person, finding the right companion can be a life-changing experience. The bond between a pet and their owner can improve quality of life, boost mental resilience, and provide a steady source of joy and love. So, whether it’s a cat curled up on your lap or a dog wagging its tail at your side, it’s clear that pets play a vital role in mental and emotional well-being.",
//         image:
//           "https://media.istockphoto.com/id/492735396/photo/girl-in-field-with-kitten-and-affectionate-puppy.jpg?s=612x612&w=0&k=20&c=wtUzoS8RJx1BfC54yvcXgQfobTqLSLUV3ScKzHbDSwU=",
//       },
//       "user-experiences": {
//         title:
//           "Healing Companions: How Pets Support Mental and Emotional Well-Being",
//         category: "Mental Health and Wellbeing",
//         date: "February 19, 2024",
//         content:
//           "Owning a pet brings more than just companionship. It’s a unique, deeply fulfilling relationship that can brighten lives and bring mental and emotional stability in ways many people never imagine. Whether it’s a dog wagging its tail at the door, a cat curled up purring on the couch, or even a small fish gliding through an aquarium, pets bring a sense of connection that positively impacts the lives of their owners.\n\n" +
//           "Studies have shown that pets can reduce stress, anxiety, and depression, while also promoting feelings of happiness and relaxation. The presence of a pet, especially dogs, encourages physical activity like walking, which has long-term mental health benefits. Animals offer unconditional love and support, helping people cope with feelings of loneliness or isolation. They also provide structure and routine to daily life, which is particularly important for individuals struggling with mental health conditions.\n\n" +
//           "Beyond emotional support, pets also play a role in enhancing social interaction. Pet owners often engage in conversations with other pet owners during walks or at pet-friendly gatherings, fostering a sense of community and connection. For individuals with social anxiety or difficulty in making connections, having a pet can be a safe, comforting bridge to the outside world.\n\n" +
//           "In addition, animals have a unique ability to sense their owners' emotions. Many pet owners report that their animals instinctively know when they’re feeling down or stressed, and will offer comfort by sitting close, nuzzling, or even just resting quietly by their side. This empathetic behavior helps promote emotional regulation and healing, especially in challenging times.\n\n" +
//           "For individuals living with conditions such as PTSD or autism spectrum disorder (ASD), service animals and emotional support animals provide crucial therapeutic benefits. The presence of a trained animal can offer grounding, calmness, and a sense of security, making it easier for individuals to navigate daily life.\n\n" +
//           "While not every pet is suited for every person, finding the right companion can be a life-changing experience. The bond between a pet and their owner can improve quality of life, boost mental resilience, and provide a steady source of joy and love. So, whether it’s a cat curled up on your lap or a dog wagging its tail at your side, it’s clear that pets play a vital role in mental and emotional well-being.",
//         image:
//           "https://media.istockphoto.com/id/492735396/photo/girl-in-field-with-kitten-and-affectionate-puppy.jpg?s=612x612&w=0&k=20&c=wtUzoS8RJx1BfC54yvcXgQfobTqLSLUV3ScKzHbDSwU=",
//       },
//       // Add other articles here
//     };

//     return articles[id];
//   };

//   const article = getArticle(id);

//   if (!article) {
//     return <div>Article not found</div>;
//   }

//   return (
//     <div className="max-w-4xl mx-auto px-4 py-12">
//       <Link
//         to="/"
//         className="text-indigo-600 hover:text-indigo-800 mb-8 inline-block"
//       >
//         ← Back to Home
//       </Link>
//       <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
//         <img
//           src={article.image}
//           alt={article.title}
//           className="w-full h-96 object-cover"
//         />
//         <div className="p-8">
//           <span className="text-indigo-600 font-medium">
//             {article.category}
//           </span>
//           <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
//             {article.title}
//           </h1>
//           <span className="text-gray-500">{article.date}</span>
//           <div className="mt-6 prose prose-lg">{article.content}</div>
//         </div>
//       </article>
//     </div>
//   );
// };

// export default Article;

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
        content: `Artificial intelligence (AI) has swiftly transitioned from a futuristic concept to an integral part of our daily lives, transforming everything from how we work and communicate to how we shop, learn, and entertain ourselves. Initially, AI was primarily confined to research labs and specialized industries, but advancements in technology, machine learning, and data processing have brought it into mainstream use, with AI applications and systems now woven into our everyday experiences. This transformation marks a profound shift, revealing a world where machines and algorithms are becoming valuable allies in simplifying, enhancing, and personalizing life in unprecedented ways.

One of the most direct ways AI is enhancing daily life is through smart home technology. Devices like Amazon’s Alexa, Google Assistant, and Apple’s Siri have moved beyond simple voice-activated commands, now acting as central hubs for controlling our homes. These systems can dim lights, adjust thermostats, play music, and provide reminders, all while learning users' preferences over time to deliver a more customized experience.

AI has revolutionized the way we communicate, particularly in the realm of customer service. Chatbots and virtual assistants are now standard on many websites, helping people navigate services, answer questions, and even resolve issues in real time. These AI-powered systems have advanced natural language processing capabilities, enabling them to interpret and respond to inquiries in ways that feel increasingly human.

AI has fundamentally changed the entertainment landscape, offering personalized experiences across streaming, gaming, and social media. Services like Netflix, Spotify, and YouTube use AI algorithms to suggest movies, shows, music, and videos based on users’ preferences and past behavior. This personalization makes entertainment platforms more engaging by curating content that aligns with individual tastes, making it easy to discover new media we’re likely to enjoy.

In embracing AI, we’re not just advancing technology—we’re fundamentally transforming the way we live, work, and interact with the world around us. The rise of AI in everyday life may be just the beginning, and as it becomes more integrated, the possibilities of how it will shape the future are truly limitless.`,
        image:
          "https://akm-img-a-in.tosshub.com/aajtak/images/story/202406/66691948cf6a2-travelling-12430430-16x9.jpg?size=948:533",
      },
      // Sixth Article
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
