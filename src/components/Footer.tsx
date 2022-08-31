import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="flex items-center justify-center gap-4 py-4 text-white">
      <small>&copy; 2022</small>
      <small className="hover:cursor-pointer">
        <a href="https://mason.dubelbeis.com">Mason J. Dubelbeis</a>
      </small>
    </footer>
  );
};

export default Footer;
