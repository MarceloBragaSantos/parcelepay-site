import { Badge } from "@/components/ui/badge";
import {
  Utensils, Hotel, Stethoscope, Sparkles, Car, Sofa, GraduationCap,
  Building2, Smartphone, Store,
} from "lucide-react";

const segmentos = [
  {
    icon: Hotel,
    nome: "Motéis e Pousadas",
    descricao: "Split entre diária e serviços de bar/restaurante interno.",
    economia: 69,
    anexo: "Anexo I",
  },
  {
    icon: Utensils,
    nome: "Restaurantes e Bares",
    descricao: "Split entre alimentação e bebidas ou taxa de serviço.",
    economia: 67,
    anexo: "Anexo I",
  },
  {
    icon: Stethoscope,
    nome: "Clínicas e Consultórios",
    descricao: "Split entre consulta médica e procedimentos ou exames.",
    economia: 73,
    anexo: "Anexo V",
  },
  {
    icon: Sparkles,
    nome: "Estética e Beleza",
    descricao: "Split entre serviços e venda de produtos de beleza.",
    economia: 74,
    anexo: "Anexo III",
  },
  {
    icon: Car,
    nome: "Agências de Veículos",
    descricao: "Split entre valor do veículo e serviços de revisão.",
    economia: 68,
    anexo: "Anexo I",
  },
  {
    icon: Sofa,
    nome: "Móveis e Decoração",
    descricao: "Split entre produto e projeto/montagem planejada.",
    economia: 68,
    anexo: "Anexo I",
  },
  {
    icon: GraduationCap,
    nome: "Escolas e Cursos",
    descricao: "Split entre mensalidade e material didático/eventos.",
    economia: 74,
    anexo: "Anexo III",
  },
  {
    icon: Building2,
    nome: "Construtoras e Imóveis",
    descricao: "Split entre entrada e parcelas de obra/projeto.",
    economia: 76,
    anexo: "Anexo III",
  },
  {
    icon: Smartphone,
    nome: "Franquias e Redes",
    descricao: "Split entre o franqueado e o repasse para o franqueador.",
    economia: 70,
    anexo: "Anexo I",
  },
  {
    icon: Store,
    nome: "Lojas de Alto Ticket",
    descricao: "Varejo com ticket médio alto e parcelamento frequente.",
    economia: 67,
    anexo: "Anexo I",
  },
];

function EconomiaBar({ pct }: { pct: number }) {
  const color =
    pct >= 74 ? "bg-primary" : pct >= 70 ? "bg-primary/80" : "bg-primary/60";
  return (
    <div className="mt-3">
      <div className="flex justify-between items-center mb-1">
        <span className="text-xs text-muted-foreground">Economia tributária c/ split 80%</span>
        <span className="text-xs font-bold text-primary">até {pct}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-border overflow-hidden">
        <div className={`h-full rounded-full ${color}`} style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

export default function Segmentos() {
  return (
    <section id="segmentos" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-14">
          <Badge className="mb-4 bg-primary/10 text-secondary border-primary/20">
            Quem se beneficia
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Ideal para o seu segmento
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Qualquer empresa do Simples Nacional que tenha mais de um participante
            na operação pode reduzir impostos com o split de pagamento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {segmentos.map((seg) => (
            <div
              key={seg.nome}
              className="bg-white rounded-xl p-5 border border-border hover:border-primary/40 hover:shadow-md transition-all group"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <seg.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary text-sm leading-tight">
                    {seg.nome}
                  </h3>
                  <span className="text-xs text-muted-foreground/60">{seg.anexo}</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed mb-2">
                {seg.descricao}
              </p>
              <EconomiaBar pct={seg.economia} />
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground mt-6">
          Percentuais estimados para empresas entre R$100k–R$300k/mês. Cálculo baseado nas tabelas oficiais do Simples Nacional.
        </p>

        <div className="mt-8 text-center">
          <p className="text-muted-foreground text-sm mb-4">
            Não encontrou seu segmento? Fale com um especialista.
          </p>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-secondary text-white font-semibold hover:opacity-90 transition-opacity"
          >
            Falar com especialista
          </a>
        </div>
      </div>
    </section>
  );
}
