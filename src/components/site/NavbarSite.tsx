"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu, X, ChevronDown,
  CreditCard, Landmark, LayoutDashboard, TrendingDown, Smartphone, Award,
  Store, Users, Building2,
} from "lucide-react";

const solucoes = [
  { icon: TrendingDown,     label: "Redução Tributária", desc: "Split de agenda no Simples Nacional",    href: "/reducao-tributaria" },
  { icon: CreditCard,       label: "Payments",           desc: "Maquininha, PIX, link, parcelamento 21x", href: "/payments" },
  { icon: Landmark,         label: "Banking",            desc: "Conta digital com agenda financeira",    href: "/banking" },
  { icon: LayoutDashboard,  label: "Backoffice",         desc: "Portal de gestão white-label",           href: "/backoffice" },
  { icon: Smartphone,       label: "Apps para Gestão",   desc: "Softwares para PDV, restaurantes, clínicas", href: "/apps" },
  { icon: Award,            label: "Whitelabel",         desc: "Sua marca, nossa tecnologia",            href: "/whitelabel" },
];

const paraQuem = [
  { icon: Store,     label: "Clientes",           desc: "Empresas do Simples Nacional",       href: "/reducao-tributaria" },
  { icon: Users,     label: "Representantes",     desc: "Comissão recorrente sobre o TPV",    href: "/representantes" },
  { icon: Building2, label: "Empresas maiores",   desc: "White-label e bancarização",         href: "/whitelabel" },
];

function DropdownPanel({ items, onClose }: {
  items: typeof solucoes;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.15 }}
      className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50"
    >
      <div className="bg-white rounded-2xl shadow-2xl border border-border/60 p-2 w-72">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClose}
            className="flex items-start gap-3 p-3 rounded-xl hover:bg-primary/5 transition-colors group"
          >
            <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors mt-0.5">
              <item.icon className="w-4 h-4 text-primary" />
            </div>
            <div>
              <p className="text-secondary font-semibold text-sm leading-tight">{item.label}</p>
              <p className="text-muted-foreground text-xs leading-relaxed mt-0.5">{item.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
}

export default function NavbarSite() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const close = () => setActiveDropdown(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/assets/logo-parcele-pay-new.png"
              alt="ParcelePay"
              width={140}
              height={36}
              className="h-9 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">

            {/* Soluções dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("solucoes")}
              onMouseLeave={close}
            >
              <button
                className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeDropdown === "solucoes" ? "text-primary" : "text-white/70 hover:text-primary"
                }`}
              >
                Soluções
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === "solucoes" ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {activeDropdown === "solucoes" && (
                  <DropdownPanel items={solucoes} onClose={close} />
                )}
              </AnimatePresence>
            </div>

            {/* Para quem dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("para-quem")}
              onMouseLeave={close}
            >
              <button
                className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeDropdown === "para-quem" ? "text-primary" : "text-white/70 hover:text-primary"
                }`}
              >
                Para quem
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === "para-quem" ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {activeDropdown === "para-quem" && (
                  <DropdownPanel items={paraQuem} onClose={close} />
                )}
              </AnimatePresence>
            </div>

            {[
              { label: "Calculadora", href: "/calculadora" },
              { label: "Parceiros", href: "/#parceiros" },
              { label: "Contato", href: "/#contato" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname === l.href ? "text-primary" : "text-white/70 hover:text-primary"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://cliente.parcelepay.com.br/login"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              Área do cliente
            </a>
            <Link
              href="/#contato"
              className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Começar agora
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-white p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden overflow-hidden border-t border-white/10"
            >
              <div className="py-4 space-y-1">

                {/* Soluções mobile accordion */}
                <button
                  onClick={() => setMobileExpanded(mobileExpanded === "solucoes" ? null : "solucoes")}
                  className="w-full flex items-center justify-between px-3 py-2.5 text-sm text-white/70 font-medium"
                >
                  Soluções
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded === "solucoes" ? "rotate-180" : ""}`} />
                </button>
                {mobileExpanded === "solucoes" && (
                  <div className="pl-4 pb-2 space-y-1">
                    {solucoes.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-white/60 hover:text-primary transition-colors"
                      >
                        <item.icon className="w-4 h-4 text-primary/70" />
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}

                {/* Para quem mobile accordion */}
                <button
                  onClick={() => setMobileExpanded(mobileExpanded === "para-quem" ? null : "para-quem")}
                  className="w-full flex items-center justify-between px-3 py-2.5 text-sm text-white/70 font-medium"
                >
                  Para quem
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded === "para-quem" ? "rotate-180" : ""}`} />
                </button>
                {mobileExpanded === "para-quem" && (
                  <div className="pl-4 pb-2 space-y-1">
                    {paraQuem.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-white/60 hover:text-primary transition-colors"
                      >
                        <item.icon className="w-4 h-4 text-primary/70" />
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}

                {[
                  { label: "Calculadora", href: "/calculadora" },
                  { label: "Parceiros", href: "/#parceiros" },
                  { label: "Contato", href: "/#contato" },
                ].map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-2.5 text-sm text-white/70 hover:text-primary transition-colors"
                  >
                    {l.label}
                  </Link>
                ))}

                <div className="pt-3 space-y-2 px-3">
                  <a
                    href="https://cliente.parcelepay.com.br/login"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-2 text-sm text-white/50"
                  >
                    Área do cliente
                  </a>
                  <Link
                    href="/#contato"
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 px-4 rounded-lg bg-primary text-primary-foreground text-sm font-semibold text-center"
                  >
                    Começar agora
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
