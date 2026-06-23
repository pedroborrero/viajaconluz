import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import Destinos from './components/Destinos/Destinos.jsx'
import Guias from './components/Guias/Guias.jsx'
import Asesorias from './components/Asesorias/Asesorias.jsx'
import Gratis from './components/Gratis/Gratis.jsx'
import Galeria from './components/Galeria/Galeria.jsx'
import Blog from './components/Blog/Blog.jsx'
import Redes from './components/Redes/Redes.jsx'
import Contacto from './components/Contacto/Contacto.jsx'
import Footer from './components/Footer/Footer.jsx'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Destinos />
      <Guias />
      <Asesorias />
      <Gratis />
      <Galeria />
      <Blog />
      <Redes />
      <Contacto />
      <Footer />
    </div>
  )
}

export default App