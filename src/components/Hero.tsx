import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center bg-slate-800 bg-hero-pattern bg-cover bg-no-repeat py-24 text-center font-hero-text text-white bg-blend-multiply">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="font-cursive text-6xl tracking-wider text-blue-500 lg:text-8xl">
          Mason <span className="md:block">Dubelbeis</span>
        </h1>
        <ul>
          <li className="mx-auto border-b-[0.05rem] border-t-[0.05rem] border-blue-500 py-2 font-hero-text text-2xl tracking-wider md:w-full lg:text-5xl">
            WEB DEVELOPER
          </li>
          {/* <li className="text-md mt-2 md:text-lg lg:mt-4 lg:text-2xl">732-228-2390</li> */}
        </ul>
        <div className="flex flex-col gap-2 text-lg tracking-wider md:text-2xl">
          <small>732&bull;228&bull;2390</small>
          <small>MASON.DUBELBEIS@GMAIL.COM</small>
        </div>
      </div>
    </div>
  );
};

export default Hero;
