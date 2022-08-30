import React from 'react';

const Heading: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-slate-200 opacity-90 ">
      <nav>
        <ul className="text-md flex w-full justify-end gap-4 p-4">
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Heading;
