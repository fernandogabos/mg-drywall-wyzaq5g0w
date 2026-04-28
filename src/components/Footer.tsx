import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-20">
          <div className="md:col-span-2">
            <h2 className="font-serif text-3xl mb-6">
              PREMIUM <span className="text-gold">DRYWALL</span>
            </h2>
            <p className="text-primary-foreground/70 text-sm max-w-sm leading-relaxed">
              Elevando o padrão da construção civil em Jundiaí através de precisão técnica,
              materiais de alto desempenho e excelência estética.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-xl mb-6 text-gold">Navegação</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/"
                  className="text-sm text-primary-foreground/70 hover:text-white transition-colors"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  to="/sobre"
                  className="text-sm text-primary-foreground/70 hover:text-white transition-colors"
                >
                  A Empresa
                </Link>
              </li>
              <li>
                <Link
                  to="/projetos"
                  className="text-sm text-primary-foreground/70 hover:text-white transition-colors"
                >
                  Projetos
                </Link>
              </li>
              <li>
                <Link
                  to="/contato"
                  className="text-sm text-primary-foreground/70 hover:text-white transition-colors"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-xl mb-6 text-gold">Contato</h3>
            <ul className="space-y-4">
              <li className="text-sm text-primary-foreground/70">Jundiaí, São Paulo</li>
              <li className="text-sm text-primary-foreground/70">+55 (11) 99999-9999</li>
              <li className="text-sm text-primary-foreground/70">contato@premiumdrywall.com.br</li>
            </ul>
            <div className="mt-8 flex space-x-4">
              <a
                href="#"
                className="text-primary-foreground/70 hover:text-gold transition-colors text-sm uppercase tracking-widest"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-primary-foreground/70 hover:text-gold transition-colors text-sm uppercase tracking-widest"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-primary-foreground/50">
            &copy; {new Date().getFullYear()} Premium Drywall Jundiaí. Todos os direitos reservados.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-xs uppercase tracking-widest text-primary-foreground/50 hover:text-gold mt-4 md:mt-0 transition-colors"
          >
            Voltar ao Topo
          </button>
        </div>
      </div>
    </footer>
  )
}
