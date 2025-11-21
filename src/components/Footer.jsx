function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-[#00b3a5] to-[#00786F] ring-glow" />
            <span className="text-sm font-semibold tracking-tight">Amigaa</span>
          </a>
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/70">
            <a href="#capabilities" className="hover:text-white">Capabilities</a>
            <a href="#how" className="hover:text-white">How it works</a>
            <a href="#integrations" className="hover:text-white">Integrations</a>
            <a href="#testimonials" className="hover:text-white">Testimonials</a>
            <a href="#cta" className="btn-outline">Get started</a>
          </nav>
          <p className="text-xs text-white/60">© {new Date().getFullYear()} Amigaa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
