import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Ceremony() {
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
        <section id="ceremony" className="section bg-white">
            <div className="container">
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={fadeIn}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-custom mb-4 text-charcoal">Cerimonia</h2>
                    <p className="text-charcoal-light mb-8 max-w-2xl mx-auto">
                        Celebreremo il nostro Matrimonio alle ore 11.00 presso la Chiesa Parrocchiale della Beata Vergine Immacolata e S. Antonio, a Milano, più comunemente chiamata Kolbe!
                    </p>

                    <div className="relative w-full h-64 mb-8 rounded-lg shadow-md overflow-hidden">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/3/35/Chiesa_della_Beata_Vergine_Immacolata_e_Sant%27Antonio_-_Milano.jpg"
                            alt="Chiesa Kolbe"
                            className="w-full h-full object-cover"
                        />
                        {/* overlay nero opaco */}
                        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                        {/* bottone centrato assoluto */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <a
                                href="https://www.google.it/maps/place/Chiesa+Parrocchiale+della+Beata+Vergine+Immacolata+e+Sant'Antonio/@45.4618061,9.231951,59m/data=!3m1!1e3!4m6!3m5!1s0x4786c67d042c3587:0x2fe9a0c2bcd71e7!8m2!3d45.4618158!4d9.2321805!16s%2Fg%2F12hmddhsn?entry=ttu&g_ep=EgoyMDI1MDUyOC4wIKXMDSoASAFQAw%3D%3D"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 bg-white text-charcoal font-semibold rounded-lg shadow-md transition hover:bg-sage hover:text-white"
                            >
                                Google Maps
                            </a>
                        </div>
                    </div>

                    <p className='text-charcoal-light mt-6 max-w-2xl mx-auto'>
                        Con qualche minuto di ritardo potreste incontrare una Franci sposa uscire dal portone di casa, attraversare la strada e dirigersi verso l’ingresso della chiesa… Non tardate! 🙈
                    </p>
                    <p className='text-charcoal-light mt-8 max-w-2xl mx-auto'>
                        Qualora non troviate parcheggio, vi suggeriamo di dirigervi verso i parcheggi coperti della zona. 🅿️
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
