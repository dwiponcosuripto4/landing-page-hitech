import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import ProjectGallery from './components/ProjectGallery'
import CaseStudies from './components/CaseStudies'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    const cards = document.querySelectorAll('.tonal-layer-1')
    const enter = (e) => (e.currentTarget.style.zIndex = '10')
    const leave = (e) => (e.currentTarget.style.zIndex = '1')
    cards.forEach((card) => {
      card.addEventListener('mouseenter', enter)
      card.addEventListener('mouseleave', leave)
    })
    return () => {
      cards.forEach((card) => {
        card.removeEventListener('mouseenter', enter)
        card.removeEventListener('mouseleave', leave)
      })
    }
  }, [])

  return (
    <div className="text-on-surface">
      <Navbar />
      <main className="mt-20">
        <Header />
        <ProjectGallery />
        <CaseStudies />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
