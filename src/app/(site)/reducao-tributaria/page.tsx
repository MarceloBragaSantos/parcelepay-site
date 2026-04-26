import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import {
  ShieldCheck, FileText, TrendingDown, CreditCard, GitBranch, Clock,
  Calculator, ArrowRight, Check, AlertCircle,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Redução Tributária | ParcelePay",
  description:
    "Reduza até 76% dos impostos no Simples Nacional com split de agenda. Mecanismo 100% legal, regulamentado pelo Banco Central.",
};

const passos = [
  {
    icon: CreditCard,
    numero: "01",
    titulo: "Cliente paga normalmente",
    descricao:
      "O cliente realiza o pagamento no seu estabelecimento — débito, crédito ou parcelado. Nenhuma mudança na experiência de compra.",
  },
  {
    icon: GitBranch,
    numero: "02",
    titulo: "Agenda dividida em até 100 dias",
    descricao:
      "O estabelecimento tem até 100 dias após cada transação para designar a fração da agenda de recebíveis a cada participante da operação.",
  },
  {
    icon: TrendingDown,
    numero: "03",
    titulo: "Cada participante emite sua NF",
    descricao:
      "Cada empresa ou pessoa que recebe uma parte do split emite sua própria Nota Fiscal correspondente ao serviço efetivamente prestado.",
  },
  {
    icon: Clock,
    numero: "04",
    titulo: "Menos receita no EC = menos imposto",
    descricao:
      "Apenas o saldo restante chega à conta do Estabelecimento Comercial. Base menor no Simples Nacional = faixa menor = alíquota efetiva menor.",
  },
];

const segmentos = [
  { nome: "Restaurantes e Bares",     anexo: "Anexo I",   economia: 67 },
  { nome: "Motéis e Pousadas",        anexo: "Anexo I",   economia: 69 },
  { nome: "Agências de Veículos",     anexo: "Anexo I",   economia: 68 },
  { nome: "Lojas de Alto Ticket",     anexo: "Anexo I",   economia: 67 },
  { nome: "Clínicas e Consultórios",  anexo: "Anexo V",   economia: 73 },
  { nome: "Estética e Beleza",        anexo: "Anexo III", economia: 74 },
  { nome: "Escolas e Cursos",         anexo: "Anexo III", economia: 74 },
  { nome: "Construtoras e Imóveis",   anexo: "Anexo III", economia: 76 },
  { nome: "Franquias e Redes",        anexo: "Anexo I",   economia: 70 },
  { nome: "Móveis e Decoração",       anexo: "Anexo I",   economia: 68 },
];

export default function ReducaoTributariaPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative py-28 bg-secondary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="max-w-3xl">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">
              Redução Tributária
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Pague menos imposto.{" "}
              <span className="text-primary">De forma estruturada e legal.</span>
            </h1>
            <p className="text-xl text-white/70 mb-10 leading-relaxed max-w-2xl">
              Empresas do Simples Nacional reduzem até 76% da carga tributária com o
              split de agenda — mecanismo regulamentado pelo Banco Central e em conformidade
              com as normas da Receita Federal do Brasil.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/calculadora"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg hover:opacity-90 transition-opacity"
              >
                <Calculator className="w-5 h-5" />
                Calcule sua economia
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/#contato"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors"
              >
                Falar com especialista
              </Link>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="container mx-auto px-4 max-w-6xl relative z-10 mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { val: "até 76%",      label: "Redução de imposto" },
              { val: "100 dias",     label: "Para designar agenda" },
              { val: "100% legal",   label: "BCB + RFB compliant" },
              { val: "Simples Nac.", label: "Regime beneficiado" },
            ].map((s) => (
              <div key={s.label} className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center">
                <p className="text-2xl font-black text-primary mb-1">{s.val}</p>
                <p className="text-white/50 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── O que é o split de agenda ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <Badge className="mb-4 bg-primary/10 text-secondary border-primary/20">
              Entenda o mecanismo
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              O que é o split de agenda?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              É a divisão dos recebíveis de cartão entre dois ou mais participantes de uma
              operação — cada um recebendo sua parte diretamente na conta, com emissão de NF própria.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: GitBranch,
                titulo: "Divisão de recebíveis",
                desc: "Os valores de cada transação são divididos entre os participantes da operação antes mesmo de chegarem ao EC.",
              },
              {
                icon: FileText,
                titulo: "Nota Fiscal por participante",
                desc: "Cada participante emite sua própria NF referente ao serviço ou produto efetivamente entregue — tudo formalizado.",
              },
              {
                icon: TrendingDown,
                titulo: "Base tributável reduzida",
                desc: "O EC declara apenas o que efetivamente recebeu. Menos receita no Simples = faixa menor = alíquota efetiva menor.",
              },
            ].map((c) => (
              <div key={c.titulo} className="bg-background rounded-2xl p-6 border border-border">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <c.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-secondary mb-2">{c.titulo}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Como funciona: 4 passos ── */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <Badge className="mb-4 bg-primary/10 text-secondary border-primary/20">
              Passo a passo
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Como o split reduz seus impostos
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            {passos.map((passo, i) => (
              <div key={passo.numero} className="relative group">
                {i < passos.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[calc(100%-12px)] w-full h-0.5 bg-gradient-to-r from-primary/40 to-primary/10 z-10" />
                )}
                <div className="bg-white rounded-xl p-6 border border-border hover:border-primary/40 hover:shadow-md transition-all h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <passo.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-4xl font-black text-primary/15 select-none">{passo.numero}</span>
                  </div>
                  <h3 className="font-bold text-secondary mb-2">{passo.titulo}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{passo.descricao}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Exemplo prático */}
          <div className="bg-secondary rounded-2xl p-8 max-w-3xl mx-auto text-center">
            <p className="text-primary font-bold text-lg mb-3">Exemplo prático — Restaurante</p>
            <p className="text-white/80 text-sm leading-relaxed mb-4">
              Fatura R$150.000/mês. Sem split: 4ª faixa Simples → alíquota ~13% → R$19.500/mês de imposto.
              Com 80% splitado para o sócio-prestador: EC recebe R$30.000/mês → 1ª faixa → 6%
              → R$1.800/mês de imposto.
            </p>
            <p className="text-primary text-2xl font-black">Economia: R$17.700/mês</p>
            <p className="text-primary/60 text-xs mt-1">= R$212.400 por ano</p>
          </div>
        </div>
      </section>

      {/* ── Legalidade ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <Badge className="mb-4 bg-primary/10 text-secondary border-primary/20">
              Conformidade legal
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Por que é 100% legal?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              O split de agenda é uma modalidade de liquidação de pagamentos regulamentada
              pelo Banco Central. A redução tributária é consequência da divisão correta e
              formalizada da receita entre os participantes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="flex gap-4 p-6 rounded-2xl border border-primary/20 bg-primary/5">
              <ShieldCheck className="w-8 h-8 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-secondary mb-2">Regulamentado pelo Banco Central</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  O split de agenda é previsto nas normas do Banco Central do Brasil
                  (Resolução BCB nº 150/2021 e 522/2025). A operação é auditável,
                  rastreável e dentro da legislação vigente.
                </p>
              </div>
            </div>
            <div className="flex gap-4 p-6 rounded-2xl border border-primary/20 bg-primary/5">
              <FileText className="w-8 h-8 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-secondary mb-2">Elisão fiscal, não evasão</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Cada participante deve ter atividade econômica real e emitir NF
                  correspondente ao serviço efetivamente prestado. A estrutura precisa
                  ter substância jurídica documentada — não é um atalho.
                </p>
              </div>
            </div>
            <div className="flex gap-4 p-6 rounded-2xl border border-primary/20 bg-primary/5">
              <Check className="w-8 h-8 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-secondary mb-2">Propósito negocial real</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  O CARF e a Receita Federal validam estruturas onde há serviço
                  identificável, contrato formal e preço de mercado. A ParcelePay orienta
                  cada cliente a estruturar a operação com suporte jurídico e contábil.
                </p>
              </div>
            </div>
            <div className="flex gap-4 p-6 rounded-2xl border border-primary/20 bg-primary/5">
              <AlertCircle className="w-8 h-8 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-secondary mb-2">Recomendamos formalização</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  A estrutura de split deve ser formalizada com contrato, objeto social
                  distinto para cada participante e emissão de NFs corretas. Nossa equipe
                  orienta o processo de ponta a ponta.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Por segmento ── */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <Badge className="mb-4 bg-primary/10 text-secondary border-primary/20">
              Por segmento
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Quanto seu segmento pode economizar?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Estimativas para empresas entre R$100k–R$300k/mês com split de 80%.
              Baseado nas tabelas oficiais do Simples Nacional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {segmentos.map((seg) => (
              <div key={seg.nome} className="bg-white rounded-xl p-5 border border-border hover:border-primary/40 hover:shadow-md transition-all">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-secondary text-sm">{seg.nome}</h3>
                    <span className="text-xs text-muted-foreground/60">{seg.anexo}</span>
                  </div>
                  <span className="text-primary font-black text-lg">até {seg.economia}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-border overflow-hidden">
                  <div
                    className="h-full rounded-full bg-primary"
                    style={{ width: `${seg.economia}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-muted-foreground">
            Percentuais estimados. Cálculo baseado nas tabelas oficiais do Simples Nacional.
            Resultado real depende da estrutura e do mix de receitas.
          </p>
        </div>
      </section>

      {/* ── CTA Final ── */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Calcule a economia exata{" "}
            <span className="text-primary">para o seu negócio</span>
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto leading-relaxed">
            Informe seu faturamento, segmento e mix de pagamentos — e veja em tempo
            real quanto você economizaria com o split de agenda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/calculadora"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg hover:opacity-90 transition-opacity"
            >
              <Calculator className="w-5 h-5" />
              Acessar Calculadora
            </Link>
            <Link
              href="/#contato"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors"
            >
              Falar com especialista
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
