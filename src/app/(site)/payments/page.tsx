import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { CreditCard, Check, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Payments | ParcelePay",
  description: "Maquininha, PIX, link de pagamento e parcelamento em até 21x com split de agenda embutido.",
};

export default function PaymentsPage() {
  return (
    <>
      <section className="relative py-28 bg-secondary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10 max-w-3xl">
          <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">Payments</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Aceite qualquer pagamento.{" "}
            <span className="text-primary">Com split automático.</span>
          </h1>
          <p className="text-xl text-white/70 mb-10 leading-relaxed">
            Débito, crédito, PIX, boleto, link de pagamento e parcelamento em até 21x —
            tudo integrado com split de agenda embutido em cada transação.
          </p>
          <Link href="/#contato" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg hover:opacity-90 transition-opacity">
            Quero conhecer <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Parcelamento em até 21x",
              "PIX instantâneo",
              "Link de pagamento com recorrência",
              "Boleto bancário",
              "Split de agenda automático",
              "Anti-fraude incluído",
              "20+ adquirentes (Cielo, Rede, Stone, GetNet…)",
              "POS, TEF e link em uma plataforma",
              "Liquidação D+1",
            ].map((f) => (
              <div key={f} className="flex items-start gap-3 p-5 bg-background rounded-xl border border-border">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="font-medium text-secondary">{f}</span>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/#contato" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-secondary text-white font-semibold hover:opacity-90 transition-opacity">
              Fale com um especialista
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
