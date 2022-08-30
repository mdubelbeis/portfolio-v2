import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-slate-800 bg-hero-pattern bg-cover bg-no-repeat text-center font-hero-text text-white bg-blend-multiply">
      <div className="flex h-64 w-64 flex-col items-center justify-center gap-4 rounded-full bg-black">
        {/* <span className="text-3xl absolute -top-8 -left-10 -rotate-45">Hey,</span> */}
        <h1 className="text-3xl">Mason Dubelbeis</h1>
        <ul>
          <span className="bg-slate-200"></span>
          <li className="border-b-2 border-t-2 border-slate-200">Frontend Developer</li>
        </ul>
      </div>

      <div className="animate-bounce relative top-32">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-12 w-12 mt-10"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
