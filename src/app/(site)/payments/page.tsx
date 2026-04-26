import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import {
  CreditCard, Smartphone, QrCode, FileText, Zap, ShieldCheck,
  ArrowRight, Check, TrendingDown, Store, Wifi
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Payments | ParcelePay",
  description: "Maquininha, TEF, PIX, link de pagamento e parcelamento em até 21x com split de agenda embutido.",
};

const meiosDePagamento = [
  { icon: CreditCard,  titulo: "Crédito & Débito",       desc: "Todas as bandeiras. Parcelamento em até 21x para o lojista ou até 24x — conforme a tabela negociada." },
  { icon: QrCode,      titulo: "PIX",                     desc: "Instantâneo, sem taxa para o lojista. Receba via QR Code ou chave PIX diretamente no app." },
  { icon: FileText,    titulo: "Boleto Bancário",         desc: "Gere e envie boletos direto da plataforma. Liquidação automática com split de agenda." },
  { icon: Smartphone,  titulo: "Link de Pagamento",      desc: "Venda sem maquininha. Envie um link por WhatsApp e receba online com segurança." },
  { icon: Wifi,        titulo: "TEF",                    desc: "Integração com sistemas de PDV e frente de caixa via TEF para operações de maior volume." },
  { icon: Zap,         titulo: "Recorrência",            desc: "Cobranças automáticas mensais para escolas, clínicas, academias e assinaturas." },
];

const hardwares = [
  { nome: "Smart POS",    desc: "Android com app nativo. Aceita todas as bandeiras, PIX e tem chip 4G." },
  { nome: "POS tradicional", desc: "Compacta, rápida e com bateria de longa duração para uso intenso." },
  { nome: "Pinpad TEF",   desc: "Para integrar com computador e sistemas de caixa. Ideal para supermercados e drogarias." },
];

export default function PaymentsPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative py-28 bg-secondary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">Payments</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                Aceite qualquer pagamento.{" "}
                <span className="text-primary">Com split de agenda embutido.</span>
              </h1>
              <p className="text-xl text-white/70 mb-10 leading-relaxed">
                Débito, crédito, PIX, boleto e link de pagamento — em um único ecossistema que
                já estrutura a divisão de recebíveis a cada transação.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/#contato"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg hover:opacity-90 transition-opacity"
                >
                  Quero uma proposta <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/reducao-tributaria"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors"
                >
                  Ver redução tributária
                </Link>
              </div>
            </div>

            {/* Mockup maquininha — substituir por imagem real */}
            <div className="relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 min-h-[340px] flex items-center justify-center">
              <div className="text-center p-10 space-y-4">
                {/* placeholder — trocar por <Image src="/assets/payments-hero.png" ... /> */}
                <div className="w-24 h-24 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto">
                  <CreditCard className="w-12 h-12 text-primary" />
                </div>
                <p className="text-white/30 text-sm">[ imagem: maquininha + celular ParcelePay ]</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-10 bg-primary">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { val: "21x",   label: "Parcelamento máximo" },
              { val: "20+",   label: "Adquirentes conectados" },
              { val: "D+1",   label: "Liquidação" },
              { val: "100%",  label: "Integração com split" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-black text-secondary mb-1">{s.val}</p>
                <p className="text-secondary/60 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEIOS DE PAGAMENTO */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <Badge className="mb-4 bg-primary/10 text-secondary border-primary/20">Meios de pagamento</Badge>
            <h2 className="text-3xl font-bold text-secondary mb-4">
              Tudo que seu cliente precisa para pagar
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Uma plataforma, todos os meios. Sem precisar contratar adquirentes separados.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {meiosDePagamento.map((m) => (
              <div key={m.titulo} className="bg-background rounded-2xl p-6 border border-border hover:border-primary/40 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <m.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-secondary mb-2">{m.titulo}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPLIT DIFERENCIAL */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">Diferencial exclusivo</Badge>
              <h2 className="text-3xl font-bold text-white mb-6">
                Cada pagamento já estrutura o split de agenda.
              </h2>
              <p className="text-white/60 leading-relaxed mb-8">
                Enquanto outras adquirentes liquidam tudo na mesma conta, a ParcelePay
                divide os recebíveis entre os participantes da operação a cada transação —
                reduzindo automaticamente a base tributável no Simples Nacional.
              </p>
              <ul className="space-y-3">
                {[
                  "Divisão configurada uma única vez",
                  "Até 100 dias para designar a agenda de recebíveis",
                  "Conformidade com BCB Res. 150/2021",
                  "Sem mudar CNPJ ou estrutura societária",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white/80">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/reducao-tributaria"
                className="mt-8 inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
              >
                Entender a redução tributária <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-4">
              <p className="text-white/40 text-xs uppercase tracking-widest font-medium mb-6">Exemplo de split por transação</p>
              <div className="space-y-3">
                {[
                  { label: "Venda no crédito", valor: "R$ 1.000", cor: "text-white" },
                  { label: "→ Participante A (EC principal)", valor: "R$ 600", cor: "text-primary" },
                  { label: "→ Participante B (co-participante)", valor: "R$ 300", cor: "text-primary" },
                  { label: "→ Taxa da plataforma", valor: "R$ 100", cor: "text-white/40" },
                ].map((r) => (
                  <div key={r.label} className="flex justify-between items-center py-2 border-b border-white/5">
                    <span className="text-white/60 text-sm">{r.label}</span>
                    <span className={`font-bold text-sm ${r.cor}`}>{r.valor}</span>
                  </div>
                ))}
              </div>
              <p className="text-white/30 text-xs pt-2">
                Cada participante tributa apenas o que recebeu — reduzindo a base do Simples Nacional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HARDWARE */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <Badge className="mb-4 bg-primary/10 text-secondary border-primary/20">Hardware</Badge>
            <h2 className="text-3xl font-bold text-secondary mb-4">Maquininhas para cada operação</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              POS, Smart POS e Pinpad TEF — todos com split de agenda integrado e suporte técnico incluso.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {hardwares.map((h) => (
              <div key={h.nome} className="bg-background rounded-2xl p-6 border border-border text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Store className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-secondary mb-2">{h.nome}</h3>
                <p className="text-muted-foreground text-sm">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <ShieldCheck className="w-12 h-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Pronto para aceitar pagamentos com split?
          </h2>
          <p className="text-white/60 max-w-lg mx-auto mb-8">
            Fale com nosso time comercial e receba uma proposta personalizada para o seu negócio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contato"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg hover:opacity-90 transition-opacity"
            >
              Falar com um especialista <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/reducao-tributaria"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors"
            >
              Ver redução tributária
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
