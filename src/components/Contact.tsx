<<<<<<< HEAD
import { FaLinkedin } from "react-icons/fa";

=======
import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaHamburger } from 'react-icons/fa';

import React from 'react';
>>>>>>> dev

const Contact: React.FC = () => {
  const [showContactLinks, setShowContactLinks] = useState(false);

  const handleMenuClick = (): void => {
    setShowContactLinks(!showContactLinks);
  };

  let showMenu = showContactLinks ? 'block' : 'hidden';

  return (
<<<<<<< HEAD
    <section>
      <h1 className="bg-black text-white">HIRE ME</h1>
      <div>
        <FaLinkedin/>
      </div>
    </section>
=======
    <aside
      className={`absolute right-6 bottom-4 flex flex-col rounded-full md:right-0 md:rounded-2xl lg:top-[33%] lg:right-8`}
    >
      {/* <h3 className="text-black text-5xl">CONTACT</h3> */}
      <div id="content-container" className={`${!showMenu ? '' : 'p-2'}`}>
        <div id="contact-links-wrapper" className={`${showMenu} gap-4 flex flex-col items-center justify-center mb-4 lg:gap-8`}>
          <div>
            <a href="www.github.com/mdubelbeis" target="_blank">
              <FaGithub size={40} />
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/mason-dub/" target="_blank">
              <FaLinkedin size={40} className="text-[#0072b1]" />
            </a>
          </div>
          <div>
            <a href="https://twitter.com/mason_dubelbeis" target="_blank">
              <FaTwitter size={40} className="text-[#1DA1F2]" />
            </a>
          </div>
        </div>
          <button className="lg:hidden" onClick={handleMenuClick}>
            <FaHamburger size={40} />
          </button>
      </div>
    </aside>
>>>>>>> dev
  );
};

export default Contact;
