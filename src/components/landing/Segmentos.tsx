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
    economia: "alta",
  },
  {
    icon: Utensils,
    nome: "Restaurantes e Bares",
    descricao: "Split entre alimentação e bebidas ou serviço.",
    economia: "alta",
  },
  {
    icon: Stethoscope,
    nome: "Clínicas e Consultórios",
    descricao: "Split entre consulta médica e procedimentos estéticos ou exames.",
    economia: "muito alta",
  },
  {
    icon: Sparkles,
    nome: "Estética e Beleza",
    descricao: "Split entre serviços e venda de produtos de beleza.",
    economia: "media",
  },
  {
    icon: Car,
    nome: "Agências de Veículos",
    descricao: "Split entre valor do veículo e serviços de revisão/financiamento.",
    economia: "alta",
  },
  {
    icon: Sofa,
    nome: "Móveis e Decoração",
    descricao: "Split entre produto e projeto/montagem planejada.",
    economia: "alta",
  },
  {
    icon: GraduationCap,
    nome: "Escolas e Cursos",
    descricao: "Split entre mensalidade e material didático/eventos.",
    economia: "media",
  },
  {
    icon: Building2,
    nome: "Construtoras e Imóveis",
    descricao: "Split entre entrada e parcelas de obra/projeto.",
    economia: "muito alta",
  },
  {
    icon: Smartphone,
    nome: "Franquias e Redes",
    descricao: "Split entre o franqueado e o repasse para o franqueador.",
    economia: "alta",
  },
  {
    icon: Store,
    nome: "Lojas de Alto Ticket",
    descricao: "Qualquer varejo com ticket médio alto e parcelamento frequente.",
    economia: "media",
  },
];

const economiaColors: Record<string, string> = {
  "media": "bg-yellow-100 text-yellow-800 border-yellow-200",
  "alta": "bg-orange-100 text-orange-800 border-orange-200",
  "muito alta": "bg-primary/10 text-secondary border-primary/30",
};
const economiaLabel: Record<string, string> = {
  "media": "Economia média",
  "alta": "Economia alta",
  "muito alta": "Economia muito alta",
};

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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {segmentos.map((seg) => (
            <div
              key={seg.nome}
              className="bg-white rounded-xl p-4 border border-border hover:border-primary/40 hover:shadow-md transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                <seg.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-secondary text-sm mb-1 leading-tight">
                {seg.nome}
              </h3>
              <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                {seg.descricao}
              </p>
              <span className={`text-xs px-2 py-0.5 rounded-full border font-medium ${economiaColors[seg.economia]}`}>
                {economiaLabel[seg.economia]}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
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
