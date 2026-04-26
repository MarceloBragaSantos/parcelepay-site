"use client";

import { motion } from "framer-motion";
import { ArrowRight, TrendingDown, Shield, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-secondary/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/60 to-transparent" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 text-sm px-3 py-1">
                ✦ Tecnologia de Split de Pagamento
              </Badge>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Pague menos imposto.{" "}
              <span className="text-primary">Venda mais.</span>{" "}
              Cresça no Simples Nacional.
            </motion.h1>

            <motion.p
              className="text-lg text-white/80 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              A ParcelePay usa o split de agenda para reduzir sua base tributável
              automaticamente — sem mudar CNPJ, sem burocracia, sem custo extra.
              Parcelamento em até{" "}
              <strong className="text-primary">21x</strong>.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a
                href="#calculadora"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg hover:opacity-90 transition-opacity"
              >
                Simule sua economia
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#como-funciona"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors"
              >
                Como funciona
              </a>
            </motion.div>

            <motion.div
              className="grid grid-cols-3 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {[
                { icon: TrendingDown, label: "Redução de imposto", value: "até 40%" },
                { icon: Shield, label: "Split regulamentado BC", value: "100% legal" },
                { icon: Zap, label: "Habilitação em", value: "48 horas" },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <item.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-xl font-bold text-white">{item.value}</p>
                  <p className="text-xs text-white/50">{item.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Preview card */}
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8 space-y-4">
              <p className="text-white/50 text-sm font-medium uppercase tracking-wide">
                Simulação em tempo real
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4">
                  <p className="text-red-400 text-xs font-medium mb-1">CENÁRIO ATUAL</p>
                  <p className="text-white text-2xl font-bold">R$ 18.000</p>
                  <p className="text-white/40 text-xs">/mês em impostos</p>
                  <div className="mt-2 px-2 py-0.5 rounded bg-red-500/20 text-red-400 text-xs inline-block">
                    4ª faixa — 8,42% efetivo
                  </div>
                </div>
                <div className="bg-primary/10 border border-primary/20 rounded-xl p-4">
                  <p className="text-primary text-xs font-medium mb-1">COM PARCELEPAY</p>
                  <p className="text-white text-2xl font-bold">R$ 9.200</p>
                  <p className="text-white/40 text-xs">/mês em impostos</p>
                  <div className="mt-2 px-2 py-0.5 rounded bg-primary/20 text-primary text-xs inline-block">
                    3ª faixa — 5,14% efetivo
                  </div>
                </div>
              </div>

              <div className="bg-primary/15 border border-primary/30 rounded-xl p-5">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-white/60 text-sm mb-1">Economia líquida mensal</p>
                    <p className="text-primary text-4xl font-bold">R$ 7.300</p>
                  </div>
                  <div className="text-right">
                    <p className="text-white/60 text-xs mb-1">Anual</p>
                    <p className="text-white text-xl font-bold">R$ 87.600</p>
                  </div>
                </div>
              </div>

              <p className="text-white/30 text-xs text-center">
                Simulação: faturamento R$150k/mês, 40% splitado, Serviços (Anexo III)
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating badge */}
      <motion.div
        animate={{ y: [-8, 8, -8] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute top-24 right-8 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold shadow-lg hidden lg:block"
      >
        Até 21x sem juros
      </motion.div>
    </section>
  );
}
