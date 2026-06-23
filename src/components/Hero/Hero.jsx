import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero__inner">

          <div className="hero__content">
            <span className="hero__eyebrow">✦ Viajes · Experiencias</span>
            <h1 className="hero__title">
              Viaja más.<br /><em>Vive mejor.</em><br />Sin estrés.
            </h1>
            <p className="hero__desc">
              Rutas optimizadas, guías premium y asesorías personalizadas
              para que cada viaje sea una experiencia inolvidable.
              Viajar bien no es suerte, es estrategia.
            </p>
            <div className="hero__btns">
              <a href="#guias" className="btn btn-gold">Ver guías de viaje</a>
              <a href="#gratis" className="btn btn-outline">Recursos gratis</a>
            </div>
            <div className="hero__stats">
              <div className="hero__stat">
                <span className="hero__stat-num">+21k</span>
                <span className="hero__stat-label">Viajeros</span>
              </div>
              <div className="hero__stat">
                <span className="hero__stat-num">40%</span>
                <span className="hero__stat-label">Ahorro medio</span>
              </div>
              <div className="hero__stat">
                <span className="hero__stat-num">40+</span>
                <span className="hero__stat-label">Destinos</span>
              </div>
            </div>
          </div>

          <div className="hero__image-wrap">
            <div className="hero__image-card">
              <img
                src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&q=80"
                alt="Luz viajando"
              />
            </div>
            <div className="hero__badge">
              <span>♥</span>
              Apasionada de los viajes auténticos
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero