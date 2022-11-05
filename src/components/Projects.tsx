import { useState } from 'react';
import { TbTools } from 'react-icons/tb';
import { CgClose } from 'react-icons/cg';

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
  const [showTechStack, setShowTechStack] = useState(false);

  const handleShowTechStack = () => {
    setShowTechStack(!showTechStack);
  };

  const projectList = projects.map((project) => {
    return (
      <div
        key={project.id}
        className="relative mb-20 flex h-full w-full flex-col items-center justify-between bg-white text-center shadow-lg hover:cursor-pointer hover:bg-slate-50 hover:shadow-xl active:shadow-lg lg:mb-0"
      >
        <a
          href={project.projectLink}
          className="hover:text-blue-700 focus:outline-blue-700 active:text-blue-900 active:outline-blue-700"
          target="_blank"
        >
          <div className="flex h-full flex-col items-center">
            <img
              className="h-full w-full rounded-lg rounded-b-none"
              src={project.projectBgImg}
              alt={project.projectName}
            />
            <div className="w-full space-y-2 border-[1px] border-t-0 border-white py-8 px-4">
              <p className="mb-4 text-2xl tracking-wider text-blue-700 focus:text-blue-900 active:text-blue-900 md:text-3xl">
                {project.projectName.toUpperCase()}
              </p>
              <p className="px-8">{project.projectText}</p>
            </div>
          </div>
        </a>

        <div
          className={`${showTechStack ? 'absolute' : 'hidden'} top-0 left-0 flex h-full w-full bg-blue-800 text-white
          opacity-95`}
        >
          <ul className={`flex w-full flex-col items-center justify-center gap-4`}>
            {project.projectTech.map((tech) => {
              return (
                <li key={tech} className={`tracking-wide text-white`}>
                  {tech.toUpperCase()}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  });
  return (
    <section className="flex h-full w-full flex-col items-center justify-center gap-2 bg-white px-4 py-20 text-center md:px-32 lg:py-40">
      <h2 className="mb-20 text-center font-hero-text text-4xl tracking-wider text-black lg:mb-32 lg:text-6xl">
        PROJECTS
      </h2>
      <div className="place-self-end">
        <div
          className={`${showTechStack ? 'hidden' : ' animate-pulse text-blue-500'} m-10 hover:text-blue-500`}
          onClick={handleShowTechStack}
        >
          <TbTools size={30} />
        </div>
        <div onClick={handleShowTechStack} className={`${showTechStack ? 'block' : 'hidden'} m-10 hover:text-blue-500`}>
          <CgClose size={30} />
        </div>
      </div>
      <div className="md:pl-10 lg:grid lg:grid-cols-2 lg:items-start lg:gap-10 xl:grid-cols-3">{projectList}</div>
    </section>
  );
};

export default Projects;
