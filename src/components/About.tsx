import ArrowDown from '../ui/ArrowDown';

const About: React.FC = () => {
  return (
    <section
      id="about-me"
      className="relative flex h-screen flex-col items-center justify-center gap-16 bg-slate-100 p-4 font-hero-text leading-loose tracking-wide text-black"
    >
      <h2 className="text-center text-3xl text-black font-hero-text lg:text-6xl">WHO AM I?</h2>
      <div className="md:w-9/12 lg:w-6/12">
        <p className="text-center text-lg lg:text-2xl lg:leading-relaxed">
          I am a passionate self-taught <span className="text-2xl text-blue-500 lg:4xl">FRONTEND DEVELOPER</span>. I strive to solve any problem that presents itself and committed to <span className="text-2xl text-blue-500 lg:4xl">UX DESIGN</span> and <span className="text-2xl text-blue-500 lg:4xl">FAMILY</span>.  If I am not adding new knowledge to my tool belt, I am diving deeper into the tools of the trade, allowing me to be an asset to your company.
        </p>
      </div>
      <div id="resume" className="bg-blue-500 py-4 px-10 text-white text-xl rounded-lg tracking-wider drop-shadow-lg hover:bg-slate-200 hover:text-blue-500 animate-pulse hover:animate-none hover:cursor-pointer lg:text-2xl">
        <a href='../../public/assets/resume/#'>RESUME</a>
      </div>
      <div className="absolute bottom-10">
        <ArrowDown elementTarget="#skills" />
      </div>
    </section>
  );
};

export default About;
