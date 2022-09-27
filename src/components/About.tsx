import Button from '../ui/Button';

const About: React.FC = () => {
  const spanText = 'text-2xl text-blue-500 lg:4xl';
  return (
    <section className="relative flex flex-col items-center justify-center gap-10 bg-slate-100 py-28 font-hero-text leading-loose tracking-wide text-black md:px-8 lg:gap-20 lg:py-72">
      <h2 className="text-center font-hero-text text-4xl text-black lg:text-6xl">WHO AM I?</h2>
      <div className="flex w-full flex-col gap-6 px-2 text-center text-lg md:w-9/12 md:text-xl lg:text-2xl">
        <p className="leading-10">
          I am a dedicated and passionate self-taught <span className={spanText}>FRONT-END WEB DEVELOPER</span> based
          out of Austin, TX, with a focus on{' '}
          <span className={spanText}>JAVASCRIPT/TYPESCRIPT, REACT, and CSS/SASS/TailwindCSS</span>. I strive to solve
          any problem that presents itself and committed to <span className={spanText}>UI/UX DEVELOPMENT</span> and{' '}
          <span className={spanText}>PROBLEM SOLVING</span>. Navy Veteran with over 8 years of outstanding performance
          and results for the United States Navy. Rapidly promoted and excelled as a{' '}
          <span className={spanText}>LEADER</span>, leading over 500 Sailors in daily operations and in support of the
          Navy's mission.
        </p>
        <p>
          I will provide your company with an
          <span className={spanText}> OUTSTANDING TEAM MEMBER</span> who will hit the ground running and earn a spot as
          an <span className={spanText}> ASSET</span> to your company.
        </p>
      </div>
      <Button py="py-4" px="px-6" textSize="text-xl" marginTop="mt-10">
        CURRICULUM VITAE
      </Button>
    </section>
  );
};

export default About;
