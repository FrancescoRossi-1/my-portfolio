import pizzeriaImg from '../assets/img/laPizzeria.png'
import InpsLogo from '../assets/img/INPS_logo.png';
import AdmLogo from '../assets/img/logo_adm.png'

const projectsData = [
    {
        id: 0,
        name: "Sito Web Pizzeria",
        client: "-",
        company: "-",
        image: pizzeriaImg,
        technologies: "React - Netlify - Google Places API - Bootstrap",
        description: "Template per un vero e proprio sito web di una pizzeria.",
        url: "https://lapizzeriatemplate.netlify.app/",
    },
    {
        id: 1,
        name: "Cassetto Previdenziale Aziende Agricole",
        client: "INPS",
        company: "Sistemi Informativi S.r.l.",
        image: InpsLogo,
        technologies: "Java - Spring MVC - Hibernate - JPA - Database Microsoft SQL - Database DB2 - JBOSS - SOAP - Bootstrap",
        description: "Analisi, sviluppo, refactoring e porting su Application Server JBoss di un'applicazione già esistente. L'applicazione consente di consultare diversi dati relativi a prestazioni, cartelle esattoriali, lavoratori, ecc...",
        url: ""
    },
    {
        id: 2,
        name: "Fascicolo Previdenziale Aziende Agricole INTRANET",
        client: "INPS",
        company: "Sistemi Informativi S.r.l.",
        image: InpsLogo,
        technologies: "Java - Spring MVC - Hibernate - JPA - Database Microsoft SQL - Database DB2 - JBOSS - SOAP - Bootstrap",
        description: "Analisi, sviluppo, refactoring e porting su Application Server JBoss di un'applicazione DEDICATA AGLI OPERATORI INPS già esistente. L'applicazione consente di consultare diversi dati relativi a prestazioni, cartelle esattoriali, lavoratori, ecc...",
        url: ""
    },
    {
        id: 3,
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
        name: "Beneficiari Ucraina",
        client: "Agenzia Delle Dogane E Dei Monopoli",
        company: "Exolab S.r.l.",
        image: AdmLogo,
        technologies: "Java - Database Oracle - JSF - Primefaces - MyBatis",
        description: "Sviluppo di un'applicazione che consente di censire le donazioni esenti da dazi doganali e IVA per l'importazione di merce o beni messi a disposizione gratuitamente alle persone in fuga dalla guerra in Ucraina.",
        url: ""
    },
    {
        id: 5,
        name: "OTELLO",
        client: "Agenzia Delle Dogane E Dei Monopoli",
        company: "Exolab S.r.l.",
        image: AdmLogo,
        technologies: "Java - Database Oracle - JSF - Primefaces - MyBatis",
        description: "Sviluppo di un'applicazione per viaggiatori che consente agli utenti di ottenere il rimborso dell'IVA sui beni acquistati.",
        url: ""
    },
    {
        id: 6,
        name: "Nuovo SUGI",
        client: "INPS",
        company: "Sistemi Informativi S.r.l.",
        image: InpsLogo,
        technologies: "Java - Spring Boot - Artemis - JPA - Hibernate - Angular - Guava Cache - Azure DevOps - JUnit - Karma - Architettura a microservizi",
        description: "Sviluppi BE ed FE per il progetto Nuovo SUGI, una grande piattaforma che consente espone alle prestazioni API, Maschere FE ed eventi Message Broker per poter gestire molto velocemente i pagamenti.",
        url: "https://www.inps.it/content/inps-site/it/it/inps-comunica/notizie/dettaglio-news-page.news.2023.11.pnrr-operativo-il-progetto-cambio-ente-pagatore-.html"
    },
    {
        id: 7,
        name: "Microservizio Dati Pensioni",
        client: "INPS",
        company: "Sistemi Informativi S.r.l.",
        image: InpsLogo,
        technologies: "Java - Spring Boot - Artemis - JPA - Hibernate - Redis Caching - Azure DevOps - JUnit - Karma - Architettura a microservizi",
        description: "Sviluppi BE di un microservizio che legge, converte ed espone dati per diverse applicazioni FE per operatori INPS",
        url: ""
    },
]

export default projectsData;