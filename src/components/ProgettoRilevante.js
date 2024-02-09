import { FaProjectDiagram } from 'react-icons/fa';
import projectArray from '../utilities/ProjectsData';
import ProjectCard from './ProjectCard';
import { Link } from 'react-router-dom';

const ProgettoRilevante = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row align-items-stretch">
          <div className="col-lg-6 col-sm-12 d-flex flex-column justify-content-center colore-primario pt-3 pb-3">
            <div className="text-center">
              <h3 className="text-white">Progetto rilevante</h3>
              <p className="text-white">
                Esplora il mio lavoro più recente. Grazie alle ultime tecnologie disponibili sul mercato, INPS ha deciso di creare un portale che possono usare sia i cittadini che tutte le prestazioni. Il portale SUGI è in grado di semplificare molti processi.
              </p>
            </div>
          <Link className="btn btn-primary rounded btn-lg me-lg-2 mb-2 mb-lg-0 button-secondary-pers shadow-lg" to="/projects">
            <FaProjectDiagram/> Visualizza tutti
          </Link>
          </div>
          <div className="col-sm-12 col-lg-6 d-flex justify-content-center pt-2 pb-2 colore-primario">
            <ProjectCard
              name={projectArray[1].name}
              client={projectArray[1].client}
              company={projectArray[1].company}
              image={projectArray[1].image}
              technologies={projectArray[1].technologies}
              description={projectArray[1].description}
              url={projectArray[1].url}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgettoRilevante;