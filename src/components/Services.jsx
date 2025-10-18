import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { ArrowUpRight } from "lucide-react";

import uiux from "../assets/uiux.png";
import webdesign from "../assets/webdesign.png";
import landing from "../assets/landingpage.png";
import bgImage from "../assets/servicebg.png";

import { Pagination, Autoplay } from "swiper/modules";

const services = [
  { title: "UI/UX Design", image: uiux },
  { title: "Web Design", image: webdesign },
  { title: "Landing Page", image: landing },
  { title: "Product Design", image: uiux },
  { title: "Responsive Design", image: webdesign },
  { title: "UI/UX Design", image: uiux },
  { title: "Landing Page", image: landing },
];

const Service = () => {
  return (
    <div
      className="h-[900px] bg-cover bg-center bg-no-repeat relative flex flex-col items-center justify-start py-24"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Section Container */}
      <div className="section-container w-full">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row justify-between mb-10">
          <h2 className="text-4xl text-white font-bold">
            My <span className="text-primary">Services</span>
          </h2>
          <p className="md:max-w-[600px] text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus
            nunc, posuere in justo vulputate, bibendum sodales{" "}
          </p>
        </div>

        {/* Swiper */}
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            renderBullet: (index, className) => {
              return `<span class="${className} custom-dot"></span>`;
            },
          }}
          navigation={true}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          modules={[Pagination, Autoplay]}
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="relative bg-white/10 backdrop-blur-md rounded-[40px] shadow-lg border border-gray-300 cursor-pointer w-full h-full overflow-hidden group hover:bg-primary transition-colors min-h-[400px] mb-8">
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
                  <div className="absolute bottom-1 right-1 bg-[#1D2939] rounded-full w-20 h-20 flex items-center justify-center transition-transform z-10 overflow-visible group-hover:bg-primary">
                    <ArrowUpRight className="text-white" size={44} />
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
