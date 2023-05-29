import React from "react";

const ProjectCard = ({
    name,
    client,
    company,
    image,
    technologies,
    description,
    url,
}) => {
    return (
        <div className="card mb-5">
            <img src={image} className="project-logo card-img-top img-fluid align-self-center" alt={name} />
            <div className="card-body border-top">
                <h5 className="card-title"><strong>{name}</strong></h5>
                <p className="card-text"> <strong>Cliente:</strong> {client}</p>
                <p className="card-text"><strong>Azienda Datrice:</strong> {company}</p>
                <p className="card-text"><strong>Tecnologie Utilizzate:</strong> {technologies}</p>
                <p className="card-text">{description}</p>
                {url && (
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        Vai al progetto
                    </a>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;