export type Anexo = "I" | "II" | "III" | "IV" | "V";

export interface Faixa {
  min: number;
  max: number;
  aliquotaNominal: number; // %
  deducao: number; // R$
  label: string;
}

export interface Segmento {
  nome: string;
  exemplos: string;
  anexo: Anexo;
}

const faixas: Record<Anexo, Faixa[]> = {
  I: [
    { min: 0, max: 180000, aliquotaNominal: 4.0, deducao: 0, label: "1ª faixa" },
    { min: 180000.01, max: 360000, aliquotaNominal: 7.3, deducao: 5940, label: "2ª faixa" },
    { min: 360000.01, max: 720000, aliquotaNominal: 9.5, deducao: 13860, label: "3ª faixa" },
    { min: 720000.01, max: 1800000, aliquotaNominal: 10.7, deducao: 22500, label: "4ª faixa" },
    { min: 1800000.01, max: 3600000, aliquotaNominal: 14.3, deducao: 87300, label: "5ª faixa" },
    { min: 3600000.01, max: 4800000, aliquotaNominal: 19.0, deducao: 378000, label: "6ª faixa" },
  ],
  II: [
    { min: 0, max: 180000, aliquotaNominal: 4.5, deducao: 0, label: "1ª faixa" },
    { min: 180000.01, max: 360000, aliquotaNominal: 7.8, deducao: 5940, label: "2ª faixa" },
    { min: 360000.01, max: 720000, aliquotaNominal: 10.0, deducao: 13860, label: "3ª faixa" },
    { min: 720000.01, max: 1800000, aliquotaNominal: 11.2, deducao: 22500, label: "4ª faixa" },
    { min: 1800000.01, max: 3600000, aliquotaNominal: 14.7, deducao: 85500, label: "5ª faixa" },
    { min: 3600000.01, max: 4800000, aliquotaNominal: 30.0, deducao: 720000, label: "6ª faixa" },
  ],
  III: [
    { min: 0, max: 180000, aliquotaNominal: 6.0, deducao: 0, label: "1ª faixa" },
    { min: 180000.01, max: 360000, aliquotaNominal: 11.2, deducao: 9360, label: "2ª faixa" },
    { min: 360000.01, max: 720000, aliquotaNominal: 13.5, deducao: 17640, label: "3ª faixa" },
    { min: 720000.01, max: 1800000, aliquotaNominal: 16.0, deducao: 35640, label: "4ª faixa" },
    { min: 1800000.01, max: 3600000, aliquotaNominal: 21.0, deducao: 125640, label: "5ª faixa" },
    { min: 3600000.01, max: 4800000, aliquotaNominal: 33.0, deducao: 648000, label: "6ª faixa" },
  ],
  IV: [
    { min: 0, max: 180000, aliquotaNominal: 4.5, deducao: 0, label: "1ª faixa" },
    { min: 180000.01, max: 360000, aliquotaNominal: 9.0, deducao: 8100, label: "2ª faixa" },
    { min: 360000.01, max: 720000, aliquotaNominal: 10.2, deducao: 12420, label: "3ª faixa" },
    { min: 720000.01, max: 1800000, aliquotaNominal: 14.0, deducao: 39780, label: "4ª faixa" },
    { min: 1800000.01, max: 3600000, aliquotaNominal: 22.0, deducao: 183780, label: "5ª faixa" },
    { min: 3600000.01, max: 4800000, aliquotaNominal: 33.0, deducao: 828000, label: "6ª faixa" },
  ],
  V: [
    { min: 0, max: 180000, aliquotaNominal: 15.5, deducao: 0, label: "1ª faixa" },
    { min: 180000.01, max: 360000, aliquotaNominal: 18.0, deducao: 4500, label: "2ª faixa" },
    { min: 360000.01, max: 720000, aliquotaNominal: 19.5, deducao: 9900, label: "3ª faixa" },
    { min: 720000.01, max: 1800000, aliquotaNominal: 20.5, deducao: 17100, label: "4ª faixa" },
    { min: 1800000.01, max: 3600000, aliquotaNominal: 23.0, deducao: 62100, label: "5ª faixa" },
    { min: 3600000.01, max: 4800000, aliquotaNominal: 30.5, deducao: 540000, label: "6ª faixa" },
  ],
};

export const segmentos: Segmento[] = [
  { nome: "Comércio (Varejo)", exemplos: "Lojas, supermercados, farmácias", anexo: "I" },
  { nome: "Indústria / Fabricação", exemplos: "Manufatura, confecção, alimentício", anexo: "II" },
  { nome: "Serviços Gerais", exemplos: "Restaurantes, academias, escolas, motéis", anexo: "III" },
  { nome: "Serviços Especializados", exemplos: "Construção, limpeza, vigilância, TI", anexo: "IV" },
  { nome: "Serviços Profissionais", exemplos: "Médicos, advogados, contadores, consultores", anexo: "V" },
];

export function calcularAliquotaEfetiva(receitaBrutaAnual: number, anexo: Anexo): {
  aliquotaEfetiva: number;
  impostoAnual: number;
  faixa: Faixa | null;
} {
  const tabela = faixas[anexo];
  const faixa = tabela.find((f) => receitaBrutaAnual <= f.max) ?? tabela[tabela.length - 1];

  if (receitaBrutaAnual <= 0) {
    return { aliquotaEfetiva: 0, impostoAnual: 0, faixa: null };
  }

  if (receitaBrutaAnual > 4800000) {
    return { aliquotaEfetiva: 0, impostoAnual: 0, faixa: null };
  }

  const impostoAnual = (receitaBrutaAnual * faixa.aliquotaNominal) / 100 - faixa.deducao;
  const aliquotaEfetiva = (impostoAnual / receitaBrutaAnual) * 100;

  return { aliquotaEfetiva: Math.max(0, aliquotaEfetiva), impostoAnual: Math.max(0, impostoAnual), faixa };
}

export function getFaixaLabel(receitaBrutaAnual: number, anexo: Anexo): string {
  const tabela = faixas[anexo];
  if (receitaBrutaAnual <= 0) return "—";
  if (receitaBrutaAnual > 4800000) return "Acima do Simples";
  const faixa = tabela.find((f) => receitaBrutaAnual <= f.max);
  return faixa ? faixa.label : "6ª faixa";
}
