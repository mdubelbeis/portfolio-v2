import Button from '../ui/Button';

const About: React.FC = () => {
  return (
    <section className="relative flex flex-col items-center justify-center gap-10 bg-slate-100 py-32 font-hero-text tracking-wide text-black md:px-8 lg:gap-20 lg:py-72">
      <h2 className="text-center font-hero-text text-4xl text-black md:text-5xl lg:text-7xl">ABOUT</h2>
      <div className="text-md flex flex-col gap-10 px-4 text-left md:w-9/12 md:text-xl lg:text-2xl">
        <div className="flex flex-col gap-2">
          <h1>I am a...</h1>
          <h3>Web and Javascript Developer.</h3>
          <h3>United States Navy Veteran based of of Austin, TX.</h3>
        </div>
        <div className="flex flex-col gap-4 leading-relaxed">
          <p>
            My passion for development stems from my interest in problem solving. Solving problems and accomplishing
            challenges continue to be my primary motivation to this day.
          </p>

          <p>
            Outside of work and working on personal projects, I thoroughly enjoy learning new things, spending quality
            time with family and friends, not spending money on maintaining a Harley Davidson, and supporting local
            Veterans.
          </p>
        </div>
      </div>
      <Button py="py-4" px="px-6" textSize="text-xl" marginTop="mt-10">
        CURRICULUM VITAE
      </Button>
    </section>
  );
};

export default About;
