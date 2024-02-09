import projectArray from '../utilities/ProjectsData';
import ProjectCard from './ProjectCard';

const ProgettoRilevante = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row align-items-stretch">
          <div className="col-lg-6 col-sm-12 d-flex flex-column justify-content-center colore-primario pt-3 pb-3">
            <div className="text-center">
              <h3 className="text-white">Il mio ultimo progetto</h3>
              <p className="text-white">
                Esplora il mio lavoro più recente. Grazie alle ultime tecnologie disponibili sul mercato, INPS ha deciso di creare un portale che possono usare sia i cittadini che tutte le prestazioni. Il portale SUGI è in grado di semplificare molti processi.
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-lg-6 d-flex justify-content-center pt-2 pb-2 colore-primario">
            <ProjectCard
              name={projectArray[6].name}
              client={projectArray[6].client}
              company={projectArray[6].company}
              image={projectArray[6].image}
              technologies={projectArray[6].technologies}
              description={projectArray[6].description}
              url={projectArray[6].url}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgettoRilevante;