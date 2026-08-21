import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Projects from './components/Projects'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <main>
        <About />
        <Experience />
        <Skills />
        <Education />
        <Certifications />
        <Projects />
      </main>
      <Footer />
    </>
  )
}

export default App
