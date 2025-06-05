import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Citazione() {


    return (
        <section id="Citazione" className="section bg-sage bg-opacity-10">
            <div className="container -py-12 text-center text-xl">
                <p className="text-charcoal-light mb-8 max-w-2xl mx-auto italic">
                    Questo è il paradosso dell'amore
                    fra un uomo e una donna:
                    due bisogni infiniti di essere amati si incontrano con due fragili e limitate capacità di amare.
                    -
                    E solo nell'orizzonte di un amore più grande non si consumano nella pretesa e non si rassegnano,
                    ma camminano insieme verso una pienezza della quale l'altro è segno.
                </p>
                <p className="text-charcoal-light max-w-2xl mx-auto italic">

                    Rainer Maria Rilke
                </p>
            </div>
        </section>
    )
}
