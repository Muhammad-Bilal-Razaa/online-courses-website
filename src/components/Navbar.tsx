'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div id='Navbar ' className='sticky top-0 left-0 z-50 bg-stone-100 h-auto'>
      
      <header className="text-gray-800 body-font font-medium underline ">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
<Image 
 alt="logo"
  width={50} 
  height={50}
  src={("../../public/assets/profile/course-logo.jpg")}
  className='rounded-full border-[2px] border-green-600'
  />
      <span className="ml-3 text-xl text-green-900 font-bold">SkillBloom</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center gap-5 lg:text-[18px]">
      <Link href="#hero"  className='hover:text-black hover:font-bold' >Home </Link>
      <Link href="#courses"  className='hover:text-black hover:font-bold'>Courses </Link>
      <Link href="#contact" className='hover:text-black hover:font-bold' >Contact </Link>
    </nav>

    <button className="md:inline-flex hidden items-center bg-gray-300 border-0 py-1 px-3 focus:outline-none hover:bg-gray-600 hover:text-white rounded text-base mt-4 md:mt-0">
      Login
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="w-4 h-4 ml-1"
        viewBox="0 0 24 24"
      >
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </button>
  </div>
</header>

    </div>
  )
}

export default Navbar
