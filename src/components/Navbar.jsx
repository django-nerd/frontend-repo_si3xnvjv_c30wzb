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
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/50 bg-white/70 border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-[#00786F] shadow-inner shadow-[#273B4B]/30" />
            <span className="text-lg font-semibold tracking-tight text-[#273B4B]">Amigaa</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-medium text-[#273B4B]/80 hover:text-[#00786F] transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#cta" className="inline-flex items-center justify-center rounded-lg bg-[#00786F] text-white px-4 py-2 text-sm font-semibold shadow-sm hover:shadow-md hover:brightness-105 transition-all">
              Get started
            </a>
          </nav>

          <button className="md:hidden p-2 rounded-md text-[#273B4B]" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-[#273B4B] hover:bg-[#273B4B]/5">
                  {item.label}
                </a>
              ))}
              <a href="#cta" onClick={() => setOpen(false)} className="rounded-md px-3 py-2 bg-[#00786F] text-white text-center font-semibold">
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
