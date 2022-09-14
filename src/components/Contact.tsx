
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdAlternateEmail} from 'react-icons/md';

import React from 'react';

const Contact: React.FC = () => {
  return (
    <nav className={`flex justify-around mx-auto md:block md:absolute md:left-0 md:top-0 md:h-full p-2 z-10`}>
      {/* <h3 className="text-black text-5xl">CONTACT</h3> */}
      <div id="content-container" className="md:fixed h-full p-4 shadow-xl">
        <ul
          id="contact-links-wrapper"
          className={`flex gap-8 md:flex-col`}
        >
          <li className="w-full border-[0.1rem] border-transparent shadow-xl p-2 rounded-full hover:border-green-400 text-[#0072b1] bg-transparent hover:text-green-500 active:text-green-500 focus:text-green-500">
            <a href="https://www.github.com/mdubelbeis" target="_blank">
              <FaGithub size={40} />
            </a>
          </li>
          <li className="w-full border-[0.1rem] border-transparent shadow-xl p-2 rounded-full hover:border-green-400 text-[#0072b1] hover:text-green-500 active:text-green-500 focus:text-green-500">
            <a href="https://www.linkedin.com/in/mason-dub/" target="_blank">
              <FaLinkedin size={40} />
            </a>
          </li>
          <li className="w-full border-[0.1rem] border-transparent shadow-xl p-2 rounded-full hover:border-green-400 text-[#1DA1F2] hover:text-green-500 active:text-green-500 focus:text-green-500">
            <a href="https://twitter.com/mason_dubelbeis" target="_blank">
              <FaTwitter size={40} />
            </a>
          </li>
          <li className="w-full border-[0.1rem] border-transparent shadow-xl p-2 rounded-full hover:border-green-400 text-[#0072b1] hover:text-green-500 active:text-green-500 focus:text-green-500">
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
