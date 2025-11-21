import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 md:pt-28" id="hero">
      <div className="absolute inset-0 pointer-events-none opacity-80">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 items-center min-h-[70vh]">
          <motion.div
            className="lg:col-span-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-1 text-xs font-medium text-[#00786F] ring-1 ring-[#00786F]/20">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00786F]" />
              Multi-agent system powered by MCP
            </div>
            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight text-[#273B4B]">
              Automate sales, support, and tools with one AI agent: Amigaa
            </h1>
            <p className="mt-4 text-lg md:text-xl leading-relaxed text-[#273B4B]/80">
              Amigaa connects to your systems, collaborates across specialized agents, and handles the busywork—so your team can focus on growth.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#cta" className="inline-flex items-center justify-center rounded-lg bg-[#00786F] text-white px-6 py-3 text-sm md:text-base font-semibold shadow-sm hover:shadow-md hover:brightness-105 transition-all">
                Try Amigaa
              </a>
              <a href="#how" className="inline-flex items-center justify-center rounded-lg border border-[#273B4B]/20 text-[#273B4B] hover:text-[#00786F] hover:border-[#00786F] px-6 py-3 text-sm md:text-base font-semibold transition-colors bg-white/70 backdrop-blur">
                How it works
              </a>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="relative h-[420px] md:h-[520px] lg:h-[560px]">
              <div className="absolute inset-0 rounded-3xl ring-1 ring-white/40 shadow-[0_10px_60px_-10px_rgba(39,59,75,0.4)]" />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/0" />
    </section>
  )
}

export default Hero
