import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import {
  Landmark, Smartphone, QrCode, ArrowRight, Check,
  TrendingUp, Users, ShieldCheck, CreditCard, FileText, Bell
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Banking | ParcelePay",
  description: "Conta digital com agenda financeira, PIX, TED e gestão completa para quem vende muito.",
};

const funcionalidades = [
  { icon: QrCode,       titulo: "PIX e TED ilimitados",        desc: "Transferências sem limite e sem tarifa adicional. PIX 24h, TED no horário bancário." },
  { icon: TrendingUp,   titulo: "Gestão de agenda financeira", desc: "Visualize em tempo real os recebíveis futuros e gerencie o fluxo de caixa com antecedência." },
  { icon: CreditCard,   titulo: "Cartão virtual",              desc: "Para compras online e assinaturas. Gere múltiplos cartões com limite individual." },
  { icon: FileText,     titulo: "Pagamento de boletos",        desc: "Pague contas direto da conta digital. Agendamento e histórico completo." },
  { icon: Users,        titulo: "Multiusuário",                desc: "Adicione sócios e funcionários com perfis de acesso e permissões distintas." },
  { icon: Bell,         titulo: "Notificações em tempo real",  desc: "Alerta de entrada de PIX, liquidação de cartão e vencimentos via WhatsApp e app." },
];

export default function BankingPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative py-28 bg-secondary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">Banking</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                A conta digital feita para{" "}
                <span className="text-primary">quem vende muito.</span>
              </h1>
              <p className="text-xl text-white/70 mb-10 leading-relaxed">
                Gerencie agenda financeira, faça PIX e TED, e acompanhe cada centavo
                da sua operação — integrado ao split de agenda para redução tributária.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/#contato"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg hover:opacity-90 transition-opacity"
                >
                  Abrir minha conta <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/reducao-tributaria"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors"
                >
                  Ver redução tributária
                </Link>
              </div>
            </div>

            {/* App mockup — substituir por imagem real */}
            <div className="relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden min-h-[380px] flex items-center justify-center p-8">
              {/* Simulação de tela de app banking */}
              <div className="w-56 bg-secondary border border-white/20 rounded-3xl overflow-hidden shadow-2xl">
                <div className="bg-primary/20 px-5 pt-8 pb-6">
                  <p className="text-white/50 text-xs mb-1">Saldo disponível</p>
                  <p className="text-white text-2xl font-black">R$ 128.450<span className="text-sm font-normal text-white/60">,00</span></p>
                  <p className="text-primary text-xs mt-2">+R$ 14.200 a receber hoje</p>
                </div>
                <div className="p-4 space-y-2">
                  {[
                    { label: "PIX recebido", val: "+R$ 1.200", cor: "text-primary" },
                    { label: "Crédito D+1", val: "+R$ 8.450", cor: "text-primary" },
                    { label: "Boleto pago", val: "-R$ 3.100", cor: "text-red-400" },
                  ].map((t) => (
                    <div key={t.label} className="flex justify-between items-center py-1.5 border-b border-white/5">
                      <span className="text-white/50 text-xs">{t.label}</span>
                      <span className={`text-xs font-bold ${t.cor}`}>{t.val}</span>
                    </div>
                  ))}
                </div>
                <div className="px-4 pb-5 pt-2">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                      <span className="text-secondary text-[8px] font-black">P</span>
                    </div>
                    <span className="text-white/30 text-[10px]">ParcelePay Banking</span>
                  </div>
                </div>
              </div>
              <p className="absolute bottom-4 text-white/20 text-xs">[ substituir por imagem real ]</p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-10 bg-primary">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { val: "PIX 24h",  label: "Sem taxa adicional" },
              { val: "D+1",      label: "Liquidação de cartão" },
              { val: "100%",     label: "Digital, sem agência" },
              { val: "1 app",    label: "Pagamentos + conta" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-black text-secondary mb-1">{s.val}</p>
                <p className="text-secondary/60 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FUNCIONALIDADES */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <Badge className="mb-4 bg-primary/10 text-secondary border-primary/20">O que está incluído</Badge>
            <h2 className="text-3xl font-bold text-secondary mb-4">
              Banco e pagamentos no mesmo app
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Sem precisar abrir conta em outro banco. Tudo na mesma plataforma que já gerencia seus recebíveis.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {funcionalidades.map((f) => (
              <div key={f.titulo} className="bg-background rounded-2xl p-6 border border-border hover:border-primary/40 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <f.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-secondary mb-2">{f.titulo}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AGENDA FINANCEIRA */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">Gestão de agenda</Badge>
              <h2 className="text-3xl font-bold text-white mb-6">
                Saiba exatamente quanto vai receber — e quando.
              </h2>
              <p className="text-white/60 leading-relaxed mb-8">
                A agenda financeira consolida todos os recebíveis futuros: parcelas de cartão,
                PIX agendado e boletos — em uma visão diária, semanal ou mensal.
                Tome decisões com dados reais, não estimativas.
              </p>
              <ul className="space-y-3">
                {[
                  "Visão diária de recebíveis por adquirente",
                  "Consolidação automática de todas as bandeiras",
                  "Exportação em CSV e PDF",
                  "Alerta de antecipação quando vantajoso",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white/80">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tabela agenda */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <p className="text-white/40 text-xs uppercase tracking-widest font-medium mb-4">Agenda — próximos 5 dias</p>
              <div className="space-y-2">
                {[
                  { dia: "Hoje",      val: "R$ 14.200", tipo: "Liquidação D+1" },
                  { dia: "Amanhã",    val: "R$ 8.750",  tipo: "Parcelas crédito" },
                  { dia: "Qua",       val: "R$ 22.400", tipo: "Liquidação D+1" },
                  { dia: "Qui",       val: "R$ 5.100",  tipo: "Boleto vence" },
                  { dia: "Sex",       val: "R$ 18.900", tipo: "Parcelas crédito" },
                ].map((r) => (
                  <div key={r.dia} className="flex items-center gap-3 py-2.5 border-b border-white/5">
                    <span className="text-white/40 text-xs w-12">{r.dia}</span>
                    <span className="text-primary font-bold text-sm flex-1">{r.val}</span>
                    <span className="text-white/30 text-xs">{r.tipo}</span>
                  </div>
                ))}
              </div>
              <p className="text-primary font-bold text-sm mt-4 pt-3 border-t border-white/10">
                Total previsto: R$ 69.350
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ABERTURA DE CONTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <Badge className="mb-4 bg-primary/10 text-secondary border-primary/20">Abertura rápida</Badge>
            <h2 className="text-3xl font-bold text-secondary mb-4">
              Conta aberta em minutos, direto pelo app
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { num: "01", titulo: "Baixe o app",        desc: "Disponível para Android e iOS." },
              { num: "02", titulo: "Envie os documentos", desc: "CNPJ, documento pessoal e selfie com reconhecimento facial." },
              { num: "03", titulo: "Pronto!",             desc: "Conta aprovada e pronta para operar." },
            ].map((s) => (
              <div key={s.num} className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 border-2 border-primary/30 flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-black text-lg">{s.num}</span>
                </div>
                <h3 className="font-bold text-secondary mb-2">{s.titulo}</h3>
                <p className="text-muted-foreground text-sm">{s.desc}</p>
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
            Sua operação financeira em um único lugar
          </h2>
          <p className="text-white/60 max-w-lg mx-auto mb-8">
            Conta digital + maquininha + split de agenda. Fale com nosso time e receba
            uma proposta para o seu negócio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contato"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg hover:opacity-90 transition-opacity"
            >
              Abrir minha conta <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/payments"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors"
            >
              Ver Payments
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
