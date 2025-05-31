import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaMapMarkerAlt, FaHotel, FaCar } from 'react-icons/fa'

const Venue = () => {
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
    <section id="venue" className="section bg-sage bg-opacity-10">
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={fadeIn}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-custom mb-12 text-center text-charcoal">Location</h2>

          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
            <div className="h-80 relative">
              {/* Placeholder for map, in a real implementation this would be replaced with a Google Maps or similar component */}
              <img 
                src="https://via.placeholder.com/1200x600?text=Mappa+della+Location" 
                alt="Mappa di Villa Medicea" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-charcoal bg-opacity-30">
                <span className="text-white text-xl font-custom">Mappa Interattiva</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start mb-4">
                <FaMapMarkerAlt className="text-sage text-xl mt-1 mr-3" />
                <div>
                  <h3 className="text-2xl font-custom mb-2 text-charcoal">Cerimonia</h3>
                  <p className="text-charcoal-light mb-2">
                    <strong>Chiesa di San Michele in Foro</strong><br />
                    Via Santa Maria, 12<br />
                    50125 Firenze (FI)
                  </p>
                  <p className="text-sm text-charcoal-light">
                    La cerimonia inizierà alle ore 16:00.<br />
                    Vi preghiamo di arrivare con 30 minuti di anticipo.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start mb-4">
                <FaMapMarkerAlt className="text-sage text-xl mt-1 mr-3" />
                <div>
                  <h3 className="text-2xl font-custom mb-2 text-charcoal">Ricevimento</h3>
                  <p className="text-charcoal-light mb-2">
                    <strong>Villa Medicea</strong><br />
                    Via delle Colline, 45<br />
                    50125 Firenze (FI)
                  </p>
                  <p className="text-sm text-charcoal-light">
                    Il ricevimento inizierà alle ore 18:30 con l'aperitivo di benvenuto.<br />
                    La villa dispone di ampio parcheggio gratuito per gli ospiti.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <FaHotel className="text-sage text-xl mt-1 mr-3" />
                <div>
                  <h3 className="text-2xl font-custom mb-2 text-charcoal">Alloggi Consigliati</h3>
                  <ul className="text-charcoal-light space-y-2">
                    <li>
                      <strong>Hotel Palazzo Vecchio</strong><br />
                      A soli 5 minuti dalla location. Codice sconto: FRANCANTONIO
                    </li>
                    <li>
                      <strong>Grand Hotel Baglioni</strong><br />
                      Nel centro storico di Firenze. Elegante e raffinato.
                    </li>
                    <li>
                      <strong>Residence La Contessina</strong><br />
                      Appartamenti per chi preferisce soluzioni indipendenti.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <FaCar className="text-sage text-xl mt-1 mr-3" />
                <div>
                  <h3 className="text-2xl font-custom mb-2 text-charcoal">Come Arrivare</h3>
                  <p className="text-charcoal-light mb-2">
                    <strong>In Auto:</strong><br />
                    Dall'autostrada A1, uscita Firenze Sud. Seguire le indicazioni per il centro.
                  </p>
                  <p className="text-charcoal-light mb-2">
                    <strong>In Treno:</strong><br />
                    Stazione di Firenze Santa Maria Novella, poi taxi o bus linea 7.
                  </p>
                  <p className="text-charcoal-light">
                    <strong>In Aereo:</strong><br />
                    Aeroporto di Firenze-Peretola, a 20 minuti dalla location.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Venue