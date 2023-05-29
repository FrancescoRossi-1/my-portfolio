import Header from "./Header";
import workExperiencesData from '../utilities/WorkExperienceData';
import { useEffect, useState } from "react";
import WorkExperience from "./WorkExperience";
import { Link } from "react-router-dom";
import projectsData from "../utilities/ProjectsData";
import ProjectCard from "./ProjectCard";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Home = () => {
    const [currentWorkExperience, setCurrentWorkExperience] = useState(workExperiencesData[0]);

    useEffect(() => {
        var curr = workExperiencesData.find(
            (experience) => experience.endDate === 'IN CORSO'
        );
        console.log("curr: " + curr);
        setCurrentWorkExperience(curr);
    }, []);

    return (
        <>
            <Header />
            <div className="container-fluid px-auto pt-2 shadow colore-secondario w-100">
                <div className="row mb-2 mt-2">
                    <div className="col-lg-6 col-sm-12 text-center w-100">
                        <h3 className="text-white">Esperienza Lavorativa in corso:</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-sm-12 w-100">
                        <WorkExperience
                            key={currentWorkExperience.id}
                            logo={currentWorkExperience.logo}
                            company={currentWorkExperience.company}
                            role={currentWorkExperience.role}
                            startDate={currentWorkExperience.startDate}
                            endDate={currentWorkExperience.endDate}
                            description={currentWorkExperience.description}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-sm-12 w-100 justify-content-center d-flex mb-3">
                        <Link
                            className="btn btn-primary rounded btn-lg me-lg-2 mb-2 mb-lg-0 button-secondary-pers shadow-lg"
                            to="/job"
                        >
                            Visualizza Altro
                        </Link>
                    </div>
                </div>
            </div>
            <div className="row mt-3 w-100 justify-content-center mx-auto">
                <div className="col-lg-6 col-sm-12 text-center">
                    <p className="text-primary-pers"><strong>Benvenuto nel mio portfolio!</strong></p>
                    <p className="text-primary-pers">Sono uno sviluppatore Java e questo è il mio spazio virtuale che uso per condividere le mie esperienze, progetti e competenze nel campo dello sviluppo software. Attraverso questo sito, ti invito ad esplorare il mio percorso professionale e le mie realizzazioni nel mondo dello sviluppo Java. Sono appassionato di creare soluzioni innovative e di apprendere costantemente nuove tecnologie. Spero che questo portfolio possa darvi un'idea del mio impegno, delle mie abilità e del mio potenziale come sviluppatore. Grazie per la visita e non esitare a contattarmi per ulteriori informazioni o opportunità di collaborazione.</p>
                </div>
            </div>
            <div className="container-fluid colore-secondario text-center pt-3 mb-0">
                <div className="row mt-3 mb-0">
                    <div className="col-lg-6 col-sm-12 justify-content-center d-flex mx-auto">
                        <h3 className="text-white">Progetti Svolti</h3>
                    </div>
                </div>
                <div className="row mt-3 mb-0 pb-3">
                    <div className="col-sm-12 col-lg-6 d-flex mx-auto justify-content-center">
                    <Carousel showArrows={true} showStatus={false} stopOnHover={true} autoPlay={true} showThumbs={false} className="mb-3 w-100">
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
        </>
    )
}
export default Home;