import React from 'react';

const Heading: React.FC = () => {
  return (
    <header id="top" className="w-full max-w-3xl bg-black text-white opacity-90">
      <nav>
        <ul className="flex w-full justify-end gap-4 p-4 text-sm tracking-wide">
          <li className='hover:text-blue-500'><a href="#about-me">ABOUT</a></li>
          <li className='hover:text-blue-500'><a href="#projects">PROJECTS</a></li>
          <li className='hover:text-blue-500'><a href="#contact">CONTACT</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Heading;
