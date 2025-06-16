import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'

const Hero = () => {
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  const weddingDate = new Date('2025-10-04T11:00:00')

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date()
      const difference = weddingDate.getTime() - now.getTime()

      const d = Math.floor(difference / (1000 * 60 * 60 * 24))
      const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const s = Math.floor((difference % (1000 * 60)) / 1000)

      setDays(d)
      setHours(h)
      setMinutes(m)
      setSeconds(s)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="hero" className="md:h-screen h-[90vh] bg-hero-pattern bg-cover bg-center flex items-end justify-center relative overflow-hidden">
      <div className="relative w-full h-full">
        <img className="absolute w-full h-full object-cover" src="/hero_back.png" />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      <div className="z-50 container text-center absolute pb-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-cream"
        >
          {/* <h1 className="text-4xl md:text-6xl lg:text-7xl font-custom font-light mb-2">
            Francesca & Antonio
          </h1> */}
          <div className="flex flex-col md:flex-row justify-center w-full items-center md:gap-1 scale-125">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-custom font-light md:mb-2">
              Francesca
            </h1>
            <img className='w-10 md:w-16' src="/e.png" alt="and" />
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-custom font-light md:mb-2 mb-8">
              Antonio
            </h1>
          </div>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-custom mb-6 tracking-wider">
            4 Ottobre 2025
          </h2>

          <div className="w-24 h-[1px] bg-cream mx-auto my-8"></div>

          <div className="flex justify-center space-x-4 md:space-x-8 mb-10 text-white">
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-custom">{days}</span>
              <span className="text-xs md:text-sm uppercase tracking-wider">Giorni</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-custom">{hours}</span>
              <span className="text-xs md:text-sm uppercase tracking-wider">Ore</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-custom">{minutes}</span>
              <span className="text-xs md:text-sm uppercase tracking-wider">Minuti</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-custom">{seconds}</span>
              <span className="text-xs md:text-sm uppercase tracking-wider">Secondi</span>
            </div>
          </div>

          {/* <Link
            to="rsvp"
            spy={true}
            smooth={true}
            duration={800}
            className="btn btn-primary text-sm md:text-base cursor-pointer"
          >
            Conferma la tua presenza
          </Link> */}
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
