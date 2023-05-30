import projectsData from "../utilities/ProjectsData";
import ProjectCard from "./ProjectCard";
import { Carousel } from "react-responsive-carousel";

const ProjectCarousel = () => {
    return (
        <div className="container-fluid colore-secondario text-center pt-3 mb-0">
            <div className="row mt-3 mb-0">
                <div className="col-lg-6 col-sm-12 justify-content-center d-flex mx-auto">
                    <h3 className="text-white">Progetti Svolti</h3>
                </div>
            </div>
            <div className="row mt-3 mb-0 pb-3">
                <div className="col-sm-12 col-lg-6 d-flex mx-auto justify-content-center">
                    <Carousel showArrows={true} infiniteLoop={true} showStatus={false} stopOnHover={true} autoPlay={true} showThumbs={false} className="mb-3 w-100">
                        {projectsData.map((project) => (
                            <div key={project.id}>
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
                    </Carousel>
                </div>
            </div>
        </div>
    )
}
export default ProjectCarousel;