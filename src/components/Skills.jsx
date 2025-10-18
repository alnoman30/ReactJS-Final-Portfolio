import React from 'react'

const skills = [
  'JavaScript', 'React', 'Next.js', 'Tailwind CSS', 'Node.js',
  'Express', 'MongoDB', 'TypeScript', 'GraphQL', 'Git',
];

const Skills = () => {
  return (
    <div className="relative w-full h-[147px] bg-[#FB6514] rounded-tl-[48px] rounded-br-[48px] overflow-hidden">
      <div className="absolute w-[5000px] h-[63px] bg-white -rotate-2 -mt-2 md:mt-0 md:-rotate-[1.9deg] z-10 -ml-2 flex items-center">
        <div className="marquee flex gap-8 w-max">
          {[...skills, ...skills].map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-5 text-[#000000] text-[48px] whitespace-nowrap"
            >
              <svg
                width="34"
                height="34"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.4828 0.257982L21.715 12.3411L34.2082 16.5003L22.1251 21.7324L17.9659 34.2256L12.7337 22.1425L0.240553 17.9833L12.3237 12.7512L16.4828 0.257982Z"
                  fill="#FD853A"
                />
              </svg>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
