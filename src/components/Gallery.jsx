import { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaTimes } from 'react-icons/fa'

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)
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

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const imageVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  }

  const openLightbox = (index) => {
    setCurrentImage(index)
    setLightboxOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    document.body.style.overflow = 'auto'
  }

  const nextImage = (e) => {
    e.stopPropagation()
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const prevImage = (e) => {
    e.stopPropagation()
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  // Image placeholders
  const images = [
    {
      src: "https://via.placeholder.com/800x600?text=Foto+1",
      alt: "Francesca e Antonio al tramonto"
    },
    {
      src: "https://via.placeholder.com/800x600?text=Foto+2",
      alt: "La coppia durante una vacanza in Toscana"
    },
    {
      src: "https://via.placeholder.com/800x600?text=Foto+3",
      alt: "Un momento speciale insieme"
    },
    {
      src: "https://via.placeholder.com/800x600?text=Foto+4",
      alt: "Passeggiata autunnale nel parco"
    },
    {
      src: "https://via.placeholder.com/800x600?text=Foto+5",
      alt: "Celebrando il fidanzamento"
    },
    {
      src: "https://via.placeholder.com/800x600?text=Foto+6",
      alt: "Viaggio a Venezia"
    }
  ]

  return (
    <section id="gallery" className="section bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-custom mb-4 text-charcoal">I Nostri Momenti</h2>
          <p className="text-charcoal-light max-w-2xl mx-auto">
            Una selezione di ricordi dal nostro percorso insieme, dai primi incontri alla proposta di matrimonio.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              variants={imageVariant}
              className="aspect-[4/3] overflow-hidden rounded-lg shadow-md cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox */}
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              className="absolute top-4 right-4 text-white z-[60]"
              onClick={closeLightbox}
              aria-label="Chiudi galleria"
            >
              <FaTimes size={24} />
            </button>
            
            <div className="relative max-w-4xl w-full max-h-[80vh]" onClick={(e) => e.stopPropagation()}>
              <img
                src={images[currentImage].src}
                alt={images[currentImage].alt}
                className="w-full h-full object-contain"
              />
              
              <div className="absolute bottom-4 left-0 right-0 text-center text-white">
                <p className="font-custom text-lg">{images[currentImage].alt}</p>
                <p className="text-sm text-gray-300 mt-1">{currentImage + 1} / {images.length}</p>
              </div>
              
              <button
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-r-md"
                onClick={prevImage}
                aria-label="Immagine precedente"
              >
                &#8592;
              </button>
              
              <button
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-l-md"
                onClick={nextImage}
                aria-label="Immagine successiva"
              >
                &#8594;
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Gallery