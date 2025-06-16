import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Rsvp = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  }

  return (
    <section id="rsvp" className="section bg-cream">
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={fadeIn}
          className="max-w-3xl mx-auto"
        >
          {/* <h2 className="text-4xl md:text-5xl font-custom mb-4 text-center text-charcoal">
            RSVP
          </h2>

          <p className="text-center text-charcoal-light mb-6 max-w-2xl mx-auto">
            Fateci sapere se ci sarete rispondendo al seguente modulo entro il mese di Agosto, così da prepararvi un bel tavolo per pranzo 😎
          </p>
          <p className="text-center text-charcoal-light mb-6 max-w-2xl mx-auto">
            Vi chiediamo di compilarne più di uno, se rispondete anche per i vostri familiari.
          </p>

          <div className='flex justify-center'></div>
          <button className='w-full btn btn-primary mb-8'>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSefwfWH2eGgC50CTDqK2bnn0I5Lvjokxo0I3-BlBKJpXuYVug/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              Compila il modulo
            </a>
          </button> */}
          <p className="text-center text-charcoal-light max-w-2xl mx-auto">
            Vi aspettiamo e non vediamo l’ora!! 🤍
          </p>
        </motion.div>
      </div>
    </section >
  )
}

export default Rsvp