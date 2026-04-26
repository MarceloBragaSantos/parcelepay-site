import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import {
  LayoutDashboard, Check, ArrowRight, ShieldCheck,
  BarChart3, Users, Bell, Webhook, Lock, RefreshCw
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Backoffice | ParcelePay",
  description: "Portal de gestão white-label com relatórios, conciliação automática e controle de estabelecimentos em tempo real.",
};

const recursos = [
  { icon: BarChart3,    titulo: "Dashboard em tempo real",     desc: "TPV, ticket médio, margens e evolução de vendas. Visão consolidada ou por estabelecimento." },
  { icon: RefreshCw,   titulo: "Conciliação automática",      desc: "Confronto automático de transações, liquidações e cobranças. Zero trabalho manual." },
  { icon: Users,       titulo: "Controle de estabelecimentos", desc: "Onboarding, limites, status de operação e histórico de cada EC em um único painel." },
  { icon: ShieldCheck, titulo: "Análise de risco",            desc: "Score de risco automatizado com alertas para padrões suspeitos e transações fora do perfil." },
  { icon: Lock,        titulo: "Perfis de acesso",            desc: "Crie papéis customizados: financeiro, operacional, representante, gestor regional." },
  { icon: Bell,        titulo: "Notificações",                desc: "Alertas de liquidação, contestação e inadimplência via WhatsApp, e-mail e webhook." },
  { icon: Webhook,     titulo: "API e Webhooks",              desc: "Integre com seu ERP ou sistema legado. Eventos em tempo real via webhook configurável." },
  { icon: LayoutDashboard, titulo: "White-label",             desc: "Portal com sua logo, cores e domínio. Seus clientes veem a sua marca, não a ParcelePay." },
];

export default function BackofficePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative py-28 bg-secondary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">Backoffice</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                Gestão completa da sua operação.{" "}
                <span className="text-primary">Em tempo real.</span>
              </h1>
              <p className="text-xl text-white/70 mb-10 leading-relaxed">
                Portal white-label com dashboard, conciliação automática, controle de
                estabelecimentos, análise de risco e API de integração — tudo em um único painel.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/#contato"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg hover:opacity-90 transition-opacity"
                >
                  Quero conhecer <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/whitelabel"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors"
                >
                  Ver White-label
                </Link>
              </div>
            </div>

            {/* Dashboard mockup */}
            <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden min-h-[380px] flex flex-col">
              {/* Topbar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
                <div className="w-3 h-3 rounded-full bg-red-400/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                <div className="w-3 h-3 rounded-full bg-primary/60" />
                <span className="text-white/20 text-xs ml-3">backoffice.parcelepay.com.br</span>
              </div>
              {/* Sidebar + content */}
              <div className="flex flex-1">
                <div className="w-10 bg-secondary/60 border-r border-white/5 flex flex-col gap-3 py-4 items-center">
                  {[BarChart3, Users, RefreshCw, Lock].map((Icon, i) => (
                    <div key={i} className={`w-6 h-6 flex items-center justify-center rounded ${i === 0 ? "text-primary" : "text-white/20"}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  ))}
                </div>
                <div className="flex-1 p-4 space-y-3">
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { label: "TPV hoje", val: "R$ 284k" },
                      { label: "Ticket médio", val: "R$ 142" },
                      { label: "ECs ativos", val: "1.847" },
                    ].map((c) => (
                      <div key={c.label} className="bg-white/5 rounded-lg p-2 text-center">
                        <p className="text-primary text-xs font-bold">{c.val}</p>
                        <p className="text-white/30 text-[10px]">{c.label}</p>
                      </div>
                    ))}
                  </div>
                  {/* Mini bar chart */}
                  <div className="bg-white/5 rounded-lg p-3">
                    <p className="text-white/30 text-[10px] mb-2">Volume semanal</p>
                    <div className="flex items-end gap-1 h-10">
                      {[40, 65, 55, 80, 70, 90, 75].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-sm"
                          style={{ height: `${h}%`, backgroundColor: i === 5 ? "oklch(0.76 0.21 128)" : "rgba(255,255,255,0.1)" }}
                        />
                      ))}
                    </div>
                  </div>
                  {/* Mini table */}
                  <div className="space-y-1">
                    {[
                      { ec: "Restaurante Bom Sabor", status: "✓", cor: "text-primary" },
                      { ec: "Clínica São Lucas",      status: "✓", cor: "text-primary" },
                      { ec: "Loja Moda & Cia",        status: "⏳", cor: "text-yellow-400" },
                    ].map((r) => (
                      <div key={r.ec} className="flex justify-between items-center text-[10px] py-1 border-b border-white/5">
                        <span className="text-white/40">{r.ec}</span>
                        <span className={r.cor}>{r.status}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-white/20 text-[10px] text-center pb-3">[ substituir por screenshot real ]</p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-10 bg-primary">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { val: "100%",    label: "White-label com sua marca" },
              { val: "D+0",    label: "Dados em tempo real" },
              { val: "API",    label: "Integração com qualquer ERP" },
              { val: "Zero",   label: "Conciliação manual" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-black text-secondary mb-1">{s.val}</p>
                <p className="text-secondary/60 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RECURSOS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <Badge className="mb-4 bg-primary/10 text-secondary border-primary/20">Recursos</Badge>
            <h2 className="text-3xl font-bold text-secondary mb-4">
              Tudo que você precisa para operar
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Do onboarding de novos estabelecimentos à conciliação automática — sem planilha, sem trabalho manual.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recursos.map((r) => (
              <div key={r.titulo} className="bg-background rounded-2xl p-6 border border-border hover:border-primary/40 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <r.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-secondary mb-2 text-sm">{r.titulo}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARA REPRESENTANTES */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">Para representantes</Badge>
              <h2 className="text-3xl font-bold text-white mb-6">
                Gerencie sua carteira inteira em um painel.
              </h2>
              <p className="text-white/60 leading-relaxed mb-8">
                Representantes e subagentes têm acesso a um portal dedicado com visibilidade
                total da carteira, acompanhamento de comissões e desempenho por estabelecimento.
              </p>
              <ul className="space-y-3">
                {[
                  "Visão consolidada de todos os ECs da carteira",
                  "Acompanhamento de comissões em tempo real",
                  "Alertas de EC inativo ou com queda de volume",
                  "Relatório mensal de desempenho exportável",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white/80">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/representantes"
                className="mt-8 inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
              >
                Ver programa de representantes <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-4">
              <p className="text-white/40 text-xs uppercase tracking-widest font-medium mb-2">Carteira do representante</p>
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-primary/10 rounded-xl p-4 text-center">
                  <p className="text-primary text-xl font-black">47</p>
                  <p className="text-white/40 text-xs">ECs ativos</p>
                </div>
                <div className="bg-primary/10 rounded-xl p-4 text-center">
                  <p className="text-primary text-xl font-black">R$ 3,2k</p>
                  <p className="text-white/40 text-xs">Comissão do mês</p>
                </div>
              </div>
              {[
                { ec: "Clínica Bem Estar",    tpv: "R$ 68k", status: "Ativo" },
                { ec: "Barbearia Top",        tpv: "R$ 22k", status: "Ativo" },
                { ec: "Escola de Idiomas",    tpv: "R$ 41k", status: "Ativo" },
              ].map((r) => (
                <div key={r.ec} className="flex items-center justify-between py-2 border-b border-white/5">
                  <span className="text-white/60 text-sm">{r.ec}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-primary text-sm font-bold">{r.tpv}</span>
                    <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full">{r.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <LayoutDashboard className="w-12 h-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-secondary mb-4">
            Pronto para ter o Backoffice com sua marca?
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-8">
            Fale com nosso time e veja o portal em funcionamento com uma demonstração ao vivo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contato"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-secondary text-white font-bold text-lg hover:opacity-90 transition-opacity"
            >
              Agendar demonstração <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/whitelabel"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-border text-secondary font-semibold hover:bg-background transition-colors"
            >
              Ver White-label completo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
