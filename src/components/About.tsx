import Button from '../ui/Button';

const About: React.FC = () => {
  return (
    <section className="font-hero-text flex flex-col items-center justify-center gap-14 bg-slate-100 py-32 tracking-wider text-black md:px-8 lg:gap-20 lg:py-72">
      <div className="font-hero-text flex flex-col items-center justify-center gap-14 md:px-8 lg:flex-row-reverse lg:gap-32">
        <h2 className="font-hero-text text-center text-5xl text-black lg:text-7xl">ABOUT</h2>
        <div className="hidden lg:block lg:h-[250px] lg:border-l-2 lg:border-black lg:opacity-30"></div>
        <div className="flex max-w-2xl flex-col items-center justify-center gap-2 p-4 text-left text-lg">
          <div className="flex flex-col gap-2 md:ml-10">
            <h3 className="text-2xl font-bold">Hello, I'm Mason.</h3>
            <p>I am a United States Navy Veteran, Web, and Javascript Developer.</p>
            <p>I build websites, apps, and features for consumers to interact with your business.</p>
            <em className="mt-8 text-center text-lg font-semibold">Let me help your business grow.</em>
          </div>
        </div>
      </div>
      <div className="mx-auto">
        <Button py="py-4" px="px-6" textSize="text-xl" marginTop="mt-10">
          RESUME
        </Button>
      </div>
    </section>
  );
};

export default About;
