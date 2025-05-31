import { motion } from 'framer-motion'
import { useRef, useMemo, useState, useEffect } from 'react'

// Range numerico per la variant 1
const startImage = 45
const endImage = 84

// Genera l'array di URL immagini numerate
const generateImagePaths = () => {
  const images = []
  for (let i = startImage; i <= endImage; i++) {
    images.push(`/gallery/gallery_${i}.jpeg`)
  }
  return images
}

// Verifica asincrona se un'immagine esiste
const checkImageExists = (src) => {
  return new Promise((resolve) => {
    const img = new Image()
    img.src = src
    img.onload = () => resolve(src)
    img.onerror = () => resolve(null)
  })
}

const InfiniteCarousel = ({ variant = "1", imagesArray = [] }) => {
  const carouselRef = useRef(null)
  const [validImages, setValidImages] = useState([])
  const [duration, setDuration] = useState(60)

  // LOGICA variant 1 → completamente identica a come avevi
  const variant1Images = useMemo(() => {
    const shuffled = generateImagePaths().sort(() => 0.5 - Math.random())
    return shuffled
  }, [])

  // LOGICA variant 2 → preload asincrono
  useEffect(() => {
    const loadImages = async () => {
      if (variant === "2" && imagesArray.length > 0) {
        const checks = await Promise.all(imagesArray.map(checkImageExists))
        const filtered = checks.filter(src => src !== null)
        const shuffled = filtered.sort(() => 0.5 - Math.random())
        setValidImages(shuffled)
      }
    }
    loadImages()
  }, [variant, imagesArray])

  // Adattiamo la velocità su mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setDuration(30)
      } else {
        setDuration(60)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const marqueeVariants = {
    animate: {
      x: ['0%', '-100%'],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: duration,
          ease: 'linear'
        }
      }
    }
  }

  const imagesToRender = variant === "2" ? validImages : variant1Images

  return (
    <div className="overflow-hidden py-16 bg-white">
      <div
        className="flex overflow-x-auto scrollbar-hide touch-pan-x noScrollBar"
        ref={carouselRef}
      >
        <motion.div
          className="flex noScrollBar"
          variants={marqueeVariants}
          animate="animate"
          style={{ minWidth: '100%' }}
        >
          {[...imagesToRender, ...imagesToRender].map((image, index) => (
            <div key={index} className="w-[80vw] mx-4 shrink-0 aspect-[6/4] rounded-lg overflow-hidden shadow-md">
              <img
                src={image}
                alt={`Wedding photo`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default InfiniteCarousel
