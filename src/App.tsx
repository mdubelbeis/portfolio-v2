import About from './components/About';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Contact from './components/Contact';

const PROJECTS = [
  {
    id: 1,
    projectLink: 'https://the-gathering-bulletin.vercel.app/',
    projectBgImg: '/assets/imgs/project-imgs/the-gathering-bulletin.png',
    projectName: 'The Gathering Bulletin',
    projectText: 'A website that covers all news and resources for Magic: The Gathering players',
    projectTech: ['React-Ts', 'Tailwind CSS'],
  },
  {
    id: 2,
    projectLink: 'https://sunnyside-agency-landing-page-kappa.vercel.app/',
    projectBgImg: '/assets/imgs/project-imgs/sunny-side-agency.png',
    projectName: 'Sunny Side Agency',
    projectText: 'A front end web challenge from Frontendmentor.io',
    projectTech: ['React', 'Tailwind CSS'],
  },
  {
    id: 3,
    projectLink: 'https://intro-section-db-menu.vercel.app/',
    projectBgImg: '/assets/imgs/project-imgs/snap.png',
    projectName: 'Snap',
    projectText: 'A front end web challenge from Frontendmentor.io',
    projectTech: ['React', 'Tailwind CSS'],
  },
  {
    id: 4,
    projectLink: 'https://tip-calculator-rose-eight.vercel.app/',
    projectBgImg: '/assets/imgs/project-imgs/splitter.png',
    projectName: 'Splitter',
    projectText: 'A front end web challenge from Frontendmentor.io',
    projectTech: ['React', 'Tailwind CSS'],
  },
  {
    id: 5,
    projectLink: 'https://suite-landing-page-one.vercel.app/',
    projectBgImg: '/assets/imgs/project-imgs/suite.png',
    projectName: 'Suite',
    projectText: 'A front end web challenge from Frontendmentor.io',
    projectTech: ['React', 'Tailwind CSS'],
  },
  {
    id: 6,
    projectLink: 'https://pod-request-access-landing-page-blue.vercel.app/',
    projectBgImg: '/assets/imgs/project-imgs/pod.png',
    projectName: 'Pod',
    projectText: 'A front end web challenge from Frontendmentor.io',
    projectTech: ['HTML', 'Tailwind CSS'],
  },
  // {
  //   id: 7,
  //   projectLink: '#',
  //   projectBgImg: '/assets/imgs/project-imgs/markus-spiske-4PG6wLlVag4-unsplash.jpg',
  //   projectName: 'Du-Bee Herbs',
  //   projectText: 'A landing page for local spices and herbs store.',
  //   projectTech: ['React-Ts', 'Tailwind CSS'],
  // },
];

const App: React.FC = () => {
  return (
    <div className="relative mx-auto w-screen max-w-7xl">
      <Contact />
      <Hero />
      <main>
        <About />
        <Skills />
        <Projects projects={PROJECTS} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
