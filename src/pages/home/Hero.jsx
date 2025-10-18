import React from "react";
import { Star } from "lucide-react";
import ToggleDualBtn from "../../components/ToggleDualBtn";

const Hero = () => {
  const personName = "Noman";
  const profession = "Web Developer";
  const experience = "01 Years";

  return (
    <section className="group relative overflow-hidden h-[700px] sm:min-h-[calc(100vh-70px)]">
      {/* Hero main content */}
      <div className="section-container transition-transform duration-700 ease-in-out group-hover:translate-y-300">
        <div className="text-center relative">
          <div className="relative inline-block mt-28">
            <p className="border border-b-gray-600 inline-block px-6 py-3 rounded-[35px] text-secondary font-medium text-lg">
              Hello!
            </p>
            <img
              src="/vector1.svg"
              alt="vector 1"
              className="absolute -top-7 -right-8 w-10"
            />
          </div>

          {/* Move this text down on hover */}
          <h2 className="font-urban font-semibold text-[36px] sm:text-[56px] md:text-[72px] lg:text-[96px] leading-none mt-8 transition-transform duration-500 ease-in-out group-hover:translate-y-10">
            I’m <span className="text-primary">{personName}</span>, <br />
            {profession}
          </h2>
        </div>
      </div>

      {/* Floating testimonial content */}
      <div className="hidden lg:flex justify-between transition-transform duration-500 ease-in-out group-hover:-translate-y-[280px] mt-10">
        <div className="px-6">
          <div className="text-secondary font-semibold text-[36px] leading-none">
            &quot;
          </div>
          <p className="text-secondary text-[16px] font-medium leading-snug">
            {personName}&apos;s exceptional creative development <br /> ensured our
            website&apos;s success.
            <br />
            Highly recommended.
          </p>
        </div>

        <div className="px-6">
          <div className="flex flex-col items-end gap-1">
            {/* Stars row */}
            <div className="flex gap-1 pb-2 group-hover:scale-110 transition-transform duration-300">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-primary fill-primary" />
              ))}
            </div>

            {/* Experience text below */}
            <h3 className="text-secondary font-extrabold text-[25px]">
              {experience}
            </h3>
            <h3 className="text-secondary font-semibold text-[14px] leading-1">
              Experience
            </h3>
          </div>
        </div>
      </div>
      {/* Circle div */}
      <div className="absolute md:-bottom-[550px] left-1/2 -translate-x-1/2 md:w-[900px] md:h-[900px] bg-[#FEB273] rounded-full w-[400px] h-[400px] -bottom-[200px] ">
        <div className="absolute -top-60 transition-all duration-500 ease-in-out opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-115">
          <img
            src="/bg_frame.svg"
            className="w-full h-full object-contain"
            alt=""
          />
        </div>
      </div>
      {/* Bg_person image */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[400px]">
        <img
          src="/bg_person.png"
          alt="" style={{width:'100%'}}
        />
      </div>
      {/* Dual Toggle Button */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full hidden md:flex justify-center">
            <ToggleDualBtn/>
      </div>
    </section>
  );
};

export default Hero;
