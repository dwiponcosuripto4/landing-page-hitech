import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'Beranda', href: '/' },
  { label: 'Profil', href: '/profil' },
  { label: 'Layanan', href: '/layanan' },
  { label: 'Portofolio', href: '/portofolio' },
  { label: 'Blog', href: '/blog' },
  { label: 'Karir', href: '/karir' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <header className="fixed top-0 w-full z-50 bg-primary/90 backdrop-blur-md shadow-md">
      <nav className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex justify-between items-center h-20">
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="font-headline-lg text-headline-lg font-bold text-on-primary tracking-tight"
        >
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

        <div className="flex items-center gap-3">
          <Link
            to="/kontak"
            className="hidden md:block bg-secondary-container text-on-secondary-container px-6 py-2.5 rounded-full font-label-md text-label-md font-bold hover:scale-105 transition-transform"
          >
            Hubungi Kami
          </Link>
          <button
            type="button"
            aria-label="Buka menu navigasi"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden text-on-primary p-2 -mr-2"
          >
            <span className="material-symbols-outlined text-3xl">
              {menuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-primary border-t border-white/10 ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col px-margin-mobile py-4 gap-1">
          {navLinks.map((link) => (
            <li key={link.label}>
              <NavLink
                to={link.href}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block py-3 px-2 rounded-lg font-body-md text-body-md transition-colors ${
                    isActive
                      ? 'text-secondary-fixed font-bold bg-white/5'
                      : 'text-on-primary/80 hover:text-on-primary hover:bg-white/5'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li className="pt-2">
            <Link
              to="/kontak"
              onClick={() => setMenuOpen(false)}
              className="block text-center bg-secondary-container text-on-secondary-container px-6 py-3 rounded-full font-label-md text-label-md font-bold"
            >
              Hubungi Kami
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
