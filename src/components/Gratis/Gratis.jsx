import React, { useState } from 'react'
import './Gratis.css'

function Gratis() {
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [enviado, setEnviado] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setEnviado(true)
    setNombre('')
    setEmail('')
    setTimeout(() => setEnviado(false), 5000)
  }

  return (
    <section className="gratis section" id="gratis">
      <div className="container">
        <div className="gratis__inner">

          <div className="gratis__content">
            <span className="eyebrow">✦ Gratis para ti</span>
            <h2>Tu kit de viaje inteligente</h2>
            <p>
              Herramientas reales que uso en cada viaje: checklists,
              mapas y mini guías para que no te olvides de nada
              ni cometas los errores de siempre.
            </p>
            <div className="gratis__features" aria-label="Contenido del kit gratuito">
              <div className="gratis__feature">
                <div className="gratis__feature-icon" aria-hidden="true">✓</div>
                <span>Checklists de equipaje por destino y temporada</span>
              </div>
              <div className="gratis__feature">
                <div className="gratis__feature-icon" aria-hidden="true">🗺</div>
                <span>Mapas interactivos de mis destinos favoritos</span>
              </div>
              <div className="gratis__feature">
                <div className="gratis__feature-icon" aria-hidden="true">📖</div>
                <span>Mini guías prácticas para empezar hoy</span>
              </div>
            </div>

            <form className="gratis__form" onSubmit={handleSubmit} noValidate>
              <label htmlFor="gratis-nombre" className="sr-only">Tu nombre</label>
              <input
                id="gratis-nombre"
                type="text"
                placeholder="Tu nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
                autoComplete="given-name"
              />
              <label htmlFor="gratis-email" className="sr-only">Tu email</label>
              <input
                id="gratis-email"
                type="email"
                placeholder="Tu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
              />
              <button type="submit" className="btn btn-gold">
                Descargar gratis
              </button>
              <p className="gratis__fine">
                Sin spam. Solo viajes, experiencias y rutas.
              </p>
            </form>

            <div
              className={enviado ? 'gratis__success visible' : 'gratis__success'}
              role="alert"
              aria-live="polite"
            >
              Genial! En breve recibes el kit en tu email.
            </div>
          </div>

          <div className="gratis__image" aria-hidden="true">
            <img
              src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=700&q=80"
              alt=""
              loading="lazy"
            />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Gratis