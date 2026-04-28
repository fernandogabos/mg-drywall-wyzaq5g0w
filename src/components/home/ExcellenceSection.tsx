import { Check } from 'lucide-react'

const features = [
  'Equipe Técnica Certificada',
  'Materiais Premium Homologados',
  'Conformidade com Normas ABNT',
  'Gestão de Resíduos Inteligente',
  'Acabamento Padrão Ouro',
  'Cumprimento Rigoroso de Prazos',
]

export function ExcellenceSection() {
  return (
    <section className="py-24 lg:py-32 bg-accent text-accent-foreground border-y border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-gold text-sm uppercase tracking-[0.3em] font-medium block mb-4">
              Rigor Técnico
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight mb-8">
              A Diferença está nos Detalhes Estruturais
            </h2>
            <p className="text-foreground/70 text-lg font-light leading-relaxed mb-8">
              Trabalhamos com perfis reforçados, chapas de alta performance e isolamentos de última
              geração. Nosso controle de qualidade assegura não apenas a estética, mas a
              durabilidade e segurança do seu investimento.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-center space-x-3 text-sm text-foreground/90">
                  <Check size={16} className="text-gold" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="aspect-square overflow-hidden bg-white/5 border border-border">
              <img
                src="https://img.usecurling.com/p/800/800?q=luxury%20drywall%20interior%20black"
                alt="Detalhes Técnicos Drywall"
                className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-gold p-8 max-w-[240px] hidden md:block">
              <p className="text-white font-serif text-xl">10+ Anos de Excelência em Jundiaí</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
