import React from 'react';

interface ProjectData {
    title: string;
    text: string;
}

interface ProjectItemProps extends ProjectData {}

const ProjectItem: React.FC<ProjectItemProps> = ({title, text}) => {
    return (
        <div className="rounded-lg p-5 text-gray-900 hover:bg-secondary-magnolia/50 transition-colors duration-300 ease-in-out">
            <h2 className="font-medium text-xl mb-2 uppercase tracking-wider">{title}</h2>
            <p className="text-gray-600">{text}</p>
        </div>
    );
};

interface ProjectsProps {
    projects: ProjectData[];
}

const Projects: React.FC<ProjectsProps> = ({projects}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 py-10 md:px-10">
            {projects.map((project, index) => (
                <ProjectItem key={index} title={project.title} text={project.text} />
            ))}
        </div>
    );
};

export { Projects };
