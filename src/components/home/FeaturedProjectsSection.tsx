import { Link } from 'react-router-dom'
import { projects } from '@/lib/data'
import { ProjectCard } from '../ProjectCard'
import { SectionHeading } from '../SectionHeading'

export function FeaturedProjectsSection() {
  const featured = projects.slice(0, 3)

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <SectionHeading subtitle="Portfólio" title="Projetos em Destaque" className="mb-0" />
          <Link
            to="/projetos"
            className="text-sm uppercase tracking-widest text-primary font-medium hover:text-gold transition-colors mt-8 md:mt-0"
          >
            Ver Todos os Projetos
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((project, i) => (
            <div key={project.id} className={`transform ${i === 1 ? 'md:translate-y-12' : ''}`}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
