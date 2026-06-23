import React, { useState } from 'react'
import { FaEnvelope, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa'
import './Contacto.css'

function Contacto() {
  const [form, setForm] = useState({ nombre: '', email: '', asunto: '', mensaje: '' })
  const [enviado, setEnviado] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setEnviado(true)
    setForm({ nombre: '', email: '', asunto: '', mensaje: '' })
    setTimeout(() => setEnviado(false), 5000)
  }

  return (
    <section className="contacto section" id="contacto">
      <div className="container">
        <div className="contacto__inner">

          <div className="contacto__info">
            <span className="eyebrow">✦ Hablemos</span>
            <h2>Lista para tu próxima aventura?</h2>
            <p>
              Escríbeme para colaboraciones, asesorías personalizadas
              o simplemente para contarme a qué destino sueñas viajar.
              Respondo a todos los mensajes.
            </p>
            <div className="contacto__details">
              <div className="contacto__detail">
                <div className="contacto__detail-icon">
                  <FaEnvelope />
                </div>
                <div>
                  <strong>Email</strong><br />
                  <a href="mailto:viajaconluz88@gmail.com">viajaconluz88@gmail.com</a>
                </div>
              </div>
              <div className="contacto__detail">
                <div className="contacto__detail-icon">
                  <FaInstagram />
                </div>
                <div>
                  <strong>Instagram</strong><br />
                  <a href="https://www.instagram.com/viajaconluz88" target="_blank" rel="noopener noreferrer">@viajaconluz88</a>
                </div>
              </div>
              <div className="contacto__detail">
                <div className="contacto__detail-icon">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <strong>Base</strong><br />
                  <span>Madrid, España</span>
                </div>
              </div>
            </div>
          </div>

          <div className="contacto__form-wrap">
            <form className="contacto__form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="nombre"
                placeholder="Tu nombre completo"
                value={form.nombre}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Tu email"
                value={form.email}
                onChange={handleChange}
                required
              />
              <select name="asunto" value={form.asunto} onChange={handleChange} required>
                <option value="" disabled>Motivo del mensaje</option>
                <option value="asesoria">Quiero contratar una asesoría</option>
                <option value="colaboracion">Propuesta de colaboración</option>
                <option value="guia">Información sobre guías</option>
                <option value="otro">Otro</option>
              </select>
              <textarea
                name="mensaje"
                placeholder="Cuéntame tu aventura soñada..."
                value={form.mensaje}
                onChange={handleChange}
                required
              />
              <button type="submit" className="btn btn-gold">
                Enviar mensaje ✈
              </button>
            </form>
            <div className={enviado ? 'contacto__success visible' : 'contacto__success'}>
              ✓ Mensaje enviado! Te respondo en menos de 24h.
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contacto