import { Link } from 'react-router-dom'

interface ProjectCardProps {
  project: {
    id: string
    title: string
    category: string
    image: string
    location: string
  }
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link to={`/projetos/${project.id}`} className="group block relative overflow-hidden bg-muted">
      <div className="aspect-[4/5] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
        <span className="text-gold text-xs uppercase tracking-widest mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          {project.category}
        </span>
        <h3 className="text-white font-serif text-2xl mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
          {project.title}
        </h3>
        <p className="text-white/70 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
          {project.location}
        </p>
      </div>
    </Link>
  )
}
