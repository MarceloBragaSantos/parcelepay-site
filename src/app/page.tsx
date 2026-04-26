import Link from "next/link";
import { ArrowRight, Check, TrendingDown, CreditCard, Landmark, LayoutDashboard, Smartphone, Award, Store, Users, Building2, HeadphonesIcon, BookOpen, Package, UserCheck } from "lucide-react";
import NavbarSite from "@/components/site/NavbarSite";
import Footer from "@/components/landing/Footer";
import WhatsAppButton from "@/components/landing/WhatsAppButton";

/* ─── HERO ─────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-16 bg-secondary overflow-hidden">
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-20">
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-secondary/60" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10 py-20">
        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-6">
          Ecossistema financeiro para negócios
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 max-w-3xl">
          Sua empresa,{" "}
          <span className="text-primary">seu ecossistema financeiro.</span>
        </h1>
        <p className="text-lg text-white/70 mb-10 leading-relaxed max-w-xl">
          Tecnologia de pagamentos, conta digital e gestão integradas — com split de agenda
          que reduz até 76% dos impostos no Simples Nacional.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/reducao-tributaria"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg hover:opacity-90 transition-opacity"
          >
            Comece agora
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/#modulos"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors"
          >
            Conheça as soluções
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── DESTAQUE: SPLIT DE AGENDA ─────────────────────────── */
function DestaqueSplit() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-4">
              Nosso principal diferencial
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
              A única plataforma com split de agenda integrado à redução tributária.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              O split de agenda divide os recebíveis de cartão entre os participantes da operação —
              reduzindo a base tributável no Simples Nacional de forma estruturada, legal e
              regulamentada pelo Banco Central do Brasil.
            </p>
            <Link
              href="/reducao-tributaria"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              Entenda como funciona <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { val: "até 76%",    label: "Redução de imposto no Simples" },
              { val: "100 dias",   label: "Para designar a agenda de recebíveis" },
              { val: "100% legal", label: "BCB + conformidade com a RFB" },
              { val: "21x",        label: "Parcelamento máximo" },
            ].map((s) => (
              <div key={s.label} className="bg-background border border-border rounded-2xl p-6 text-center">
                <p className="text-2xl font-black text-primary mb-2">{s.val}</p>
                <p className="text-muted-foreground text-sm leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── TODA EMPRESA PODE ─────────────────────────────────── */
function TodoaEmpresaPode() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 max-w-6xl text-center">
        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-4">
          Para quem é
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 max-w-2xl mx-auto">
          Toda empresa do Simples Nacional pode pagar menos imposto.
        </h2>
        <p className="text-white/60 max-w-xl mx-auto mb-12 leading-relaxed">
          Restaurantes, clínicas, lojas, escolas, construtoras — qualquer empresa com mais
          de um participante na operação pode estruturar o split de agenda.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Store,
              titulo: "Clientes",
              desc: "Reduza seus impostos, aceite mais formas de pagamento e gerencie sua operação em uma única plataforma.",
              href: "/reducao-tributaria",
              cta: "Ver redução tributária",
            },
            {
              icon: Users,
              titulo: "Representantes",
              desc: "Construa uma carteira recorrente. Cada cliente ativo gera comissão todo mês — enquanto ele operar.",
              href: "/representantes",
              cta: "Ver programa de representantes",
            },
            {
              icon: Building2,
              titulo: "Empresas maiores",
              desc: "Bancarize sua operação com a sua própria marca. White-label completo com nossa tecnologia por trás.",
              href: "/whitelabel",
              cta: "Ver solução white-label",
            },
          ].map((c) => (
            <div key={c.titulo} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-left hover:border-primary/40 transition-colors">
              <div className="w-11 h-11 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                <c.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-bold text-white mb-2">{c.titulo}</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-4">{c.desc}</p>
              <Link href={c.href} className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold hover:gap-2.5 transition-all">
                {c.cta} <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── MÓDULOS ───────────────────────────────────────────── */
const modulos = [
  {
    icon: TrendingDown,
    badge: "Redução Tributária",
    titulo: "Menos imposto, mais resultado.",
    desc: "O split de agenda divide os recebíveis entre os participantes da operação, reduzindo a base tributável no Simples Nacional.",
    features: [
      "Split de agenda regulamentado pelo BCB",
      "Até 100 dias para designar recebíveis",
      "Redução de até 76% da carga tributária",
      "Cada participante emite sua NF",
      "Estruturação com suporte jurídico",
    ],
    href: "/reducao-tributaria",
    cta: "Conheça a redução tributária",
  },
  {
    icon: CreditCard,
    badge: "Payments",
    titulo: "Captura de pagamentos.",
    desc: "Maquininha, PIX, link de pagamento, boleto e parcelamento em até 21x — tudo com split de agenda embutido.",
    features: [
      "POS, TEF e link de pagamento",
      "PIX e boleto bancário",
      "Parcelamento em até 21x",
      "20+ adquirentes integrados",
      "Anti-fraude incluído",
    ],
    href: "/payments",
    cta: "Conheça o módulo Payments",
  },
  {
    icon: Landmark,
    badge: "Banking",
    titulo: "Conta Digital.",
    desc: "Conta de pagamentos personalizada com agenda financeira, PIX, TED e controle total via app.",
    features: [
      "Conta digital com mensalidade",
      "PIX e TED ilimitados",
      "Gestão de agenda financeira",
      "Cartão virtual",
      "App iOS e Android",
    ],
    href: "/banking",
    cta: "Conheça o módulo Banking",
  },
];

function Modulos() {
  return (
    <section id="modulos" className="py-20 bg-background scroll-mt-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-4">
            Plataforma modular
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Tudo em uma plataforma.
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Escolha os módulos que fazem sentido para o seu negócio.
          </p>
        </div>

        {/* Tab-style module nav */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {[
            { label: "Redução Tributária", href: "/reducao-tributaria" },
            { label: "Payments", href: "/payments" },
            { label: "Banking", href: "/banking" },
            { label: "Backoffice", href: "/backoffice" },
            { label: "Apps para Gestão", href: "/apps" },
            { label: "Whitelabel", href: "/whitelabel" },
          ].map((m) => (
            <Link
              key={m.href}
              href={m.href}
              className="px-4 py-2 rounded-full border border-border text-sm font-medium text-secondary hover:border-primary hover:text-primary transition-colors"
            >
              {m.label}
            </Link>
          ))}
        </div>

        {/* 3 main modules — alternating */}
        <div className="space-y-20">
          {modulos.map((mod, i) => (
            <div
              key={mod.badge}
              className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              {/* Visual side */}
              <div className={`${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="bg-secondary rounded-2xl p-10 flex flex-col items-center justify-center min-h-[280px] border border-white/10">
                  <div className="w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center mb-5">
                    <mod.icon className="w-10 h-10 text-primary" />
                  </div>
                  <p className="text-primary font-bold text-lg">{mod.badge}</p>
                  <p className="text-white/40 text-sm mt-1 text-center max-w-xs">{mod.desc}</p>
                </div>
              </div>

              {/* Text side */}
              <div className={`${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
                  {mod.badge}
                </p>
                <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-6">
                  {mod.titulo}
                </h3>
                <ul className="space-y-3 mb-8">
                  {mod.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={mod.href}
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                >
                  {mod.cta} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* 3 extra modules */}
        <div className="grid md:grid-cols-3 gap-6 mt-20 pt-16 border-t border-border">
          {[
            {
              icon: LayoutDashboard,
              titulo: "Backoffice",
              desc: "Portal de gestão white-label com relatórios, conciliação e controle de estabelecimentos em tempo real.",
              href: "/backoffice",
            },
            {
              icon: Smartphone,
              titulo: "Apps para Gestão",
              desc: "Parceiros com aplicativos de gestão para restaurantes, PDV, clínicas, escolas e muito mais.",
              href: "/apps",
            },
            {
              icon: Award,
              titulo: "Whitelabel",
              desc: "Sua marca, nossa tecnologia. Solução completa para empresas com alto volume que querem bancarizar.",
              href: "/whitelabel",
            },
          ].map((m) => (
            <div key={m.titulo} className="group p-6 rounded-2xl border border-border hover:border-primary/40 hover:shadow-md transition-all bg-white">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <m.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-bold text-secondary mb-2">{m.titulo}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{m.desc}</p>
              <Link href={m.href} className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold hover:gap-2.5 transition-all">
                Conheça o módulo <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── SERVIÇOS COMPLEMENTARES ───────────────────────────── */
function ServicosComplementares() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-4">
            Além da tecnologia
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Serviços complementares.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: HeadphonesIcon,
              titulo: "Suporte 360°",
              desc: "Atendimento humano + IA pelos canais que você preferir — WhatsApp, telefone ou e-mail.",
            },
            {
              icon: UserCheck,
              titulo: "Executivo de Contas",
              desc: "Um executivo dedicado para acompanhar sua operação e fazer reuniões estratégicas periódicas.",
            },
            {
              icon: BookOpen,
              titulo: "Treinamento",
              desc: "Capacitação online para sua equipe com acesso à plataforma de aprendizado ParcelePay.",
            },
            {
              icon: Package,
              titulo: "Apoio Logístico",
              desc: "Envio, instalação e manutenção de equipamentos com acompanhamento de ponta a ponta.",
            },
          ].map((s) => (
            <div key={s.titulo} className="p-6 rounded-2xl border border-border hover:border-primary/30 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <s.icon className="w-5 h-5 text-primary" />
              </div>
              <h4 className="font-bold text-secondary mb-2">{s.titulo}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── COMPARATIVO ───────────────────────────────────────── */
function Comparativo() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-4">
            Por que a ParcelePay
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Com e sem a ParcelePay.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Sem */}
          <div className="bg-white rounded-2xl border border-border p-8">
            <h3 className="font-bold text-secondary/50 text-lg mb-6 pb-4 border-b border-border">
              Sem a ParcelePay
            </h3>
            <ul className="space-y-4">
              {[
                "Paga alíquota cheia no Simples Nacional",
                "Sem integração entre pagamentos e gestão",
                "Maquininha, banking e backoffice separados",
                "Sem suporte especializado em tributação",
                "Comissão de representante baseada em volume único",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="text-red-400 font-bold mt-0.5 flex-shrink-0">✕</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Com */}
          <div className="bg-secondary rounded-2xl border border-primary/20 p-8">
            <h3 className="font-bold text-primary text-lg mb-6 pb-4 border-b border-white/10">
              Com a ParcelePay
            </h3>
            <ul className="space-y-4">
              {[
                "Redução de até 76% da carga tributária com split de agenda",
                "Ecossistema integrado: payments, banking e backoffice",
                "Uma plataforma, um contrato, um suporte",
                "Equipe especializada em estruturação tributária",
                "Comissão recorrente sobre o TPV mensal",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-white/70">
                  <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/#contato"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg hover:opacity-90 transition-opacity"
          >
            Quero começar <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── AUTORIDADE ────────────────────────────────────────── */
function Autoridade() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-4">
              Nossa história
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
              12+ anos apoiando empreendedores brasileiros.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Desde 2012 no mercado de meios de pagamento, a ParcelePay conecta empresas
              do Simples Nacional a tecnologia financeira que antes era exclusiva dos grandes.
              Mais de 200 mil estabelecimentos confiam na nossa infraestrutura.
            </p>
            <Link href="/#contato" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
              Conheça nossa história <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { val: "12+",    label: "Anos no mercado" },
              { val: "200k+",  label: "Estabelecimentos" },
              { val: "20+",    label: "Adquirentes" },
              { val: "100%",   label: "Regulamentado BCB" },
            ].map((s) => (
              <div key={s.label} className="bg-background border border-border rounded-2xl p-6 text-center">
                <p className="text-3xl font-black text-primary mb-1">{s.val}</p>
                <p className="text-muted-foreground text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── CTA FINAL ─────────────────────────────────────────── */
function CTAFinal() {
  return (
    <section id="contato" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Pronto para começar?
        </h2>
        <p className="text-white/60 mb-10 text-lg max-w-xl mx-auto">
          Fale com nossa equipe e descubra como a ParcelePay pode transformar
          a operação financeira do seu negócio.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/calculadora"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg hover:opacity-90 transition-opacity"
          >
            Simule sua economia
          </Link>
          <a
            href="https://wa.me/5521997902401"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── PAGE ──────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <NavbarSite />
      <main>
        <Hero />
        <DestaqueSplit />
        <TodoaEmpresaPode />
        <Modulos />
        <ServicosComplementares />
        <Comparativo />
        <Autoridade />
        <CTAFinal />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
