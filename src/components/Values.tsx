import { Home, Heart, Cake, Users } from "lucide-react";

const values = [
  {
    icon: Home,
    title: "Tradição Familiar",
    description: "Receitas passadas de mãe para filha"
  },
  {
    icon: Heart,
    title: "Feito com Amor",
    description: "Cada doce é preparado com carinho e dedicação"
  },
  {
    icon: Cake,
    title: "Qualidade Artesanal",
    description: "Ingredientes selecionados, sem produção em massa"
  },
  {
    icon: Users,
    title: "Momentos Especiais",
    description: "Celebrando a vida com doçura"
  }
];

const Values = () => {
  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
          O Que Nos Inspira
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div 
                key={index}
                className="bg-card rounded-xl p-6 text-center shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-warm)] transition-[var(--transition-smooth)] hover:scale-105"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-card-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Values;
