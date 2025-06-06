import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGift, FaPlane, FaHome, FaHeart } from 'react-icons/fa'

const Registry = () => {
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

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }
  return (
    <section id="lista" className="section bg-sage bg-opacity-10">
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={fadeIn}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-custom mb-4 text-charcoal">Lista Nozze</h2>
          <p className="text-charcoal-light mb-6 max-w-2xl mx-auto">
            Un passo grande che abbiamo fatto quest’anno è stato comprare una casa!
            L’involucro c’è, e piano piano lo riempiremo di ricordi e momenti trascorsi insieme. Non vediamo l’ora di invitarvi! 🍳
          </p>

          <p className="text-charcoal-light mb-6 max-w-2xl mx-auto">
            Se desiderate aiutarci a costruire la nostra casa, abbiamo preparato una lista nozze su Amazon con alcuni prodotti che ci potrebbero servire.
            Il prodotto acquistato ci arriverà direttamente a casa! TOP!!
          </p>

          <button className='btn btn-primary '>
            <a
              href="https://www.amazon.it/wedding/share/francieanto"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lista Nozze
            </a>
          </button>

          <motion.div
            variants={container}
          >
            <motion.div
              variants={fadeIn}
              className="mt-6"
            >
              <p className="text-charcoal-light mb-4">
                In alternativa, se desiderate contribuire all’acquisto di elettrodomestici o arredi più ingombranti, vi lasciamo qui sotto l’Iban a cui poter effettuare un bonifico. Grazie di cuore!! 🏠
              </p>
              <div className="bg-cream p-4 rounded-md inline-block text-center">
                <p className="">Intestatario: Francesca de Vita</p>
                <p>Iban: IT84P0301503200000006368761</p>
                <p>Causale: Regalo di nozze + [Vostro Nome]</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Registry