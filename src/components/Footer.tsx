'use client'
import React from 'react'
import Link from 'next/link'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";



const Footer = () => {
  return (
    <div>
      <footer className="text-gray-100 body-font bg-black ">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
   
  
      <span className="ml-3 text-[13px] sm:text-[15px] md:text-[17px] lg:text-xl text-green-400  italic">Skill-Bloom</span>

    <p className="sm:text-sm text-[13px] text-gray-300  sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      © 2024 all right reserved

    </p>
    <div className=" flex-col sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-between">
    <span>
    
    <div className="ml-2  text-gray-300 flex  " >Facebook
    <Link href="https://github.com/Muhammad-Bilal-Razaa" target='-blank' >
      <  FaFacebookF className='text-[13px] mt-1 md:mt-0 ml-4 sm:text-[15px] md:text-[20px] hover:text-blue-600 hover:md:text-[23px] hover:sm:text-[17px] hover:text-[15px]'/>
      </Link>
      </div>

      <div className="ml-2 mr-2 mt-2  text-gray-300 flex flex-row ">Twitter
    
    <Link href='https://www.linkedin.com/in/muhammad-bilal~-1b07042b6/' target='-blank' >
      <  FaTwitter className='mt-2 md:mt-0 ml-8 text-[13px] sm:text-[15px] md:text-[20px]   hover:text-blue-700 hover:md:text-[23px] hover:sm:text-[17px] hover:text-[15px]' />
      </Link>
     
</div>

    </span>
  </div>
  </div>
</footer>

   </div>
  )
}

export default Footer
