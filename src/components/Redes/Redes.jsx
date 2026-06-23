import React from 'react'
import { FaInstagram, FaTiktok } from 'react-icons/fa'
import './Redes.css'

const feedFotos = [
  'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=400&q=80',
  'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=400&q=80',
  'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&q=80',
  'https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=400&q=80',
  'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=400&q=80',
  'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=400&q=80',
  'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=400&q=80',
  'https://images.unsplash.com/photo-1543158181-e6f9f6712055?w=400&q=80',
  'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=400&q=80',
]

function Redes() {
  return (
    <section className="redes section" id="redes">
      <div className="container">
        <div className="redes__inner">
          <div className="redes__content">
            <span className="eyebrow">✦ Sígueme</span>
            <h2>Viaja conmigo cada día</h2>
            <p>Inspiración diaria, tips en tiempo real, rutas y experiencias auténticas. Únete a la comunidad de viajeros inteligentes.</p>
            <div className="redes__links">
              <a href="https://www.instagram.com/viajaconluz88/" target="_blank" rel="noopener noreferrer" className="red-link">
                <div className="red-link__icon red-link__icon--ig">
                  <FaInstagram size={24} color="white" />
                </div>
                <div className="red-link__info">
                  <strong>@viajaconluz88</strong>
                  <small>Instagram · Fotos y Stories</small>
                </div>
                <span className="red-link__arrow">→</span>
              </a>
              <a href="https://www.tiktok.com/@viajaconluz_88" target="_blank" rel="noopener noreferrer" className="red-link">
                <div className="red-link__icon red-link__icon--tt">
                  <FaTiktok size={22} color="white" />
                </div>
                <div className="red-link__info">
                  <strong>@viajaconluz</strong>
                  <small>TikTok · Reels y Videos</small>
                </div>
                <span className="red-link__arrow">→</span>
              </a>
            </div>
          </div>
          <div className="redes__feed">
            {feedFotos.map((src, i) => (
              <div className="feed-item" key={i}>
                <img src={src} alt={'Post ' + (i + 1)} loading="lazy" />
                <div className="feed-item__overlay">📸</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Redes