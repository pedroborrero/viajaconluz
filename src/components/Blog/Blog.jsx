import React from 'react'
import './Blog.css'

const articulos = [
  {
    id: 1,
    cat: 'Experiencias',
    titulo: 'Navegar por el Golfo Sarónico: lo que nadie te cuenta antes de subir a un velero',
    desc: 'Tres días a bordo del S/Y LIFE TIME me enseñaron más sobre Grecia que diez viajes en avión. Aquí va todo lo que aprendí.',
    img: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=900&q=80',
    fecha: '15 junio 2025',
    tiempo: '8 min',
  },
  {
    id: 2,
    cat: 'Tips y Ahorro',
    titulo: '5 trucos para conseguir vuelos baratos que nadie usa',
    desc: 'Herramientas y técnicas que uso para pagar siempre menos de lo que marca el buscador.',
    img: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=600&q=80',
    fecha: '2 mayo 2025',
    tiempo: '5 min',
  },
  {
    id: 3,
    cat: 'Alojamiento',
    titulo: 'Cerdeña: los mejores hoteles con relación calidad-precio real',
    desc: 'Después de recorrer La Pelosa y el norte de la isla, te cuento dónde dormir sin arruinarte.',
    img: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80',
    fecha: '18 abril 2025',
    tiempo: '6 min',
  },
]

function Blog() {
  return (
    <section className="blog section" id="blog">
      <div className="container">

        <div className="blog__header">
          <span className="eyebrow">✦ Blog</span>
          <h2>Aprende a viajar mejor</h2>
          <p>
            Consejos reales, estrategias y actualidad viajera para que
            tu próximo viaje sea el mejor de tu vida.
          </p>
        </div>

        <div className="blog__grid">
          {articulos.map((a) => (
            <article className="blog-card" key={a.id}>
              <div className="blog-card__img">
                <img src={a.img} alt={a.titulo} loading="lazy" />
              </div>
              <div className="blog-card__body">
                <span className="blog-card__cat">{a.cat}</span>
                <h3 className="blog-card__title">{a.titulo}</h3>
                <p className="blog-card__desc">{a.desc}</p>
                <span className="blog-card__meta">
                  {a.fecha} · {a.tiempo} lectura
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="blog__cta">
          <a href="#contacto" className="btn btn-outline">
            Leer más artículos →
          </a>
        </div>

      </div>
    </section>
  )
}

export default Blog