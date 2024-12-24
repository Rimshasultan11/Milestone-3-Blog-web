import React from 'react';
import Image from 'next/image';
import pic1 from '/public/pic1.png';
import pic2 from '/public/pic2.png';
import pic3 from '/public/pic3.jpg';
import pic4 from '/public/pic4.jpg';
import pic5 from '/public/pic5.jpg';
import pic6 from '/public/pic6.jpg';
import Link from 'next/link';

const postList = [
  {
    id: 1,
    img: pic1,
    tittle: 'Furniture Website',
    description:
      'Welcome to my furniture website project, where I aimed to design a user-friendly and visually appealing platform for furniture enthusiasts. This project showcases my skills in web development, including frontend and backend technologies, to create an engaging online shopping experience',
  },
  {
    id: 2,
    img: pic2,
    tittle: 'Todo List Project',
    description:
      'The To-Do List project is a simple yet powerful tool designed to help users stay organized and manage their tasks effectively. This project highlights the importance of productivity and showcases my ability to develop functional and user-friendly applications using modern web technologies',
  },
  {
    id: 3,
    img: pic3,
    tittle: 'Portfolio Project ',
    description:
      'The Portfolio Website project is a personal showcase designed to highlight my skills, achievements, and projects in web development and beyond. This project serves as a digital resume, offering visitors an interactive and engaging way to learn about me and my work.',
  },
  {
    id: 4,
    img: pic4,
    tittle: 'Bakery Website',
    description:
      'The Bakery Website project is a delightful online platform designed to showcase freshly baked goods and provide customers with a seamless browsing and ordering experience. This project combines elegant design with intuitive functionality, reflecting the charm and warmth of a bakery.',
  },
  {
    id: 5,
    img: pic5,
    tittle: 'TrendyWear Clothing web',
    description:
      "The Trendy Wear Clothing website is an online platform designed to showcase stylish and fashionable clothing for men, women, and kids. This project combines modern design with user-friendly features to create a seamless online shopping experience, perfectly catering to today's fashion enthusiasts.",
  },
  {
    id: 6,
    img: pic6,
    tittle: 'E-commerce project',
    description:
      'The E-commerce website is a modern online shopping platform designed to offer users a seamless and enjoyable shopping experience. With an elegant design and advanced functionality, this project serves as a comprehensive solution for showcasing and selling products across various categories.',
  },
];

const Post = () => {
  return (
    <div className="w-full my-10 px-4">
      {/* Heading */}
      <h1 className="text-center text-xl md:text-4xl py-5 font-serif">Latest Posts</h1>

      {/* Posts Grid */}
      <div className="wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {postList.map((data) => (
          <div
            key={data.id}
            className="w-full max-w-sm mx-auto border-y-4 border-[#551757] border-x-4 border-x-[#804691] p-6 hover:scale-105 transition-transform duration-300 bg-white shadow-lg rounded-lg"
          >
            {/* Image */}
            <div className="py-4">
              <Image
                src={data.img}
                alt="Post Image"
                className="w-[300px] h-[400px] max-h-[200px] object-cover border-2 border-[#551757] rounded-lg"
              />
            </div>

            {/* Title */}
            <h2 className="text-lg md:text-2xl font-serif font-medium text-center py-2 text-[#551757]">
              {data.tittle}
            </h2>

            {/* Description */}
            <p className="text-sm md:text-base leading-[22px] text-gray-700">{data.description}</p>

            {/* Link Button */}
            <Link href={`/component/Post/${data.id}`}>
              <button className="text-[#551757] my-4 hover:text-[#804691] underline transition-colors duration-200">
                Read more...
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Post;
