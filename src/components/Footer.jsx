function Footer() {
  return (
    <footer className="relative border-t border-[#273B4B]/10 py-10 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-[#00786F] shadow-inner shadow-[#273B4B]/30" />
            <span className="text-sm font-semibold tracking-tight text-[#273B4B]">Amigaa</span>
          </a>
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[#273B4B]/70">
            <a href="#capabilities" className="hover:text-[#00786F]">Capabilities</a>
            <a href="#how" className="hover:text-[#00786F]">How it works</a>
            <a href="#integrations" className="hover:text-[#00786F]">Integrations</a>
            <a href="#testimonials" className="hover:text-[#00786F]">Testimonials</a>
            <a href="#cta" className="hover:text-[#00786F] font-medium">Get started</a>
          </nav>
          <p className="text-xs text-[#273B4B]/60">© {new Date().getFullYear()} Amigaa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
