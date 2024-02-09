import { CHISONO_TAB } from "../utilities/Constants";
import NavBar from "./Navbar";

const ChiSono = () => {
  return (
    <>
      <NavBar activeItem={CHISONO_TAB} />
      <section className="section" style={{minHeight: '50vh'}}>
        <div className="container">
          <div className="row mt-4 mb-4">
            <div className="col-lg-8 offset-lg-2">
              <h2 className="text-center">Chi sono</h2>
              <p className="text-center">
                Sono uno sviluppatore appassionato e creativo con una forte
                conoscenza del linguaggio Java e tecnologie correlate. Ho
                acquisito esperienza nello sviluppo di applicazioni web e
                software attraverso progetti accademici e professionali.
                Adoro risolvere problemi complessi utilizzando
                soluzioni innovative e ottimizzate. Sono sempre alla ricerca
                di nuove sfide e opportunità di apprendimento nel campo dello
                sviluppo software.
              </p>
              <p className="text-center">
                Oltre alle mie competenze tecniche, ho una buona capacità di
                lavorare in team, comunicare in modo efficace e adattarmi a
                nuovi ambienti. Sono in grado di tradurre le esigenze del
                cliente in soluzioni tecniche efficienti e di fornire
                risultati di qualità.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChiSono;