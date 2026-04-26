export default function Footer() {
  return (
    <footer className="bg-secondary border-t border-white/10 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <p className="text-2xl font-bold text-white mb-3">
              Parcele<span className="text-primary">Pay</span>
            </p>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Plataforma de meios de pagamento especializada em redução tributária
              via split de pagamentos para empresas do Simples Nacional.
            </p>
          </div>

          <div>
            <p className="text-white font-semibold mb-4 text-sm">Produtos</p>
            <ul className="space-y-2">
              {["Máquinas de Cartão", "Gateway de Pagamentos", "Conta Digital", "API de Integração", "Sistema PDV"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/50 text-sm hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-white font-semibold mb-4 text-sm">Empresa</p>
            <ul className="space-y-2">
              {["Sobre nós", "Parceiros", "Blog", "Política de Privacidade", "Termos de Uso"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/50 text-sm hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © 2024 ParcelePay — FUTURA TECNOLOGIA LTDA. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <p className="text-white/30 text-xs">
              Plataforma desenvolvida sobre infraestrutura Cappta — Certificação PCI e Banco Central
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
