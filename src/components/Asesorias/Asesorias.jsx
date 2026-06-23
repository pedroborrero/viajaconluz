import React from 'react'
import './Asesorias.css'

const planes = [
  {
    id: 1,
    icon: '🗺',
    nombre: 'Ruta Inteligente',
    desc: 'Plan basico optimizado.',
    precio: '69 EUR',
    featured: false,
    includes: ['Itinerario personalizado', 'Mapa descargable', '1 revision'],
  },
  {
    id: 2,
    icon: '✈',
    nombre: 'Viaje Completo',
    desc: 'Planificacion total de principio a fin.',
    precio: '129 EUR',
    featured: true,
    includes: ['Todo del plan basico', 'Busqueda de vuelos', 'Pack restaurantes', '2 revisiones'],
  },
  {
    id: 3,
    icon: '💎',
    nombre: 'Experiencia VIP',
    desc: 'Todo incluido mas videollamada.',
    precio: '199 EUR',
    featured: false,
    includes: ['Todo del plan completo', 'Videollamada 1h', 'Soporte WhatsApp', 'Revisiones ilimitadas'],
  },
]

function Asesorias() {
  return (
    <section className="asesorias section" id="asesorias">
      <div className="container">
        <div className="asesorias__header">
          <span className="eyebrow">Asesorias Premium</span>
          <h2>Tu viaje, diseñado contigo</h2>
          <p>Diseño tu proximo viaje paso a paso.</p>
        </div>
        <div className="asesorias__grid">
          {planes.map((p) => (
            <div key={p.id} className={p.featured ? 'asesoria-card asesoria-card--featured' : 'asesoria-card'}>
              {p.featured && <span className="asesoria-card__badge">Mas popular</span>}
              <div className="asesoria-card__icon">{p.icon}</div>
              <h3 className="asesoria-card__name">{p.nombre}</h3>
              <p className="asesoria-card__desc">{p.desc}</p>
              <div className="asesoria-card__price">{p.precio}</div>
              <ul className="asesoria-card__includes">
                {p.includes.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <a href="#contacto" className={p.featured ? 'btn btn-gold' : 'btn btn-outline'}>
                Reservar
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Asesorias