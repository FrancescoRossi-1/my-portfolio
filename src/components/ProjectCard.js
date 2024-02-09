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
        <div className="project-card shadow">
            <div className="row colore-terziario rounded d-flex justify-content-center align-items-center p-2 mb-3 w-100">
                <h5 className="project-title col-sm-12 col-md-6 text-white">{name}</h5>
                <img src={image} className="project-logo col-sm-12 col-md-6" alt={name} />
            </div>
            <div className="project-info">
                <p className="project-details">Cliente: <strong> {client} </strong></p>
                <p className="project-details">Azienda Datrice:<strong> {company} </strong> </p>
                <p className="project-details">Tecnologie Utilizzate: <strong> {technologies} </strong></p>
                <p className="project-description">{description}</p>
                {url && (
                    <a href={url} target="_blank" rel="noopener noreferrer" className="project-link">
                        Vai al progetto
                    </a>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;
