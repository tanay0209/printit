import './App.css'
import { ApplicationSection, Banner, Footer, HeroSection, MetricSection, MobileNavigation, Navigation, PromoSection, ReviewSection, UniqueSection } from './components'

function App() {
  return (
    <main className='h-full w-full'>
      <Banner />
      <Navigation />
      <MobileNavigation />
      <HeroSection />
      <MetricSection />
      <UniqueSection />
      <PromoSection />
      <ReviewSection />
      <ApplicationSection />
      <Footer />
    </main>
  )
}

export default App
