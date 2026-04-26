import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Award, Check, ArrowRight, Building2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Whitelabel | ParcelePay",
  description: "Sua marca, nossa tecnologia. Solução completa de meios de pagamento white-label para empresas com alto volume.",
};

export default function WhitelabelPage() {
  return (
    <>
      <section className="relative py-28 bg-secondary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">Whitelabel</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                Sua marca no produto.{" "}
                <span className="text-primary">Nossa tecnologia por trás.</span>
              </h1>
              <p className="text-xl text-white/70 mb-10 leading-relaxed">
                Para empresas com alto volume de transações e carteira para bancarizar:
                ofereça toda a solução ParcelePay sob a sua própria marca, sem abrir mão
                da tecnologia e do suporte.
              </p>
              <Link href="/#contato" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg hover:opacity-90 transition-opacity">
                Falar com o time comercial <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative rounded-2xl overflow-hidden bg-secondary/50 border border-white/10 flex items-center justify-center min-h-[340px]">
              <Image
                src="/assets/cappta-pos-composite.png"
                alt="Maquininha e celular com sua marca"
                width={700}
                height={500}
                className="object-contain w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <Badge className="mb-4 bg-primary/10 text-secondary border-primary/20">O que está incluído</Badge>
            <h2 className="text-3xl font-bold text-secondary mb-4">
              Tudo com a sua marca
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Maquininha com sua marca",
              "App de conta digital personalizado",
              "Portal de gestão (Backoffice) white-label",
              "Onboarding de clientes com sua identidade",
              "Suporte técnico e comercial dedicado",
              "Para carteiras de alto TPV",
            ].map((f) => (
              <div key={f} className="flex items-start gap-3 p-5 bg-background rounded-xl border border-border">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="font-medium text-secondary">{f}</span>
              </div>
            ))}
          </div>

          <div className="mt-14 bg-secondary rounded-2xl p-10 text-center">
            <Building2 className="w-10 h-10 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-3">Para empresas maiores</h3>
            <p className="text-white/60 mb-6 max-w-lg mx-auto">
              O modelo white-label é indicado para empresas e grupos com alto potencial
              e carteira de clientes que desejam bancarizar sua operação com a própria marca.
            </p>
            <Link href="/#contato" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold hover:opacity-90 transition-opacity">
              Falar com o time comercial <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
