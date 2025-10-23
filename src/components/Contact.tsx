import { Mail, Github, Linkedin } from "lucide-react";
import { Card } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted/20 relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Contattami</h2>
          <p className="text-muted-foreground text-lg">
            Hai un progetto in mente? Parliamone!
          </p>
        </div>

        {/* Centered Cards */}
        <div className="flex justify-center">
          <div className="max-w-xl w-full space-y-6 animate-fade-in-up">
            <Card className="p-8 bg-card border-border">
              <h3 className="text-2xl font-bold mb-6">
                Informazioni di Contatto
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <a
                      href="mailto:francesco.rossip1@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-smooth"
                    >
                      francesco.rossip1@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Github className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">GitHub</p>
                    <a
                      href="https://github.com/FrancescoRossi-1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-smooth"
                    >
                      github.com/FrancescoRossi-1
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Linkedin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">LinkedIn</p>
                    <a
                      href="https://www.linkedin.com/in/francesco-rossi-84291b1b3/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-smooth"
                    >
                      https://www.linkedin.com/in/francesco-rossi-84291b1b3/
                    </a>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
              <h3 className="text-xl font-bold mb-3">
                Disponibile per nuove opportunità
              </h3>
              <p className="text-muted-foreground">
                Sono sempre interessato a discutere di progetti innovativi,
                collaborazioni o opportunità di lavoro. Non esitare a contattarmi!
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;