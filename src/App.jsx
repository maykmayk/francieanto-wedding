import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Timeline from './components/Timeline'
import Gallery from './components/Gallery'
import Venue from './components/Venue'
import Rsvp from './components/Rsvp'
import Registry from './components/Registry'
import Footer from './components/Footer'
import { motion } from 'framer-motion'
import Ceremony from './components/Ceremony'
import Ricevimento from './components/Ricevimento'
import ViaggiodiNozze from './components/ViaggiodiNozze'
import Citazione from './components/Citazione'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`${isLoaded ? 'opacity-100' : 'opacity-0'}`}
    >
      <Navbar />
      <main className='noScrollBar'>
        <Hero />
        <Citazione />
        <Ceremony />
        {/* <Ricevimento /> */}
        <About />
        {/* <Timeline /> */}
        {/* <Gallery /> */}
        {/* <Venue /> */}
        <Registry />
        <ViaggiodiNozze />
        <Rsvp />
      </main>
      <Footer />
    </motion.div>
  )
}

export default App