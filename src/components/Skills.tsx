import React from 'react';

const ICONS = [
  { icon: '/assets/icons/html.svg', altText: 'html icon' },
  { icon: '/assets/icons/css3.svg', altText: 'css icon' },
  { icon: '/assets/icons/sass-icons/sass-512.png', altText: 'sass icon' },
  { icon: '/assets/icons/js-icons/js-512.png', altText: 'javascript icon' },
  { icon: '/assets/icons/typescript-icons/typescript-512.png', altText: 'typescript icon' },
  { icon: '/assets/icons/react-icons/react-512.png', altText: 'react icon' },
  { icon: '/assets/icons/bootstrap.png', altText: 'bootstrap icon' },
  { icon: '/assets/icons/git (1).png', altText: 'git icon' },
];

const Skills: React.FC = () => {
  return (
    <section className="relative flex w-full flex-col items-center justify-start bg-slate-800 bg-hero-pattern bg-cover bg-no-repeat py-20 text-white bg-blend-multiply lg:flex-row lg:items-center lg:justify-center lg:gap-20 xl:gap-40">
      <div className="p-4">
        <h2 className="mb-2 font-hero-text text-4xl tracking-widest text-white lg:text-6xl">SKILLS</h2>
      </div>
      <div className="mt-16 grid grid-cols-2 gap-20 lg:grid-cols-3">
        {ICONS.map((icon) => {
          return <img className="w-20" src={icon.icon} alt={icon.altText} />;
        })}
      </div>
    </section>
  );
};

export default Skills;
