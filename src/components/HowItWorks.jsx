import { motion } from 'framer-motion'

const steps = [
  {
    title: 'Connect your systems',
    desc: 'Securely link CRMs, helpdesks, calendars, analytics, and internal tools. No complex setup.',
  },
  {
    title: 'Compose your agents',
    desc: 'Pick prebuilt agents for sales and support, then add custom tools with MCP integrations.',
  },
  {
    title: 'Run and refine',
    desc: 'Launch in hours, not months. Monitor outcomes and fine-tune behaviors with simple controls.',
  },
]

function HowItWorks() {
  return (
    <section id="how" className="relative py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] bg-[radial-gradient(600px_200px_at_20%_20%,#00e0c7,transparent),radial-gradient(600px_200px_at_80%_80%,#00786F,transparent)]" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold">How it works</h2>
          <p className="mt-3 text-white/70">From connection to outcomes in three simple steps.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              className="relative rounded-2xl p-6 glass ring-glow"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
            >
              <div className="absolute -top-3 left-6 h-6 w-6 rounded-md bg-teal-400 text-[#0b1116] text-xs font-bold flex items-center justify-center shadow">{i + 1}</div>
              <h3 className="mt-2 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-white/70">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
