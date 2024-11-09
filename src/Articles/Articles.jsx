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
      // Add other articles here
    };

    return articles[id];
  };

  const article = getArticle(id);

  if (!article) {
    return <div>Article not found</div>;
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
