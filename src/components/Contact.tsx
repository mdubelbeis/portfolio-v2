import { useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

import React from 'react';

const Contact: React.FC = () => {
  const [showContactLinks, setShowContactLinks] = useState(false);

  return (
    <aside className="absolute right-0 top-[80%] rounded-2xl shadow-2xl lg:top-[33%] md:right-0">
      {/* <h3 className="text-black text-5xl">CONTACT</h3> */}
      <div className="flex flex-row items-center gap-8 p-2 lg:flex-col">
        <div>
          <a href="www.github.com/mdubelbeis" target="_blank">
            <FaGithub size={40} />
          </a>
        </div>
        <div className="">
          <a href="https://www.linkedin.com/in/mason-dub/" target="_blank">
            <FaLinkedin size={40} className="text-[#0072b1]" />
          </a>
        </div>
        <div>
          <a href="https://twitter.com/mason_dubelbeis" target="_blank">
            <FaTwitter size={40} className="text-[#1DA1F2]" />
          </a>
        </div>
        <div
          id="resume"
          className="block animate-pulse rounded-lg bg-blue-500 py-2 px-8 text-xl tracking-wider text-white drop-shadow-lg hover:animate-none hover:cursor-pointer hover:border hover:border-blue-500 hover:bg-slate-200 hover:text-blue-500 md:hidden lg:text-2xl"
        >
          <a href="/assets/resume/Resume_tech.pdf" target="_blank" rel="noopener noreferrer" download>
            RESUME
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Contact;
