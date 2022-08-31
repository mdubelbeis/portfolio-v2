import React from 'react';
import ArrowDown from '../ui/ArrowDown';

const Hero: React.FC = () => {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center bg-slate-800 bg-hero-pattern bg-cover bg-no-repeat text-center font-hero-text text-white bg-blend-multiply">
      <div className="mb-24 flex h-72 w-72 flex-col justify-center gap-4 rounded-full bg-black md:h-96 md:w-96 lg:h-[32rem] lg:w-[32rem]">
        {/* <span className="text-3xl absolute -top-8 -left-10 -rotate-45">Hey,</span> */}
        <h1 className="font-hero-title text-6xl md:text-7xl lg:text-8xl">Mason Dubelbeis</h1>
        <ul>
          <li className="mx-auto w-6/12 border-b-2 border-t-2 border-slate-200 p-1 text-lg md:text-2xl lg:text-3xl">
            FRONTEND DEVELOPER
          </li>
        </ul>
      </div>
      <div className="absolute bottom-24">
        <ArrowDown elementTarget="#about-me" />
      </div>
    </div>
  );
};

export default Hero;
