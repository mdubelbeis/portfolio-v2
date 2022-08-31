import ArrowDown from '../ui/ArrowDown';

const About: React.FC = () => {
  return (
    <section
      id="about-me"
      className="relative flex h-screen flex-col items-center justify-center gap-10 bg-slate-100 p-4 font-hero-text leading-loose tracking-wide text-black"
    >
      <h2 className="text-center text-3xl text-black font-hero-text lg:text-6xl">WHO AM I?</h2>
      <div className="md:w-9/12 lg:w-6/12">
        <p className="text-center text-lg lg:text-2xl lg:leading-relaxed">
          I am a passionate self-taught frontend developer. I strive to solve any problem that presents itself and have
          a strong love working in the frontend and javascript ecosystem. If I am not adding new knowledge to my tool
          belt, I am diving deeper into the tools of the trade, allowing me to be an asset to your company.
        </p>
      </div>
      <div className="absolute bottom-10">
        <ArrowDown elementTarget="#skills" />
      </div>
    </section>
  );
};

export default About;
