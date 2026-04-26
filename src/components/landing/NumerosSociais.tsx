"use client";

import { motion } from "framer-motion";

const numeros = [
  { valor: "12+", label: "anos de mercado", desc: "Infraestrutura Cappta desde 2012" },
  { valor: "200k+", label: "estabelecimentos", desc: "ECs ativos em todo o Brasil" },
  { valor: "20+", label: "adquirentes", desc: "Cielo, Rede, Stone, GetNet e mais" },
  { valor: "R$ bi", label: "em transações", desc: "Processados com segurança e estabilidade" },
];

export default function NumerosSociais() {
  return (
    <section className="py-16 bg-secondary border-y border-white/10">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-white/50 text-sm uppercase tracking-widest font-medium">
            Infraestrutura Cappta · Experiência comprovada
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {numeros.map((n, i) => (
            <motion.div
              key={n.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 transition-colors"
            >
              <p className="text-4xl md:text-5xl font-black text-primary mb-1">{n.valor}</p>
              <p className="text-white font-semibold text-sm mb-1">{n.label}</p>
              <p className="text-white/40 text-xs leading-relaxed">{n.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
