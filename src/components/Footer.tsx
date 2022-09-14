import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="flex items-center justify-center gap-4 py-4 text-white">
      <small>&copy; 2022</small>
      <small className="hover:cursor-pointer hover:text-blue-500">
        <a href="/">Mason J. Dubelbeis</a>
      </small>
    </footer>
  );
};

export default Footer;
