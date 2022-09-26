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
      <div
        key={project.id}
        className="mb-20 flex flex-col items-center justify-center bg-white py-4 text-center lg:mb-0 lg:py-6"
      >
        <a href={project.projectLink} className="hover:border-slate-400 hover:text-blue-800" target="_blank">
          <div className="flex max-w-2xl flex-col items-center justify-center lg:px-4">
            <img className="w-full rounded-lg rounded-b-none" src={project.projectBgImg} alt={project.projectName} />
            <div className="w-full space-y-2 border-[1px] border-t-0 border-white p-4 shadow-xl hover:bg-slate-100">
              <a
                className="font-hero-title text-3xl text-blue-500 underline underline-offset-4 hover:text-blue-700 md:text-4xl"
                href={project.projectLink}
                target="_blank"
              >
                {project.projectName}
              </a>
              <p className="px-8 font-hero-text tracking-wider">{project.projectText}</p>
              <ul className="flex items-center justify-center gap-4 font-hero-text">
                {project.projectTech.map((tech) => {
                  return <li className="p-6 tracking-wider text-blue-800">{tech}</li>;
                })}
              </ul>
            </div>
          </div>
        </a>
      </div>
    );
  });
  return (
    <section className="flex h-full w-full flex-col items-center justify-center gap-2 bg-white px-4 py-20 text-center md:px-32">
      <h2 className="mb-10 text-center font-hero-text text-4xl tracking-wider text-black lg:text-6xl">PROJECTS</h2>
      <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-6 xl:grid-cols-3">{projectList}</div>
    </section>
  );
};

export default Projects;
