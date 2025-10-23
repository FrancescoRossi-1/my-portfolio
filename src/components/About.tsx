import { Code2, Users, Zap, BookOpen } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Full-Stack Development",
      description:
        "Esperienza nello sviluppo back-end e front-end di applicazioni enterprise utilizzando Java, Spring Boot e Angular.",
    },
    {
      icon: Users,
      title: "Team Leadership",
      description:
        "Coordinamento di piccoli team di sviluppo, definizione delle priorità tecniche e promozione delle best practices.",
    },
    {
      icon: Zap,
      title: "Problem Solving",
      description:
        "Approccio analitico e pragmatico nella risoluzione di problematiche complesse e ottimizzazione delle performance applicative.",
    },
    {
      icon: BookOpen,
      title: "Continuous Learning",
      description:
        "Costante aggiornamento professionale attraverso certificazioni cloud e progetti innovativi in ambito AI e microservizi.",
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Chi Sono</h2>
          <p className="text-muted-foreground text-lg">
            La mia storia, le mie competenze e la mia visione professionale
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Bio */}
          <Card className="p-8 bg-card border-border animate-fade-in-up">
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Sono un{" "}
                <span className="text-primary font-semibold">
                  Application Developer
                </span>{" "}
                specializzato in{" "}
                <span className="text-primary font-semibold">
                  Java, Spring Boot e Angular
                </span>
                . Attualmente lavoro in{" "}
                <span className="text-primary font-semibold">
                  Sistemi Informativi (IBM Company)
                </span>
                , dove contribuisco allo sviluppo e alla reingegnerizzazione di
                applicazioni enterprise per la pubblica amministrazione.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Ho una forte passione per l’architettura software, i sistemi
                distribuiti e il cloud. Negli ultimi anni ho maturato esperienza
                nella progettazione di microservizi e nell’integrazione di
                pipeline DevOps basate su Azure. Parallelamente, sto ampliando
                le mie competenze in ambito{" "}
                <span className="text-primary font-semibold">cloud e AI</span>.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Credo nella collaborazione, nella condivisione della conoscenza
                e nella sperimentazione continua. Il mio obiettivo è evolvere
                verso ruoli architetturali, contribuendo alla realizzazione di
                soluzioni innovative, scalabili e ad alto impatto.
              </p>
            </div>
          </Card>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="p-6 bg-card border-border hover:border-primary transition-smooth group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:scale-110 transition-smooth">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <Card
            className="p-8 bg-card border-border animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="w-1 h-8 bg-gradient-to-b from-primary to-secondary rounded-full" />
              Certificazioni e Riconoscimenti
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <div>
                  <p className="font-semibold">
                    Google Cloud Professional Cloud Architect
                  </p>
                  <p className="text-sm text-muted-foreground">Google - 2025</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <div>
                  <p className="font-semibold">EXIN DevOps Foundation</p>
                  <p className="text-sm text-muted-foreground">EXIN - 2025</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <div>
                  <p className="font-semibold">IBM Agentic AI Hackathon Winner</p>
                  <p className="text-sm text-muted-foreground">
                    Sistemi Informativi / IBM - 2025
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg">
                <div className="w-2 h-2 bg-secondary rounded-full" />
                <div>
                  <p className="font-semibold">IBM Cybersecurity Fundamentals</p>
                  <p className="text-sm text-muted-foreground">IBM - 2023</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg">
                <div className="w-2 h-2 bg-secondary rounded-full" />
                <div>
                  <p className="font-semibold">
                    MongoDB Certified Developer (M001 / M121 / M103)
                  </p>
                  <p className="text-sm text-muted-foreground">MongoDB - 2022</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;