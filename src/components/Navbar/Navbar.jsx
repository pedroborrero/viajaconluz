import React, { useState, useEffect } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.jpeg'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = () => setMenuOpen(false)

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container navbar__inner">
          <a href="#hero">
            <img src={logo} alt="Viaja con Luz" className="navbar__logo" />
          </a>
          <div className="navbar__links">
            <a href="#destinos">Destinos</a>
            <a href="#guias">Guías</a>
            <a href="#asesorias">Asesorías</a>
            <a href="#blog">Blog</a>
            <a href="#redes">Redes</a>
            <a href="#contacto" className="btn btn-gold">Contáctame</a>
          </div>
          <button
            className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menú de navegación"
            aria-expanded={menuOpen}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      <div className={`navbar__mobile ${menuOpen ? 'open' : ''}`}>
        <a href="#destinos" onClick={handleLinkClick}>Destinos</a>
        <a href="#guias" onClick={handleLinkClick}>Guías</a>
        <a href="#asesorias" onClick={handleLinkClick}>Asesorías</a>
        <a href="#gratis" onClick={handleLinkClick}>Recursos Gratis</a>
        <a href="#blog" onClick={handleLinkClick}>Blog</a>
        <a href="#redes" onClick={handleLinkClick}>Redes</a>
        <a href="#contacto" onClick={handleLinkClick}>Contacto</a>
      </div>
    </>
  )
}

export default Navbar