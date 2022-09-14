import React from 'react';
import ArrowDown from '../ui/ArrowDown';
import Contact from './Contact';

const Hero: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center justify-center bg-slate-800 bg-hero-pattern bg-cover bg-no-repeat py-32 text-center font-hero-text text-white bg-blend-multiply">
      <div className="flex h-72 w-72 flex-col justify-center gap-4 rounded-full border border-blue-300 border-opacity-10 bg-black bg-opacity-40 md:h-96 md:w-96 lg:h-[32rem] lg:w-[32rem]">
        <h1 className="font-hero-title text-6xl text-blue-500 md:text-7xl lg:text-8xl">Mason Dubelbeis</h1>
        <ul>
          <li className="mx-auto w-9/12 border-b-[0.05rem] border-t-[0.05rem] border-slate-200 p-2 font-hero-text text-xl md:text-2xl lg:text-3xl">
            FRONTEND DEVELOPER
          </li>
          {/* <li className="text-md mt-2 md:text-lg lg:mt-4 lg:text-2xl">732-228-2390</li> */}
        </ul>
      </div>
    </div>
  );
};

export default Hero;
