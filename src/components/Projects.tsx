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
        <div className="flex max-w-lg flex-col items-center justify-center lg:px-4">
          <img
            className="w-full rounded-lg rounded-b-none shadow-lg"
            src={project.projectBgImg}
            alt={project.projectName}
          />
          <div className="s w-full space-y-2 border-[1px] border-t-0 border-white p-4 shadow-xl">
            <a
              className="font-hero-title text-3xl text-blue-500 underline underline-offset-4 hover:text-blue-700 md:text-4xl"
              href={project.projectLink}
              target="_blank"
            >
              {project.projectName}
            </a>
            <p className="px-8 font-hero-text tracking-wider">{project.projectText}</p>
          </div>
        </div>
      </div>
    );
  });
  return (
    <section className="flex flex-col items-center justify-center gap-4 bg-white px-20 py-20 text-center">
      <h2 className="mb-10 text-center font-hero-text text-4xl tracking-wider text-black lg:text-6xl">PROJECTS</h2>
      <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-6">{projectList}</div>
    </section>
  );
};

export default Projects;
