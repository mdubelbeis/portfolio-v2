import About from './components/About';
import Heading from './components/Heading';
import Hero from './components/Hero';
import Projects from './components/Projects';

const INFO = {
  firstName: 'Mason',
  middleName: 'Jeffrey',
  lastName: 'Dubelbeis',
  email: 'Mason.Dubelbeis@gmail.com',
  number: '732-228-2390',
  projectURLS: ['', '', '', ''],
  about: `I am Mason Jeffrey Dubelbeis, a Front End Web Developer. I have two years experience in working with Front End web technologies and developing beautiful responsive designs for the end user.`,
};

const App: React.FC = () => {
  return (
    <div className="mx-auto w-full max-w-3xl">
      <Heading />
      <Hero />
      <main>
        <About />
        <Projects />
      </main>
      {/* PROJECTS */}
      {/* FOOTER */}
    </div>
  );
};

export default App;
