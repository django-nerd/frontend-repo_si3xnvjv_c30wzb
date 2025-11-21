import { useState } from 'react'
import { Menu, X } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'How it works', href: '#how' },
    { label: 'Integrations', href: '#integrations' },
    { label: 'Testimonials', href: '#testimonials' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-white/10 bg-[#0b1116]/70 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-[#00b3a5] to-[#00786F] ring-glow" />
            <span className="text-lg font-semibold tracking-tight">Amigaa</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-medium text-white/70 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#cta" className="btn-accent shadow-md">
              Get started
            </a>
          </nav>

          <button className="md:hidden p-2 rounded-md text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-white/90 hover:bg-white/5">
                  {item.label}
                </a>
              ))}
              <a href="#cta" onClick={() => setOpen(false)} className="btn-accent text-center">
                Get started
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar
