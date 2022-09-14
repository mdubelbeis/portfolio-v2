import React from 'react';


const Hero: React.FC = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center py-10 bg-slate-800 bg-hero-pattern bg-cover bg-no-repeat text-center font-hero-text text-white bg-blend-multiply">
      <div className="flex flex-col justify-center gap-4">
        <h1 className="font-hero-title text-5xl text-blue-500 md:text-7xl lg:text-8xl">Mason Dubelbeis</h1>
        <ul>
          <li className="mx-auto w-9/12 border-b-[0.05rem] border-t-[0.05rem] border-slate-200 font-hero-text text-xl md:text-2xl lg:text-3xl">
            FRONTEND DEVELOPER
          </li>
          {/* <li className="text-md mt-2 md:text-lg lg:mt-4 lg:text-2xl">732-228-2390</li> */}
        </ul>
      </div>
    </div>
  );
};

export default Hero;
