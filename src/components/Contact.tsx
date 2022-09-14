import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaHamburger } from 'react-icons/fa';

import React from 'react';

const Contact: React.FC = () => {
  const [showContactLinks, setShowContactLinks] = useState(false);

  const handleMenuClick = (): void => {
    setShowContactLinks(!showContactLinks);
  };

  let showMenu = showContactLinks ? 'block' : 'hidden lg:flex';

  return (
    <aside
      className={`absolute right-6 bottom-4 flex flex-col rounded-full lg:right-8 md:rounded-2xl lg:top-[33%]`}
    >
      {/* <h3 className="text-black text-5xl">CONTACT</h3> */}
      <div id="content-container" className="p-2">
        <div id="contact-links-wrapper" className={`${showMenu} flex flex-col items-center justify-center gap-4 mb-4`}>
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
  );
};

export default Contact;
