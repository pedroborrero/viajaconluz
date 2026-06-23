import React, { useState, useEffect } from 'react'
import './Galeria.css'

const fotos = [
  { id: 1, src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80', alt: 'Playa', wide: true },
  { id: 2, src: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600&q=80', alt: 'Velero', wide: false },
  { id: 3, src: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=80', alt: 'Paris', wide: false },
  { id: 4, src: 'https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?w=600&q=80', alt: 'Montaña', wide: false },
  { id: 5, src: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=600&q=80', alt: 'Italia', wide: false },
  { id: 6, src: '/images/foto1.jpeg', alt: 'Viaje 1', wide: true }
]

function Galeria() {
  const [lightboxSrc, setLightboxSrc] = useState(null)

  const abrir = (src) => setLightboxSrc(src)
  const cerrar = () => setLightboxSrc(null)

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') cerrar() }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  useEffect(() => {
    document.body.style.overflow = lightboxSrc ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [lightboxSrc])

  return (
    <section className="galeria" id="galeria">
      <div className="container">

        <div className="galeria__header">
          <span className="eyebrow">✦ Galería</span>
          <h2>Momentos que inspiran</h2>
          <p>Imágenes reales de mis viajes. Haz clic para ampliar.</p>
        </div>

        <div className="galeria__grid">
          {fotos.map((f) => (
            <div
              key={f.id}
              className={f.wide ? 'galeria__item galeria__item--wide' : 'galeria__item'}
              onClick={() => abrir(f.src)}
            >
              <img src={f.src} alt={f.alt} loading="lazy" />
              <div className="galeria__item-overlay">🔍</div>
            </div>
          ))}
        </div>

      </div>

      <div
        className={lightboxSrc ? 'lightbox open' : 'lightbox'}
        onClick={cerrar}
      >
        <button className="lightbox__close" onClick={cerrar}>✕</button>
        {lightboxSrc && (
          <img
            className="lightbox__img"
            src={lightboxSrc}
            alt="Ampliada"
            onClick={(e) => e.stopPropagation()}
          />
        )}
      </div>

    </section>
  )
}

export default Galeria