import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet'

const navLinks = [
  { name: 'Início', path: '/' },
  { name: 'A Empresa', path: '/sobre' },
  { name: 'Projetos', path: '/projetos' },
  { name: 'Contato', path: '/contato' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  const isHome = location.pathname === '/'
  const headerBg =
    isScrolled || !isHome
      ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-sm'
      : 'bg-transparent'
  const textColor = isScrolled || !isHome ? 'text-foreground' : 'text-white'

  return (
    <header className={cn('fixed top-0 left-0 right-0 z-50 transition-all duration-300', headerBg)}>
      <div className="container mx-auto px-6 h-24 flex items-center justify-between">
        <Link to="/" className={cn('flex flex-col items-center justify-center', textColor)}>
          <span className="font-serif text-3xl tracking-[0.2em] leading-none">MG</span>
          <span className="font-sans text-[0.6rem] tracking-[0.4em] font-light mt-1">DRYWALL</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-sm uppercase tracking-widest hover:opacity-70',
                textColor,
                location.pathname === link.path && 'font-medium',
              )}
            >
              {link.name}
            </Link>
          ))}
          <Button
            asChild
            variant="outline"
            className={cn(
              'border-current hover:bg-foreground hover:text-background hover:border-foreground',
              textColor,
            )}
          >
            <Link to="/contato">Solicitar Orçamento</Link>
          </Button>
        </nav>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button className={cn('p-2', textColor)}>
                <Menu size={24} />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full sm:w-[400px] border-l-0 bg-background pt-24"
            >
              <SheetTitle className="sr-only">Menu de Navegação</SheetTitle>
              <div className="flex flex-col space-y-8 mt-8">
                {navLinks.map((link, i) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="font-serif text-4xl text-foreground hover:opacity-70 animate-slide-up"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-8 border-t animate-slide-up" style={{ animationDelay: '400ms' }}>
                  <Button
                    asChild
                    className="w-full bg-foreground hover:bg-foreground/90 text-background rounded-none h-14 text-lg"
                  >
                    <Link to="/contato">Solicitar Orçamento</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
