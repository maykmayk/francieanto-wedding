import { motion, useAnimationFrame } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

// Funzione per verificare se l'immagine esiste
const checkImageExists = (src) => {
  return new Promise((resolve) => {
    const img = new Image()
    img.src = src
    img.onload = () => resolve(src)
    img.onerror = () => resolve(null)
  })
}

const InfiniteCarousel = ({ imagesArray }) => {
  const containerRef = useRef(null)
  const [fixedImages, setFixedImages] = useState([])
  const [offsetX, setOffsetX] = useState(0)
  const speed = 0.2

  useEffect(() => {
    if (!imagesArray || imagesArray.length === 0) return

    const validateImages = async () => {
      const results = await Promise.all(imagesArray.map(checkImageExists))
      const valid = results.filter(img => img !== null)
      const shuffled = valid.sort(() => 0.5 - Math.random())
      setFixedImages(shuffled)
    }

    validateImages()
  }, [imagesArray])

  useAnimationFrame(() => {
    setOffsetX(prev => {
      const totalWidth = fixedImages.length * (window.innerWidth * 0.8 + 32)
      const next = prev - speed
      return next <= -totalWidth ? 0 : next
    })
  })

  if (fixedImages.length === 0) return null

  const imagesToRender = [...fixedImages, ...fixedImages]

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
