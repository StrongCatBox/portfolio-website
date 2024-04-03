import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <section>
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <div className="col-span-7 place-self-center text-center sm:test-left">
                <h1 className="text-white mb-4 text-4xl sm:test-5xl lg:text-6xl font-extrabold">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-600">Hello, I'm {" "}</span>
                Jeina</h1>
                <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam laborum quisquam eum ad repellat ipsum odio error, rerum eveniet perferendis sunt amet, quaerat quidem. Tempora laudantium perspiciatis facilis ab iste!
                    </p>
                    <div>
                        <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-pink-600 via-red-400 to-red-600  hover:bg-slate-200 text-white'>
                            Hire me
                        </button>
                        <button className='px-6 py-3 w-full sm:w-fit rounded-full bg-transparent hover:bg-slate-800 text-white border border-white mt-3'>
                            Download CV
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