import React from 'react'
import Navbar from './Component/Navbar'
import Banner from './Component/Banner'
import About from './Component/About'
import Reviews from './Component/Reviews'
import Projects from './Component/Projects'
import Services from './Component/Services'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <About/>
      <Reviews/>
      <Projects/>
      <Services/>
    </div>
  )
}

export default App