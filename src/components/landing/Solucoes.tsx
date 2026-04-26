"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, CreditCard, Banknote, Code2, Building, Receipt } from "lucide-react";
import Image from "next/image";

const maquinas = [
  { nome: "P2", img: "/assets/p2-machine.png", desc: "Compacta e portátil" },
  { nome: "L300", img: "/assets/l300-machine.png", desc: "Display touchscreen" },
  { nome: "A910", img: "/assets/a910-machine.png", desc: "Android completo" },
];

const produtos = [
  {
    icon: CreditCard,
    titulo: "Payments",
    tagline: "Aceite qualquer pagamento. Em qualquer formato. Com split automático.",
    descricao: "Débito, crédito, PIX, boleto, link de pagamento e parcelamento em até 21x — tudo integrado, tudo rastreado.",
    features: [
      "Parcelamento em até 21x",
      "PIX instantâneo",
      "Link de pagamento",
      "Boleto bancário",
      "Split de agenda automático",
      "Anti-fraude incluído",
    ],
    highlight: "PIX: 1,55% | Cartão: a partir de 2,80%",
  },
  {
    icon: Banknote,
    titulo: "Banking",
    tagline: "Uma conta digital feita para quem vende muito e quer controle total.",
    descricao: "Gerencie agenda financeira, faça PIX e TED, e acompanhe cada centavo da sua operação em um único lugar.",
    features: [
      "Conta digital com mensalidade",
      "PIX e TED",
      "Gestão de agenda financeira",
      "Pagamento de boletos",
      "Cartão virtual",
      "Controle via app",
    ],
    highlight: "Conta com mensalidade fixa",
  },
  {
    icon: Building,
    titulo: "Backoffice",
    tagline: "Gestão completa da sua operação de pagamentos — em tempo real.",
    descricao: "Portal white-label com relatórios, conciliação automática e controle de estabelecimentos. Tudo no painel, nada no Excel.",
    features: [
      "Portal de gestão white-label",
      "Relatórios e conciliação",
      "Controle de estabelecimentos",
      "API de integração",
      "Webhook em tempo real",
      "Suporte técnico dedicado",
    ],
    highlight: "Integração em minutos",
  },
  {
    icon: Receipt,
    titulo: "Plataforma de Contas",
    tagline: "Seu cliente paga contas no seu estabelecimento. Você fatura.",
    descricao: "Ofereça pagamento de contas com cartão direto no seu caixa — e transforme o EC em destino de fluxo de clientes.",
    features: [
      "Pagamento de contas com cartão",
      "Instalado no estabelecimento",
      "Atrai clientes ao EC",
      "Aumenta ticket médio",
      "Fácil de operar",
      "Sem necessidade de integração complexa",
    ],
    highlight: "Mais clientes no seu estabelecimento",
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
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {produto.titulo}
                  </CardTitle>
                  <p className="text-primary/80 text-sm font-medium italic">{produto.tagline}</p>
                  <p className="text-muted-foreground text-sm mt-1">{produto.descricao}</p>
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
