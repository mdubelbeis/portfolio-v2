import About from './components/About';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Contact from './components/Contact';
import { PROJECTS } from './data/ProjectData';

const App = () => {
    return (
        <div className="relative mx-auto w-screen max-w-[100rem] font-lato">
            <Contact />
            {/* <Hero /> */}
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
