import { PROGETTI_TAB } from "../utilities/Constants";
import projectsData from "../utilities/ProjectsData";
import NavBar from "./Navbar";
import ProjectCard from "./ProjectCard";

const ProgettiComponent = () => {

    return (
        <>
        <NavBar activeItem={PROGETTI_TAB} />
        <div className="container-fluid mt-4">
        <div className='row mb-3 justify-content-center d-flex'>
            <div className='col-sm-12 col-lg-6 text-center'>
                <h2>Progetti svolti</h2>
            </div>
        </div>
        <div className="row">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {projectsData.map((project) => (
            <div key={project.id} className="col mb-4">
                <ProjectCard
                    name={project.name}
                    client={project.client}
                    company={project.company}
                    image={project.image}
                    technologies={project.technologies}
                    description={project.description}
                    url={project.url}
                />
            </div>
            ))}
        </div>
        </div>
        </div>
        </>
    );
}
 
export default ProgettiComponent;