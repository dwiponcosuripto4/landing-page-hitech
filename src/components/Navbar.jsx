import { useEffect, useState } from 'react'
import { navLinks } from '../data'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 bg-primary/90 backdrop-blur-md transition-all duration-300 ease-in-out shadow-md ${
        scrolled ? 'py-2' : 'py-4'
      }`}
    >
      <div className="max-w-container-max mx-auto px-margin-desktop flex justify-between items-center h-20">
        <div className="font-headline-lg text-headline-lg font-bold text-on-primary tracking-tight">
          HiTech Aksara Digital
        </div>
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`font-body-md text-body-md transition-colors ${
                link.label === 'Portofolio'
                  ? 'text-secondary-fixed font-bold border-b-2 border-secondary-fixed pb-1'
                  : 'text-on-primary/80 hover:text-on-primary'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
        <button className="bg-secondary-container text-on-secondary-container px-6 py-2 rounded-lg font-label-md text-label-md hover:scale-105 transition-transform duration-200">
          Hubungi Kami
        </button>
      </div>
    </nav>
  )
}
