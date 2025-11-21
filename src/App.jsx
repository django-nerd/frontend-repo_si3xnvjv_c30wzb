import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Capabilities from './components/Capabilities'
import HowItWorks from './components/HowItWorks'
import Integrations from './components/Integrations'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#0b1116] text-white bg-grid bg-noise">
      <Navbar />
      <Hero />
      <Capabilities />
      <HowItWorks />
      <Integrations />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
