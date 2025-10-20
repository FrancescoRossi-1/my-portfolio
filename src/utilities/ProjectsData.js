import pizzeriaImg from '../assets/img/laPizzeria.png'
import sistinfLogo from '../assets/img/Logo SI_AnIBM.png'
import exloabLogo from '../assets/img/exolab-logo.png'

const projectsData = [
    {
        id: 8,
        name: "Portale Contributivo",
        client: "Ente Pubblico Nazionale",
        company: "Sistemi Informativi S.r.l.",
        image: sistinfLogo,
        technologies: "Java - Spring Boot - JPA - Hibernate - Redis Caching - Azure DevOps - JUnit - Architettura a microservizi",
        description: "Progetto di analisi e sviluppo di un portale dedicato alla gestione e consultazione di dati contributivi.",
        url: ""
    },
    {
        id: 7,
        name: "Servizi Pensionistici",
        client: "Ente Pubblico Nazionale",
        company: "Sistemi Informativi S.r.l.",
        image: sistinfLogo,
        technologies: "Java - Spring Boot - JPA - Hibernate - Redis Caching - Azure DevOps - JUnit - Architettura a microservizi - DB2",
        description: "Gestione e manutenzione di un microservizio che espone dati a diverse applicazioni interne.",
        url: ""
    },
    {
        id: 6,
        name: "Portale Multiutenza",
        client: "Ente Pubblico Nazionale",
        company: "Sistemi Informativi S.r.l.",
        image: sistinfLogo,
        technologies: "Java - Spring Boot - Artemis - JPA - Hibernate - Angular - Guava Cache - Azure DevOps - JUnit - Karma - Architettura a microservizi",
        description: "Sviluppo back-end e front-end di una piattaforma modulare per la gestione di flussi informativi multiutenza.",
        url: ""
    },
    {
        id: 5,
        name: "Gestione Prestazioni",
        client: "Ente Pubblico Nazionale",
        company: "Sistemi Informativi S.r.l.",
        image: sistinfLogo,
        technologies: "Java - Microsoft SQL Server - Apache POI - Angular - Azure DevOps - Spring Boot - Store Procedure",
        description: "Reingegnerizzazione in architettura a microservizi di un’applicazione per la gestione e la consultazione di dati interni.",
        url: ""
    },
    {
        id: 4,
        name: "Sito Web Pizzeria",
        client: "-",
        company: "-",
        image: pizzeriaImg,
        technologies: "React - Netlify - Google Places API - Bootstrap",
        description: "Template per un vero e proprio sito web di una pizzeria.",
        url: "https://lapizzeriatemplate.netlify.app/",
    },
    {
        id: 3,
        name: "Gestione Contributi Agricoli",
        client: "Ente Pubblico Nazionale",
        company: "Sistemi Informativi S.r.l.",
        image: sistinfLogo,
        technologies: "Java - Spring MVC - Hibernate - JPA - Microsoft SQL - DB2 - JBoss - SOAP - Bootstrap",
        description: "Analisi e refactoring di applicazioni monolitiche in ottica modernizzazione tecnologica e porting su JBoss.",
        url: ""
    },
    {
        id: 1,
        name: "Gestione Donazioni Umanitarie",
        client: "Amministrazione Statale",
        company: "Exolab S.r.l.",
        image: exloabLogo,
        technologies: "Java - Oracle DB - JSF - Primefaces - MyBatis",
        description: "Sviluppo di un’applicazione per la gestione e il monitoraggio delle donazioni a scopo umanitario.",
        url: ""
    },
    {
        id: 0,
        name: "Portale Rimborso IVA",
        client: "Amministrazione Statale",
        company: "Exolab S.r.l.",
        image: exloabLogo,
        technologies: "Java - Oracle DB - JSF - Primefaces - MyBatis",
        description: "Sviluppo di un sistema per la gestione digitale delle richieste di rimborso IVA da parte dei viaggiatori.",
        url: ""
    },
]

export default projectsData;