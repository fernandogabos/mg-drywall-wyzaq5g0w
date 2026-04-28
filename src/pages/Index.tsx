import { HeroSection } from '@/components/home/HeroSection'
import { PhilosophySection } from '@/components/home/PhilosophySection'
import { ServicesSection } from '@/components/home/ServicesSection'
import { FeaturedProjectsSection } from '@/components/home/FeaturedProjectsSection'
import { ExcellenceSection } from '@/components/home/ExcellenceSection'

export default function Index() {
  return (
    <div className="animate-fade-in">
      <HeroSection />
      <PhilosophySection />
      <ServicesSection />
      <FeaturedProjectsSection />
      <ExcellenceSection />
    </div>
  )
}
