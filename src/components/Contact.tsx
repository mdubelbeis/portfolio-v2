
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdAlternateEmail} from 'react-icons/md';

import React from 'react';

const Contact: React.FC = () => {
  return (
    <nav className={`absolute left-0 top-0 md:h-full p-2 z-10`}>
      {/* <h3 className="text-black text-5xl">CONTACT</h3> */}
      <div id="content-container" className="md:fixed h-full p-4 shadow-xl">
        <ul
          id="contact-links-wrapper"
          className={`flex items-center justify-end gap-6 md:flex-col lg:justify-center`}
        >
          <li>
            <a href="https://www.github.com/mdubelbeis" target="_blank">
              <FaGithub size={40} className="text-slate-400 hover:text-green-500" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/mason-dub/" target="_blank">
              <FaLinkedin size={40} className="text-[#0072b1] hover:text-green-500" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/mason_dubelbeis" target="_blank">
              <FaTwitter size={40} className="text-[#1DA1F2] hover:text-green-500" />
            </a>
          </li>
          <li>
            <a href="mailto:mason.dubelbeis@gmail.com.com">
              <MdAlternateEmail size={40} className="text-slate-400 hover:text-green-500" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Contact;
