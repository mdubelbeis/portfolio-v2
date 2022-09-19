import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md';

import React from 'react';

const Contact: React.FC = () => {
  return (
    <nav className={`z-10 mx-auto flex justify-around md:absolute md:left-0 md:top-0 md:block md:h-full`}>
      {/* <h3 className="text-black text-5xl">CONTACT</h3> */}
      <div id="content-container" className="h-full py-1 px-4 shadow-xl md:fixed">
        <ul id="contact-links-wrapper" className={`flex gap-8 md:flex-col`}>
          <li className="w-full rounded-full border-[0.1rem] border-transparent bg-transparent p-2 text-blue-500 shadow-xl hover:border-green-400 hover:text-green-500 focus:text-green-500 active:text-green-500">
            <a href="https://www.github.com/mdubelbeis" target="_blank">
              <FaGithub size={40} />
            </a>
          </li>
          <li className="w-full rounded-full border-[0.1rem] border-transparent p-2 text-blue-500 shadow-xl hover:border-green-400 hover:text-green-500 focus:text-green-500 active:text-green-500">
            <a href="https://www.linkedin.com/in/mason-dub/" target="_blank">
              <FaLinkedin size={40} />
            </a>
          </li>
          <li className="w-full rounded-full border-[0.1rem] border-transparent p-2 text-blue-500 shadow-xl hover:border-green-400 hover:text-green-500 focus:text-green-500 active:text-green-500">
            <a href="https://twitter.com/mason_dubelbeis" target="_blank">
              <FaTwitter size={40} />
            </a>
          </li>
          <li className="w-full rounded-full border-[0.1rem] border-transparent p-2 text-blue-500 shadow-xl hover:border-green-400 hover:text-green-500 focus:text-green-500 active:text-green-500">
            <a href="mailto:mason.dubelbeis@gmail.com.com">
              <MdAlternateEmail size={40} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Contact;
