"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import Image from "next/image";

/* ─────────────────────────── MOCKUPS ─────────────────────────── */

function PaymentsMockup() {
  return (
    <div className="relative flex items-center justify-center min-h-[360px] bg-secondary rounded-2xl overflow-hidden select-none">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />

      <div className="relative flex items-end gap-5 px-10 pb-10 pt-14">
        {/* Phone */}
        <div className="w-36 bg-[#12122a] rounded-[28px] border-2 border-white/20 shadow-2xl overflow-hidden flex-shrink-0">
          <div className="h-1 bg-white/10 w-12 rounded-full mx-auto mt-2 mb-1" />
          <div className="px-3 pb-4">
            <div className="flex items-center justify-between py-2 mb-2">
              <Image src="/assets/logo-parcele-pay-new.png" alt="ParcelePay" width={60} height={14} className="h-3.5 w-auto brightness-0 invert" />
              <div className="w-5 h-5 rounded-full bg-primary/30 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-primary/60" />
              </div>
            </div>
            <div className="bg-primary/10 rounded-xl p-2.5 mb-2">
              <p className="text-white/40 text-[7px] mb-0.5">Saldo disponível</p>
              <p className="text-white font-bold text-sm">R$ 12.840,00</p>
              <div className="flex gap-1 mt-1.5">
                {["PIX", "Pagar", "Extrato"].map((l) => (
                  <div key={l} className="flex-1 bg-white/10 rounded py-0.5 text-center">
                    <span className="text-white/60 text-[7px]">{l}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-1">
              {[
                { desc: "Split recebido", val: "+R$4.200", pos: true },
                { desc: "TED enviada", val: "-R$1.000", pos: false },
                { desc: "PIX recebido", val: "+R$890", pos: true },
              ].map((t, i) => (
                <div key={i} className="flex justify-between">
                  <span className="text-white/50 text-[8px]">{t.desc}</span>
                  <span className={`text-[8px] font-bold ${t.pos ? "text-primary" : "text-red-400"}`}>{t.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* POS Machine */}
        <div className="w-24 bg-[#12122a] rounded-2xl border-2 border-white/20 shadow-2xl overflow-hidden">
          <div className="bg-black/60 m-2 rounded-lg p-2 mb-1">
            <p className="text-white/30 text-[7px] text-center mb-0.5">TOTAL</p>
            <p className="text-primary text-sm font-bold text-center font-mono">R$284,50</p>
            <div className="bg-primary/20 rounded mt-1 py-0.5 text-center">
              <p className="text-primary text-[7px] font-bold">INSERIR CARTÃO</p>
            </div>
          </div>
          <div className="px-2 py-1 flex justify-center">
            <Image src="/assets/logo-parcele-pay-new.png" alt="ParcelePay" width={48} height={12} className="h-3 w-auto brightness-0 invert" />
          </div>
          <div className="mx-3 my-1 h-0.5 bg-white/10 rounded" />
          <div className="grid grid-cols-3 gap-0.5 px-2 pb-2">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, "*", 0, "#"].map((k) => (
              <div key={k} className="bg-white/10 rounded text-center py-0.5">
                <span className="text-white/50 text-[7px]">{k}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold shadow-lg">
        Até 21x
      </div>
    </div>
  );
}

function BankingMockup() {
  return (
    <div className="relative flex items-center justify-center min-h-[360px] bg-secondary rounded-2xl overflow-hidden select-none">
      <div className="absolute inset-0 bg-gradient-to-tl from-primary/5 to-transparent" />
      <div className="relative py-8 px-6">
        <div className="w-52 bg-[#12122a] rounded-[32px] border-2 border-white/20 shadow-2xl overflow-hidden mx-auto">
          <div className="h-1 bg-white/10 w-16 rounded-full mx-auto mt-2 mb-1" />
          <div className="px-4 pb-5">
            <div className="flex items-center justify-between py-2.5 border-b border-white/10 mb-3">
              <Image src="/assets/logo-parcele-pay-new.png" alt="ParcelePay" width={80} height={20} className="h-4 w-auto brightness-0 invert" />
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-primary/50" />
              </div>
            </div>
            <div className="bg-primary/10 border border-primary/30 rounded-2xl p-3 mb-3">
              <p className="text-white/40 text-[9px] mb-0.5">Conta ParcelePay</p>
              <p className="text-primary text-2xl font-black mb-1">R$128.450</p>
              <span className="bg-primary/20 text-white/50 text-[8px] px-2 py-0.5 rounded-full">+R$23.5k hoje</span>
            </div>
            <div className="grid grid-cols-4 gap-2 mb-3">
              {["PIX", "TED", "Pagar", "Extrato"].map((label) => (
                <div key={label} className="flex flex-col items-center gap-1">
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-md bg-primary/40" />
                  </div>
                  <span className="text-white/50 text-[8px]">{label}</span>
                </div>
              ))}
            </div>
            <p className="text-white/30 text-[9px] uppercase tracking-wider mb-1.5">Últimas movimentações</p>
            <div className="space-y-2">
              {[
                { desc: "Split agenda", val: "+R$12.300", pos: true },
                { desc: "TED enviada", val: "-R$5.000", pos: false },
                { desc: "PIX recebido", val: "+R$1.890", pos: true },
                { desc: "Boleto pago", val: "-R$430", pos: false },
              ].map((t, i) => (
                <div key={i} className="flex items-center justify-between py-1 border-b border-white/5">
                  <div className="flex items-center gap-2">
                    <div className={`w-1.5 h-1.5 rounded-full ${t.pos ? "bg-primary" : "bg-red-400"}`} />
                    <span className="text-white/60 text-[10px]">{t.desc}</span>
                  </div>
                  <span className={`text-[10px] font-bold ${t.pos ? "text-primary" : "text-red-400"}`}>{t.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BackofficeMockup() {
  return (
    <div className="relative flex items-center justify-center min-h-[360px] bg-secondary rounded-2xl overflow-hidden p-6 select-none">
      <div className="w-full max-w-sm">
        <div className="bg-background rounded-t-xl border-2 border-white/20 shadow-2xl overflow-hidden">
          <div className="bg-secondary px-3 py-2 flex items-center gap-2 border-b border-white/10">
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-red-400" />
              <div className="w-2 h-2 rounded-full bg-yellow-400" />
              <div className="w-2 h-2 rounded-full bg-green-400" />
            </div>
            <Image src="/assets/logo-parcele-pay-new.png" alt="ParcelePay" width={64} height={14} className="h-3.5 w-auto brightness-0 invert ml-2" />
            <span className="text-white/30 text-[9px] ml-1">Backoffice</span>
          </div>
          <div className="p-3">
            <div className="grid grid-cols-3 gap-1.5 mb-2.5">
              {[
                { label: "Faturamento", val: "R$143k", cls: "text-secondary" },
                { label: "Transações", val: "2.841", cls: "text-secondary" },
                { label: "Economia total", val: "R$48k", cls: "text-primary" },
              ].map((s) => (
                <div key={s.label} className="bg-white rounded-lg p-2 border border-border shadow-sm">
                  <p className="text-[7px] text-muted-foreground leading-none mb-0.5">{s.label}</p>
                  <p className={`text-xs font-black ${s.cls}`}>{s.val}</p>
                </div>
              ))}
            </div>
            <div className="bg-white rounded-lg p-2 border border-border mb-2">
              <p className="text-[7px] text-muted-foreground mb-1.5">Split por dia (últimos 7 dias)</p>
              <div className="flex items-end gap-1 h-10">
                {[55, 75, 40, 90, 65, 100, 70].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm"
                    style={{ height: `${h}%`, background: i === 5 ? "#6DC200" : "rgba(109,194,0,0.35)" }}
                  />
                ))}
              </div>
            </div>
            <div className="bg-white rounded-lg border border-border overflow-hidden">
              <div className="grid grid-cols-3 bg-secondary/5 px-2 py-1.5">
                {["Estabelecimento", "Split", "Status"].map((h) => (
                  <span key={h} className="text-[7px] font-semibold text-secondary/50">{h}</span>
                ))}
              </div>
              {[
                { ec: "Restaurante Silva", val: "R$4.200", ok: true },
                { ec: "Clínica Vida+", val: "R$7.800", ok: true },
                { ec: "Salão Bella", val: "R$1.900", ok: false },
              ].map((r, i) => (
                <div key={i} className="grid grid-cols-3 px-2 py-1.5 border-t border-border">
                  <span className="text-[7px] text-secondary truncate">{r.ec}</span>
                  <span className="text-[7px] font-bold text-secondary">{r.val}</span>
                  <span className={`text-[7px] font-semibold ${r.ok ? "text-primary" : "text-yellow-500"}`}>
                    {r.ok ? "✓ Liquidado" : "⏳ Pendente"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-white/15 h-2.5 rounded-b mx-3 border border-white/20 border-t-0" />
        <div className="bg-white/8 h-1 rounded-b mx-6" />
      </div>
    </div>
  );
}

function PlataformaContasIllustration() {
  return (
    <div className="relative bg-secondary rounded-2xl overflow-hidden min-h-[360px] select-none">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />

      {/* Store sign */}
      <div className="absolute top-3 left-0 right-0 flex justify-center">
        <div className="bg-primary/20 border border-primary/40 rounded-lg px-3 py-1 flex items-center gap-1.5">
          <Image src="/assets/logo-parcele-pay-new.png" alt="ParcelePay" width={52} height={12} className="h-3 w-auto brightness-0 invert" />
          <span className="text-primary text-[8px] font-bold">· Pague contas aqui</span>
        </div>
      </div>

      {/* Counter */}
      <div className="absolute bottom-0 left-0 right-0 px-4 pb-3">
        <div className="bg-white/10 rounded-xl border border-white/20 p-3">
          <div className="flex items-start gap-3">
            {/* POS */}
            <div className="w-14 bg-[#12122a] rounded-lg border border-white/20 overflow-hidden flex-shrink-0">
              <div className="bg-black/60 m-1 rounded p-1">
                <p className="text-primary text-[8px] font-bold text-center font-mono">R$284,50</p>
                <p className="text-white/30 text-[6px] text-center">BOLETO</p>
              </div>
              <div className="grid grid-cols-3 gap-px px-1 pb-1">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((k) => (
                  <div key={k} className="bg-white/10 rounded text-center py-px">
                    <span className="text-white/40 text-[6px]">{k}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Bills */}
            <div className="flex-1 space-y-1.5">
              {[
                { desc: "Conta de luz", val: "R$187,40", active: false },
                { desc: "IPTU parcela 3", val: "R$284,50", active: true },
                { desc: "Telefone", val: "R$89,90", active: false },
              ].map((b, i) => (
                <div key={i} className={`flex justify-between items-center py-0.5 ${i < 2 ? "border-b border-white/10" : ""} ${b.active ? "opacity-100" : "opacity-50"}`}>
                  <div className="flex items-center gap-1">
                    <div className={`w-1.5 h-1.5 rounded-full ${b.active ? "bg-primary" : "bg-white/30"}`} />
                    <span className="text-white text-[9px]">{b.desc}</span>
                  </div>
                  <span className={`text-[9px] font-bold ${b.active ? "text-primary" : "text-white/50"}`}>{b.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function WhitelabelIllustration() {
  return (
    <div className="relative bg-secondary rounded-2xl overflow-hidden min-h-[360px] select-none flex items-center justify-center">
      <Image
        src="/assets/cappta-pos-composite.png"
        alt="Maquininha e celular com sua marca"
        width={700}
        height={500}
        className="object-contain w-full h-full"
      />
    </div>
  );
}

/* ─────────────────────────── SECTION ─────────────────────────── */

export default function Solucoes() {
  return (
    <section id="solucoes" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-secondary border-primary/20">
            Ecossistema completo
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Nossas <span className="text-primary">Soluções</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tudo que seu negócio precisa em uma única plataforma — da maquininha ao split tributário.
          </p>
        </div>

        {/* ── Payments ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-10 items-center mb-20"
        >
          <PaymentsMockup />
          <div>
            <Badge className="mb-3 bg-primary/10 text-secondary border-primary/20">Payments</Badge>
            <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-2">
              Aceite qualquer pagamento.{" "}
              <span className="text-primary">Com split automático.</span>
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Débito, crédito, PIX, boleto, link de pagamento e parcelamento em até 21x —
              tudo integrado, com split de agenda embutido em cada transação.
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Parcelamento em até 21x",
                "PIX instantâneo",
                "Link de pagamento com recorrência",
                "Boleto bancário",
                "Split de agenda automático",
                "Anti-fraude incluído",
                "20+ adquirentes (Cielo, Rede, Stone, GetNet…)",
              ].map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* ── Banking ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-10 items-center mb-20"
        >
          <div className="order-2 lg:order-1">
            <Badge className="mb-3 bg-primary/10 text-secondary border-primary/20">Banking</Badge>
            <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-2">
              Uma conta digital feita para{" "}
              <span className="text-primary">quem vende muito.</span>
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Gerencie agenda financeira, faça PIX e TED, e acompanhe cada centavo
              da sua operação em um único lugar.
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Conta digital com mensalidade",
                "PIX e TED",
                "Gestão de agenda financeira",
                "Pagamento de boletos",
                "Cartão virtual",
                "Controle total via app",
              ].map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 lg:order-2">
            <BankingMockup />
          </div>
        </motion.div>

        {/* ── Backoffice ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-10 items-center mb-20"
        >
          <BackofficeMockup />
          <div>
            <Badge className="mb-3 bg-primary/10 text-secondary border-primary/20">Backoffice</Badge>
            <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-2">
              Gestão completa da sua operação.{" "}
              <span className="text-primary">Em tempo real.</span>
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Portal white-label com relatórios, conciliação automática e controle
              de estabelecimentos — tudo em um único painel.
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Portal de gestão white-label",
                "Relatórios e conciliação automática",
                "Controle de estabelecimentos",
                "API de integração",
                "Webhook em tempo real",
                "Suporte técnico dedicado",
              ].map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* ── Plataforma de Contas ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-10 items-center mb-20"
        >
          <div className="order-2 lg:order-1">
            <Badge className="mb-3 bg-primary/10 text-secondary border-primary/20">Plataforma de Contas</Badge>
            <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-2">
              Seu cliente paga contas na sua loja.{" "}
              <span className="text-primary">Você fatura.</span>
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Pagamento de boletos e contas com cartão instalado na loja — transforma o
              estabelecimento em destino de fluxo e aumenta o ticket médio.
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Pagamento de contas com cartão",
                "Instalado na loja",
                "Atrai clientes ao estabelecimento",
                "Aumenta ticket médio",
                "Fácil de operar",
                "Sem integração complexa",
              ].map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 lg:order-2">
            <PlataformaContasIllustration />
          </div>
        </motion.div>

        {/* ── Whitelabel ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-10 items-center mb-20"
        >
          <WhitelabelIllustration />
          <div>
            <Badge className="mb-3 bg-primary/10 text-secondary border-primary/20">Whitelabel</Badge>
            <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-2">
              Sua marca no produto.{" "}
              <span className="text-primary">Nossa tecnologia por trás.</span>
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Para clientes com alto potencial e carteira para bancarizar: ofereça toda a
              solução ParcelePay sob a sua própria marca, sem abrir mão da tecnologia e do suporte.
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Maquininha e app com sua marca",
                "Portal de gestão personalizado",
                "Onboarding de clientes white-label",
                "Suporte técnico dedicado",
                "Para carteiras de alto TPV",
              ].map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <div className="text-center">
          <a
            href="#contato"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-secondary text-white font-semibold hover:opacity-90 transition-opacity"
          >
            Fale com um especialista
          </a>
        </div>
      </div>
    </section>
  );
}
