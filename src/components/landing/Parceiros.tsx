"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Calculator, Users, TrendingUp, Building2 } from "lucide-react";

export default function Parceiros() {
  return (
    <section id="parceiros" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
              Programa de Representantes
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Represente a ParcelePay.{" "}
              <span className="text-primary">Ganhe recorrência real.</span>
            </h2>
            <p className="text-white/70 mb-8 leading-relaxed">
              Um cliente com R$ 300 mil de faturamento mensal pode gerar
              R$ 3 mil por mês para o seu bolso — todo mês, automaticamente,
              enquanto ele usar a plataforma.
            </p>
            <p className="text-white/60 mb-8 text-sm leading-relaxed">
              Você não vende uma máquina. Você constrói uma carteira. Quanto
              maior o faturamento do seu cliente, maior a sua recorrência.
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  icon: Calculator,
                  titulo: "Contadores e Escritórios Contábeis",
                  desc: "Ofereça uma solução de redução tributária para seus clientes do Simples Nacional. Comissão recorrente enquanto o cliente operar.",
                },
                {
                  icon: Users,
                  titulo: "Consultores e Agências",
                  desc: "Indique e ganhe comissão sobre o faturamento bruto de cada cliente ativo. Sem burocracia, sem mensalidade para o representante.",
                },
                {
                  icon: Building2,
                  titulo: "Revendas e Distribuidoras",
                  desc: "Venda a ParcelePay com seu próprio markup, mantendo o cliente na sua base. Suporte comercial e material dedicado.",
                },
              ].map((item) => (
                <div
                  key={item.titulo}
                  className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/10"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">{item.titulo}</h3>
                    <p className="text-white/60 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg hover:opacity-90 transition-opacity"
            >
              Quero ser representante
            </a>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Earnings example card */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <TrendingUp className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">
                Quanto você pode ganhar
              </h3>
              <p className="text-white/60 mb-6 text-sm">
                Sua comissão é calculada sobre o faturamento bruto de cada cliente ativo
                na sua carteira — de forma automática e recorrente.
              </p>

              <div className="space-y-3">
                {[
                  { faturamento: "R$ 100 mil/mês", ganho: "R$ 1.000/mês" },
                  { faturamento: "R$ 300 mil/mês", ganho: "R$ 3.000/mês" },
                  { faturamento: "R$ 500 mil/mês", ganho: "R$ 5.000/mês" },
                ].map((ex) => (
                  <div
                    key={ex.faturamento}
                    className="flex justify-between items-center py-3 px-4 rounded-lg bg-white/5 border border-white/10"
                  >
                    <span className="text-white/60 text-sm">
                      Cliente com {ex.faturamento}
                    </span>
                    <span className="text-primary font-bold">{ex.ganho}</span>
                  </div>
                ))}
              </div>

              <p className="text-white/30 text-xs mt-4">
                * Valores ilustrativos. A comissão final depende do markup acordado.
              </p>
            </div>

            {/* White-label note */}
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6">
              <h3 className="text-white font-semibold mb-2">
                Quer levar a ParcelePay para a sua base de clientes?
              </h3>
              <p className="text-white/60 text-sm mb-4">
                Para empresas e grupos com alto volume de transações, oferecemos
                estrutura white-label — sua marca, nossa tecnologia, sua operação
                escalada.
              </p>
              <a
                href="#contato"
                className="text-primary text-sm font-semibold hover:opacity-80 transition-opacity"
              >
                Falar com o time comercial →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
