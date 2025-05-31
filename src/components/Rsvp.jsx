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
          <h2 className="text-4xl md:text-5xl font-custom mb-4 text-center text-charcoal">
            Conferma la tua presenza
          </h2>

          <p className="text-center text-charcoal-light mb-12 max-w-2xl mx-auto">
            Fateci sapere se ci sarete rispondendo al seguente form entro il mese di Agosto, così possiamo
            prepararvi un bel tavolo per pranzo 😎
            Vi chiediamo di compilarne più di uno, se rispondete anche per i vostri familiari.
          </p>

          <div className='flex justify-center'></div>
          <button className='w-full btn btn-primary mb-8'>
            <a
              href="https://docs.google.com/forms/d/e/IL_TUO_LINK_DI_GOOGLE_FORM/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              Compila il modulo
            </a>
          </button>
        </motion.div>
      </div>
    </section >
  )
}

export default Rsvp