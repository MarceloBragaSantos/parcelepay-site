import { Badge } from "@/components/ui/badge";
import { CreditCard, GitBranch, TrendingDown, Clock, ShieldCheck, FileText } from "lucide-react";

const passos = [
  {
    icon: CreditCard,
    numero: "01",
    titulo: "Cliente paga na maquininha",
    descricao:
      "O cliente faz o pagamento no seu estabelecimento normalmente. Débito, crédito ou parcelado — sem nenhuma mudança na experiência de compra.",
  },
  {
    icon: GitBranch,
    numero: "02",
    titulo: "Split distribui o valor",
    descricao:
      "O valor é dividido entre os participantes da operação (empresa, sócios, prestadores de serviço). Cada um emite sua própria Nota Fiscal referente à sua parte.",
  },
  {
    icon: TrendingDown,
    numero: "03",
    titulo: "Só o saldo chega ao EC",
    descricao:
      "Apenas o que sobra após o split vai para a conta do Estabelecimento Comercial. Menos receita no EC = faixa menor no Simples Nacional = menos imposto.",
  },
  {
    icon: Clock,
    numero: "04",
    titulo: "Economia direto no bolso",
    descricao:
      "Sua empresa paga imposto sobre uma base menor, podendo cair de faixa no Simples. A economia supera em muito a taxa de serviço da ParcelePay.",
  },
];

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-14">
          <Badge className="mb-4 bg-primary/10 text-secondary border-primary/20">
            Transparência total
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Como o split reduz seus impostos?{" "}
            <span className="text-primary">(De forma 100% legal)</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Um mecanismo regulamentado pelo Banco Central e em plena conformidade com as
            normas da Receita Federal do Brasil — já usado por grandes redes do país.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {passos.map((passo, i) => (
            <div key={passo.numero} className="relative group">
              {i < passos.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[calc(100%-12px)] w-full h-0.5 bg-gradient-to-r from-primary/40 to-primary/10 z-10" />
              )}
              <div className="bg-background rounded-xl p-6 border border-border hover:border-primary/40 hover:shadow-md transition-all h-full">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <passo.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-4xl font-black text-primary/15 select-none">
                    {passo.numero}
                  </span>
                </div>
                <h3 className="font-bold text-secondary mb-2">{passo.titulo}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {passo.descricao}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Legal shield */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="flex gap-4 p-5 rounded-xl border border-primary/20 bg-primary/5">
            <ShieldCheck className="w-8 h-8 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-secondary mb-1">Regulamentado pelo Banco Central</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                O split de agenda é uma modalidade de liquidação prevista nas normas do
                Banco Central do Brasil (Resolução BCB nº 150). A operação é auditável,
                rastreável e 100% dentro da legislação vigente.
              </p>
            </div>
          </div>
          <div className="flex gap-4 p-5 rounded-xl border border-primary/20 bg-primary/5">
            <FileText className="w-8 h-8 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-secondary mb-1">Cada participante emite sua NF</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Cada empresa ou pessoa que recebe uma parte do split deve emitir sua
                Nota Fiscal correspondente. A redução tributária é consequência natural
                da divisão correta da receita entre os participantes.
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-secondary text-white max-w-3xl mx-auto text-center">
          <p className="text-primary font-bold text-lg mb-2">
            Exemplo prático
          </p>
          <p className="text-white/80 text-sm leading-relaxed">
            Um restaurante fatura R$150.000/mês. Sem split, todo esse valor conta para o
            Simples → 4ª faixa → alíquota efetiva ~13% → R$19.500/mês de imposto.
            Com 80% splitado para o sócio-prestador, o EC recebe R$30.000/mês → 1ª faixa → 6%
            → R$1.800/mês de imposto.{" "}
            <strong className="text-primary">Economia: ~R$17.700/mês.</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
