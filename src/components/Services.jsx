import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { MoveUpRight } from 'lucide-react';

import uiux from '../assets/uiux.png';
import webdesign from '../assets/webdesign.png';
import landing from '../assets/landingpage.png';
import bgImage from '../assets/servicebg.png';

const services = [
  {
    title: 'UI/UX Design',
    image: uiux,
  },
  {
    title: 'Web Design',
    image: webdesign,
  },
  {
    title: 'Web Design',
    image: webdesign,
  },
  {
    title: 'Web Design',
    image: webdesign,
  },
  {
    title: 'Web Design',
    image: webdesign,
  },
  {
    title: 'Landing Page',
    image: landing,
  },
  // Add more cards if needed
];

const Service = () => {
  return (
    <div
      className="h-[900px] bg-cover bg-center bg-no-repeat flex items-center justify-center p-8"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="relative  max-w-7xl">
        <Swiper
          spaceBetween={30}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="relative bg-white/10 backdrop-blur-md rounded-4xl shadow-lg border border-gray-300 cursor-pointer w-full h-full max-w-sm overflow-hidden group hover:bg-primary transition-colors mx-auto">
                {/* Title */}
                <h2 className="text-white text-xl font-semibold p-6 mb-4 border-b border-gray-300">
                  {service.title}
                </h2>

                {/* Image */}
                <div className="rounded-xl overflow-hidden mt-20">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* Arrow icon */}
                <div className="absolute bottom-4 right-4 bg-[#1D2939] rounded-full w-14 h-14 flex items-center justify-center transition-transform group-hover:scale-110">
                  <MoveUpRight className="text-white w-6 h-6" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Service;
