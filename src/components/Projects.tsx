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
      <div key={project.id} className="flex flex-col items-center justify-center gap-4 bg-white text-center">
        <div>
          <img src={project.projectBgImg} alt={project.projectName} />
          <a className="text-xl" href={project.projectLink} target="_blank">
            {project.projectName}
          </a>
          <p>{project.projectText}.</p>
        </div>
      </div>
    );
  });
  return (
    <section id="projects" className="flex flex-col items-center justify-center gap-4 bg-white text-center py-20 px-4">
      <h2 className="text-center text-3xl text-black mb-20">PROJECTS</h2>
      {projectList}
      <ArrowUp top="top-12" elementTarget="#top" />
    </section>
  );
};

export default Projects;
