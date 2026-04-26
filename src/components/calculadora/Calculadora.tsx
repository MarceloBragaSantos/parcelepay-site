"use client";

import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { segmentos, calcularAliquotaEfetiva, getFaixaLabel } from "@/lib/simples-nacional";
import type { Anexo } from "@/lib/simples-nacional";
import { TrendingDown, DollarSign, Percent, ArrowRight, Info } from "lucide-react";

const LIMITE_SIMPLES = 4_800_000;

function formatBRL(value: number) {
  return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 }).format(value);
}

function formatPct(value: number) {
  return `${value.toFixed(2).replace(".", ",")}%`;
}

function NumericInput({
  label,
  value,
  onChange,
  prefix,
  suffix,
  hint,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  prefix?: string;
  suffix?: string;
  hint?: string;
}) {
  return (
    <div className="space-y-1.5">
      <Label className="text-sm font-medium">{label}</Label>
      <div className="relative flex items-center">
        {prefix && (
          <span className="absolute left-3 text-sm text-muted-foreground font-medium select-none">{prefix}</span>
        )}
        <Input
          type="number"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`${prefix ? "pl-9" : ""} ${suffix ? "pr-10" : ""}`}
        />
        {suffix && (
          <span className="absolute right-3 text-sm text-muted-foreground font-medium select-none">{suffix}</span>
        )}
      </div>
      {hint && <p className="text-xs text-muted-foreground">{hint}</p>}
    </div>
  );
}

function FaixaBadge({ label, isNova }: { label: string; isNova?: boolean }) {
  if (label === "Acima do Simples")
    return <Badge variant="destructive">{label}</Badge>;
  if (label === "—") return <Badge variant="outline">—</Badge>;
  return (
    <Badge
      className={isNova
        ? "bg-primary text-primary-foreground"
        : "bg-secondary text-secondary-foreground"}
    >
      {label} do Simples
    </Badge>
  );
}

export default function Calculadora() {
  const [segmentoIdx, setSegmentoIdx] = useState<string>("0");
  const [faturamentoMensal, setFaturamentoMensal] = useState("150000");
  const [pctSplit, setPctSplit] = useState("40");
  const [taxaDebito, setTaxaDebito] = useState("1.59");
  const [taxaCredito1x, setTaxaCredito1x] = useState("2.99");
  const [taxaParcelado, setTaxaParcelado] = useState("3.79");
  const [pctDebito, setPctDebito] = useState("30");
  const [pctCredito1x, setPctCredito1x] = useState("30");
  const [pctParcelado, setPctParcelado] = useState("40");
  const [temReseller, setTemReseller] = useState("nao");
  const [taxaReseller, setTaxaReseller] = useState("0.5");

  const segmento = segmentos[Number(segmentoIdx)];
  const anexo = segmento.anexo as Anexo;

  const resultado = useMemo(() => {
    const fat = parseFloat(faturamentoMensal) || 0;
    const split = Math.min(parseFloat(pctSplit) || 0, 100) / 100;
    const tDebito = (parseFloat(taxaDebito) || 0) / 100;
    const tCredito = (parseFloat(taxaCredito1x) || 0) / 100;
    const tParcelado = (parseFloat(taxaParcelado) || 0) / 100;
    const pDeb = Math.min(parseFloat(pctDebito) || 0, 100) / 100;
    const pCred = Math.min(parseFloat(pctCredito1x) || 0, 100) / 100;
    const pParc = Math.min(parseFloat(pctParcelado) || 0, 100) / 100;
    const taxaServico = temReseller === "sim"
      ? 0.01 + (parseFloat(taxaReseller) || 0) / 100
      : 0.02;

    if (fat <= 0) return null;

    // Taxas de maquininha
    const taxaMaquininha = fat * (pDeb * tDebito + pCred * tCredito + pParc * tParcelado);

    // Cenário Atual — faturamento completo tributado
    const fatAnualAtual = fat * 12;
    const simplesAtual = calcularAliquotaEfetiva(fatAnualAtual, anexo);
    const impostoMensalAtual = simplesAtual.impostoAnual / 12;
    const custoTotalAtual = taxaMaquininha + impostoMensalAtual;

    // Cenário ParcelePay — faturamento reduzido pelo split
    const fatECMensal = fat * (1 - split);
    const fatECAnual = fatECMensal * 12;
    const simplesNovo = calcularAliquotaEfetiva(fatECAnual, anexo);
    const impostoMensalNovo = simplesNovo.impostoAnual / 12;
    const taxaServicoMensal = fat * taxaServico;
    const custoTotalNovo = taxaMaquininha + impostoMensalNovo + taxaServicoMensal;

    const economiaImpostoMensal = impostoMensalAtual - impostoMensalNovo;
    const economiaTotalMensal = economiaImpostoMensal - taxaServicoMensal;
    const economiaTotalAnual = economiaTotalMensal * 12;

    const faixaAtual = getFaixaLabel(fatAnualAtual, anexo);
    const faixaNova = getFaixaLabel(fatECAnual, anexo);
    const mudouFaixa = faixaAtual !== faixaNova;

    return {
      fat,
      fatECMensal,
      taxaMaquininha,
      impostoMensalAtual,
      impostoMensalNovo,
      custoTotalAtual,
      custoTotalNovo,
      taxaServicoMensal,
      economiaImpostoMensal,
      economiaTotalMensal,
      economiaTotalAnual,
      aliquotaAtual: simplesAtual.aliquotaEfetiva,
      aliquotaNova: simplesNovo.aliquotaEfetiva,
      faixaAtual,
      faixaNova,
      mudouFaixa,
      acimaSimplesAtual: fatAnualAtual > LIMITE_SIMPLES,
      acimaSimplesNova: fatECAnual > LIMITE_SIMPLES,
      taxaServicoPct: taxaServico * 100,
    };
  }, [
    faturamentoMensal, pctSplit, taxaDebito, taxaCredito1x, taxaParcelado,
    pctDebito, pctCredito1x, pctParcelado, temReseller, taxaReseller,
    anexo, segmentoIdx,
  ]);

  return (
    <section id="calculadora" className="py-20 bg-gradient-to-br from-secondary/5 to-primary/5">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/10 text-secondary border-primary/20">
            Simulador Tributário
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Quanto você pode economizar?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simule a redução de impostos do Simples Nacional com o split de pagamentos da ParcelePay.
            Veja o cenário atual e o novo cenário lado a lado.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Painel de Entradas */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="border-primary/20 shadow-md">
              <CardHeader className="pb-4">
                <CardTitle className="text-base flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-bold">1</span>
                  Sua empresa
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-1.5">
                  <Label className="text-sm font-medium">Segmento / Anexo do Simples</Label>
                  <Select value={segmentoIdx} onValueChange={(v) => v && setSegmentoIdx(v)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {segmentos.map((s, i) => (
                        <SelectItem key={i} value={String(i)}>
                          <div>
                            <div className="font-medium">{s.nome}</div>
                            <div className="text-xs text-muted-foreground">{s.exemplos}</div>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <Info className="w-3 h-3" />
                    Anexo {segmento.anexo} do Simples Nacional
                  </p>
                </div>

                <NumericInput
                  label="Faturamento bruto mensal"
                  value={faturamentoMensal}
                  onChange={setFaturamentoMensal}
                  prefix="R$"
                  hint="Vendas totais na maquininha / mês"
                />

                <NumericInput
                  label="% do faturamento a ser splitado"
                  value={pctSplit}
                  onChange={setPctSplit}
                  suffix="%"
                  hint="Percentual que ficará retido (até 100 dias) antes de ir para o EC"
                />
              </CardContent>
            </Card>

            <Card className="border-primary/20 shadow-md">
              <CardHeader className="pb-4">
                <CardTitle className="text-base flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-bold">2</span>
                  Taxas da maquininha
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-3 gap-3">
                  <NumericInput label="Débito" value={taxaDebito} onChange={setTaxaDebito} suffix="%" />
                  <NumericInput label="Crédito 1x" value={taxaCredito1x} onChange={setTaxaCredito1x} suffix="%" />
                  <NumericInput label="Parcelado" value={taxaParcelado} onChange={setTaxaParcelado} suffix="%" />
                </div>

                <div>
                  <p className="text-sm font-medium mb-2">Composição das vendas</p>
                  <div className="grid grid-cols-3 gap-3">
                    <NumericInput label="% Débito" value={pctDebito} onChange={setPctDebito} suffix="%" />
                    <NumericInput label="% Crédito" value={pctCredito1x} onChange={setPctCredito1x} suffix="%" />
                    <NumericInput label="% Parcelado" value={pctParcelado} onChange={setPctParcelado} suffix="%" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 shadow-md">
              <CardHeader className="pb-4">
                <CardTitle className="text-base flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-bold">3</span>
                  Taxa de serviço ParcelePay
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-1.5">
                  <Label className="text-sm font-medium">Há reseller/parceiro na operação?</Label>
                  <Select value={temReseller} onValueChange={(v) => v && setTemReseller(v)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="nao">Não — taxa: 2% (ParcelePay)</SelectItem>
                      <SelectItem value="sim">Sim — 1% ParcelePay + markup do reseller</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {temReseller === "sim" && (
                  <NumericInput
                    label="Markup do reseller"
                    value={taxaReseller}
                    onChange={setTaxaReseller}
                    suffix="%"
                    hint="Percentual adicional sobre o faturamento bruto"
                  />
                )}

                {resultado && (
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                    <p className="text-xs text-secondary font-medium">Taxa total de serviço</p>
                    <p className="text-xl font-bold text-primary">{formatPct(resultado.taxaServicoPct)}</p>
                    <p className="text-xs text-muted-foreground">
                      = {formatBRL(resultado.taxaServicoMensal)}/mês sobre o faturamento bruto
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Painel de Resultados */}
          <div className="lg:col-span-3 space-y-6">
            {!resultado || parseFloat(faturamentoMensal) <= 0 ? (
              <Card className="h-full flex items-center justify-center border-dashed border-2 border-primary/30 min-h-[400px]">
                <div className="text-center text-muted-foreground p-8">
                  <DollarSign className="w-12 h-12 mx-auto mb-4 text-primary/40" />
                  <p className="font-medium">Preencha os dados ao lado</p>
                  <p className="text-sm">O resultado da simulação aparecerá aqui</p>
                </div>
              </Card>
            ) : (
              <>
                {/* Cards de Faixa */}
                <div className="grid grid-cols-2 gap-4">
                  <Card className="border-red-200 bg-red-50">
                    <CardContent className="pt-4">
                      <p className="text-xs text-muted-foreground font-medium mb-1">CENÁRIO ATUAL</p>
                      <p className="text-sm font-semibold text-secondary mb-2">Faixa do Simples</p>
                      <FaixaBadge label={resultado.faixaAtual} />
                      <p className="text-2xl font-bold text-red-600 mt-2">
                        {formatPct(resultado.aliquotaAtual)}
                      </p>
                      <p className="text-xs text-muted-foreground">alíquota efetiva</p>
                    </CardContent>
                  </Card>

                  <Card className="border-primary/30 bg-primary/5">
                    <CardContent className="pt-4">
                      <p className="text-xs text-muted-foreground font-medium mb-1">COM PARCELEPAY</p>
                      <p className="text-sm font-semibold text-secondary mb-2">Nova faixa do Simples</p>
                      <FaixaBadge label={resultado.faixaNova} isNova />
                      <p className="text-2xl font-bold text-primary mt-2">
                        {formatPct(resultado.aliquotaNova)}
                      </p>
                      <p className="text-xs text-muted-foreground">alíquota efetiva</p>
                    </CardContent>
                  </Card>
                </div>

                {resultado.mudouFaixa && (
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-primary/10 border border-primary/30">
                    <TrendingDown className="w-5 h-5 text-primary flex-shrink-0" />
                    <p className="text-sm font-medium text-secondary">
                      Sua empresa vai da <strong>{resultado.faixaAtual}</strong> para a <strong>{resultado.faixaNova}</strong> do Simples Nacional!
                    </p>
                  </div>
                )}

                {/* Comparativo detalhado */}
                <Tabs defaultValue="comparativo">
                  <TabsList className="w-full">
                    <TabsTrigger value="comparativo" className="flex-1">Comparativo</TabsTrigger>
                    <TabsTrigger value="grafico" className="flex-1">Gráfico</TabsTrigger>
                  </TabsList>

                  <TabsContent value="comparativo">
                    <Card className="border-primary/20">
                      <CardContent className="pt-6">
                        <div className="space-y-0">
                          <div className="grid grid-cols-3 gap-4 py-2 border-b text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                            <span>Item</span>
                            <span className="text-right text-red-500">Cenário Atual</span>
                            <span className="text-right text-primary">Com ParcelePay</span>
                          </div>

                          {[
                            {
                              label: "Faturamento para o EC/mês",
                              atual: resultado.fat,
                              novo: resultado.fatECMensal,
                            },
                            {
                              label: "Taxa maquininha/mês",
                              atual: resultado.taxaMaquininha,
                              novo: resultado.taxaMaquininha,
                            },
                            {
                              label: "Imposto Simples/mês",
                              atual: resultado.impostoMensalAtual,
                              novo: resultado.impostoMensalNovo,
                              destaque: true,
                            },
                            {
                              label: "Taxa de serviço/mês",
                              atual: 0,
                              novo: resultado.taxaServicoMensal,
                            },
                          ].map((row) => (
                            <div key={row.label} className={`grid grid-cols-3 gap-4 py-3 border-b last:border-0 ${row.destaque ? "bg-primary/5 -mx-6 px-6 rounded" : ""}`}>
                              <span className="text-sm text-secondary">{row.label}</span>
                              <span className={`text-sm text-right font-medium ${row.destaque ? "text-red-600" : "text-foreground"}`}>
                                {formatBRL(row.atual)}
                              </span>
                              <span className={`text-sm text-right font-medium ${row.destaque ? "text-primary" : "text-foreground"}`}>
                                {formatBRL(row.novo)}
                              </span>
                            </div>
                          ))}

                          <div className="grid grid-cols-3 gap-4 py-3 bg-secondary/5 -mx-6 px-6 rounded mt-2">
                            <span className="text-sm font-bold text-secondary">Custo total/mês</span>
                            <span className="text-sm text-right font-bold text-red-600">
                              {formatBRL(resultado.custoTotalAtual)}
                            </span>
                            <span className="text-sm text-right font-bold text-primary">
                              {formatBRL(resultado.custoTotalNovo)}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="grafico">
                    <Card className="border-primary/20">
                      <CardContent className="pt-6">
                        <ResponsiveContainer width="100%" height={220}>
                          <BarChart
                            data={[
                              {
                                name: "Imposto Simples",
                                Atual: Math.round(resultado.impostoMensalAtual),
                                ParcelePay: Math.round(resultado.impostoMensalNovo),
                              },
                              {
                                name: "Taxa maquininha",
                                Atual: Math.round(resultado.taxaMaquininha),
                                ParcelePay: Math.round(resultado.taxaMaquininha),
                              },
                              {
                                name: "Taxa serviço",
                                Atual: 0,
                                ParcelePay: Math.round(resultado.taxaServicoMensal),
                              },
                            ]}
                            barCategoryGap="25%"
                          >
                            <XAxis dataKey="name" tick={{ fontSize: 11 }} />
                            <YAxis tick={{ fontSize: 11 }} tickFormatter={(v) => `R$${(v / 1000).toFixed(0)}k`} />
                            <Tooltip formatter={(v) => formatBRL(Number(v))} />
                            <Bar dataKey="Atual" name="Cenário Atual" radius={[4, 4, 0, 0]}>
                              {[0, 1, 2].map((i) => <Cell key={i} fill="#ef4444" fillOpacity={0.7} />)}
                            </Bar>
                            <Bar dataKey="ParcelePay" name="Com ParcelePay" radius={[4, 4, 0, 0]}>
                              {[0, 1, 2].map((i) => <Cell key={i} fill="oklch(0.76 0.21 128)" fillOpacity={0.85} />)}
                            </Bar>
                          </BarChart>
                        </ResponsiveContainer>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>

                {/* Economia total */}
                <div className={`rounded-xl p-6 border-2 ${resultado.economiaTotalMensal > 0 ? "bg-primary/10 border-primary" : "bg-red-50 border-red-200"}`}>
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div>
                      <p className="text-sm font-medium text-secondary mb-1 flex items-center gap-1">
                        <Percent className="w-4 h-4" />
                        Economia líquida mensal
                        <span className="text-xs text-muted-foreground font-normal">(após taxa de serviço)</span>
                      </p>
                      <p className={`text-4xl font-bold ${resultado.economiaTotalMensal > 0 ? "text-primary" : "text-red-600"}`}>
                        {formatBRL(resultado.economiaTotalMensal)}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-secondary mb-1">Economia anual</p>
                      <p className={`text-2xl font-bold ${resultado.economiaTotalAnual > 0 ? "text-primary" : "text-red-600"}`}>
                        {formatBRL(resultado.economiaTotalAnual)}
                      </p>
                    </div>
                  </div>

                  {resultado.economiaTotalMensal <= 0 && (
                    <p className="text-sm text-red-600 mt-3 border-t border-red-200 pt-3">
                      Neste cenário, a taxa de serviço supera a economia de imposto. Tente aumentar o % de split ou verifique o markup do reseller.
                    </p>
                  )}
                </div>

                <a
                  href="#contato"
                  className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-bold text-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
                >
                  Quero reduzir meus impostos
                  <ArrowRight className="w-5 h-5" />
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
