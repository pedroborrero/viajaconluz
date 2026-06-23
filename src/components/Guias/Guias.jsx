import React from 'react'
import './Guias.css'

const guias = [
  {
    id: 1,
    titulo: 'París en 4 días sin perder tiempo',
    desc: 'Descubre la Ciudad de la Luz con una ruta perfectamente trazada para aprovechar cada momento sin colas ni improvisación.',
    precio: '19€',
    popular: true,
    img: '/images/paris2.jpeg',
    includes: [
      'Ruta optimizada día a día',
      'Mapas interactivos descargables',
      'Restaurantes y cafés locales',
      'Tips de transporte y ahorro',
    ],
  },
  {
    id: 2,
    titulo: 'Londres inteligente',
    desc: 'La capital inglesa sin perder ni una libra de más. Todo lo que ver, hacer y comer en un itinerario eficiente y con encanto.',
    precio: '17€',
    popular: false,
    img: '/images/londres.jpeg',
    includes: [
      'Itinerario eficiente 5 días',
      'Transporte explicado paso a paso',
      'Experiencias clave sin colas',
      'Presupuesto real detallado',
    ],
  },
  {
    id: 3,
    titulo: 'Grecia: islas y veleros',
    desc: 'El Mediterráneo más auténtico desde cubierta. Guía completa del Golfo Sarónico con todo lo que nadie te cuenta en internet.',
    precio: '24€',
    popular: false,
    img: '/images/grecia2.jpeg',
    includes: [
      'Ruta velero Golfo Sarónico',
      'Puertos, calas y ancladeros',
      'Gastronomía local auténtica',
      'Fotos y spots secretos',
    ],
  },
]

function Guias() {
  return (
    <section className="guias section" id="guias">
      <div className="container">

        <div className="guias__header">
          <span className="eyebrow">✦ Guías Premium</span>
          <h2>Viajes diseñados para disfrutar</h2>
          <p>
            Rutas optimizadas, mapas, restaurantes y secretos locales
            que solo conocen quienes han estado ahí.
          </p>
        </div>

        <div className="guias__grid">
          {guias.map((g) => (
            <div className="guia-card" key={g.id}>
              <div className="guia-card__img">
                <img src={g.img} alt={g.titulo} loading="lazy" />
                <span className="guia-card__price">{g.precio}</span>
                {g.popular && (
                  <span className="guia-card__popular">⭐ Más vendida</span>
                )}
              </div>
              <div className="guia-card__body">
                <h3 className="guia-card__title">{g.titulo}</h3>
                <p className="guia-card__desc">{g.desc}</p>
                <ul className="guia-card__includes">
                  {g.includes.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <div className="guia-card__footer">
                  <div className="guia-card__footer-price">
                    {g.precio}
                    <small>Acceso inmediato</small>
                  </div>
                  <a href="#contacto" className="btn btn-gold">
                    Ver guía
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="guias__cta">
          <a href="#contacto" className="btn btn-dark">
            Pack Europa — 3 guías por 49€
          </a>
        </div>

      </div>
    </section>
  )
}

export default Guias