import { useState } from 'react';
import ArrowDown from '../ui/ArrowDown';
import Contact from './Contact';

const About: React.FC = () => {
  const [showButton, setShowButton] = useState(false);

  return (
    <section
      className="relative flex flex-col items-center justify-center gap-32 bg-slate-100 py-10 lg:py-72 px-4 font-hero-text leading-loose tracking-wide text-black"
    >
      <h2 className="text-center font-hero-text text-3xl text-black lg:text-6xl">WHO AM I?</h2>
      <div className="md:w-9/12 lg:w-6/12">
        <p className="text-center text-xl lg:text-2xl lg:leading-relaxed">
          I am a passionate self-taught <span className="lg:4xl text-2xl text-blue-500">FRONTEND DEVELOPER</span>. I
          strive to solve any problem that presents itself and committed to{' '}
          <span className="lg:4xl text-2xl text-blue-500">UI/UX DEVELOPMENT</span> and{' '}
          <span className="lg:4xl text-2xl text-blue-500">PROBLEM SOLVING</span>. If I am not adding new knowledge to my
          tool belt, I am diving deeper into the tools of the trade.
        </p>
      </div>
      <div
        id="resume"
        className="animate-pulse rounded-lg bg-blue-500 py-4 px-10 text-xl tracking-wider text-white drop-shadow-lg hover:animate-none hover:cursor-pointer hover:border hover:border-blue-500 hover:bg-slate-200 hover:text-blue-500 md:block lg:text-2xl"
      >
        <a href="/assets/resume/Resume_tech.pdf" target="_blank" rel="noopener noreferrer" download>
          RESUME
        </a>
      </div>

      {/* <Contact /> */}
      {/* <div className="absolute bottom-36 text-blue-500">
        <ArrowDown elementTarget="#skills" />
      </div> */}
    </section>
  );
};

export default About;
