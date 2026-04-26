import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Utensils, Store, Stethoscope, GraduationCap, Monitor, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Apps para Gestão | ParcelePay",
  description: "Integração com aplicativos de gestão para restaurantes, PDV, lojas, clínicas e muito mais.",
};

const segmentos = [
  { icon: Utensils,      nome: "Restaurantes e Bares",    desc: "Integração com sistemas de comanda, delivery e gestão de mesas." },
  { icon: Store,         nome: "Varejo e PDV",             desc: "Conecte seu ponto de venda e controle estoque, vendas e caixa." },
  { icon: Stethoscope,  nome: "Clínicas e Consultórios",  desc: "Agendamento, prontuário e cobranças integradas ao seu sistema." },
  { icon: GraduationCap,nome: "Escolas e Cursos",         desc: "Gestão de matrículas, mensalidades e controle financeiro." },
  { icon: Monitor,       nome: "Outros segmentos",         desc: "Conectamos com os principais sistemas de gestão do mercado via API." },
  { icon: Smartphone,   nome: "App próprio",               desc: "Integre via nossa API e leve pagamentos ao seu próprio aplicativo." },
];

export default function AppsPage() {
  return (
    <>
      <section className="relative py-28 bg-secondary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10 max-w-3xl">
          <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">Apps para Gestão</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Seu sistema de gestão{" "}
            <span className="text-primary">integrado aos pagamentos.</span>
          </h1>
          <p className="text-xl text-white/70 mb-10 leading-relaxed">
            Temos parceiros com aplicativos de gestão para os principais segmentos de
            mercado — restaurantes, PDV, clínicas, escolas e muito mais.
            Pagamentos e gestão em um único fluxo.
          </p>
          <Link href="/#contato" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg hover:opacity-90 transition-opacity">
            Saiba mais <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <Badge className="mb-4 bg-primary/10 text-secondary border-primary/20">Segmentos atendidos</Badge>
            <h2 className="text-3xl font-bold text-secondary mb-4">
              Gestão integrada para cada negócio
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Nossos parceiros de software cobrem os principais segmentos do mercado.
              Entre em contato para descobrir qual solução se encaixa no seu negócio.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {segmentos.map((s) => (
              <div key={s.nome} className="bg-white rounded-2xl p-6 border border-border hover:border-primary/40 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <s.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-secondary mb-2">{s.nome}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 bg-secondary rounded-2xl p-10 text-center">
            <h3 className="text-2xl font-bold text-white mb-3">
              Quer integrar seu sistema?
            </h3>
            <p className="text-white/60 mb-6 max-w-lg mx-auto">
              Disponibilizamos API completa para integração com qualquer sistema de
              gestão. Fale com nossa equipe técnica.
            </p>
            <Link href="/#contato" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold hover:opacity-90 transition-opacity">
              Falar com a equipe técnica
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
