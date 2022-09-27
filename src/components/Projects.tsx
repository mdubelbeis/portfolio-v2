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
        className="mb-20 flex w-full flex-col items-center justify-center bg-white text-center shadow-lg hover:shadow-xl active:shadow-lg lg:mb-0"
      >
        <a
          href={project.projectLink}
          className="hover:bg-slate-100 hover:text-blue-700 hover:outline-blue-700 focus:outline-blue-700 active:text-blue-900 active:outline-blue-700"
          target="_blank"
        >
          <div className="flex max-h-fit flex-col items-center justify-center">
            <img className="w-full rounded-lg rounded-b-none" src={project.projectBgImg} alt={project.projectName} />
            <div className="w-full space-y-2 border-[1px] border-t-0 border-white py-8 px-4">
              <p className="font-cursive text-2xl font-thin tracking-wider text-blue-700 underline underline-offset-4 focus:text-blue-900 active:text-blue-900  md:text-3xl">
                {project.projectName}
              </p>
              <p className="px-8 font-hero-text">{project.projectText}</p>
            </div>
          </div>
          <ul className="mb-2 flex items-center justify-center gap-4 font-hero-text">
            {project.projectTech.map((tech) => {
              return <li className="tracking-wide text-blue-800">{tech}</li>;
            })}
          </ul>
        </a>
      </div>
    );
  });
  return (
    <section className="flex h-full w-full flex-col items-center justify-center gap-2 bg-white px-4 py-20 text-center md:px-32 lg:py-40">
      <h2 className="mb-20 text-center font-hero-text text-4xl tracking-wider text-black lg:mb-32 lg:text-6xl">
        PROJECTS
      </h2>
      <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-6 xl:grid-cols-3">{projectList}</div>
    </section>
  );
};

export default Projects;
