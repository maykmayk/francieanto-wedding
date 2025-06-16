import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import InfiniteCarousel from './InfiniteCarousel'

const About = () => {
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

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  }

  const galleryImages = Array.from({ length: 52 }, (_, i) => `/gallery/gallery_${i + 1}.jpeg`)

  return (
    <section id="about" className="section bg-sage bg-opacity-10 noPb">
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={fadeInUp}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-custom mb-8 text-charcoal">La Nostra Storia</h2>

          {/* <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center"> */}
          <div className="w-full flex flex-col justify-center items-center md:px-24">
            <p className="mb-6 text-charcoal-light text-center leading-relaxed">
              La nostra storia ve la riassumiamo con un po’ di foto, alcune belle altre meno, ma che raccontano di noi e di voi, e di questa bellissima strada che stiamo percorrendo.
            </p>
            <p className="text-charcoal-light text-center leading-relaxed">
              Grazie per la compagnia che ci fate! ☀️
            </p>
            {/* </div>
            <div className="rounded-lg overflow-hidden shadow-md h-96">
              <img
                src="https://via.placeholder.com/600x800?text=Franci+e+Anto"
                alt="Franci e Anto"
                className="w-full h-full object-cover"
              />
            </div> */}
          </div>

        </motion.div>

      </div>

      <InfiniteCarousel imagesArray={galleryImages} />    
      </section>
  )
}

export default About
