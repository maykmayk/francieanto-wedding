import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import InfiniteCarousel from './InfiniteCarousel'

export default function ViaggiodiNozze() {
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

    const myVariant2Images = [
        "https://viaggisicuri.com/wp-content/uploads/2024/03/Foto-articolo-zanzibar-1-1920x1080.jpg.webp",
        "https://static.alpitour.it/dam/jcr:95f4fcd0-8c2d-449c-8439-b60d2c38e74f/g_05_zanzibar_spiaggia_jambiani_1900x1070.jpg",
        "https://images.lonelyplanetitalia.it/uploads/gettyrf-1136453253?q=80&p=slider&s=648193453c76e2eb78327a3a9eb2ed4d",
        "https://cdn-ildhbcd.nitrocdn.com/ZCWyroguFIUDJEMIpXkwbpTdiUIsRljU/assets/images/optimized/rev-e3cff24/cdn.atrsafari.com/cdn/05explore/locations-and-lodges/africa/tanzania/zanzibar/0/stills/00page/01TC30-IM0201-zanzibar-safari-1560.jpg",
        "https://www.imaway.it/wp-content/webp-express/webp-images/uploads/2022/11/idee-viaggio-zanzibar.jpg.webp",
        "https://cdn.getyourguide.com/img/tour/4d40c30de06d1425.jpeg/99.jpg",
        "https://www.viaggimanuzzi.it/wp-content/uploads/2015/02/wooden-fishing-ship-white-sand-beach-low-tide-indian-ocean-zanzibar-tanzania-1.jpg"
    ]


    return (
        <section id="viaggio" className="section bg-white">
            <div className="container">
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={fadeIn}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-custom mb-4 text-charcoal">Viaggio di Nozze</h2>
                    <p className="text-charcoal-light mb-8 max-w-2xl mx-auto">
                        Il giorno dopo il nostro Matrimonio partiremo per una meta a dir poco esotica: Zanzibar!
                        L’importante è che non ci siano le onde da surfare!! (Franci)
                        Scherziamo, un po’ di onde ci sono, vabbè! 🌊
                        Ci attendono giornate all’insegna dell’esplorazione tra acque cristalline e foreste tropicali, alla
                        scoperta di animali rari e sapori inediti. Non ci faremo mancare momenti di meritato relax, e
                        torneremo arricchiti da una cultura che ci affascina molto!<br />Se desiderate accompagnarci simbolicamente in questo viaggio, potete contribuire effettuando un
                        bonifico all’IBAN qui sotto. Grazie, davvero!! 🏖
                    </p>
                    <div className="bg-cream p-4 rounded-md inline-block text-center">
                        <p className="font-medium">Intestatari: Antonio Scaglioni</p>
                        <p>🏖 Iban: IT12O0306911510100000064140</p>
                        <p>Causale: Regalo di nozze + [Vostro Nome]</p>
                    </div>

                </motion.div>
            </div>
            <InfiniteCarousel variant="2" imagesArray={myVariant2Images} />

        </section>
    )
}
