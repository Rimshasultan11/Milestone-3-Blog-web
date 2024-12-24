import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-gradient-to-r from-[#551757] to-[#804691] w-full py-6'>
      <div className='container mx-auto px-6'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          {/* Copyright Section */}
          <div className='text-center text-white text-sm md:text-lg'>
            © Copyright | Made by Rimsha Sultan | All Rights Reserved
          </div>

          {/* Social Media Icons Section */}
          <div className='flex gap-6 text-white text-xl md:text-2xl mt-4 md:mt-0'>
            <a href="#" className="hover:text-[#551757] transition-colors duration-300">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-[#551757] transition-colors duration-300">
              <FaSquareInstagram />
            </a>
            <a href="#" className="hover:text-[#551757] transition-colors duration-300">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
