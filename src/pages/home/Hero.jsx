import React from "react";
import vector1 from "../../assets/vector1.svg";
import { Star } from "lucide-react";

const Hero = () => {
  const personName = "Noman";
  const proffesion = "Web Developer";
  const experience = "01 Years";

  return (
    <section>
      <div className="section-container">
        <div className="text-center relative">
          <div className="relative inline-block mt-8">
            <p className="border border-b-gray-600 inline-block px-6 py-3 rounded-[35px] text-secondary font-medium text-lg">
              Hello!
            </p>
            <img
              src={vector1}
              alt="vector 1"
              className="absolute -top-7 -right-8 w-10"
            />
          </div>
          <h2 className="font-urban font-semibold text-[36px] sm:text-[56px] md:text-[72px] lg:text-[96px] leading-none mt-8">
            I’m <span className="text-primary">{personName}</span>, <br />
            {proffesion}
          </h2>
        </div>
      </div>

      <div className="hidden lg:flex justify-between transition-transform duration-300 ease-in-out group-hover:-translate-y-[250px]">
        <div className="px-6">
          <div className="text-secondary font-semibold text-[36px] leading-none ">
            &quot;
          </div>
          <p className="text-secondary text-[16px] font-medium leading-snug">
            {personName}&apos;s exceptional product design <br /> ensured our
            website&apos;s success.
            <br />
            Highly recommended.
          </p>
        </div>
        <div className="px-6">
          <div className="flex flex-col items-end gap-1">
            {/* Stars row */}
            <div className="flex gap- pb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-primary fill-primary" />
              ))}
            </div>

            {/* Experience text below */}
            <h3 className="text-secondary font-extrabold text-[25px] ">{experience}</h3>
            <h3 className="text-secondary font-semibold text-[14px] leading-1">Experience</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
