import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const navLinks = [
  { label: 'Beranda', href: '/' },
  { label: 'Profil', href: '/profil' },
  { label: 'Layanan', href: '/layanan' },
  { label: 'Portofolio', href: '/portofolio' },
  { label: 'Blog', href: '/blog' },
  { label: 'Karir', href: '/karir' },
]

export default function HomeNavbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed top-0 w-full z-50 bg-primary/90 backdrop-blur-md shadow-md">
      <nav className="max-w-container-max mx-auto px-margin-desktop flex justify-between items-center h-20">
        <Link to="/" className="font-headline-lg text-headline-lg font-bold text-on-primary tracking-tight">
          HiTech Aksara Digital
        </Link>
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <NavLink
                to={link.href}
                className={({ isActive }) =>
                  `font-body-md text-body-md transition-colors hover:scale-105 transition-transform duration-200 ${
                    isActive
                      ? 'text-secondary-fixed font-bold border-b-2 border-secondary-fixed pb-1'
                      : 'text-on-primary/80 hover:text-on-primary'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <button className="hidden md:block bg-secondary-container text-on-secondary-container px-6 py-2.5 rounded-full font-label-md text-label-md font-bold hover:scale-105 transition-transform">
          Hubungi Kami
        </button>
        <button className="md:hidden text-on-primary">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </nav>
    </header>
  )
}
