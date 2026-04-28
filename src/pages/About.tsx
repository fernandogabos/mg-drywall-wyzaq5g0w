import { SectionHeading } from '@/components/SectionHeading'

export default function About() {
  return (
    <div className="pt-24 animate-fade-in">
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-6">
          <SectionHeading subtitle="A Empresa" title="Nossa Trajetória" centered />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16 items-center">
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src="https://img.usecurling.com/p/800/1000?q=architectural%20blueprint%20office"
                alt="Escritório"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div>
              <h3 className="font-serif text-3xl mb-6 text-primary">
                Consolidando o Luxo na Construção a Seco
              </h3>
              <p className="text-muted-foreground text-lg font-light leading-relaxed mb-6">
                Estabelecida no coração de Jundiaí, a MG Drywall nasceu da percepção de uma lacuna
                no mercado regional: a necessidade de um serviço de montagem em drywall que tratasse
                a estrutura com o mesmo respeito e detalhismo que os arquitetos aplicam em seus
                projetos conceituais.
              </p>
              <p className="text-muted-foreground text-lg font-light leading-relaxed mb-8">
                Hoje, somos parceiros dos principais escritórios de arquitetura e construtoras de
                alto padrão, entregando soluções acústicas e estéticas para residências de luxo e
                ambientes corporativos exigentes.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-border">
                <div>
                  <h4 className="font-serif text-4xl text-gold mb-2">10+</h4>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider">
                    Anos no Mercado
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-4xl text-gold mb-2">150+</h4>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider">
                    Projetos Entregues
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-accent">
        <div className="container mx-auto px-6">
          <SectionHeading subtitle="Princípios" title="Valores Fundamentais" centered />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="p-8 bg-background border border-border">
              <h3 className="font-serif text-2xl mb-4 text-primary">Comprometimento</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Nossa palavra é a base de cada obra. Prazos estritos, orçamento transparente e
                dedicação incondicional à visão do cliente e do arquiteto.
              </p>
            </div>
            <div className="p-8 bg-background border border-border">
              <h3 className="font-serif text-2xl mb-4 text-primary">Inovação Técnica</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Investimos em tecnologia de ponta, perfis estruturais superiores e técnicas
                europeias de montagem para garantir máxima performance acústica.
              </p>
            </div>
            <div className="p-8 bg-background border border-border">
              <h3 className="font-serif text-2xl mb-4 text-primary">Estética Contemporânea</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                O drywall não é apenas parede; é a tela em branco. Garantimos nivelamento perfeito e
                juntas invisíveis para acabamentos de luxo.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
