import Button from '../ui/Button';

const About: React.FC = () => {
  return (
    <section className="font-hero-text flex flex-col items-center justify-center gap-6 bg-slate-100 py-32 tracking-wider text-black lg:gap-10 lg:py-72 lg:tracking-wider">
      <div className="font-hero-text flex flex-col items-center justify-center lg:flex-row-reverse">
        <div className="flex max-w-2xl flex-col items-center justify-center gap-2 p-4 text-left text-lg">
          <div className="flex flex-col gap-6 px-1 text-center font-mono md:m-10 md:text-right lg:m-0 lg:gap-10 lg:text-left lg:text-2xl">
            <h3 className="text-2xl font-bold md:text-3xl lg:text-6xl">Hello, I'm Mason!</h3>
            <p>A Full Stack Software Engineer.</p>
            <p>
              I have a passion for creating beautiful, interactive, websites and applications that are easy to use, vibe
              with end-users, and ensures a readable, type-safe codebase for future maintainers.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto">
        <Button py="py-4" px="px-6" textSize="text-xl" marginTop="mt-4">
          RESUME
        </Button>
      </div>
    </section>
  );
};

export default About;
