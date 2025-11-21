import { motion } from 'framer-motion'

const quotes = [
  {
    quote: 'Amigaa booked 34% more meetings than our outbound team in the first month—without adding headcount.',
    author: 'VP of Sales, B2B SaaS',
  },
  {
    quote: 'Support resolution time dropped by 57% after we let Amigaa triage and draft replies. Our NPS climbed too.',
    author: 'Head of CX, E-commerce',
  },
  {
    quote: 'The MCP-based tooling let us spin up a custom billing workflow in a day. This would’ve taken weeks before.',
    author: 'Operations Lead, Fintech',
  },
]

function Testimonials() {
  return (
    <section id="testimonials" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold">Proven in the real world</h2>
          <p className="mt-3 text-white/70">Teams across industries are using Amigaa to scale outcomes without scaling costs.</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {quotes.map((q, i) => (
            <motion.blockquote
              key={q.author}
              className="rounded-2xl p-6 glass ring-glow"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <p className="text-white text-base leading-relaxed">“{q.quote}”</p>
              <footer className="mt-4 text-sm font-medium text-white/70">{q.author}</footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
