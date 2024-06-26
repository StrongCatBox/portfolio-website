"use client";
import React from 'react'
import Image from 'next/image'

import { TypeAnimation } from 'react-type-animation';





const HeroSection = () => {
  return (
    <section>
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <div className="col-span-7 place-self-center text-center sm:test-left">
                <h1 className="text-white mb-4 text-4xl sm:test-5xl lg:text-6xl font-extrabold">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-600">Hello, I'm {" "}
                    </span>
                    <br></br>
                    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Jeina',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Web Developer',
        1000,
        'Mobile Developer',
        1000,
      
      ]}
      wrapper="span"
      speed={50}
      
      repeat={Infinity}
    /></h1>
                <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
                Welcome! I'm a web developer passionate about coding. Explore my projects and join me as I strive for excellence in web development. Let's create something amazing together!
                    </p>
                    <div>
                        <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-pink-600 via-red-400 to-red-600  hover:bg-slate-200 text-white'>
                            Hire me
                        </button>
                        <button className='px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-pink-600 via-red-400 to-red-600  hover:bg-slate-800 text-white  mt-3'>
                            <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>
                                Download CV
                                </span>
                        </button>
                    </div>
            </div>
            <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
                <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                    <Image
                        src="/images/jeinaavatar.jpg"
                        className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full'
                        alt="jeina"
                        width={300}
                        height={300}
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection
