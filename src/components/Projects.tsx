import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    // 🔹 Progetti Personali
    {
      title: "SpotifAI",
      description:
        "Progetto vincitore dell’Hackathon IBM Agentic AI 2025. Piattaforma multi-agente che analizza brani musicali sfruttando AWS Bedrock, ICA4AA e tecniche di AI generativa per comprendere testi, tono ed emozioni.",
      tech: [
        "AWS Lambda",
        "Bedrock",
        "ICA4AI",
        "Python",
        "FastAPI",
        "S3",
        "Transcribe",
      ],
      github: "",
      demo: null,
    },
    {
      title: "Portfolio Personale",
      description:
        "Sito web sviluppato con React, TailwindCSS e Vite. Presenta la mia esperienza, i progetti e i traguardi principali con un design moderno, animazioni fluide e architettura modulare.",
      tech: ["React", "TailwindCSS", "Vite", "TypeScript", "Lucide Icons"],
      github: "https://github.com/FrancescoRossi-1/my-portfolio",
    },
    {
      title: "Pizzeria Template",
      description:
        "Template React per un sito vetrina dedicato a una pizzeria, con integrazione di Google Places API, layout responsive e animazioni leggere. Pubblicato su Netlify come demo.",
      tech: ["React", "Bootstrap", "Google Places API", "Netlify"],
      demo: "https://lapizzeriatemplate.netlify.app/",
    },

    // 🔹 Progetti Enterprise (Sistemi Informativi)
    {
      title: "Reingegnerizzazione Applicazioni Legacy",
      description:
        "Attività di refactoring e migrazione di applicazioni monolitiche Java verso architetture a microservizi Spring Boot. Analisi funzionale, sviluppo BE/FE, testing automatizzato e deployment su pipeline Azure DevOps.",
      tech: [
        "Java",
        "Spring Boot",
        "Angular",
        "SQL Server",
        "DB2",
        "Azure DevOps",
        "JUnit",
      ],
      github: "",
      demo: null,
    },
    {
      title: "Consultazione e Gestione Pensioni",
      description:
        "Sviluppo e manutenzione di servizi e interfacce per la consultazione e la gestione di dati pensionistici, con funzioni avanzate di ricerca, caching e esposizione di API REST sicure e performanti.",
      tech: [
        "Java",
        "Spring Boot",
        "JPA",
        "Hibernate",
        "Redis Caching",
        "Swagger",
      ],
      github: "",
      demo: null,
    },
    {
      title: "Gestione Flussi e Messaggistica Asincrona",
      description:
        "Progettazione di microservizi per l’elaborazione asincrona di eventi tramite code Artemis MQ. Integrazione di listener JMS con acknowledgment manuale e gestione transazionale dei messaggi.",
      tech: [
        "Java",
        "Spring Boot",
        "Artemis MQ",
        "JMS",
        "Azure DevOps",
        "JUnit",
      ],
      github: "",
      demo: null,
    },
    {
      title: "Applicazioni di Consultazione Dati e Reportistica",
      description:
        "Sviluppo di moduli web per la consultazione di dati anagrafici e statistici della Pubblica Amministrazione. Creazione di API e front-end interattivi per operatori interni.",
      tech: [
        "Java",
        "Spring Boot",
        "Angular",
        "Microsoft SQL Server",
        "Apache POI",
      ],
      github: "",
      demo: null,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/20 relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Progetti</h2>
          <p className="text-muted-foreground text-lg">
            Una selezione dei miei lavori più rappresentativi
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border hover:border-primary transition-smooth group animate-fade-in-up flex flex-col"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-smooth">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 flex-grow leading-relaxed">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-2 mt-auto">
                {project.github && (
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 gap-2"
                    asChild
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </Button>
                )}
                {project.demo && (
                  <Button size="sm" className="flex-1 gap-2" asChild>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;