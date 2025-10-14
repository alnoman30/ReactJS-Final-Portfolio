import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Instagram, Facebook, Linkedin, Twitter, Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#272727] rounded-t-3xl text-white">
      {/* Top footer */}
      <div className="top_footer section-container border-b border-gray-500">
        <div className="flex justify-between items-center pt-5 pb-5">
          <h2 className="text-white text-xl md:text-6xl font-semibold">
            Let’s Connect there
          </h2>

          <p className="group flex items-center justify-center px-5 py-2.5 bg-primary text-lg md:text-2xl font-medium rounded-full cursor-pointer transition-all duration-300 hover:bg-[#FEB273]">
            Hire me{" "}
            <ArrowUpRight
              className="transition-transform duration-300 group-hover:rotate-45"
              size={30}
            />
          </p>
        </div>
      </div>

      {/* Middle footer */}
      <div className="middle_footer section-container border-b border-gray-500 py-10">
        <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-0">
          {/* logo info */}
          <div className="text-center md:text-left">
            <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 bg-[#FD853A] rounded-full flex items-center justify-center mb-2 mx-auto md:ml-4 md:mx-0">
              <p className="font-bold text-sm sm:text-base lg:text-lg tracking-wide text-white">
                N
                <span className="font-bold text-sm sm:text-base lg:text-lg tracking-wide">
                  OMAN
                </span>
              </p>
            </div>
            <p className="max-w-[600px] mt-4 mx-auto md:mx-0 text-sm sm:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue
              interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed lobortis orci elementum egestas lobortis.
            </p>

            {/* social links */}
            <div className="mt-6 flex justify-center md:justify-start">
              <ul className="flex gap-3">
                <li>
                  <Link to="/" className="hover:text-primary transition-colors duration-200">
                    <Instagram />
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-primary transition-colors duration-200">
                    <Facebook />
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-primary transition-colors duration-200">
                    <Linkedin />
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-primary transition-colors duration-200">
                    <Twitter />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* navigation + contact wrapper */}
          <div className="flex flex-col sm:flex-row md:flex-row text-left justify-start sm:justify-start w-full md:w-auto gap-8 sm:gap-16">
            {/* navigation */}
            <div className="w-full sm:w-1/2 md:w-auto">
              <h3 className="text-primary font-bold mb-5">Navigation</h3>
              <ul className="flex flex-col gap-3">
                <li><Link to="/" className="hover:text-primary transition-colors duration-200">Home</Link></li>
                <li><Link to="/" className="hover:text-primary transition-colors duration-200">About</Link></li>
                <li><Link to="/" className="hover:text-primary transition-colors duration-200">Service</Link></li>
                <li><Link to="/" className="hover:text-primary transition-colors duration-200">Resume</Link></li>
                <li><Link to="/" className="hover:text-primary transition-colors duration-200">Contact</Link></li>
              </ul>
            </div>

            {/* contact */}
            <div className="w-full sm:w-1/2 md:w-auto">
              <h3 className="text-primary font-bold mb-5">Contact</h3>
              <ul className="flex flex-col gap-3">
                <li><Link to="/" className="hover:text-primary transition-colors duration-200">+88 01741619995</Link></li>
                <li><Link to="/" className="hover:text-primary transition-colors duration-200">alnomaan30@gmail.com</Link></li>
                <li><Link to="/" className="hover:text-primary transition-colors duration-200">alnoman.vercel.app</Link></li>
              </ul>
            </div>
          </div>

          {/* email */}
          <div className="text-center md:text-left">
            <h3 className="text-primary font-bold mb-5">
              Get the latest information
            </h3>
            <div className="flex w-full max-w-md mx-auto md:mx-0">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 px-4 py-2 rounded-l-md bg-white outline-none text-secondary"
              />
              <button className="group bg-primary text-white px-4 py-2 rounded-r-md font-medium cursor-pointer transition-all duration-300 hover:bg-[#FEB273]">
                <Send className="transition-transform duration-300 group-hover:rotate-45" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="bottom_footer section-container">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-3 text-sm">
          <p className="font-normal text-[#b6b6b6]">
            Copyright&copy; {new Date().getFullYear()} Noman. All Rights
            Reserved.
          </p>

          <div className="text-[#b6b6b6]">
            <Link to="/">User Terms & Conditions</Link> |{" "}
            <Link to="/">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
