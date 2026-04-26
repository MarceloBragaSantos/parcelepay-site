"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, CreditCard, Banknote, Code2, Building } from "lucide-react";
import Image from "next/image";

const maquinas = [
  { nome: "P2", img: "/assets/p2-machine.png", desc: "Compacta e portátil" },
  { nome: "L300", img: "/assets/l300-machine.png", desc: "Display touchscreen" },
  { nome: "A910", img: "/assets/a910-machine.png", desc: "Android completo" },
];

const produtos = [
  {
    icon: CreditCard,
    titulo: "Gateway de Pagamentos",
    descricao: "Solução completa para processar pagamentos online e presencial",
    features: ["Integração via API", "Checkout personalizado", "Parcelamento até 21x", "Anti-fraude incluído", "PIX instantâneo", "Split de agenda"],
    highlight: "PIX: 1,55% | Cartão: a partir de 2,80%",
  },
  {
    icon: Banknote,
    titulo: "Conta Digital",
    descricao: "Conta gratuita com tudo que sua empresa precisa",
    features: ["Conta 100% gratuita", "PIX e TED sem taxas", "Payout instantâneo", "Pagamento de boletos", "Cartão virtual", "Controle total via app"],
    highlight: "Zero anuidade • Zero manutenção",
  },
  {
    icon: Code2,
    titulo: "API de Integração",
    descricao: "Integre pagamentos em qualquer sistema",
    features: ["Documentação completa", "SDK múltiplas linguagens", "Webhook em tempo real", "Sandbox para testes", "Suporte técnico dedicado", "Implementação rápida"],
    highlight: "Integração em minutos",
  },
  {
    icon: Building,
    titulo: "Software PDV/POS",
    descricao: "Sistema completo para restaurantes e lojas",
    features: ["Retaguarda na nuvem", "App para restaurantes", "Controle de estoque", "Relatórios completos", "Integração com pagamentos", "Suporte especializado"],
    highlight: "Retaguarda: R$ 99/mês • App: R$ 19,90",
  },
];

export default function Solucoes() {
  return (
    <section id="solucoes" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-14">
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

        {/* Máquinas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center gap-8 mb-16 flex-wrap"
        >
          {maquinas.map((m, i) => (
            <motion.div
              key={m.nome}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="text-center"
            >
              <div className="w-32 h-44 relative mx-auto mb-3">
                <Image src={m.img} alt={`Máquina ${m.nome}`} fill className="object-contain drop-shadow-xl" />
              </div>
              <p className="font-bold text-secondary">{m.nome}</p>
              <p className="text-xs text-muted-foreground">{m.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Produtos */}
        <div className="grid md:grid-cols-2 gap-6">
          {produtos.map((produto, i) => (
            <motion.div
              key={produto.titulo}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-primary/20 hover:border-primary/50">
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors group-hover:scale-110 duration-300">
                    <produto.icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">{produto.titulo}</CardTitle>
                  <p className="text-muted-foreground text-sm">{produto.descricao}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-5">
                    {produto.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Badge variant="secondary" className="w-full justify-center py-2 text-xs">
                    {produto.highlight}
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
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
