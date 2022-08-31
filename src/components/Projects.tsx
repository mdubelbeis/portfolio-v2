import ArrowUp from '../ui/ArrowUp';

interface ProjectProps {
  projects: {
    id: number;
    projectLink: string;
    projectBgImg: string;
    projectName: string;
    projectText: string;
    projectTech: string[];
  }[];
}

const Projects: React.FC<ProjectProps> = ({ projects }) => {
  const projectList = projects.map((project) => {
    return (
      <div key={project.id} className="flex flex-col items-center justify-center bg-white py-4 text-center lg:py-6">
        <div className="flex max-w-lg flex-col items-center justify-center">
          <img className="rounded w-9/12" src={project.projectBgImg} alt={project.projectName} />
          <div className="space-y-2 p-4">
            <a className="text-2xl hover:text-blue-500 font-hero-title lg:text-3xl" href={project.projectLink} target="_blank">
              {project.projectName}
            </a>
            <p className="font-hero-text tracking-wider px-8">{project.projectText}</p>
          </div>
        </div>
      </div>
    );
  });
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center gap-4 bg-white py-20 px-4 text-center"
    >
      <h2 className="mb-10 text-center font-hero-text text-4xl tracking-wider text-black lg:text-6xl">PROJECTS</h2>
      <div className='lg:grid lg:grid-cols-2 lg:gap-6 lg:items-start'>{projectList}</div>
      <div className="relative top-10">
        <ArrowUp elementTarget="#top" />
      </div>
    </section>
  );
};

export default Projects;
