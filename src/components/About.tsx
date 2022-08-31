import ArrowDown from '../ui/ArrowDown';

const About: React.FC = () => {
  return (
    <section
      id="about-me"
      className="flex h-screen flex-col items-center justify-center gap-10 bg-slate-100 p-4 font-hero-text leading-loose tracking-wide text-black"
    >
      <h2 className="text-center text-3xl text-black">WHO AM I?</h2>
      <div className="md:w-9/12">
        <p className="text-center text-lg">
          I am a passionate self-taught frontend developer. I strive to solve any problem that presents itself and have
          a strong love working in the Javascript ecosystem. If I am not adding new knowledge to my tool belt, I am
          diving deeper into the tools of the trade to bring an asset to your company.
        </p>
      </div>
      <ArrowDown top="top-32" elementTarget="#skills" />
    </section>
  );
};

export default About;
