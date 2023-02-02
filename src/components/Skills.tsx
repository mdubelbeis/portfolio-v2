import React from 'react';

const ICONS = [
  { icon: '/assets/icons/react-icons/react-512.png', altText: 'react icon' },
  { icon: '/assets/icons/js-icons/js-512.png', altText: 'javascript icon' },
  { icon: '/assets/icons/typescript-icons/typescript-512.png', altText: 'typescript icon' },
  { icon: '/assets/icons/tailwind-icons/tailwind.png', altText: 'tailwindcss icon' },
  { icon: '/assets/icons/redux-icons/redux.png', altText: 'redux icon' },
  { icon: '/assets/icons/git (1).png', altText: 'git icon' },
  { icon: '/assets/icons/html.svg', altText: 'html icon' },
  { icon: '/assets/icons/css3.svg', altText: 'css icon' },
  { icon: '/assets/icons/sass-icons/sass-512.png', altText: 'sass icon' },
  { icon: '/assets/icons/bootstrap.png', altText: 'bootstrap icon' },
];

const Skills: React.FC = () => {
  return (
    <section className="xl:gap-26 relative flex w-full flex-col items-center justify-start bg-slate-800 bg-blue-reaction bg-cover bg-center bg-no-repeat px-4 py-32 text-white bg-blend-soft-light lg:flex-row lg:items-center lg:justify-center lg:gap-20 lg:px-28">
      <div className="p-4">
        <h2 className="font-hero-text mb-2 text-5xl tracking-widest text-white lg:text-center lg:text-6xl">TOOLBELT</h2>
      </div>
      <div className="hidden lg:block lg:h-[250px] lg:border-l-2 lg:border-white lg:opacity-30"></div>
      <div className="mt-16 grid grid-cols-3 gap-20 p-8 lg:mt-0 xl:grid-cols-4">
        {ICONS.map((icon) => {
          return <img key={Math.random()} className="w-20" src={icon.icon} alt={icon.altText} />;
        })}
      </div>
    </section>
  );
};

export default Skills;
