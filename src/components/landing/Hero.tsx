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
              A ParcelePay estrutura o split de agenda para reduzir sua base tributável
              no Simples Nacional — sem trocar de CNPJ, com toda a operação formalizada.
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
            <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-6 space-y-4">
              <p className="text-white/50 text-sm font-medium uppercase tracking-wide">
                Quanto você economizaria com split de 80%?
              </p>

              {/* Table header */}
              <div className="grid grid-cols-4 gap-2 text-xs text-white/40 font-medium pb-2 border-b border-white/10">
                <span>Faturamento</span>
                <span className="text-center">Simples atual</span>
                <span className="text-center">Com split</span>
                <span className="text-center text-primary">Economia</span>
              </div>

              {/* Rows */}
              {[
                { fat: "R$100k/mês", atual: "R$13.000", split: "R$3.500", eco: "R$9.500" },
                { fat: "R$200k/mês", atual: "R$31.500", split: "R$8.000", eco: "R$23.500" },
                { fat: "R$300k/mês", atual: "R$52.500", split: "R$12.600", eco: "R$39.900" },
              ].map((row, i) => (
                <div key={i} className="grid grid-cols-4 gap-2 items-center py-2 border-b border-white/5">
                  <span className="text-white/70 text-sm font-medium">{row.fat}</span>
                  <span className="text-center text-red-400 text-sm font-semibold">{row.atual}</span>
                  <span className="text-center text-white/60 text-sm">{row.split}</span>
                  <span className="text-center text-primary text-sm font-bold">{row.eco}</span>
                </div>
              ))}

              <div className="bg-primary/15 border border-primary/30 rounded-xl p-4 text-center">
                <p className="text-white/60 text-xs mb-1">Empresa de R$300k/mês economiza até</p>
                <p className="text-primary text-3xl font-black">R$ 478.800/ano</p>
              </div>

              <p className="text-white/25 text-xs text-center leading-relaxed">
                Serviços (Anexo III), split 80%. Inclui taxa de serviço.{" "}
                <a href="#calculadora-cta" className="text-primary/60 underline">Calcule para seu negócio →</a>
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
