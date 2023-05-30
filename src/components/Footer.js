import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer colore-primario pt-3 pb-3">
            <div className="container">
                <div className="row">
                    <div className="col text-center text-white">
                        <h4>Seguimi sui social!</h4>
                        <div className="social-icons">
                            <a href="https://github.com/FrancescoRossi-1" target='_blank' rel="noopener noreferrer">
                                <FaGithub className="icon" size={32} color='white'/>
                            </a>
                            <a href="https://www.linkedin.com/in/francesco-rossi-84291b1b3/" target='_blank' rel="noopener noreferrer">
                                <FaLinkedin className="icon" size={32} color='white' />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center text-white">
                        <p>&copy; {currentYear} Francesco Rossi. Tutti i diritti riservati.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;