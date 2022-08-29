import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex justify-end gap-4 p-4">
      <div>
        <a id="#about-me">ABOUT ME</a>
      </div>
      <div>
        <a id="#projects">PROJECTS</a>
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </div>
    </header>
  );
};

export default Header;
