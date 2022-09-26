import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md';

import React from 'react';

const ICONS = [
  { icon: <FaGithub size={40} />, url: 'https://www.github.com/mdubelbeis' },
  { icon: <FaLinkedin size={40} />, url: 'https://www.linkedin.com/in/mason-dub/' },
  { icon: <FaTwitter size={40} />, url: 'https://twitter.com/mason_dubelbeis' },
  { icon: <MdAlternateEmail size={40} />, url: 'mailto:mason.dubelbeis@gmail.com' },
];

const Contact: React.FC = () => {
  return (
    <nav className={`z-10 mx-auto flex justify-around pt-6 md:absolute md:left-0 md:top-0 md:block md:h-full`}>
      {/* <h3 className="text-black text-5xl">CONTACT</h3> */}
      <div id="content-container" className="h-full py-1 px-4 shadow-xl md:fixed">
        <ul id="contact-links-wrapper" className={`flex gap-8 md:flex-col`}>
          {ICONS.map((icon) => {
            return (
              <li
                key={Math.random()}
                className="w-full rounded-full border-[0.1rem] border-blue-500 border-b-transparent border-t-transparent border-opacity-60 p-2 text-blue-500 shadow-xl hover:border-blue-700 hover:border-r-transparent hover:border-l-transparent  hover:border-opacity-60 hover:text-blue-700 focus:border-none focus:text-blue-700 active:text-blue-700"
              >
                <a href={icon.url} target="_blank">
                  {icon.icon}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Contact;
