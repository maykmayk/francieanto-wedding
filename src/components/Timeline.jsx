import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaClock, FaGlassCheers, FaCamera, FaMusic, FaUtensils } from 'react-icons/fa'

const Timeline = () => {
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

  const events = [
    {
      icon: <FaClock className="text-sage text-xl" />,
      time: '16:00',
      title: 'Cerimonia',
      description: 'La cerimonia si terrà nella Chiesa di San Michele in Foro, un gioiello di architettura romanica nel cuore di Firenze.'
    },
    {
      icon: <FaCamera className="text-sage text-xl" />,
      time: '17:30',
      title: 'Servizio Fotografico',
      description: 'Dopo la cerimonia, ci sposteremo per le foto nei giardini di Boboli. Gli ospiti sono invitati a iniziare l\'aperitivo presso Villa Medicea.'
    },
    {
      icon: <FaGlassCheers className="text-sage text-xl" />,
      time: '18:30',
      title: 'Aperitivo di Benvenuto',
      description: 'Cocktail e stuzzichini sulla terrazza panoramica con vista sulla città e sulle colline toscane.'
    },
    {
      icon: <FaUtensils className="text-sage text-xl" />,
      time: '20:00',
      title: 'Cena',
      description: 'Menù degustazione con specialità toscane e vini locali serviti nella sala principale della villa.'
    },
    {
      icon: <FaMusic className="text-sage text-xl" />,
      time: '22:30',
      title: 'Festa e Balli',
      description: 'Musica dal vivo e DJ set fino a tarda notte per celebrare insieme questo momento speciale.'
    }
  ]

  return (
    <section id="timeline" className="section bg-cream">
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={container}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 
            variants={item}
            className="text-4xl md:text-5xl font-custom mb-16 text-center text-charcoal"
          >
            Programma del Giorno
          </motion.h2>

          <motion.div variants={item} className="relative">
            <div className="grid gap-8">
              {events.map((event, index) => (
                <motion.div 
                  key={index}
                  variants={item}
                  className="timeline-item"
                >
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      {event.icon}
                    </div>
                    <div>
                      <span className="font-medium text-sage inline-block mb-1">{event.time}</span>
                      <h3 className="text-2xl font-custom mb-2">{event.title}</h3>
                      <p className="text-charcoal-light">{event.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            variants={item}
            className="mt-16 text-center"
          >
            <p className="italic font-custom text-xl text-sage-dark">
              "Non vediamo l'ora di celebrare questo giorno speciale con voi!"
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Timeline