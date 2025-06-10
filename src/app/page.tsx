import HeroSection from '@/app/components/HeroSection'
import FeaturesSection from '@/app/components/FeaturesSection'
import NewsSection from '@/app/components/NewsSection'
import TestimonialsSection from '@/app/components/TestimonialsSection'
import QuickLinksSection from '@/app/components/QuickLinksSection'
import Md from '@/app/components/Md'

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <FeaturesSection />
      <Md/>
      <NewsSection />
      <TestimonialsSection />
      <QuickLinksSection />
    </div>
  )
}