import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="bg-gradient-to-br from-primary/10 via-accent/10 to-secondary rounded-3xl p-12 md:p-16 shadow-[var(--shadow-warm)]">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Encomende Seus Doces
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Leve o sabor da tradição para sua casa. Entre em contato pelo Instagram e faça seu pedido!
          </p>
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-10 py-6 rounded-full shadow-[var(--shadow-warm)] transition-[var(--transition-smooth)] hover:scale-105"
            onClick={() => window.open('https://instagram.com/docesdadeiars', '_blank')}
          >
            <Instagram className="mr-2 h-6 w-6" />
            Falar com a Déia no Instagram
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
