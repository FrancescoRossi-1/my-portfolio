import { FaFilePdf } from 'react-icons/fa';
import CvIta from '../assets/pdf/CV_ROSSI_FRANCESCO.pdf';
import CvEng from '../assets/pdf/CV_ROSSI_FRANCESCO_ENG.pdf';

const WelcomeComponent = () => {
    return (
        <div className="container-fluid">
            <div className="row mt-3 w-100 justify-content-center mx-auto">
                <div className="col-lg-6 col-sm-12 text-center">
                    <p className="text-primary-pers"><strong>Benvenuto nel mio portfolio!</strong></p>
                    <p className="text-primary-pers">Sono uno sviluppatore Java e questo è il mio spazio virtuale che uso per condividere le esperienze, progetti e competenze nel campo dello sviluppo software. Spero che questo portfolio possa darti un'idea del mio impegno, delle mie abilità e del mio potenziale come sviluppatore. Grazie per la visita e non esitare a contattarmi per ulteriori informazioni o opportunità di collaborazione.</p>
                    <p className="text-primary-pers"><strong>Se vuoi saperne di più, scarica il mio CV!</strong></p>
                </div>
            </div>
            <div className="row mb-3 justify-content-center mx-auto text-center mt-2">
                <div className="col-sm-12 col-md-6 mb-3">
                    <button className="btn btn-primary button-secondary-pers" onClick={() => window.open(CvIta, "_blank")}>
                        <FaFilePdf className="me-2" />
                        Scarica CV in italiano
                    </button>
                </div>
                <div className="col-sm-12 col-md-6 mb-3">
                    <button className="btn btn-primary button-secondary-pers" onClick={() => window.open(CvEng, "_blank")}>
                        <FaFilePdf className="me-2" />
                        Download CV in english
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WelcomeComponent;