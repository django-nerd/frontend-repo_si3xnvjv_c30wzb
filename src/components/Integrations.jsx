import { motion } from 'framer-motion'
import { Database, Mail, Calendar, Headphones, Building2, Server } from 'lucide-react'

const logos = [
  { Icon: Building2, name: 'CRM' },
  { Icon: Headphones, name: 'Helpdesk' },
  { Icon: Mail, name: 'Email' },
  { Icon: Calendar, name: 'Calendar' },
  { Icon: Database, name: 'Data Warehouse' },
  { Icon: Server, name: 'Internal APIs' },
]

function Integrations() {
  return (
    <section id="integrations" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold">Connects to your business stack</h2>
          <p className="mt-3 text-white/70">Amigaa plugs into the tools you already use, then orchestrates actions across them with MCP.</p>
        </div>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {logos.map(({ Icon, name }, i) => (
            <motion.div
              key={name}
              className="relative flex flex-col items-center gap-2 rounded-xl glass p-4 ring-glow hover:shadow-xl transition-shadow overflow-hidden"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
            >
              <div className="absolute -bottom-10 -right-10 h-28 w-28 rounded-full blur-2xl opacity-20"
                   style={{ background: 'radial-gradient(circle, rgba(0,224,199,0.35), transparent 60%)' }} />
              <div className="h-10 w-10 rounded-lg bg-teal-500/15 text-teal-300 flex items-center justify-center">
                <Icon className="h-5 w-5" />
              </div>
              <span className="text-xs font-medium text-white/80">{name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Integrations
