import About from './components/About';
import Heading from './components/Heading';
import Hero from './components/Hero';
import Projects from './components/Projects';

const PROJECTS = [
  {},
  {},
  {},
  {},
]

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
