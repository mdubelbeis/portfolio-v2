import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="font-hero-text flex h-full flex-col items-center justify-center bg-slate-800 bg-code bg-cover bg-center bg-no-repeat py-24 text-center text-white bg-blend-multiply">
      <div className="flex flex-col items-center justify-center gap-6">
        <h1 className="font-josefin-sans text-6xl font-bold tracking-wider text-blue-500 lg:text-8xl">
          Mason <span className="md:block">Dubelbeis</span>
        </h1>
        <ul>
          <li className="font-hero-text mx-auto border-b-[0.05rem] border-t-[0.05rem] border-blue-500 py-2 text-2xl tracking-wider md:w-full lg:text-5xl">
            WEB DEVELOPER
          </li>
        </ul>
        <div className="flex flex-col gap-2 text-lg tracking-wider md:text-2xl">
          <small>MASON.DUBELBEIS@GMAIL.COM</small>
          <small>732&bull;228&bull;2390</small>
        </div>
      </div>
    </div>
  );
};

export default Hero;
