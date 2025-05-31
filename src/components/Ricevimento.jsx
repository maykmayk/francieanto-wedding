import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Ricevimento() {
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
        <section id="ricevimento" className="section bg-sage bg-opacity-10">
            <div className="container">
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={fadeIn}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-custom mb-4 text-charcoal">Ricevimento</h2>
                    <p className="text-charcoal-light mb-8 max-w-2xl mx-auto">
                        Dopo la cerimonia vi aspettiamo (o meglio ci aspettate 😜) per festeggiare insieme presso Tenuta
                        Cascina Canova, a Cologno al Serio (BG). Non vediamo l’ora!
                    </p>

                    <div className="relative w-full h-64 mb-8 rounded-lg shadow-md overflow-hidden">
                        <img
                            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/54/43/5f/cascina-canova.jpg?w=1200&h=-1&s=1"
                            alt="Cascina Canova"
                            className="w-full h-full object-cover"
                        />
                        {/* overlay nero opaco */}
                        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                        {/* bottone centrato assoluto */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <a
                                href="https://www.google.com/maps/place/Tenuta+Cascina+Canova/@45.5708963,9.7234473,235m/data=!3m1!1e3!4m9!3m8!1s0x47814560d155a645:0x2ab32972a940ce6d!5m2!4m1!1i2!8m2!3d45.570908!4d9.724039!16s%2Fg%2F11sb1xq7yy?entry=ttu&g_ep=EgoyMDI1MDUyOC4wIKXMDSoASAFQAw%3D%3D"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 bg-white text-charcoal font-semibold rounded-lg shadow-md transition hover:bg-sage hover:text-white"
                            >
                                Google Maps
                            </a>
                        </div>
                    </div>

                    <p className='text-charcoal-light mt-8 max-w-2xl mx-auto'>
                        Presso il luogo del ricevimento è presente un parcheggio aperto riservato.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
