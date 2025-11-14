const About = () => {
  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="container mx-auto max-w-4xl">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center text-foreground mb-12">
          Da Cozinha da Minha Mãe para Você
        </h2>
        
        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-[var(--shadow-card)]">
          <p className="text-lg md:text-xl text-card-foreground leading-relaxed space-y-6">
            <span className="block">
              Sou a Andréia, mas todo mundo me chama de Déia. Sou pelotense, tenho 54 anos e aprendi a fazer doces com quem mais entendia do assunto: minha mãe.
            </span>
            <span className="block">
              Cada receita que preparo carrega memórias de tardes na cozinha, risadas em família e aquele carinho que só um doce feito em casa tem.
            </span>
            <span className="block">
              Hoje, meus filhos e toda a família adoram esses doces, e decidi compartilhar esse amor com você.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
