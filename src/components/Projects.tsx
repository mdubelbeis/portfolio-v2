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
      <section key={project.id} className="h-fit flex flex-col">
        <div>
          <img src={project.projectBgImg} alt={project.projectName} />
        </div>
        <div>
          <a href={project.projectLink} target="_blank">
            {project.projectName}
          </a>
        </div>
        <div>
          <p>{project.projectText}.</p>
          <ul>
            <li>
              {project.projectTech.map((tech) => {
                return <span>{tech}</span>;
              })}
            </li>
          </ul>
        </div>
      </section>
    );
  });
  return (
    <section id="projects" className="h-screen bg-white">
      <h2 className="text-center text-3xl text-black">PROJECTS</h2>
      {projectList}
    </section>
  );
};

export default Projects;
