import { useState } from "react";
import { CONTATTI_TAB } from "../utilities/Constants";
import { IoSend } from 'react-icons/io5';
import NavBar from "./Navbar";

const Contatti = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsLoading(true);

        const myForm = event.target;
        const formData = new FormData(myForm);

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString(),
        })
            .then(() => {
                setIsLoading(false);
                setIsSuccess(true);
                setIsError(false);
            })
            .catch((error) => {
                setIsLoading(false);
                setIsError(true);
                setIsSuccess(false);
            });
    };

    return (
        <>
            <NavBar activeItem={CONTATTI_TAB} />
            <div className="container contatti-container mt-5">
                <h1 className="text-center mb-4">Contatti</h1>
                <div className="row">
                <div className="col-lg-6 mb-4">
                        <h3>Inviami un messaggio:</h3>
                        <form onSubmit={handleSubmit} name="contact-portfolio" method="post" data-netlify="true">
                            <input type="hidden" name="form-name" value="contact-portfolio" />
                            <div className="form-group">
                                <label htmlFor="name">Nome:</label>
                                <input type="text" id="name" name="name" className="form-control" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input type="email" id="email" name="email" className="form-control" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Messaggio:</label>
                                <textarea id="message" name="message" className="form-control" rows="5" required></textarea>
                            </div>
                            <div className="form-group mt-2 justify-content-center d-flex">
                                <button type="submit" className="btn btn-primary button-primary-pers" disabled={isLoading}>
                                    {isLoading ? (
                                        <>
                                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                            <span className="visually-hidden">Invio in corso...</span>
                                        </>
                                    ) : (
                                        <>
                                            <IoSend className="icon" />
                                            Invia Messaggio
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                        <div className="text-center mt-2">
                            {isSuccess && <p className="text-success alert alert-success mt-3">Messaggio inviato con successo!</p>}
                            {isError && <p className="text-danger alert alert-danger mt-3">Si è verificato un errore durante l'invio del messaggio.</p>}
                        </div>
                    </div>
                    <div className="col-lg-6 text-center">
                        <h3>Informazioni di contatto:</h3>
                        <p><strong>Email</strong>: francesco.rossip1@gmail.com</p>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Contatti;