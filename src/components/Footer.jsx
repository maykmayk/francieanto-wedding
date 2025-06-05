import { FaHeart, FaInstagram, FaFacebook } from 'react-icons/fa'
const Footer = () => {
  return (
    <footer className="bg-sage text-white py-12">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="font-custom text-3xl mb-2">Francesca & Antonio</h2>
          <p className="text-cream text-opacity-80 font-light">4 Ottobre 2025</p>
        </div>
        
        <div className="flex justify-center space-x-6 mb-8">
          <a href="#" className="text-white hover:text-cream transition-colors duration-300">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="text-white hover:text-cream transition-colors duration-300">
            <FaFacebook size={24} />
          </a>
        </div>
        
        {/* <div className="max-w-md mx-auto mb-8">
          <nav>
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
              <li>
                <Link 
                  to="hero" 
                  spy={true} 
                  smooth={true} 
                  offset={-70} 
                  duration={500}
                  className="text-cream text-opacity-90 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="about" 
                  spy={true} 
                  smooth={true} 
                  offset={-70} 
                  duration={500}
                  className="text-cream text-opacity-90 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  La Nostra Storia
                </Link>
              </li>
              <li>
                <Link 
                  to="timeline" 
                  spy={true} 
                  smooth={true} 
                  offset={-70} 
                  duration={500}
                  className="text-cream text-opacity-90 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  Programma
                </Link>
              </li>
              <li>
                <Link 
                  to="venue" 
                  spy={true} 
                  smooth={true} 
                  offset={-70} 
                  duration={500}
                  className="text-cream text-opacity-90 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  Location
                </Link>
              </li>
              <li>
                <Link 
                  to="rsvp" 
                  spy={true} 
                  smooth={true} 
                  offset={-70} 
                  duration={500}
                  className="text-cream text-opacity-90 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  RSVP
                </Link>
              </li>
            </ul>
          </nav>
        </div> */}
        
        <div className="text-center text-sm text-cream text-opacity-70">
          <p className="flex items-center justify-center">
            Creato con <FaHeart className="mx-1 text-red-400" /> da Mike
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer