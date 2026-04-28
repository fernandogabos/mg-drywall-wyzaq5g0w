import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-background pt-24">
      <div className="text-center px-6">
        <span className="text-gold font-serif text-8xl block mb-6">404</span>
        <h1 className="text-3xl font-serif text-primary mb-4">Página Não Encontrada</h1>
        <p className="text-muted-foreground mb-8 font-light max-w-md mx-auto">
          A página que você está procurando pode ter sido removida ou o link está incorreto.
        </p>
        <Button
          asChild
          className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-none px-8 tracking-widest uppercase text-xs"
        >
          <Link to="/">Voltar ao Início</Link>
        </Button>
      </div>
    </div>
  )
}
