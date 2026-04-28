import { useParams, Navigate, Link } from 'react-router-dom'
import { projects } from '@/lib/data'
import { ArrowLeft } from 'lucide-react'

export default function Project() {
  const { id } = useParams()
  const project = projects.find((p) => p.id === id)

  if (!project) {
    return <Navigate to="/projetos" replace />
  }

  return (
    <div className="pt-24 bg-background animate-fade-in">
      <div className="container mx-auto px-6 py-12">
        <Link
          to="/projetos"
          className="inline-flex items-center text-sm uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors mb-12"
        >
          <ArrowLeft size={16} className="mr-2" /> Voltar ao Portfólio
        </Link>

        <div className="mb-16">
          <span className="text-gold text-sm uppercase tracking-[0.3em] font-medium block mb-4">
            {project.category}
          </span>
          <h1 className="font-serif text-5xl md:text-6xl text-primary leading-tight mb-8">
            {project.title}
          </h1>
        </div>
      </div>

      <div className="w-full h-[60vh] md:h-[80vh] relative mb-16">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
      </div>

      <div className="container mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1 space-y-8">
            <div className="border-t border-border pt-6">
              <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                Cliente
              </h4>
              <p className="font-serif text-xl text-primary">{project.client}</p>
            </div>
            <div className="border-t border-border pt-6">
              <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                Localização
              </h4>
              <p className="font-serif text-xl text-primary">{project.location}</p>
            </div>
            <div className="border-t border-border pt-6">
              <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Ano</h4>
              <p className="font-serif text-xl text-primary">{project.year}</p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-serif text-3xl mb-6 text-primary">Sobre o Projeto</h3>
            <p className="text-muted-foreground text-lg font-light leading-relaxed mb-8">
              {project.description}
            </p>
            <h3 className="font-serif text-2xl mb-4 text-primary mt-12">Desafios Técnicos</h3>
            <p className="text-muted-foreground text-lg font-light leading-relaxed">
              {project.challenges}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
