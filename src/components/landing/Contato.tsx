"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Send } from "lucide-react";

export default function Contato() {
  const [enviado, setEnviado] = useState(false);

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <Badge className="mb-4 bg-primary/10 text-secondary border-primary/20">
              Fale conosco
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
              Pronto para reduzir seus impostos?
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Nossa equipe vai analisar o seu caso e mostrar exatamente quanto sua empresa
              pode economizar. Atendimento humanizado, sem robôs.
            </p>

            <div className="space-y-4">
              {[
                { icon: Phone, label: "(21) 99754-2309", href: "tel:+5521997542309" },
                { icon: Mail, label: "contato@parcelepay.com.br", href: "mailto:contato@parcelepay.com.br" },
                {
                  icon: MapPin,
                  label: "Shopping Crystal Mall — Estr. dos Bandeirantes, 7967, Sala 204, Jacarepaguá — RJ",
                  href: "#",
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex gap-3 items-start group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-secondary text-sm pt-2 leading-relaxed">{item.label}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="bg-background rounded-2xl border border-border p-8">
            {enviado ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-2">Mensagem enviada!</h3>
                <p className="text-muted-foreground">
                  Nossa equipe vai entrar em contato em breve para apresentar sua simulação personalizada.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setEnviado(true);
                }}
                className="space-y-4"
              >
                <h3 className="text-xl font-bold text-secondary mb-6">Solicite uma demonstração gratuita</h3>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label>Nome</Label>
                    <Input placeholder="Seu nome" required />
                  </div>
                  <div className="space-y-1.5">
                    <Label>WhatsApp</Label>
                    <Input placeholder="(21) 99999-9999" required />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label>E-mail</Label>
                  <Input type="email" placeholder="seu@email.com" required />
                </div>

                <div className="space-y-1.5">
                  <Label>Segmento da empresa</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="restaurante">Restaurante / Bar</SelectItem>
                      <SelectItem value="motel">Motel / Pousada</SelectItem>
                      <SelectItem value="clinica">Clínica / Consultório</SelectItem>
                      <SelectItem value="estetica">Estética / Beleza</SelectItem>
                      <SelectItem value="automoveis">Veículos / Motos</SelectItem>
                      <SelectItem value="moveis">Móveis / Decoração</SelectItem>
                      <SelectItem value="outro">Outro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-1.5">
                  <Label>Faturamento mensal aproximado</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ate50">Até R$ 50.000</SelectItem>
                      <SelectItem value="50a150">R$ 50.000 a R$ 150.000</SelectItem>
                      <SelectItem value="150a400">R$ 150.000 a R$ 400.000</SelectItem>
                      <SelectItem value="acima400">Acima de R$ 400.000</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-1.5">
                  <Label>Tipo de interesse</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cliente">Quero reduzir meus impostos</SelectItem>
                      <SelectItem value="parceiro">Quero ser parceiro/reseller</SelectItem>
                      <SelectItem value="contador">Sou contador e quero indicar clientes</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-bold text-base hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Solicitar demonstração gratuita
                </button>

                <p className="text-xs text-muted-foreground text-center">
                  Sem compromisso. Nossa equipe vai mostrar exatamente quanto você economiza.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
