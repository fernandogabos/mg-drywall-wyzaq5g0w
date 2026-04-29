import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-20">
          <div className="md:col-span-2">
            <div className="mb-6">
              <img
                src="/MG Drywall_Logo_Baixa_Negativo.png"
                alt="MG Drywall"
                className="h-[50px] w-auto"
              />
            </div>
            <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
              Elevando o padrão da construção civil em Jundiaí através de precisão técnica,
              materiais de alto desempenho e excelência estética.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-xl mb-6">Navegação</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-sm hover:opacity-70">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-sm hover:opacity-70">
                  A Empresa
                </Link>
              </li>
              <li>
                <Link to="/projetos" className="text-sm hover:opacity-70">
                  Projetos
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-sm hover:opacity-70">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-xl mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="text-sm text-muted-foreground">Jundiaí, São Paulo</li>
              <li className="text-sm text-muted-foreground">+55 (11) 99999-9999</li>
              <li className="text-sm text-muted-foreground">contato@mgdrywall.com.br</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-20 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p className="text-xs text-muted-foreground text-center md:text-left">
              &copy; {new Date().getFullYear()} MG Drywall Jundiaí. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span>Desenvolvido por:</span>
              <a
                href="https://www.innovagrupo.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity flex items-center"
              >
                <img
                  src="/INNOVA_Logo_Branco_Transparente.png"
                  alt="INNOVA"
                  className="h-[30px] w-auto"
                />
              </a>
            </div>
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-xs uppercase tracking-widest hover:opacity-70"
          >
            Voltar ao Topo
          </button>
        </div>
      </div>
    </footer>
  )
}
