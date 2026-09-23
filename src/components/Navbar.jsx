import { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },

  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-ink/90 backdrop-blur border-b border-line">
      <nav className="max-w-content mx-auto flex items-center justify-between px-6 md:px-12 lg:px-10 xl:px-8 py-5">
        <a href="#home" className="flex items-center gap-2 font-display font-bold text-lg">
          <span className="w-8 h-8 rounded-md bg-accent flex items-center justify-center text-sm">M</span>
          Mahdi<span className="text-accent">Behzad</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm text-muted">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} className="hover:text-white transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center rounded-md bg-accent px-5 py-2.5 text-sm font-medium hover:bg-accent/90 transition-colors"
        >
          Hire Me
        </a>

        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-line bg-panel px-6 py-4">
          <ul className="flex flex-col gap-4 text-sm text-muted">
            {links.map((l) => (
              <li key={l.label}>
                <a href={l.href} onClick={() => setOpen(false)} className="hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex items-center rounded-md bg-accent px-5 py-2.5 text-sm font-medium"
          >
            Hire Me
          </a>
        </div>
      )}
    </header>
  )
}
