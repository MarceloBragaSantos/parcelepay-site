import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import ComoFunciona from "@/components/landing/ComoFunciona";
import Calculadora from "@/components/calculadora/Calculadora";
import Solucoes from "@/components/landing/Solucoes";
import Segmentos from "@/components/landing/Segmentos";
import Parceiros from "@/components/landing/Parceiros";
import Contato from "@/components/landing/Contato";
import Footer from "@/components/landing/Footer";
import WhatsAppButton from "@/components/landing/WhatsAppButton";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ComoFunciona />
      <Calculadora />
      <Solucoes />
      <Segmentos />
      <Parceiros />
      <Contato />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
