import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-center space-y-4">
          <a 
            href="https://instagram.com/docesdadeiars" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-foreground hover:text-primary transition-[var(--transition-smooth)]"
          >
            <Instagram className="w-6 h-6" />
            <span className="font-semibold">@docesdadeiars</span>
          </a>
          <p className="text-muted-foreground text-center">
            Doces da Déia - Receitas de família, feitas com amor
          </p>
          <p className="text-sm text-muted-foreground/80">
            © {new Date().getFullYear()} Doces da Déia. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
