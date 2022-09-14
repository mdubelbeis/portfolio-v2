import React from 'react';
import ArrowDown from '../ui/ArrowDown';

const Hero: React.FC = () => {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center bg-slate-800 bg-hero-pattern bg-cover bg-no-repeat text-center font-hero-text text-white bg-blend-multiply">
      <div className="mb-64 flex h-72 w-72 flex-col justify-center gap-4 rounded-full border border-blue-300 border-opacity-10 bg-black bg-opacity-40 md:h-96 md:w-96 lg:h-[32rem] lg:w-[32rem]">
        <h1 className="font-hero-title text-5xl text-blue-500 md:text-7xl lg:text-8xl">Mason Dubelbeis</h1>
        <ul>
          <li className="text-lg mx-auto w-6/12 border-b-2 border-t-2 border-slate-200 p-1 font-hero-text md:text-2xl lg:text-3xl">
            FRONTEND DEVELOPER
          </li>
          <li className="text-md md:text-lg lg:text-2xl mt-2 lg:mt-4">732-228-2390</li>
          <li className="text-md font-hero-title mt-2 md:text-lg lg:text-3xl lg:mt-4">
            <a className="underline underline-offset-4 text-blue-500 hover:text-white animate-pulse" href="mailto:mason.dubelbeis@gmail.com.com">Email Me</a>
          </li>
        </ul>
      </div>
      {/* <div className="absolute bottom-60 text-blue-500">
        <ArrowDown elementTarget="#about-me" />
      </div> */}
    </div>
  );
};

export default Hero;
