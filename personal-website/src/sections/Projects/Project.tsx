import "./Project.css";

type ProjectProps = {
  project: {
    title: string;
    description: string;
    technologies: string[];
    thumbnail: string;
    link: string;
  };
};

const Project: React.FC<ProjectProps> = ({ project }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-md p-6 text-gray-200 font-robotoMono flex flex-col md:flex-row gap-6">
      {/* Thumbnail */}
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-shrink-0 w-full md:w-1/3"
      >
        <img
          src={project.thumbnail}
          alt={`${project.title} thumbnail`}
          className="w-full h-auto object-cover rounded-lg hover:opacity-90 transition-opacity"
        />
      </a>

      {/* Project Details */}
      <div className="flex flex-col justify-between md:w-2/3">
        {/* Project Title */}
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-rose-500">{project.title}</h2>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-300 leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Technologies */}
        <div>
          <h3 className="text-sm font-bold text-gray-400 mb-2">
            Technologies:
          </h3>
          <ul className="list-disc list-inside grid grid-cols-2 gap-y-1 marker:text-rose-500">
            {project.technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Project;
