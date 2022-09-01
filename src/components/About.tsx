import ArrowDown from '../ui/ArrowDown';

const About: React.FC = () => {
  return (
    <section
      id="about-me"
      className="relative flex h-screen flex-col items-center justify-center gap-16 bg-slate-100 p-4 font-hero-text leading-loose tracking-wide text-black"
    >
      <h2 className="text-center font-hero-text text-3xl text-black lg:text-6xl">WHO AM I?</h2>
      <div className="md:w-9/12 lg:w-6/12">
        <p className="text-center text-lg lg:text-2xl lg:leading-relaxed">
          I am a passionate self-taught <span className="lg:4xl text-2xl text-blue-500">FRONTEND DEVELOPER</span>. I
          strive to solve any problem that presents itself and committed to{' '}
          <span className="lg:4xl text-2xl text-blue-500">UX DESIGN</span> and{' '}
          <span className="lg:4xl text-2xl text-blue-500">FAMILY</span>. If I am not adding new knowledge to my tool
          belt, I am diving deeper into the tools of the trade.
        </p>
      </div>
      <div
        id="resume"
        className="rounded-lg bg-blue-500 py-4 px-10 text-xl tracking-wider text-white drop-shadow-lg hover:animate-none hover:cursor-pointer hover:bg-slate-200 hover:text-blue-500 lg:text-2xl"
      >
        <a href="../../public/assets/resume/#">RESUME</a>
      </div>
      <div className="absolute bottom-10 text-blue-500">
        <ArrowDown elementTarget="#skills" />
      </div>
    </section>
  );
};

export default About;
