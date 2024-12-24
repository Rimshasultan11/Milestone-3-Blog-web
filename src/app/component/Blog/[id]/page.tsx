import React from 'react'
import Image from 'next/image'
import pic7 from '/public/pic7.jpg'
import design from '/public/design.jpg'
import lifestyle from '/public/lifestyle.jpg'
import nature from '/public/nature.jpg'
import food from '/public/food.jpg'
import images from '/public/images.jpg'
import Comment from '../../Comment'
import Link from 'next/link'
const blogList = [
  {
    id: "1",
    img: pic7,
    heading1: "Technology ",
    title: "Top 5 Gadgets That Will Revolutionize Your Life in 2024",
    description: "Technology is evolving rapidly bringing innovative gadgets that make our lives easier and more exciting From smart home devices to the latest wearable tech these advancements are worth exploring",
    topic: "Key Gadgets to Watch:",
    list: "Smart Home Assistants: AI-powered devices like Google Nest or Alexa that can control your home seamlessly.",
    list2: " Wearable Health Tech: Fitness bands and smartwatches with advanced health monitoring features.",
    list3: " Next-Gen Smartphones: Foldable phones and devices with under-display cameras.",
    list4: "  AR/VR Headsets: Immersive experiences for gaming and work with augmented and virtual reality.",
    list5: "  Eco-Friendly Gadgets: Solar-powered devices to promote sustainability ",
    para: "Whether its a voice-controlled smart speaker or an AI-powered home assistant these gadgets are designed to enhance productivity and simplify your daily routine",

  },
  {
    id: "2",
    img: design,
    heading1: "Design  ",
    title: "The Art of Graphic Design: Elevating Visual Communication",
    description: "Design is not just about making things look appealing. It's about solving problems, enhancing usability, and communicating ideas. Whether it's graphic design, web design, or product design, the role of design in shaping our everyday experiences is immeasurable.",
    topic: "Design Trends to Watch",
    list: "Minimalism: Clean, simple designs with a focus on essential elements. The “less is more” philosophy has been widely embraced, especially in web design.",
    list2: "Dark Mode: Many websites and apps are incorporating dark mode, offering users a more comfortable viewing experience, especially in low-light environments.",
    list3: "Custom Illustrations and Graphics: Instead of using stock photos, many designers are opting for custom illustrations to create a unique visual identity for brands and products.",
    list4: "Bold Typography: Strong, oversized fonts are making a statement in design, adding personality and emphasis to websites and advertisements.",
    list5: " 3D and Motion Design: With advances in technology, 3D design and animation are being used to create immersive and engaging experiences. ",
    para: "Good design is more than just visual appeal; it's about creating meaningful experiences that resonate with the user. Whether you’re designing a website, a logo, or a product, thoughtful design can elevate your work and create lasting impressions.",

  },
  {
    id: "3",
    img:images,
    heading1: "Travel",
    title: "Top 5 Tips for Hassle-Free Travel",
    description: "Traveling is one of life's greatest joys, but it can sometimes be stressful if not planned properly. Here are five essential tips to ensure a smooth and enjoyable journey.",
    topic: "Design Trends to Watch",
    list: " Plan Ahead Start by booking flights, accommodations, and activities in advance. Use travel apps like Google Trips or TripIt to organize your itinerary. Early planning often saves you money and avoids last-minute surprises.",
    list2: " Pack Smart Follow the rule of packing light: bring versatile clothing and only the essentials. Invest in packing cubes to maximize space, and always carry a small travel kit with toiletries, chargers, and medications.",
    list3: " Stay Connected Purchase a local SIM card or use an international data plan to stay connected. Apps like Google Maps and language translators can be lifesavers in unfamiliar destinations.",
    list4: " Prioritize Safety Keep digital and hard copies of your important documents, like passports and IDs. Always research local customs, emergency numbers, and safe areas to visit.",
    list5: "Be Flexible Sometimes, plans don't go as expected. Embrace spontaneity and be open to exploring unplanned opportunities—they often lead to the most memorable experiences!",
    para: "Traveling is all about creating memories and experiencing the unknown. By staying prepared and flexible, you can make your trips stress-free and full of adventure.",

  },

  {
    id: "4",
    img: lifestyle,
    heading1: "Life Style",
    title: "Top Lifestyle Tips to Elevate Your Daily Routine",
    description: "Your lifestyle choices have a significant impact on your overall well-being. By incorporating healthy habits, mindfulness practices, and self-care routines into your daily life you can enhance your physical, mental, and emotional health.",
    topic: "Key Elements of a Daily Routine",
    list: " Wake Up Early: Waking up early allows you to have quiet, uninterrupted time to focus on yourself. Aim for a time that gives you enough space to start your day without feeling rushed.",
    list2: " Hydrate First: Drinking water first thing in the morning helps to kickstart your metabolism, hydrate your body, and flush out toxins.",
    list3: " Movement: Whether it's stretching, yoga, or a quick workout, moving your body in the morning boosts energy levels and releases endorphins, which can improve your mood and productivity.",
    list4: " Mindfulness: Take a few minutes to practice mindfulness, meditation, or deep breathing exercises to center yourself and set a positive tone for the day.",
    list5: "Plan Your Day: Set intentions and prioritize tasks for the day ahead. Whether you prefer to jot down a to-do list or review your calendar, this practice helps you stay focused and organized.",
    para: "Small changes can lead to big results when it comes to improving your daily routine. By prioritizing self-care, mindfulness, and organization, you can elevate your lifestyle and feel more energized, focused, and content each day.",
  },
  {
    id: "5",
    img: food,
    heading1: "Food",
    title: " Easy Tips for Eating Well Every Day",
    description: "Eating healthy doesn't have to be complicated. With just a few simple changes, you can improve your diet and feel better every day. A balanced diet is all about enjoying a variety of foods that fuel your body, boost your energy, and keep you feeling your best. Here are some easy tips for eating well without the stress.",
    topic: "Key Components of a Balanced Diet",
    list: "  Eat the Rainbow: Fill your plate with a variety of colorful fruits and vegetables to get a range of vitamins, minerals, and antioxidants.",
    list2: " Choose Whole Grains: Opt for whole grains like brown rice, quinoa, and whole wheat bread over refined grains to increase fiber and nutrient intake.",
    list3: " Include Lean Proteins: Incorporate lean protein sources like chicken, fish, tofu, and legumes to support muscle growth and repair.",
    list4: "  Healthy Fats: Don't be afraid of fats! Include sources like avocados, nuts, seeds, and olive oil in your diet for heart health and brain function.",
    list5: "  Limit Added Sugars: Be mindful of added sugars in processed foods and drinks. Opt for natural sweeteners like honey or maple syrup when needed.",
    para: " Eating well is all about balance and moderation. By making simple swaps and incorporating nutrient-dense foods into your meals, you can improve your overall health and well-being without sacrificing flavor or enjoyment.",
  },
  {
    id: "6",
    img: nature,
    heading1: "Nature",
    title: " The Beauty of Nature",
    description: " In today's fast-paced world, it's easy to become disconnected from the natural world. Yet, nature has always played an essential role in human health and happiness. Whether it's a walk in the park, hiking in the mountains, or simply sitting by a quiet lake, spending time in nature offers a wealth of physical, mental, and emotional benefits. Here's why connecting with nature should be a priority in our lives.",
    topic: "Tips for Connecting with Nature",
    list: " Go for a Walk: Find a nearby park, trail, or beach and take a leisurely walk. Even a short walk can help you feel more connected to nature.",
    list2: "Spend Time in Green Spaces: Take time to relax in gardens, forests, or nature reserves. These green spaces are perfect for calming the mind.",
    list3: " Practice Nature Meditation: Find a quiet spot outdoors, close your eyes, and listen to the sounds around you.",
    list4: "  Take a Weekend Getaway: Plan a weekend trip to the mountains, beach, or countryside to fully immerse yourself in nature and escape the daily grind.",
    list5: " Go for a Picnic:Instead of staying indoors for lunch or snacks, pack a picnic and enjoy your meal in a natural setting. Whether it's a park, beach, or forest, eating outside can make your experience feel more immersive.",
    para: " Nature is a powerful force that has the ability to heal, inspire, and energize us. By spending more time outdoors, we can improve our physical health, boost our mental well-being, and reconnect with the world around us.",
  },

];
const page = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const post = blogList.find((items) => items.id === id);

  if (!post) {
    return (
      <div className="text-center mt-20">
        <h1 className="text-3xl text-red-500">Post not found</h1>
        <Link href="/">
          <p className="text-blue-500 underline mt-4">Go back to Home</p>
        </Link>
      </div>
    );
  } else {
    return (
      <div className="w-full bg-gradient-to-r from-[#55175781] to-[#833b8a9c] py-4">
        {/* Blog Heading */}
        <div className="wrapper text-white mt-6 text-lg sm:text-xl lg:text-4xl text-center py-10 bg-[#551757] rounded-lg">
          {post.heading1}
        </div>

        {/* Blog Content */}
        <div className="max-w-5xl mx-auto bg-white rounded-lg p-6 gap-4 my-10 shadow-lg">
          {/* Text and Image Section */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            {/* Text Section */}
            <div className="w-full md:w-2/3">
              <h2 className="text-lg text-[#551757] md:text-3xl font-bold">{post.title}</h2>
              <p className="text-base my-4 text-gray-700">{post.description}</p>

              <div className="leading-8">
                <h3 className="text-lg font-semibold text-[#551757]">{post.topic}</h3>
                <ul className="list-disc list-inside text-gray-800">
                  <li>{post.list}</li>
                  <li>{post.list2}</li>
                  <li>{post.list3}</li>
                  <li>{post.list4}</li>
                  <li>{post.list5}</li>
                </ul>
              </div>
              <p className="my-6 text-gray-700">{post.para}</p>
            </div>

            {/* Image Section */}
            <div className="w-full md:w-1/3 flex justify-center">
              <Image
                src={post.img}
                alt="post imge"
                className="w-full max-w-[300px] h-[150px] rounded-lg  object-cover shadow-md"
              />
            </div>
          </div>

          {/* Comment Section */}
          <Comment postId={id} />
        </div>
      </div>
    );
  }
};

export default page;
