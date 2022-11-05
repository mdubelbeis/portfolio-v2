import Button from '../ui/Button';

const About: React.FC = () => {
  const spanText = 'text-blue-500 lowercase';
  return (
    <section className="relative flex flex-col items-center justify-center gap-10 bg-slate-100 py-28 font-hero-text tracking-wide text-black md:px-8 lg:gap-20 lg:py-72">
      <h2 className="text-center font-hero-text text-4xl text-black lg:text-6xl">WHO AM I?</h2>
      <div className="text-md flex flex-col gap-6 px-4 text-left md:w-9/12 md:text-xl lg:text-2xl">
        <p className="leading-6 lg:leading-10">
          I am a dedicated and passionate self-taught <span className={spanText}>FRONT-END WEB DEVELOPER</span> based
          out of Austin, TX, with a focus on <span className={spanText}>JAVASCRIPT/TYPESCRIPT, REACT, CSS, SASS</span>,
          and <span className={spanText}>TAILWIND CSS</span>. I strive to solve any problem that presents itself and
          committed to <span className={spanText}>UI/UX DEVELOPMENT</span> and{' '}
          <span className={spanText}>PROBLEM SOLVING</span>.
        </p>
        <p>
          I will provide your company with an <span className={spanText}> OUTSTANDING TEAM MEMBER</span> who will hit
          the ground running and earn a spot as an <span className={spanText}> ASSET</span> to your company.
        </p>
      </div>
      <Button py="py-4" px="px-6" textSize="text-xl" marginTop="mt-10">
        CURRICULUM VITAE
      </Button>
    </section>
  );
};

export default About;
