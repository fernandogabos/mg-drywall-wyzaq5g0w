import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://img.usecurling.com/p/1600/900?q=luxury%20living%20room%20drywall%20ceiling"
          alt="Premium Drywall Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/60 mix-blend-multiply" />
      </div>

      <div className="container relative z-10 mx-auto px-6 text-center pt-24">
        <span
          className="block text-gold text-sm md:text-base uppercase tracking-[0.3em] font-medium mb-6 animate-fade-in opacity-0"
          style={{ animationDelay: '0.2s' }}
        >
          Jundiaí — São Paulo
        </span>
        <h1
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-8 max-w-5xl mx-auto leading-tight animate-slide-up opacity-0"
          style={{ animationDelay: '0.4s' }}
        >
          A Arte da Precisão em Drywall
        </h1>
        <p
          className="text-white/80 text-lg md:text-xl font-light max-w-2xl mx-auto mb-12 animate-slide-up opacity-0"
          style={{ animationDelay: '0.6s' }}
        >
          Alto padrão e rigor técnico para projetos arquitetônicos que exigem perfeição em cada
          detalhe.
        </p>
        <div className="animate-slide-up opacity-0" style={{ animationDelay: '0.8s' }}>
          <Button
            asChild
            size="lg"
            className="bg-gold hover:bg-gold/90 text-white rounded-none px-8 h-14 text-sm tracking-widest uppercase"
          >
            <Link to="/projetos">Explorar Portfólio</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
