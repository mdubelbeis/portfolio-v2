import React from 'react';

const Heading: React.FC = () => {
  return (
    <header>
      <nav>
        <ul className="text-md flex w-full justify-end gap-4 bg-main p-4">
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Heading;
