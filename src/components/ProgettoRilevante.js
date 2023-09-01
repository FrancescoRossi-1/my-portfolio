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
                Esplora il mio lavoro più recente. Grazie alle ultime tecnologie disponibili sul mercato, ho cercato di creare un template per il sito web di una pizzeria. Accedi al sito web per scoprire quali risultati ho ottenuto.
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-lg-6 d-flex justify-content-center pt-2 pb-2 colore-primario">
            <ProjectCard
              name={projectArray[0].name}
              client={projectArray[0].client}
              company={projectArray[0].company}
              image={projectArray[0].image}
              technologies={projectArray[0].technologies}
              description={projectArray[0].description}
              url={projectArray[0].url}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgettoRilevante;