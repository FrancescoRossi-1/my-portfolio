import { Link } from 'react-router-dom';
import { CHISONO_TAB, CONTATTI_TAB, ESPERIENZE_TAB } from '../utilities/Constants';
import ProfilePicture from '../assets/img/profile_picture.jpg';

const NavBar = ({ activeItem }) => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary colore-primario">
            <div className="container d-flex">
                <Link className="navbar-brand d-flex align-items-center mx-auto row" to="/">
                    <div className="col-sm-12 col-md-6 col-lg-5 justify-content-center mx-auto d-flex">
                        <img src={ProfilePicture} alt="Pizzeria" className="logo rounded" />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-7 justify-content-center mx-auto d-flex">
                        <div className="ms-2 d-flex flex-column">
                            <div className="text-white text-nowrap">
                                <h1 className="m-0">Francesco Rossi</h1>
                            </div>
                            <div className="text-muted text-truncate">
                                <h2 className="m-0">Software Developer</h2>
                            </div>
                        </div>
                    </div>
                </Link>
                <div className="navbar-collapse justify-content-center">
                    <ul className="navbar-nav text-center text-lg-start">
                        <li className="nav-item">
                            <Link
                                className={`btn btn-primary rounded btn-lg me-lg-2 mb-2 mb-lg-0 button-primary-pers shadow-lg ${activeItem === ESPERIENZE_TAB ? 'nav-active' : ''
                                    }`}
                                aria-current={activeItem === ESPERIENZE_TAB ? 'page' : undefined}
                                to="/job"
                            >
                                Lavoro
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={`btn btn-primary rounded btn-lg me-lg-2 mb-2 mb-lg-0 button-primary-pers shadow-lg ${activeItem === CHISONO_TAB ? 'nav-active' : ''
                                    }`}
                                aria-current={activeItem === CHISONO_TAB ? 'page' : undefined}
                                to="/about"
                            >
                                Chi Sono
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={`btn btn-primary rounded btn-lg navbar-text button-primary-pers shadow-lg ${activeItem === CONTATTI_TAB ? 'nav-active' : ''
                                    }`}
                                aria-current={activeItem === CONTATTI_TAB ? 'page' : undefined}
                                to="/contatti"
                            >
                                Contatti
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;