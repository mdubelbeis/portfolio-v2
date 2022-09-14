import { useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import {MdAlternateEmail, MdMenu, MdClose} from 'react-icons/md'

import React from 'react';

const Contact: React.FC = () => {

  return (
    <nav
      className={`absolute left-0 top-0 md:fixed md:z-10 p-2 shadow-xl md:h-full`}
    >
      {/* <h3 className="text-black text-5xl">CONTACT</h3> */}
      <div id="content-container" className="p-2">
        <ul id="contact-links-wrapper" className={`flex md:flex-col items-center justify-end mb-4 gap-6 lg:justify-center`}>
          <li>
            <a href="https://www.github.com/mdubelbeis" target="_blank">
              <FaGithub size={40} className="text-slate-400 hover:text-slate-400"/>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/mason-dub/" target="_blank">
              <FaLinkedin size={40} className="text-[#0072b1] hover:text-slate-400" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/mason_dubelbeis" target="_blank">
              <FaTwitter size={40} className="text-[#1DA1F2] hover:text-slate-400" />
            </a>
          </li>
          <li>
          <a
              href="mailto:mason.dubelbeis@gmail.com.com"
            >
              <MdAlternateEmail size={40} className="text-green-500 hover:text-slate-400"/>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Contact;
