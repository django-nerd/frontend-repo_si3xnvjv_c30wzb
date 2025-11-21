import { motion } from 'framer-motion'
import { Bot, Headset, Wrench, Link2 } from 'lucide-react'

const items = [
  {
    icon: Bot,
    title: 'Sales Agent',
    desc: 'Prospects, qualifies, and books meetings across email, chat, and web with human-level context.',
  },
  {
    icon: Headset,
    title: 'Customer Support',
    desc: 'Resolves tickets, drafts replies, and escalates intelligently across channels 24/7.',
  },
  {
    icon: Wrench,
    title: 'Tool Builder',
    desc: 'Creates custom workflows and tools using your APIs, data, and MCP-powered integrations.',
  },
  {
    icon: Link2,
    title: 'API & MCP Integration',
    desc: 'Connects securely to CRMs, helpdesks, and internal systems. Extensible via the Model Context Protocol.',
  },
]

function Capabilities() {
  return (
    <section id="capabilities" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold">What Amigaa can do</h2>
          <p className="mt-3 text-white/70">A coordinated multi-agent system specialized for modern businesses.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              className="group relative rounded-2xl p-6 glass ring-glow overflow-hidden"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <div className="absolute -top-16 -right-10 h-40 w-40 rounded-full blur-2xl opacity-20"
                   style={{ background: 'radial-gradient(circle, rgba(0,224,199,0.35), transparent 60%)' }} />

              <div className="h-10 w-10 rounded-lg flex items-center justify-center bg-teal-500/15 text-teal-300">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Capabilities
