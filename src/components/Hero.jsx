import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 md:pt-28" id="hero">
      {/* Background gradients for premium depth */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-[480px] w-[480px] rounded-full blur-3xl opacity-30"
             style={{ background: 'radial-gradient(circle at 30% 30%, rgba(0,224,199,0.25), transparent 60%)' }} />
        <div className="absolute -bottom-40 -right-40 h-[560px] w-[560px] rounded-full blur-3xl opacity-30"
             style={{ background: 'radial-gradient(circle at 70% 70%, rgba(0,120,111,0.35), transparent 60%)' }} />
      </div>

      {/* Subtle grid + noise lives on body via utilities */}
      <div className="absolute inset-0 pointer-events-none opacity-70">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 items-center min-h-[72vh]">
          <motion.div
            className="lg:col-span-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium text-teal-200">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-300" />
              Multi-agent system powered by MCP
            </div>
            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight text-gradient">
              Automate sales, support, and tools with one AI agent: Amigaa
            </h1>
            <p className="mt-4 text-lg md:text-xl leading-relaxed text-white/80 max-w-2xl">
              Amigaa connects to your systems, collaborates across specialized agents, and handles the busywork—so your team can focus on growth.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#cta" className="btn-accent">
                Try Amigaa
              </a>
              <a href="#how" className="btn-outline">
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
              <div className="absolute inset-0 rounded-3xl glass ring-glow" />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0b1116]" />
    </section>
  )
}

export default Hero
