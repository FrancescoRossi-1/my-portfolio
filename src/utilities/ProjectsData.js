import pizzeriaImg from '../assets/img/laPizzeria.png'
import InpsLogo from '../assets/img/INPS_logo.png';
import AdmLogo from '../assets/img/logo_adm.png'

const projectsData = [
    {
        id: 8,
        name: "Cassetto Artigiani e Commercianti",
        client: "INPS",
        company: "Sistemi Informativi S.r.l.",
        image: InpsLogo,
        technologies: "Java - Spring Boot - JPA - Hibernate - Redis Caching - Azure DevOps - JUnit - Architettura a microservizi",
        description: "In fase di analisi.",
        url: ""
    },
    {
        id: 7,
        name: "Microservizio Dati Pensioni",
        client: "INPS",
        company: "Sistemi Informativi S.r.l.",
        image: InpsLogo,
        technologies: "Java - Spring Boot - JPA - Hibernate - Redis Caching - Azure DevOps - JUnit - Architettura a microservizi - DB2",
        description: "Con il ruolo di Release Manager gestisco un microservizio che legge, converte ed espone dati di pensioni per applicazioni web dedicate agli operatori INPS.",
        url: ""
    },
    {
        id: 6,
        name: "Nuovo SUGI",
        client: "INPS",
        company: "Sistemi Informativi S.r.l.",
        image: InpsLogo,
        technologies: "Java - Spring Boot - Artemis - JPA - Hibernate - Angular - Guava Cache - Azure DevOps - JUnit - Karma - Architettura a microservizi",
        description: "Sviluppi BE ed FE per il progetto Nuovo SUGI, una piattaforma che espone API, fornisce interfacce grafiche per cittadini, consulenti ed operatori e gestisce l'invio e la ricezione di messaggi su code Artemis e molto altro ancora.",
        url: "https://www.inps.it/content/inps-site/it/it/inps-comunica/notizie/dettaglio-news-page.news.2023.11.pnrr-operativo-il-progetto-cambio-ente-pagatore-.html"
    },
    {
        id: 5,
        name: "Casellario Assistenza INTRANET",
        client: "INPS",
        company: "Sistemi Informativi S.r.l.",
        image: InpsLogo,
        technologies: "Java - Database Microsoft SQL - Apache POI - Angular - Azure DevOps - Spring Boot - Store Procedure",
        description: "Manutenzione e reingegnerizzazione in architettura microservizi Java Spring Boot di un'applicazione per gli operatori INPS che consente di consultare tutte le prestazioni sociali erogate per: ENTE, BENEFICIARIO e PRESTAZIONE",
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
        name: "Cassetto e Fascicolo Previdenziale Autonomi Agricoli",
        client: "INPS",
        company: "Sistemi Informativi S.r.l.",
        image: InpsLogo,
        technologies: "Java - Spring MVC - Hibernate - JPA - Database Microsoft SQL - Database DB2 - JBOSS - SOAP - Bootstrap",
        description: "Analisi, sviluppo, refactoring e porting su Application Server JBoss di due applicazioni monolitiche Spring MVC, una per cittadini, consulenti e una per operatori INPS.",
        url: ""
    },
    {
        id: 2,
        name: "Cassetto e Fascicolo Previdenziale Aziende Agricole",
        client: "INPS",
        company: "Sistemi Informativi S.r.l.",
        image: InpsLogo,
        technologies: "Java - Spring MVC - Hibernate - JPA - Database Microsoft SQL - Database DB2 - JBOSS - SOAP - Bootstrap",
        description: "Analisi, sviluppo, refactoring e porting su Application Server JBoss di due applicazioni monolitiche Spring MVC, una per cittadini, consulenti e una per operatori INPS.",
        url: ""
    },
    {
        id: 1,
        name: "Beneficiari Ucraina",
        client: "Agenzia Delle Dogane E Dei Monopoli",
        company: "Exolab S.r.l.",
        image: AdmLogo,
        technologies: "Java - Database Oracle - JSF - Primefaces - MyBatis",
        description: "Sviluppo di un'applicazione che consente di censire le donazioni esenti da dazi doganali e IVA per l'importazione di merce o beni messi a disposizione gratuitamente alle persone in fuga dalla guerra in Ucraina.",
        url: ""
    },
    {
        id: 0,
        name: "OTELLO",
        client: "Agenzia Delle Dogane E Dei Monopoli",
        company: "Exolab S.r.l.",
        image: AdmLogo,
        technologies: "Java - Database Oracle - JSF - Primefaces - MyBatis",
        description: "Sviluppo di un'applicazione per viaggiatori che consente agli utenti di ottenere il rimborso dell'IVA sui beni acquistati.",
        url: ""
    },
]

export default projectsData;