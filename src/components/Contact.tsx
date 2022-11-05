import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md';

import React from 'react';
import Button from '../ui/Button';

const ICONS = [
  { icon: <FaGithub size={40} />, url: 'https://www.github.com/mdubelbeis' },
  { icon: <FaLinkedin size={40} />, url: 'https://www.linkedin.com/in/mason-dub/' },
  { icon: <FaTwitter size={40} />, url: 'https://twitter.com/mason_dubelbeis' },
  { icon: <MdAlternateEmail size={40} />, url: 'mailto:mason.dubelbeis@gmail.com' },
];

const Contact: React.FC = () => {
  return (
    <nav className={`z-10 mx-auto flex justify-around py-2 md:absolute md:left-0 md:top-0 md:block md:h-full md:pt-2`}>
      <div id="content-container" className="h-full py-1 px-4 shadow-xl md:fixed">
        <ul id="contact-links-wrapper" className={`flex gap-6 md:flex-col lg:gap-10`}>
          {ICONS.map((icon) => {
            return (
              <li
                key={Math.random()}
                className="w-full rounded-full border-opacity-60 p-4 text-blue-500 shadow-lg hover:text-blue-700 hover:shadow-xl focus:border-opacity-60 focus:text-blue-700 focus:outline-none active:shadow-lg"
              >
                <a href={icon.url} target="_blank" className="focus:outline-blue-700 active:outline-blue-700">
                  {icon.icon}
                </a>
              </li>
            );
          })}
          <Button hidden="hidden" py="py-2" px="px-4" marginTop="mt-2">
            CV
          </Button>
        </ul>
      </div>
    </nav>
  );
};

export default Contact;
