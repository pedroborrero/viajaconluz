import React from 'react'
import './Destinos.css'

const destinos = [
  {
    id: 1,
    nombre: 'Grecia',
    desc: 'Santorini, Mikonos & el Golfo Sarónico',
    tag: 'Europa',
    img: '/images/grecia.jpeg',
  },
  {
    id: 2,
    nombre: 'Italia',
    desc: 'Costa Amalfitana, Roma & Cerdeña',
    tag: 'Europa',
    img: '/images/italia.jpeg',
  },
  {
    id: 3,
    nombre: 'Francia',
    desc: 'París, Costa Azul & Provenza',
    tag: 'Europa',
    img: '/images/paris.jpeg',
  },
]

function Destinos() {
  return (
    <section className="destinos section" id="destinos">
      <div className="container">

        <div className="destinos__header">
          <span className="eyebrow">✦ Explorar</span>
          <h2>Destinos que enamoran</h2>
          <p>
            Lugares cuidadosamente seleccionados por sus experiencias
            auténticas, fotogenia y valor real para el viajero inteligente.
          </p>
        </div>

        <div className="destinos__grid">
          {destinos.map((d) => (
            <div className="destino-card" key={d.id}>
              <img
                className="destino-card__img"
                src={d.img}
                alt={d.nombre}
                loading="lazy"
              />
              <div className="destino-card__overlay" />
              <div className="destino-card__info">
                <span className="destino-card__tag">{d.tag}</span>
                <div className="destino-card__name">{d.nombre}</div>
                <div className="destino-card__desc">{d.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="destinos__cta">
          <a href="#guias" className="btn btn-outline">
            Ver todas las guías →
          </a>
        </div>

      </div>
    </section>
  )
}

export default Destinos