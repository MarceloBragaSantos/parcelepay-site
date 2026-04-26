import { Badge } from "@/components/ui/badge";
import { CreditCard, GitBranch, TrendingDown, Clock } from "lucide-react";

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
    titulo: "Valor fica disponível para split",
    descricao:
      "O valor da venda fica disponível por até 100 dias na plataforma ParcelePay para ser splitado entre os participantes da operação (sócios, prestadores, serviços).",
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
            Como o split reduz seus impostos?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Um mecanismo legal, regulamentado pelo Banco Central, que já é usado por
            grandes redes. Agora acessível para empresas do Simples Nacional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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

        <div className="mt-12 p-6 rounded-2xl bg-secondary text-white max-w-3xl mx-auto text-center">
          <p className="text-primary font-bold text-lg mb-2">
            Exemplo prático
          </p>
          <p className="text-white/80 text-sm leading-relaxed">
            Um restaurante fatura R$150.000/mês. Sem split, todo esse valor conta para o
            Simples → 4ª faixa → alíquota efetiva ~8,4% → R$12.600/mês de imposto.
            Com 40% splitado, o EC recebe R$90.000/mês → 3ª faixa → alíquota efetiva ~5,1%
            → R$4.600/mês de imposto.{" "}
            <strong className="text-primary">Economia: ~R$8.000/mês.</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
