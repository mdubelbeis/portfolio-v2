import Button from '../ui/Button';

import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md';

const SOCIAL_ICONS = [
    { icon: <FaGithub size={40} />, url: 'https://www.github.com/mdubelbeis' },
    { icon: <FaLinkedin size={40} />, url: 'https://www.linkedin.com/in/mason-dub/' },
    { icon: <MdAlternateEmail size={40} />, url: 'mailto:mason.dubelbeis@gmail.com' },
];

const Contact = () => {
    return (
        <nav className={`absolute z-10 flex py-2 md:left-0 md:top-0 md:block md:h-full md:pt-2`}>
            <div id="content-container" className="py-1 px-2 md:fixed">
                <ul
                    id="contact-links-wrapper"
                    className={`mx-auto flex w-full items-center justify-center gap-4 md:flex-col md:gap-7`}
                >
                    {SOCIAL_ICONS.map((icon) => {
                        return (
                            <li
                                key={Math.random()}
                                className="w-full rounded-full border-opacity-60 p-4 text-blue-500 shadow-lg hover:text-blue-700 hover:shadow-xl focus:border-opacity-60 focus:text-blue-700 focus:outline-none active:shadow-lg"
                            >
                                <a
                                    href={icon.url}
                                    target="_blank"
                                    className="focus:outline-blue-700 active:outline-blue-700"
                                >
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
