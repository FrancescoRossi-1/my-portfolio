import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border bg-card/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Francesco Rossi. Tutti i diritti riservati.
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/FrancescoRossi-1"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-muted/30 rounded-lg hover:bg-primary/10 hover:text-primary transition-smooth"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/francesco-rossi-84291b1b3/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-muted/30 rounded-lg hover:bg-primary/10 hover:text-primary transition-smooth"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:francesco.rossip1@gmail.com"
              className="p-2 bg-muted/30 rounded-lg hover:bg-primary/10 hover:text-primary transition-smooth"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
