import React from 'react';
import ArrowDown from '../ui/ArrowDown';

const ICONS = [
  { icon: '/public/assets/icons/html-icons/html-512.png', altText: 'html icon' },
  { icon: '/public/assets/icons/css-icon/css-512.png', altText: 'css icon' },
  { icon: '/public/assets/icons/sass-icons/sass-512.png', altText: 'sass icon' },
  { icon: '/public/assets/icons/js-icons/js-512.png', altText: 'javascript icon' },
  { icon: '/public/assets/icons/typescript-icons/typescript-512.png', altText: 'typescript icon' },
  { icon: '/public/assets/icons/react-icons/react-512.png', altText: 'react icon' },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="relative flex h-screen w-full flex-col items-center py-10 text-white">
      <div className="p-10">
        <h2 className="mb-2 text-center font-hero-text text-4xl tracking-wider text-white lg:text-6xl">SKILLS</h2>
      </div>
      <div className="grid grid-cols-2 gap-14 lg:grid-cols-3 lg:gap-20 mt-20">
        {ICONS.map((icon) => {
          return <img className="w-20 lg:w-32" src={icon.icon} alt={icon.altText} />;
        })}
        {/* <!-- !! ADD SRCSET --> */}
      </div>
      <div className="absolute bottom-10">
        <ArrowDown elementTarget="#projects" />
      </div>
    </section>
  );
};

export default Skills;
