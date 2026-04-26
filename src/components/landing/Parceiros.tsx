import { Badge } from "@/components/ui/badge";
import { Calculator, Users, TrendingUp, Handshake } from "lucide-react";

export default function Parceiros() {
  return (
    <section id="parceiros" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
              Programa de Parceiros
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Seja um parceiro ou reseller da ParcelePay
            </h2>
            <p className="text-white/70 mb-8 leading-relaxed">
              Contadores, consultores e agências podem oferecer a ParcelePay para seus clientes e
              ganhar um markup sobre o faturamento bruto de cada operação.
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  icon: Calculator,
                  titulo: "Para Contadores",
                  desc: "Ofereça uma solução de redução tributária para seus clientes do Simples. Comissão recorrente enquanto o cliente operar.",
                },
                {
                  icon: Users,
                  titulo: "Para Consultores e Agências",
                  desc: "Revenda a ParcelePay com seu próprio markup. A taxa base é 1% — você define o markup adicional.",
                },
                {
                  icon: Handshake,
                  titulo: "Para Empresas (White-label)",
                  desc: "Crie sua própria solução de pagamento sobre a infraestrutura da Cappta + ParcelePay.",
                },
              ].map((item) => (
                <div key={item.titulo} className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">{item.titulo}</h3>
                    <p className="text-white/60 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <TrendingUp className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Como funciona o ganho</h3>
              <p className="text-white/60 mb-6">
                A taxa base é 1% do faturamento bruto do cliente (quando há reseller). Você define seu markup adicional.
              </p>

              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-white/60 text-sm">Taxa base (ParcelePay)</span>
                  <span className="text-white font-medium">1%</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-white/60 text-sm">Seu markup (você define)</span>
                  <span className="text-primary font-bold">+ x%</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-white font-medium">Base de cálculo</span>
                  <span className="text-white font-medium">Faturamento bruto</span>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-primary/10 border border-primary/20">
                <p className="text-primary text-sm font-medium mb-1">Exemplo</p>
                <p className="text-white/80 text-sm">
                  Cliente com R$100k/mês de faturamento, seu markup de 0,5% =
                  <strong className="text-primary"> R$500/mês recorrente</strong> por cliente indicado.
                </p>
              </div>
            </div>

            <a
              href="#contato"
              className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg hover:opacity-90 transition-opacity"
            >
              Quero ser parceiro
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
