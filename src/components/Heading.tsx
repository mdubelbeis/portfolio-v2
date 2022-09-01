import React from 'react';

const Heading: React.FC = () => {
  return (
    <header id="top" className="w-full max-w-6xl bg-black text-white p-2">
      <nav>
        <ul className="flex w-full justify-end gap-2 p-2 font-hero-text text-md tracking-wide lg:text-2xl lg:tracking-widest">
          <li className="hover:text-blue-500">
            <a href="#about-me">ABOUT</a>
          </li>
          <li className="text-blue-500">&bull;</li>
          <li className="hover:text-blue-500">
            <a href="#projects">PROJECTS</a>
          </li>
          <li className="text-blue-500">&bull;</li>
          <li className="hover:text-blue-500">
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Heading;
