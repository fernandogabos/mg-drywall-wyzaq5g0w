import { services } from '@/lib/data'
import { SectionHeading } from '../SectionHeading'
import { Layers, Square, Lightbulb, Thermometer } from 'lucide-react'

const iconMap: Record<string, React.ReactNode> = {
  Layers: <Layers strokeWidth={1} size={40} />,
  Square: <Square strokeWidth={1} size={40} />,
  Lightbulb: <Lightbulb strokeWidth={1} size={40} />,
  Thermometer: <Thermometer strokeWidth={1} size={40} />,
}

export function ServicesSection() {
  return (
    <section className="py-24 lg:py-32 bg-accent">
      <div className="container mx-auto px-6">
        <SectionHeading subtitle="Nossa Expertise" title="Serviços de Alto Padrão" centered />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-background p-10 group hover:border-gold/50 transition-all duration-500 border border-border hover:shadow-2xl hover:shadow-gold/5"
            >
              <div className="text-gold mb-8 transform group-hover:-translate-y-2 transition-transform duration-500">
                {iconMap[service.icon]}
              </div>
              <h3 className="font-serif text-2xl mb-4 text-primary">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                {service.description}
              </p>
              <span className="text-xs uppercase tracking-widest text-primary font-medium group-hover:text-gold transition-colors">
                Saiba Mais &rarr;
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
