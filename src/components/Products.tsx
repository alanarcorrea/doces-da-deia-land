import { Star } from "lucide-react";
import colchaoImage from "@/assets/colchao-noiva.jpg";
import tortaImage from "@/assets/torta-ameixa.jpg";

const Products = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
          Nossos Doces
        </h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Colchão de Noiva - Featured */}
          <div className="bg-card rounded-2xl overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-warm)] transition-[var(--transition-smooth)] hover:scale-[1.02]">
            <div className="relative">
              <img 
                src={colchaoImage} 
                alt="Colchão de Noiva - O queridinho da família" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full flex items-center gap-2 font-semibold shadow-lg">
                <Star className="w-5 h-5 fill-current" />
                <span>Queridinho da Família</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-card-foreground mb-4">
                Colchão de Noiva
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Delicioso pão de ló coberto com doce de coco cremoso, leite condensado e finalizado com suspiro de claras levinho. Uma explosão de texturas e sabores que derrete na boca.
              </p>
            </div>
          </div>

          {/* Torta de Ameixa */}
          <div className="bg-card rounded-2xl overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-warm)] transition-[var(--transition-smooth)] hover:scale-[1.02]">
            <img 
              src={tortaImage} 
              alt="Torta de Ameixa" 
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-card-foreground mb-4">
                Torta de Ameixa
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Pão de ló macio recheado com doce de leite, abacaxi suculento e ameixas selecionadas, tudo coberto por um merengue dourado e delicado. Perfeita para momentos especiais.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
