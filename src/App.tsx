import About from './components/About';
import Heading from './components/Heading';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer'

const PROJECTS = [
  {
    id: 1,
    projectLink: '#',
    projectBgImg: '/public/assets/imgs/project-imgs/ales-nesetril-Im7lZjxeLhg-unsplash.jpg',
    projectName: 'The Gathering Bulletin',
    projectText: 'A website that covers all news and resources for Magic: The Gathering players',
    projectTech: ['React-Ts', 'Tailwind CSS'],
  },
  {
    id: 2,
    projectLink: '#',
    projectBgImg: '/public/assets/imgs/project-imgs/christopher-burns-Kj2SaNHG-hg-unsplash.jpg',
    projectName: 'Du-Bee Herbs',
    projectText: 'A landing page for local spices and herbs store.',
    projectTech: ['React-Ts', 'Tailwind CSS'],
  },
  {
    id: 3,
    projectLink: '#',
    projectBgImg: '/public/assets/imgs/project-imgs/lorenzo-herrera-p0j-mE6mGo4-unsplash.jpg',
    projectName: 'Calculator',
    projectText:
      'A website that covers all news and resources for Magic: The Gathering A basic calculator to get quick solutions.',
    projectTech: ['React-Ts', 'Tailwind CSS'],
  },
  {
    id: 4,
    projectLink: '#',
    projectBgImg: '/public/assets/imgs/project-imgs/luca-bravo-XJXWbfSo2f0-unsplash.jpg',
    projectName: 'Obligations',
    projectText: 'Create a list that is essential in helping you complete your goals',
    projectTech: ['React-Ts', 'Tailwind CSS'],
  },
];

const App: React.FC = () => {
  return (
    <div className="mx-auto w-full max-w-6xl">
      <Heading />
      <Hero />
      <main>
        <About />
        <Skills />
        <Projects projects={PROJECTS} />
      </main>
      <Footer/>
    </div>
  );
};

export default App;
