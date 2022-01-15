import React from "react";

function ProjectItem({ project }) {
    let frontEnd = ``;
    let backEnd = ``;
    project.technololy.front.forEach((tech) => (frontEnd += tech + ", "));
    project.technololy.back.forEach((tech) => (backEnd += tech + ", "));
    return (
        <div className="project__item">
            <h1>{project.title}</h1>
            <p>{project.content}</p>
            <strong>Technology:</strong>
            <p>Front end: {frontEnd}</p>
            <p>Back end: {backEnd}</p>
            <p>
                <strong>SourceCode:</strong> {project.source}
                <a
                    href={project.source}
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    Goto
                </a>
            </p>
            <p>
                <strong>Live demo:</strong> {project.demo}
                <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    Goto
                </a>
            </p>
        </div>
    );
}

export default ProjectItem;
