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
    <section id="capabilities" className="relative py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#273B4B]">What Amigaa can do</h2>
          <p className="mt-3 text-[#273B4B]/80">A coordinated multi-agent system specialized for modern businesses.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              className="group rounded-2xl border border-[#273B4B]/10 bg-gradient-to-b from-white to-white/80 p-6 shadow-[0_10px_40px_-10px_rgba(0,120,111,0.15)] hover:shadow-[0_14px_50px_-8px_rgba(0,120,111,0.25)] transition-shadow"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <div className="h-10 w-10 rounded-lg flex items-center justify-center bg-[#00786F]/10 text-[#00786F]">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-[#273B4B]">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#273B4B]/80">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Capabilities
