import Navbar from '../components/Navbar'
import Header from '../components/Header'
import ProjectGallery from '../components/ProjectGallery'
import CaseStudies from '../components/CaseStudies'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

export default function Portfolio() {
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
