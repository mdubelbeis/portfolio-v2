import { FaGithub, FaHtml5, FaLinkedin, FaReact, FaTwitter } from 'react-icons/fa';


import React from 'react';

const Contact: React.FC = () => {
  return (
    <aside className="absolute right-0 top-[80%] md:top-[33%] md:right-0 shadow-2xl rounded-2xl">
      {/* <h3 className="text-black text-5xl">CONTACT</h3> */}
      <div className="flex flex-row gap-10 p-6 md:flex-col">
        <div>
          <a href="www.github.com/mdubelbeis" target="_blank"><FaGithub size={40}/></a>
        </div>
        <div className="">
          <a href="https://www.linkedin.com/in/mason-dub/" target="_blank"><FaLinkedin size={40} className="text-[#0072b1]"/></a>
        </div>
        <div>
          <a href="https://twitter.com/mason_dubelbeis" target="_blank"><FaTwitter size={40} className="text-[#1DA1F2]"/></a>
        </div>
      </div>
    </aside>
  );
};

export default Contact;
