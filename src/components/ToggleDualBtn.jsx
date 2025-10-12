'use client';

import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function ToggleDualBtn() {
  const [active, setActive] = useState('portfolio');

  return (
    <div className="flex border-b-2 border-white bg-white/10 backdrop-blur-[5px] rounded-full gap-4 p-[10px] w-[400px] h-[100px] items-center justify-center">
      {/* Portfolio Button */}
      <button
        onMouseEnter={() => setActive('portfolio')}
        className={`group flex items-center justify-center gap-3 px-6 py-4 whitespace-nowrap rounded-[60px] transition-all duration-300 ease-in-out cursor-pointer
          ${
            active === 'portfolio'
              ? 'bg-[#FD853A] text-white font-semibold text-[28px] w-[230px] h-[70px] border border-[#D0D5DD] shadow-md'
              : 'bg-transparent text-white font-normal text-[20px] min-w-[150px] h-[60px]'
          }`}
      >
        Portfolio
        <ArrowUpRight
          size={20}
          className={`transition-all duration-300 ${
            active === 'portfolio'
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 -translate-x-1 group-hover:opacity-100'
          }`}
        />
      </button>

      {/* Hire Me Button */}
      <button
        onMouseEnter={() => setActive('hire')}
        className={`group flex items-center justify-center gap-3 px-6 py-4 whitespace-nowrap rounded-[60px] transition-all duration-300 ease-in-out cursor-pointer
          ${
            active === 'hire'
              ? 'bg-[#FD853A] text-white font-semibold text-[28px] w-[230px] h-[70px] border border-[#D0D5DD] shadow-md'
              : 'bg-transparent text-white font-normal text-[20px] min-w-[150px] h-[60px]'
          }`}
      >
        Hire me
        <ArrowUpRight
          size={20}
          className={`transition-all duration-300 ${
            active === 'hire'
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 -translate-x-1 group-hover:opacity-100'
          }`}
        />
      </button>
    </div>
  );
}
