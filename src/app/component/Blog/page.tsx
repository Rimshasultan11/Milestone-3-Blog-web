import React from 'react'
import { GrTechnology } from "react-icons/gr";
import { SiAltiumdesigner } from "react-icons/si";
import { ImAirplane } from "react-icons/im";
import { MdNightlife } from "react-icons/md";
import { IoFastFood } from "react-icons/io5";
import { LuSprout } from "react-icons/lu";
import Link from 'next/link';
import Hero from '../Hero';

const Worlds = () => {
  return (
    <div>
      <Hero />
      <div className='wrapper w-full my-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-white px-4'>
        {/* Blog 1 */}
        <Link href="/component/Blog/1">
          <div className='w-full max-w-[350px] h-[100px] mx-auto flex gap-4 text-lg md:text-2xl items-center bg-gradient-to-r from-[#551757] to-[#804691] border-2 border-black rounded-full hover:scale-105 justify-center'>
            <GrTechnology />
            <h3>Technology</h3>
          </div>
        </Link>
        {/* Blog 2 */}
        <Link href="/component/Blog/2">
          <div className='w-full max-w-[350px] h-[100px] mx-auto flex gap-4 text-lg md:text-2xl items-center bg-gradient-to-r from-[#551757] to-[#804691] border-2 border-black rounded-full hover:scale-105 justify-center'>
            <SiAltiumdesigner />
            <h3>Design</h3>
          </div>
        </Link>
        {/* Blog 3 */}
        <Link href="/component/Blog/3">
          <div className='w-full max-w-[350px] h-[100px] mx-auto flex gap-4 text-lg md:text-2xl items-center bg-gradient-to-r from-[#551757] to-[#804691] border-2 border-black rounded-full hover:scale-105 justify-center'>
            <ImAirplane />
            <h3>Travel</h3>
          </div>
        </Link>
        {/* Blog 4 */}
        <Link href="/component/Blog/4">
          <div className='w-full max-w-[350px] h-[100px] mx-auto flex gap-4 text-lg md:text-2xl items-center bg-gradient-to-r from-[#551757] to-[#804691] border-2 border-black rounded-full hover:scale-105 justify-center'>
            <MdNightlife />
            <h3>Life Style</h3>
          </div>
        </Link>
        {/* Blog 5 */}
        <Link href="/component/Blog/5">
          <div className='w-full max-w-[350px] h-[100px] mx-auto flex gap-4 text-lg md:text-2xl items-center bg-gradient-to-r from-[#551757] to-[#804691] border-2 border-black rounded-full hover:scale-105 justify-center'>
            <IoFastFood />
            <h3>Food</h3>
          </div>
        </Link>
        {/* Blog 6 */}
        <Link href="/component/Blog/6">
          <div className='w-full max-w-[350px] h-[100px] mx-auto flex gap-4 text-lg md:text-2xl items-center bg-gradient-to-r from-[#551757] to-[#804691] border-2 border-black rounded-full hover:scale-105 justify-center'>
            <LuSprout />
            <h3>Nature</h3>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Worlds
