import React from 'react';
import ArrowDown from '../ui/ArrowDown';

const ICONS = [
  { icon: '/assets/icons/html.svg', altText: 'html icon' },
  { icon: '/assets/icons/css3.svg', altText: 'css icon' },
  { icon: '/assets/icons/sass-icons/sass-512.png', altText: 'sass icon' },
  { icon: '/assets/icons/js-icons/js-512.png', altText: 'javascript icon' },
  { icon: '/assets/icons/typescript-icons/typescript-512.png', altText: 'typescript icon' },
  { icon: '/assets/icons/react-icons/react-512.png', altText: 'react icon' },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="relative flex h-screen w-full flex-col items-center justify-start py-10 text-white">
      <div className="p-4">
        <h2 className="mb-2 text-center font-hero-text text-4xl tracking-widest text-white lg:text-6xl">SKILLS</h2>
      </div>
      <div className="mt-16 grid grid-cols-2 gap-10 lg:grid-cols-3 lg:gap-20">
        {ICONS.map((icon) => {
          return <img className="mb-6 w-20 lg:w-32" src={icon.icon} alt={icon.altText} />;
        })}
        {/* <!-- !! ADD SRCSET --> */}
      </div>
      <div className="absolute bottom-36 text-blue-500">
        <ArrowDown elementTarget="#projects" />
      </div>
    </section>
  );
};

export default Skills;
