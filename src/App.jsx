import React from 'react'
import Navbar from './Component/Navbar'
import Banner from './Component/Banner'
import About from './Component/About'
import Reviews from './Component/Reviews'
import Projects from './Component/Projects'
import Services from './Component/Services'
import Contact from './Component/Contact'
import Certificates from './Component/Certificates'
import Skills from './Component/Skills'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <About/>
      <Skills/>
      <Reviews/>
      <Projects/>
      <Services/>
      <Certificates/>
      <Contact/>
    </div>
  )
}

export default App