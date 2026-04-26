import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import NumerosSociais from "@/components/landing/NumerosSociais";
import ComoFunciona from "@/components/landing/ComoFunciona";
import Solucoes from "@/components/landing/Solucoes";
import Segmentos from "@/components/landing/Segmentos";
import Parceiros from "@/components/landing/Parceiros";
import Contato from "@/components/landing/Contato";
import Footer from "@/components/landing/Footer";
import WhatsAppButton from "@/components/landing/WhatsAppButton";
import { ArrowRight, Calculator } from "lucide-react";

function CalculadoraCTA() {
  return (
    <section id="calculadora-cta" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-6">
            <Calculator className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Calcule a economia exata{" "}
            <span className="text-primary">para o seu negócio</span>
          </h2>
          <p className="text-white/70 mb-8 leading-relaxed text-lg">
            Informe seu faturamento, segmento e mix de pagamentos — e veja em tempo
            real quanto você economizaria com o split de agenda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/calculadora"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg hover:opacity-90 transition-opacity"
            >
              <Calculator className="w-5 h-5" />
              Acessar Calculadora
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors"
            >
              Prefiro falar com um especialista
            </a>
          </div>
          <p className="text-white/30 text-xs mt-6">
            Calculadora gratuita · Baseada nas tabelas oficiais do Simples Nacional
          </p>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <NumerosSociais />
      <ComoFunciona />
      <CalculadoraCTA />
      <Solucoes />
      <Segmentos />
      <Parceiros />
      <Contato />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
