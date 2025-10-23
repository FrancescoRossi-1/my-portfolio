import { Briefcase, MapPin, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      role: "Application Developer – Java & Web Technologies",
      company: "Sistemi Informativi, an IBM Company",
      period: "Novembre 2022 – Presente",
      location: "Roma, Italia",
      description:
        "Sviluppo e reingegnerizzazione di applicazioni enterprise per la Pubblica Amministrazione, utilizzando Java, Spring Boot e Angular. Adozione di metodologie Agile e pipeline DevOps per garantire qualità, sicurezza e scalabilità del software.",
      technologies: [
        "Java",
        "Spring Boot",
        "Angular",
        "SQL Server",
        "DB2",
        "Azure DevOps",
        "JUnit",
      ],
    },
    {
      role: "Java Developer",
      company: "Exolab S.r.l.",
      period: "Febbraio 2022 – Novembre 2022",
      location: "Roma, Italia",
      description:
        "Sviluppo e manutenzione di applicazioni enterprise per un ente governativo. Attività di integrazione e refactoring su progetti in ambiente Oracle e Java EE.",
      technologies: [
        "Java",
        "JSF",
        "PrimeFaces",
        "MyBatis",
        "Oracle DB",
        "Maven",
        "Git",
      ],
    },
  ];

  const skills = [
    { name: "Backend Development (Java / Spring Boot)", level: 90 },
    { name: "Frontend Development (Angular / TypeScript)", level: 85 },
    { name: "Database & ORM (SQL Server, DB2, Hibernate, JPA)", level: 80 },
    { name: "DevOps & Cloud (Azure DevOps, Google Cloud)", level: 75 },
    { name: "Leadership Tecnica e Mentoring", level: 80 },
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Esperienza Professionale
          </h2>
          <p className="text-muted-foreground text-lg">
            Il mio percorso e le competenze che metto in campo ogni giorno
          </p>
        </div>

        {/* Grid: Experience + Skills */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Left Column - Esperienze */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="p-8 bg-card border-border hover:border-primary transition-smooth animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                    <p className="text-primary font-semibold">{exp.company}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mt-2">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" /> {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" /> {exp.location}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Right Column - Info & Skills */}
          <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            {/* Info Card */}
            <Card className="p-8 bg-card border-border space-y-4">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-gradient-to-b from-primary to-secondary rounded-full" />
                Informazioni Personali
              </h3>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex justify-between">
                  <span className="font-semibold">Email:</span>
                  <span>francesco.rossip1@gmail.com</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Località:</span>
                  <span>Roma, Italia</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Ruolo attuale:</span>
                  <span>Application Developer</span>
                </div>
              </div>
            </Card>

            {/* Skills Card */}
            <Card className="p-8 bg-card border-border space-y-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-gradient-to-b from-primary to-secondary rounded-full" />
                Competenze Principali
              </h3>
              <div className="space-y-3">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">{skill.name}</span>
                      <span className="text-primary font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;