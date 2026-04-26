import { ArrowRight, TrendingDown, Shield, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 bg-secondary overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-2xl" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 text-sm px-3 py-1">
              ✦ Tecnologia de Split de Pagamento
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Reduza até{" "}
              <span className="text-primary">40% dos impostos</span>{" "}
              da sua empresa
            </h1>

            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              Empresas do Simples Nacional pagam menos imposto com o split de
              pagamento. O valor splitado não conta como receita do EC — mantendo
              sua empresa em faixas tributárias menores.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#calculadora"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg hover:opacity-90 transition-opacity"
              >
                Simule sua economia
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#como-funciona"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors"
              >
                Como funciona
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: TrendingDown, label: "Redução de imposto", value: "até 40%" },
                { icon: Shield, label: "Split legal e regulamentado", value: "100%" },
                { icon: Zap, label: "Habilitação em", value: "48 horas" },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <item.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-xl font-bold text-white">{item.value}</p>
                  <p className="text-xs text-white/50">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual card */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="bg-white/5 backdrop-blur rounded-2xl border border-white/10 p-8 space-y-4">
                <p className="text-white/50 text-sm font-medium uppercase tracking-wide">
                  Simulação em tempo real
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4">
                    <p className="text-red-400 text-xs font-medium mb-1">CENÁRIO ATUAL</p>
                    <p className="text-white text-2xl font-bold">R$ 18.000</p>
                    <p className="text-white/40 text-xs">/mês em impostos</p>
                    <div className="mt-2 px-2 py-0.5 rounded bg-red-500/20 text-red-400 text-xs inline-block">
                      4ª faixa — 8,42% efetivo
                    </div>
                  </div>
                  <div className="bg-primary/10 border border-primary/20 rounded-xl p-4">
                    <p className="text-primary text-xs font-medium mb-1">COM PARCELEPAY</p>
                    <p className="text-white text-2xl font-bold">R$ 9.200</p>
                    <p className="text-white/40 text-xs">/mês em impostos</p>
                    <div className="mt-2 px-2 py-0.5 rounded bg-primary/20 text-primary text-xs inline-block">
                      3ª faixa — 5,14% efetivo
                    </div>
                  </div>
                </div>

                <div className="bg-primary/15 border border-primary/30 rounded-xl p-5">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-white/60 text-sm mb-1">Economia líquida mensal</p>
                      <p className="text-primary text-4xl font-bold">R$ 7.300</p>
                    </div>
                    <div className="text-right">
                      <p className="text-white/60 text-xs mb-1">Anual</p>
                      <p className="text-white text-xl font-bold">R$ 87.600</p>
                    </div>
                  </div>
                </div>

                <p className="text-white/30 text-xs text-center">
                  Simulação: faturamento R$150k/mês, 40% splitado, Serviços (Anexo III)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
