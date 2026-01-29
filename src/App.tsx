import { Hero } from './components/Hero'
import { AboutMrTreino } from './components/AboutMrTreino'
import { YouTubeSection } from './components/YouTubeSection'
import { ContentTopics } from './components/ContentTopics'
import { SocialSection } from './components/SocialSection'
import { ContactFitness } from './components/ContactFitness'
import { FooterFitness } from './components/FooterFitness'

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="relative" role="main">
        <Hero />
        <AboutMrTreino />
        <YouTubeSection />
        <ContentTopics />
        <SocialSection />
        <ContactFitness />
      </main>
      <FooterFitness />
    </div>
  )
}
