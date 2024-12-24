"use client"
import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gradient-to-r from-[#551757] to-[#804691] py-3">
      <div className="w-full h-[100px] flex justify-between items-center py-5 text-white  px-8">
        <div className="cursor-pointer text-xl md:text-4xl font-serif">My Blog</div>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <ul className="flex gap-12 text-xl font-serif">
            <li><Link href="http://localhost:3000">Home</Link></li>
            <li><Link href="/component/About">About</Link></li>
            <li><Link href="/component/Blog">Blog</Link></li>
            <li><Link href="/component/Contact">Contact</Link></li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
            {isOpen ? (
              <span>&#10005;</span>  // Cross icon when menu is open
            ) : (
              <span>&#9776;</span>  // Hamburger icon when menu is closed
            )}
          </button>
        </div>
      </div>

      <hr className="text-gray-300" />

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden  text-white">
          <ul className="flex flex-col items-center gap-4 text-xl py-4">
            <li><Link href="http://localhost:3000/">Home</Link></li>
            <li><Link href="/component/About">About</Link></li>
            <li><Link href="/component/Blog">Blog</Link></li>
            <li><Link href="/component/Contact">Contact</Link></li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Navbar
