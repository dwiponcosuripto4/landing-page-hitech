import HomeNavbar from '../components/HomeNavbar'
import Hero from '../components/Hero'
import ValueProps from '../components/ValueProps'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import HomeCTA from '../components/HomeCTA'
import HomeFooter from '../components/HomeFooter'
import WhatsAppButton from '../components/WhatsAppButton'

export default function Home() {
  return (
    <div className="bg-background text-on-background font-body-md selection:bg-secondary-fixed selection:text-on-secondary-fixed">
      <HomeNavbar />
      <main>
        <Hero />
        <ValueProps />
        <Services />
        <Testimonials />
        <HomeCTA />
      </main>
      <HomeFooter />
      <WhatsAppButton />
    </div>
  )
}
