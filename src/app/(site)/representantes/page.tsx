import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Users, TrendingUp, Check, ArrowRight, BookOpen, Briefcase, Building2, Repeat } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Representantes | ParcelePay",
  description:
    "Seja um representante ParcelePay e ganhe comissão recorrente sobre o faturamento de cada cliente ativo na sua carteira.",
};

const perfis = [
  {
    icon: BookOpen,
    titulo: "Contadores e Escritórios",
    desc: "Ofereça redução tributária como serviço aos seus clientes do Simples Nacional. Comissão recorrente enquanto o cliente operar.",
  },
  {
    icon: Briefcase,
    titulo: "Consultores e Agências",
    desc: "Indique e ganhe sobre o faturamento bruto de cada cliente ativo. Sem burocracia, sem mensalidade para o representante.",
  },
  {
    icon: Building2,
    titulo: "Revendas e Distribuidoras",
    desc: "Venda a ParcelePay com seu próprio markup. Mantenha o cliente na sua base com suporte comercial e material dedicado.",
  },
];

const ganhos = [
  { fat: "R$ 100 mil/mês", comissao: "R$ 1.000/mês" },
  { fat: "R$ 200 mil/mês", comissao: "R$ 2.000/mês" },
  { fat: "R$ 300 mil/mês", comissao: "R$ 3.000/mês" },
  { fat: "R$ 500 mil/mês", comissao: "R$ 5.000/mês" },
];

const passos = [
  { numero: "01", titulo: "Cadastro gratuito", desc: "Preencha o formulário de interesse e nossa equipe entra em contato em até 24h." },
  { numero: "02", titulo: "Onboarding e material", desc: "Receba treinamento, material de apoio e acesso ao portal do representante." },
  { numero: "03", titulo: "Indique e ganhe", desc: "Cada cliente ativo gera comissão recorrente todo mês — enquanto ele operar." },
];

export default function RepresentantesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative py-28 bg-secondary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">
                Representantes
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                Construa uma carteira recorrente.{" "}
                <span className="text-primary">Ganhe todo mês.</span>
              </h1>
              <p className="text-xl text-white/70 mb-10 leading-relaxed">
                Você indica, a ParcelePay faz a operação. Você recebe comissão
                recorrente sobre o faturamento de cada cliente ativo na sua carteira —
                todo mês, automaticamente.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/#contato"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg hover:opacity-90 transition-opacity"
                >
                  Quero ser representante
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Ganhos card */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-6">
              <p className="text-white/50 text-sm font-medium uppercase tracking-wide mb-4">
                Quanto você pode ganhar
              </p>
              <p className="text-white/40 text-xs mb-4 leading-relaxed">
                Sua comissão é calculada sobre o faturamento bruto de cada cliente
                ativo na sua carteira — de forma automática e recorrente.
              </p>
              <div className="space-y-3">
                {ganhos.map((g) => (
                  <div key={g.fat} className="flex items-center justify-between py-3 border-b border-white/10 last:border-0">
                    <span className="text-white/70 text-sm">{g.fat} por cliente</span>
                    <span className="text-primary font-bold">{g.comissao}</span>
                  </div>
                ))}
              </div>
              <p className="text-white/20 text-xs mt-4">
                * Valores ilustrativos. A comissão final depende do markup acordado.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="container mx-auto px-4 max-w-6xl relative z-10 mt-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { val: "Recorrente", label: "Comissão todo mês" },
              { val: "Gratuito",   label: "Cadastro e onboarding" },
              { val: "24h",        label: "Retorno após cadastro" },
              { val: "Suporte",    label: "Material e treinamento" },
            ].map((s) => (
              <div key={s.label} className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center">
                <p className="text-xl font-black text-primary mb-1">{s.val}</p>
                <p className="text-white/50 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Modelo de negócio ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <Badge className="mb-4 bg-primary/10 text-secondary border-primary/20">
                Como funciona
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
                Você não vende uma máquina.{" "}
                <span className="text-primary">Você constrói uma carteira.</span>
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Quanto maior o faturamento do seu cliente, maior a sua recorrência.
                Um cliente com R$300 mil de faturamento mensal pode gerar
                R$3 mil/mês para o representante — todo mês, enquanto ele operar.
              </p>
              <ul className="space-y-3">
                {[
                  "Comissão sobre faturamento bruto, não sobre taxa",
                  "Recorrência automática — sem precisar revender",
                  "Portal do representante com visão da carteira",
                  "Suporte comercial e técnico dedicado",
                  "Material de vendas e treinamento incluídos",
                  "Sem mensalidade ou custo de entrada",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-background rounded-2xl border border-border p-8 space-y-4">
              <div className="flex items-center gap-3 mb-2">
                <Repeat className="w-5 h-5 text-primary" />
                <p className="font-bold text-secondary">Recorrência na prática</p>
              </div>
              {[
                { label: "Você indica 5 clientes com R$100k/mês cada", val: "R$5.000/mês" },
                { label: "Você indica 3 clientes com R$300k/mês cada", val: "R$9.000/mês" },
                { label: "Você indica 2 clientes com R$500k/mês cada", val: "R$10.000/mês" },
              ].map((ex, i) => (
                <div key={i} className="flex items-start justify-between gap-4 py-3 border-b border-border last:border-0">
                  <p className="text-sm text-muted-foreground">{ex.label}</p>
                  <p className="text-primary font-black text-lg flex-shrink-0">{ex.val}</p>
                </div>
              ))}
              <p className="text-xs text-muted-foreground pt-2">
                Valores ilustrativos. Comissão final depende do markup acordado com a ParcelePay.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Perfis ── */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <Badge className="mb-4 bg-primary/10 text-secondary border-primary/20">
              Perfis de representante
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Quem pode ser representante?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Se você tem relacionamento com empresas do Simples Nacional,
              já tem o ativo mais valioso para ser um representante ParcelePay.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {perfis.map((p) => (
              <div key={p.titulo} className="bg-white rounded-2xl p-6 border border-border hover:border-primary/40 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <p.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-secondary mb-2">{p.titulo}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Como começar ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <Badge className="mb-4 bg-primary/10 text-secondary border-primary/20">
              Primeiros passos
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Como começar
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {passos.map((p, i) => (
              <div key={p.numero} className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-black text-xl">{p.numero}</span>
                </div>
                <h3 className="font-bold text-secondary mb-2">{p.titulo}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Pronto para{" "}
            <span className="text-primary">construir sua carteira recorrente?</span>
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Preencha o formulário e nossa equipe entra em contato em até 24h
            para explicar todos os detalhes do programa de representantes.
          </p>
          <Link
            href="/#contato"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg hover:opacity-90 transition-opacity"
          >
            Quero ser representante
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
