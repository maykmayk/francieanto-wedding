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
        "/zanzibar/zanzibar_1.jpeg",
        "/zanzibar/zanzibar_2.jpeg",
        "/zanzibar/zanzibar_3.jpeg",
        "/zanzibar/zanzibar_4.jpeg",
        "/zanzibar/zanzibar_5.jpeg",
        "/zanzibar/zanzibar_6.jpeg",
        "/zanzibar/zanzibar_7.jpeg",
        "/zanzibar/zanzibar_8.jpeg",
        "/zanzibar/zanzibar_9.jpeg",
        "/zanzibar/zanzibar_10.jpeg",
        "/zanzibar/zanzibar_11.jpeg",
        "/zanzibar/zanzibar_12.jpeg"
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
