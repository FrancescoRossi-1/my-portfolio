import { Award, Trophy, Brain, Calendar as CalendarIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

const News = () => {
  const newsItems = [
    {
      icon: Trophy,
      title: "Vincitore IBM Agentic AI Hackathon 2025",
      description:
        "Primo posto con il progetto SpotifAI, piattaforma multi-agente basata su AWS Bedrock e ICA4AA per l’analisi intelligente dei brani musicali.",
      date: "Ottobre 2025",
      color: "primary",
    },
    {
      icon: Award,
      title: "Certificazione Google Cloud Professional Architect",
      description:
        "Raggiunto il livello Professional nella progettazione di architetture cloud scalabili, affidabili e sicure su Google Cloud Platform.",
      date: "Agosto 2025",
      color: "secondary",
    },
    {
      icon: Brain,
      title: "Partecipazione al Pilot di Watson Code Assistant for Z",
      description:
        "Coinvolto nel pilot IBM WCA4Z, soluzione basata su AI generativa per supportare la modernizzazione del codice su mainframe in un importante ente della Pubblica Amministrazione.",
      date: "Settembre 2025",
      color: "accent",
    },
  ];

  const getBgColor = (color: string) => {
    switch (color) {
      case "primary":
        return "bg-primary/10";
      case "secondary":
        return "bg-secondary/10";
      case "accent":
        return "bg-accent/10";
      default:
        return "bg-muted/20";
    }
  };

  return (
    <section className="py-20 relative" id="news">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Novità e Traguardi
          </h2>
          <p className="text-muted-foreground text-lg">
            Eventi, certificazioni e collaborazioni recenti
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {newsItems.map((item, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border hover:border-primary transition-smooth group cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`inline-flex p-3 ${getBgColor(
                  item.color
                )} rounded-lg mb-4 group-hover:scale-110 transition-smooth`}
              >
                <item.icon className={`w-6 h-6 text-${item.color}`} />
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-muted-foreground mb-4 text-sm">
                {item.description}
              </p>
              <p className="text-sm text-primary font-semibold flex items-center gap-1">
                <CalendarIcon className="w-4 h-4" /> {item.date}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;