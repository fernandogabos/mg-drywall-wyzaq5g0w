import { useState, useMemo } from 'react'
import { projects } from '@/lib/data'
import { ProjectCard } from '@/components/ProjectCard'
import { SectionHeading } from '@/components/SectionHeading'
import { Button } from '@/components/ui/button'

const categories = ['Todos', 'Residencial', 'Comercial', 'Corporativo']

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('Todos')

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'Todos') return projects
    return projects.filter((p) => p.category === activeFilter)
  }, [activeFilter])

  return (
    <div className="pt-32 pb-24 min-h-screen bg-background animate-fade-in">
      <div className="container mx-auto px-6">
        <SectionHeading subtitle="Nosso Trabalho" title="Projetos Selecionados" centered />

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeFilter === category ? 'default' : 'outline'}
              onClick={() => setActiveFilter(category)}
              className={`rounded-none px-6 tracking-widest uppercase text-xs transition-all ${
                activeFilter === category
                  ? 'bg-gold text-white border-gold hover:bg-gold/90'
                  : 'text-muted-foreground border-border hover:text-foreground hover:border-foreground'
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div key={project.id} className="animate-slide-up">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-muted-foreground font-light">
            Nenhum projeto encontrado nesta categoria.
          </div>
        )}
      </div>
    </div>
  )
}
