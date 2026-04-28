import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  subtitle: string
  title: string
  className?: string
  centered?: boolean
}

export function SectionHeading({
  subtitle,
  title,
  className,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={cn('mb-12', centered && 'text-center', className)}>
      <span className="text-gold text-sm uppercase tracking-[0.3em] font-medium block mb-4">
        {subtitle}
      </span>
      <h2 className="font-serif text-4xl md:text-5xl text-primary leading-tight">{title}</h2>
    </div>
  )
}
