"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const links = [
  { label: "Início", href: "#home" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Calculadora", href: "#calculadora-cta" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Segmentos", href: "#segmentos" },
  { label: "Parceiros", href: "#parceiros" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex-shrink-0">
            <Image
              src="/assets/logo-parcele-pay-new.png"
              alt="ParcelePay"
              width={140}
              height={36}
              className="h-9 w-auto"
              priority
            />
          </a>

          <nav className="hidden md:flex items-center gap-5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-white/70 hover:text-primary transition-colors font-medium"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://cliente.parcelepay.com.br/login"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              Área do cliente
            </a>
            <a
              href="#contato"
              className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Começar agora
            </a>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden py-4 space-y-1 border-t border-white/10">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2 px-2 text-sm text-white/70 hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            ))}
            <div className="pt-3 space-y-2">
              <a
                href="https://cliente.parcelepay.com.br/login"
                target="_blank"
                rel="noopener noreferrer"
                className="block py-2 px-2 text-sm text-white/50"
              >
                Área do cliente
              </a>
              <a
                href="#contato"
                className="block py-2 px-4 rounded-lg bg-primary text-primary-foreground text-sm font-semibold text-center"
                onClick={() => setOpen(false)}
              >
                Começar agora
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
