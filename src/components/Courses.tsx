'use client'
import React from "react";
import Image from "next/image";
const Courses = () => {
  return (
    <div id="courses">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <div className="fade-in">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Our Courses that we're Offering
            </h1>
            </div>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-600">
              Unlock your potential with our free online courses, designed to
              help you learn new skills at your own pace. Whether you're looking
              to advance your career or explore new interests, we offer a wide
              range of high-quality courses—completely free. Start learning
              today and take the first step toward your future!
            </p>
          </div>

          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 sm:w-1/2 p-4 ">
              <div className="flex relative">
                <Image 
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../public/assets/courses/amazong-img.jpg")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-400 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-black mb-1">
                  Course Name :
                  </h2>
                  <h1 className="title-font text-lg font-medium text-yellow-600 mb-3">
                   Amazon FBA for Beginners
                  </h1>
                  <p className="leading-relaxed text-[15px]">
                  Discover the power of Amazon with our free courses, designed to help you master Amazon's tools and platforms. our expert-led courses cover everything you need to succeed.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image 
                  alt="gallery-2"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../public/assets/courses/app-development-img.jpeg")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-400 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-black mb-1">
                  Course Name :
                  </h2>
                  <h1 className="title-font text-lg font-medium text-yellow-600 mb-3">
Mobile App Development                  </h1>
                  <p className="leading-relaxed text-[15px]">
                  Unlock your app development skills with our free, expert-led courses. Learn to create innovative apps from scratch, covering everything from coding to deployment.                  </p>
                </div>
              </div>
            </div>

            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image 
                  alt="gallery-3"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../public/assets/courses/cyber-sce-img.jpg")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-400 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-black mb-1">
                  Course Name :
                  </h2>
                  <h1 className="title-font text-lg font-medium text-yellow-600 mb-3">
               Cyber-Security 
                  </h1>
                  <p className="leading-relaxed text-[15px]">
                  Enhance your cybersecurity skills with our free courses, designed to protect you and your organization from online threats. Learn essential concepts like network security,at no cost.                  </p>
                </div>
              </div>
            </div>

            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image 
                  alt="gallery-4"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../public/assets/courses/digital-mark-img.jpg")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-400 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-black mb-1">
                  Course Name :
                  </h2>
                  <h1 className="title-font text-lg font-medium text-yellow-600 mb-3">
                    Digital Marketing                 
                     </h1>
                  <p className="leading-relaxed text-[15px]">
                  Master the art of digital marketing with our free, comprehensive courses. Learn everything from SEO and social media marketing to paid advertising and analytics, all at no cost.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image 
                  alt="gallery-5"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../public/assets/courses/graphic-design.jpeg")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-400 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-black mb-1">
                  Course Name :
                  </h2>
                  <h1 className="title-font text-lg font-medium text-yellow-600 mb-3">
             Graphic Designing                  
                   </h1>
                  <p className="leading-relaxed text-[15px]">
                  Unlock your creative potential with our free graphic design courses, Learn essential design principles, tools, and techniques to create stunning visuals.

                  </p>
                </div>
              </div>
            </div>

            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image 
                  alt="gallery-6"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../public/assets/courses/web-devlopment-img.jpg")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-400 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-black mb-1">
                  Course Name :
                  </h2>
                  <h1 className="title-font text-lg font-medium text-yellow-600 mb-3">
                  Website Development
                  </h1>
                  <p className="leading-relaxed text-[15px]">
                  Learn web development from scratch with our free, hands-on courses. Master essential skills like HTML, CSS, JavaScript, and more to build dynamic websites and applications.

                  </p>
                </div>
              </div>
            </div>

          
          
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
