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
      <div key={project.id} className="flex flex-col items-center justify-center bg-white py-4 text-center">
        <div>
          <img className="rounded" src={project.projectBgImg} alt={project.projectName} />
          <div className="space-y-2 p-4">
            <a className="text-xl hover:text-blue-500" href={project.projectLink} target="_blank">
              {project.projectName}
            </a>
            <p>{project.projectText}.</p>
          </div>
        </div>
      </div>
    );
  });
  return (
    <section id="projects" className="flex flex-col items-center justify-center gap-4 bg-white py-20 px-4 text-center">
      <h2 className="mb-10 text-center text-3xl text-black">PROJECTS</h2>
      {projectList}
      <ArrowUp top="top-12" elementTarget="#top" />
    </section>
  );
};

export default Projects;
