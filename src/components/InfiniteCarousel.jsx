import { motion, useAnimationFrame } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

// Config: massimo numero immagini che vuoi supportare
const maxCheckImages = 500

const generateImagePaths = () => {
  const images = []
  for (let i = 1; i <= maxCheckImages; i++) {
    images.push(`/gallery/gallery_${i}.jpeg`)
  }
  return images
}

const checkImageExists = (src) => {
  return new Promise((resolve) => {
    const img = new Image()
    img.src = src
    img.onload = () => resolve(src)
    img.onerror = () => resolve(null)
  })
}

const InfiniteCarousel = ({ variant = "1", imagesArray = [] }) => {
  const containerRef = useRef(null)
  const [validImages, setValidImages] = useState([])
  const [offsetX, setOffsetX] = useState(0)
  const speed = 0.2 // controlla la velocità di scorrimento

  useEffect(() => {
    let isMounted = true

    const loadImages = async () => {
      let sources = []

      if (variant === "1") {
        sources = generateImagePaths()
      } else if (variant === "2" && imagesArray.length > 0) {
        sources = imagesArray
      }

      const checks = await Promise.all(sources.map(checkImageExists))
      const filtered = checks.filter(src => src !== null)
      const shuffled = filtered.sort(() => 0.5 - Math.random())

      if (isMounted) {
        setValidImages(shuffled)
      }
    }

    loadImages()

    return () => {
      isMounted = false
    }
  }, [variant, imagesArray])

  // Questo gestisce l'animazione frame-by-frame senza flicker
  useAnimationFrame(() => {
    setOffsetX(prev => {
      const totalWidth = validImages.length * (window.innerWidth * 0.8 + 32) // 80vw + 2 * 16px margin
      const next = prev - speed
      return next <= -totalWidth ? 0 : next
    })
  })

  if (validImages.length === 0) return null

  // Duplico una sola volta per creare il loop visivo
  const imagesToRender = [...validImages, ...validImages]

  return (
    <div className="overflow-hidden py-16 bg-white">
      <div className="flex overflow-x-auto scrollbar-hide touch-pan-x noScrollBar" ref={containerRef}>
        <motion.div
          className="flex noScrollBar"
          style={{ x: offsetX }}
        >
          {imagesToRender.map((image, index) => (
            <div key={index} className="w-[80vw] mx-4 shrink-0 aspect-[6/4] rounded-lg overflow-hidden shadow-md">
              <img
                src={image}
                alt=""
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
