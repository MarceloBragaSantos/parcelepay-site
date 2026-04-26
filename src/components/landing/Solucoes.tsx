"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Code2, Receipt } from "lucide-react";
import Image from "next/image";

const complementares = [
  {
    icon: Code2,
    titulo: "Backoffice",
    tagline: "Gestão completa da sua operação — em tempo real.",
    descricao: "Portal white-label com relatórios, conciliação automática e controle de estabelecimentos.",
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
    descricao: "Pagamento de contas com cartão instalado no EC — transforma o estabelecimento em destino de fluxo.",
    features: [
      "Pagamento de contas com cartão",
      "Instalado no estabelecimento",
      "Atrai clientes ao EC",
      "Aumenta ticket médio",
      "Fácil de operar",
      "Sem integração complexa",
    ],
    highlight: "Mais clientes no seu estabelecimento",
  },
];

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

        {/* Payments — featured */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-10 items-center mb-20"
        >
          <div className="relative rounded-2xl overflow-hidden bg-secondary flex items-center justify-center min-h-[340px]">
            <Image
              src="/assets/cappta-pos-composite.png"
              alt="Maquininhas de pagamento — P2, L300, A910"
              width={700}
              height={500}
              className="object-contain w-full h-full"
            />
          </div>

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
            <div className="inline-block px-4 py-2 rounded-lg bg-primary/10 text-secondary text-sm font-medium border border-primary/20">
              PIX: 1,55% &nbsp;|&nbsp; Cartão: a partir de 2,80%
            </div>
          </div>
        </motion.div>

        {/* Banking — featured (reversed) */}
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

          <div className="order-1 lg:order-2 relative rounded-2xl overflow-hidden bg-secondary flex items-center justify-center min-h-[340px]">
            <Image
              src="/assets/cappta-banking.png"
              alt="App Conta Digital ParcelePay"
              width={600}
              height={700}
              className="object-contain w-full h-full max-h-[420px]"
            />
          </div>
        </motion.div>

        {/* Complementares — 2 cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {complementares.map((produto, i) => (
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
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
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
