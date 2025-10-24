import { Download, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import cvFile from "@/assets/CV_ROSSI_FRANCESCO.pdf";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-glow-pulse" />
      <div
        className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-glow-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <div className="relative group animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-smooth" />
            <img
              src="profile_francesco.jpg"
              alt="Francesco Rossi"
              className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-primary/50 shadow-elegant"
            />
          </div>

          {/* Hero Content */}
          <div
            className="flex-1 text-center lg:text-left space-y-6 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="space-y-2">
              <p className="text-primary font-semibold text-lg">Ciao, sono</p>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Francesco Rossi
              </h1>
              <h2 className="text-2xl lg:text-3xl gradient-text font-semibold">
                Software Engineer & Team Leader
              </h2>
            </div>

            <p className="text-lg text-muted-foreground max-w-2xl">
              Sviluppatore full-stack appassionato di tecnologia e innovazione,
              con esperienza nella guida di team e nella realizzazione di
              soluzioni software scalabili e performanti in ambito enterprise.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="gap-2 shadow-elegant hover:glow-primary transition-smooth"
                asChild
              >
                <a
                  href={cvFile}
                  download="Francesco_Rossi_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="w-5 h-5" />
                  Scarica CV
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="gap-2"
                asChild
              >
                <a
                  href="https://github.com/FrancescoRossi-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="gap-2"
                asChild
              >
                <a
                  href="https://www.linkedin.com/in/francesco-rossi-84291b1b3/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;