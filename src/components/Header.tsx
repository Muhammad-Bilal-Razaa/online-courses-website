'use client'
import React from "react";
import Image from "next/image";
const Header = () => {
  return (
    <div id="hero">
      <section className="text-gray-600 body-font">
        <div className="fade-in">
        <h1 className="text-center lg:text-[25px] font-medium text-[16px] sm:text-[22px] pt-5 text-black">
          Welcome To
        </h1>
        <h1 className="font-bold italic lg:text-[38px] text-[19px] sm:text-[26px] text-center pb-7 pt-2 text-green-900">
          SkillBloom
        </h1>
        </div>
        <p className="text-justify sm:text-center  italic text-[15px] sm:text-[16px] lg:text-[18px] text-black">
        "Pakistan's strength lies in its people, their resilience, and the boundless potential for growth when knowledge meets opportunity."
        </p>
        
        <div className="container px-5 py-24 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="justify-center flex">
              <div className="rounded-lg h-full lg:w-[700px] overflow-hidden">
                <Image
                  alt="content"
                  className="object-cover object-center rounded-[15px] md:border-[4px] border-opacity-75 shadow-2xl shadow-green-950 border-green-700 h-full w-full"
                  src={require("../../public/assets/pakistan/pak-flag-2.jpg")}
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
               <Image
               alt="content"
               className="object-cover object-center rounded-[15px] md:border-[2px] border-opacity-75 shadow-md shadow-green-950 border-green-700 h-full w-full"
               src={require("../../public/assets/pakistan/Quaid-img1.jpeg")}
               />
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                  Founder Of Pakistan
                  </h2>
                  <h2 className="font-medium title-font  text-gray-900 text-lg">
                  QUAID-E-AZAM
                  </h2>
                  <div className="w-12 h-1 bg-green-800 rounded mt-2 mb-4 text-gray-900" />
                  <p className="text-base">
                  "With faith, discipline, and selfless devotion to duty, there is nothing worthwhile that you cannot achieve."</p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-green-400 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-lg mb-4">
                  Welcome to "skillBloom", your gateway to free online
                  learning in Pakistan! We offer a wide range of high-quality
                  courses in various fields, including technology, business,
                  marketing, and more, all designed to help you enhance your
                  skills and knowledge at no cost. Whether you're a student,
                  professional, or simply looking to learn something new, our
                  platform provides easy access to expert-led courses from top
                  institutions. Start your learning journey today and unlock new
                  opportunities for personal and professional growth—all from
                  the comfort of your home!
                </p>
                <a className="text-green-800 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
