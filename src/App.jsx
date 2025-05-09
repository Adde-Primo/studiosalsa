import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './App.css'
import logo from './assets/logo-liggande.png'

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    })

    const raf = (time) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
    AOS.init({ duration: 1000 })

    return () => lenis.destroy()
  }, [])

  return (
    <>
      <header className="hero">
        <img src={logo} alt="Studio Salsa logo" className="logo" />
        <h1>¡Bienvenido a Studio Salsa!</h1>
        <p>Clases de Salsa y Bachata en Estocolmo</p>
        <button onClick={() => document.getElementById('courses').scrollIntoView({ behavior: 'smooth' })}>
          Ver cursos
        </button>
      </header>

      <section className="section intro" data-aos="fade-up">
        <h2>Descubre el ritmo</h2>
        <p>
          En Studio Salsa aprenderás los pasos auténticos de Salsa Cubana y Bachata Dominicana,
          guiado por instructores apasionados.
        </p>
      </section>

      <section id="courses" className="section courses" data-aos="fade-up">
        <h2>Nuestros Cursos</h2>
        <div className="cards">
          <div className="card" data-aos="zoom-in">
            <h3>Salsa Principiantes</h3>
            <p>Aprende desde cero con pasos básicos, ritmo y diversión.</p>
          </div>
          <div className="card" data-aos="zoom-in" data-aos-delay="100">
            <h3>Bachata Intermedio</h3>
            <p>Conecta con tu pareja y mejora tu estilo con técnica y musicalidad.</p>
          </div>
          <div className="card" data-aos="zoom-in" data-aos-delay="200">
            <h3>Clases Privadas</h3>
            <p>Enfócate en tus objetivos con clases 100% personalizadas.</p>
          </div>
        </div>
      </section>

      <footer className="section footer" data-aos="fade-up">
        <p>© 2025 Studio Salsa – Todos los derechos reservados</p>
      </footer>
    </>
  )
}

export default App