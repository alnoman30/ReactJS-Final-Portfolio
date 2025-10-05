import React from 'react'
import vector1 from "../../assets/Vector1.svg"

const Hero = () => {
  return (
    <section>
      <div className='section-container min-h-screen'>
        <div className='text-center relative'>
          <div className='relative inline-block mt-8'>
            <p className='border border-b-gray-600 inline-block px-6 py-3 rounded-[35px] text-secondary font-medium text-lg'>
              Hello!
            </p>
            <img
              src={vector1}
              alt="vector 1"
              className='absolute -top-7 -right-8 w-10'
            />
          </div>
          <h2 className='font-urban font-semibold text-[36px] sm:text-[56px] md:text-[72px] lg:text-[96px] leading-none mt-8'>
            I’m <span className='text-primary'>Noman</span>, <br />Web Developer
          </h2>
        </div>
      </div>
    </section>
  )
}

export default Hero
