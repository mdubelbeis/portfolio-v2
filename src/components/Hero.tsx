import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center bg-slate-800 bg-hero-pattern bg-cover bg-no-repeat py-20 text-center font-hero-text text-white bg-blend-multiply">
      <div className="flex flex-col justify-center gap-4">
        <h1 className="font-hero-title text-8xl text-blue-500">Mason Dubelbeis</h1>
        <ul>
          <li className="mx-auto w-9/12 border-b-[0.05rem] border-t-[0.05rem] border-slate-200 font-hero-text text-3xl">
            FRONTEND DEVELOPER
          </li>
          {/* <li className="text-md mt-2 md:text-lg lg:mt-4 lg:text-2xl">732-228-2390</li> */}
        </ul>
      </div>
    </div>
  );
};

export default Hero;
