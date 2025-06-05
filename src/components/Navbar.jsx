import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const navLinks = [
    { name: 'Cerimonia', target: 'ceremony' },
    { name: 'Ricevimento', target: 'ricevimento' },
    { name: 'La Nostra Storia', target: 'about' },
    { name: 'Lista Nozze', target: 'lista' },
    { name: 'Viaggio di Nozze', target: 'viaggio' },
    { name: 'RSVP', target: 'rsvp' }
  ]

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <motion.header
      className={`fixed w-full z-60 transition-all duration-300 ${scrolled ? 'scrolled py-4' : 'py-4 bg-transparent'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="hero"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="text-cream font-custom text-3xl cursor-pointer"
        >
          {/* F & A */}
          <img src="public/fea.png" alt="Francesca & Antonio" className="w-16" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.target}>
                <Link
                  to={link.target}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  activeClass="active"
                  className="nav-link"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-cream z-50"
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? 'Chiudi menu' : 'Apri menu'}
        >
          {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-sage flex items-center justify-center z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col space-y-6 text-center">
              {navLinks.map((link) => (
                <motion.li
                  key={link.target}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <Link
                    to={link.target}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={toggleMobileMenu}
                    className="text-cream text-2xl font-custom"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}

export default Navbar