"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer id="contato-info" className="bg-secondary border-t border-white/10">
      <div className="container mx-auto px-4 max-w-6xl py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-2 lg:col-span-1"
          >
            <Image
              src="/assets/logo-parcele-pay.png"
              alt="ParcelePay"
              width={140}
              height={36}
              className="h-9 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-white/60 text-sm leading-relaxed mb-4 max-w-xs">
              Plataforma de meios de pagamento especializada em redução tributária via
              split de pagamentos para empresas do Simples Nacional.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Facebook" className="text-white/40 hover:text-primary transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </a>
              <a href="#" aria-label="Instagram" className="text-white/40 hover:text-primary transition-colors">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="text-white/40 hover:text-primary transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {[
                { label: "Início", href: "#home" },
                { label: "Como funciona", href: "#como-funciona" },
                { label: "Calculadora", href: "#calculadora" },
                { label: "Parceiros", href: "#parceiros" },
                { label: "Área do Cliente", href: "https://cliente.parcelepay.com.br/login" },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-white/60 text-sm hover:text-primary transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold mb-4">Produtos</h3>
            <ul className="space-y-2">
              {[
                "Máquinas P2, L300, A910",
                "Gateway de Pagamentos",
                "Conta Digital",
                "Sistema PDV/POS",
                "API de Integração",
                "Parcelamento até 21x",
              ].map((item) => (
                <li key={item} className="text-white/60 text-sm">{item}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-white/60 text-sm leading-relaxed">
                  <p>Shopping Crystal Mall</p>
                  <p>Estr. dos Bandeirantes, 7967</p>
                  <p>Sala 204 — Jacarepaguá</p>
                  <p>Rio de Janeiro — RJ, CEP 22780-085</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="tel:+5521997902401" className="text-white/60 text-sm hover:text-primary transition-colors">
                  (21) 99790-2401
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="mailto:contato@parcelepay.com.br" className="text-white/60 text-sm hover:text-primary transition-colors">
                  contato@parcelepay.com.br
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © 2024 ParcelePay — FUTURA TECNOLOGIA LTDA. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-xs">
            {["Política de Privacidade", "Termos de Uso", "Certificações"].map((item) => (
              <a key={item} href="#" className="text-white/30 hover:text-primary transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
