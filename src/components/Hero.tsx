import React from 'react';
import ArrowDown from '../ui/ArrowDown';

const Hero: React.FC = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-slate-800 bg-hero-pattern bg-cover bg-no-repeat text-center font-hero-text text-white bg-blend-multiply">
      <div className="flex h-72 w-72 justify-center flex-col gap-4 rounded-full bg-black mb-24 lg:h-[32rem] lg:w-[32rem]">
        {/* <span className="text-3xl absolute -top-8 -left-10 -rotate-45">Hey,</span> */}
        <h1 className="text-6xl font-hero-title lg:text-8xl">Mason Dubelbeis</h1>
        <ul>
          <li className="border-b-2 border-t-2 border-slate-200 p-1 w-6/12 mx-auto text-lg lg:text-3xl">FRONTEND DEVELOPER</li>
        </ul>
      </div>
      <ArrowDown top="top-10" elementTarget="#about-me" />
    </div>
  );
};

export default Hero;
