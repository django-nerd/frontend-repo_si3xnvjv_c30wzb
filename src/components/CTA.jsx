import { motion } from 'framer-motion'

function CTA() {
  return (
    <section id="cta" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="relative overflow-hidden rounded-3xl p-8 md:p-12 glass ring-glow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_200px_at_20%_20%,rgba(0,224,199,0.2),transparent),radial-gradient(600px_200px_at_80%_80%,rgba(0,120,111,0.25),transparent)]" />
          <div className="relative">
            <h3 className="text-2xl md:text-3xl font-bold text-gradient">Ready to automate your workflow?</h3>
            <p className="mt-2 text-white/80 max-w-2xl">Start with a guided demo or talk to an expert about your use case. See how Amigaa fits into your stack in minutes.</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#" className="btn-accent">
                Book a demo
              </a>
              <a href="#" className="btn-outline">
                Learn more
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA
