import React from 'react';
import profile from '/public/profile.jpg';
import Image from 'next/image';

const About = () => {
  return (
    <div className="w-full mt-8 px-4">
      {/* About Section */}
      <div className="wrapper flex flex-col md:flex-row gap-8 items-center">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <Image
            src={profile}
            alt="profile"
            className="rounded-full w-[150px] h-[150px] md:w-[200px] md:h-[200px] border-4 border-[#551757] mx-auto md:mx-0"
          />
        </div>
        {/* About Text */}
        <p className="text-lg md:text-xl text-center md:text-left">
          I am a passionate content creator sharing my thoughts on technology, design, lifestyle, food, travel, and nature. Welcome to my corner of the web!
        </p>
      </div>

      {/* Divider */}
      <hr className="border-[#551757] my-8" />

      {/* About Blog Section */}
      <div className="wrapper text-center">
        <h1 className="text-xl md:text-4xl font-serif text-[#551757] mb-6">About This Blog</h1>
        <p className="text-lg md:text-xl text-center md:text-center px-4 md:px-20 leading-7">
          This blog is a place where I share my insights, experiences, and knowledge in various fields that I am passionate about. From technology updates and design trends to lifestyle tips and personal growth, this blog covers it all. Explore the different categories to find content that inspires and informs you.
        </p>
        <div className="mt-10">
          <button className="rounded-lg text-white font-medium py-3 px-8 bg-gradient-to-r from-[#551757] to-[#804691] my-4">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
