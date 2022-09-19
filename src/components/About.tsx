import { useState } from 'react';

const About: React.FC = () => {
  return (
    <section className="relative flex flex-col items-center justify-center gap-10 bg-slate-100 py-28 px-4 font-hero-text leading-loose tracking-wide text-black lg:gap-20 lg:py-72">
      <h2 className="text-center font-hero-text text-4xl text-black lg:text-6xl">ME</h2>
      <div className="md:w-9/12 lg:w-6/12">
        <p className="text-center text-xl lg:text-left lg:text-2xl lg:leading-relaxed">
          I am a passionate self-taught <span className="lg:4xl text-2xl text-blue-500">FRONTEND DEVELOPER</span>. I
          strive to solve any problem that presents itself and committed to{' '}
          <span className="lg:4xl text-2xl text-blue-500">UI/UX DEVELOPMENT</span> and{' '}
          <span className="lg:4xl text-2xl text-blue-500">PROBLEM SOLVING</span>. If I am not adding new knowledge to my
          tool belt, I am diving deeper into the tools of the trade.
        </p>
      </div>
      <div
        id="resume"
        className="mt-12 animate-pulse rounded-lg bg-blue-500 py-4 px-6 text-xl tracking-wider text-white shadow-xl hover:animate-none hover:cursor-pointer hover:border-none hover:bg-white hover:text-blue-500 md:block lg:text-2xl"
      >
        <a
          className="drop-shadow-xl"
          href="/assets/resume/Resume_tech.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download
        >
          CURRICULUM VITAE
        </a>
      </div>
    </section>
  );
};

export default About;
