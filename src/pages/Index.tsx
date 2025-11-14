import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Values from "@/components/Values";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Products />
      <Values />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
