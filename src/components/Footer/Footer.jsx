import React from 'react'
import { FaInstagram, FaTiktok } from 'react-icons/fa'
import './Footer.css'
import logo from '../../assets/logo.jpeg'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">

          <div className="footer__brand">
            <img src={logo} alt="Viaja con Luz" />
            <p>
              Transformando la forma de viajar con rutas inteligentes,
              experiencias auténticas y una comunidad de viajeros apasionados.
            </p>
            <div className="footer__socials">
              <a href="https://www.instagram.com/viajaconluz88" target="_blank" rel="noopener noreferrer" className="footer__social">
                <FaInstagram size={18} />
              </a>
              <a href="https://www.tiktok.com/@viajaconluz" target="_blank" rel="noopener noreferrer" className="footer__social">
                <FaTiktok size={16} />
              </a>
            </div>
          </div>

          <div className="footer__col">
            <h4>Destinos</h4>
            <ul>
              <li><a href="#destinos">Grecia</a></li>
              <li><a href="#destinos">Italia</a></li>
              <li><a href="#destinos">Francia</a></li>
              <li><a href="#destinos">Ver todos</a></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Servicios</h4>
            <ul>
              <li><a href="#guias">Guías de viaje</a></li>
              <li><a href="#asesorias">Asesorías</a></li>
              <li><a href="#gratis">Recursos gratis</a></li>
              <li><a href="#blog">Blog</a></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Contacto</h4>
            <ul>
              <li><a href="#contacto">Escribirme</a></li>
              <li><a href="mailto:viajaconluz88@gmail.com">viajaconluz88@gmail.com</a></li>
              <li><a href="https://www.instagram.com/viajaconluz88" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://www.tiktok.com/@viajaconluz_88" target="_blank" rel="noopener noreferrer">TikTok</a></li>
            </ul>
          </div>

        </div>

        <div className="footer__bottom">
          <span>© {year} Viaja con Luz. Todos los derechos reservados.</span>
          <span>Hecho con ♥ y muchos pasaportes sellados</span>
        </div>

      </div>
    </footer>
  )
}

export default Footer