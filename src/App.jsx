import React from 'react'
import Navbar from './Component/Navbar'
import Banner from './Component/Banner'
import About from './Component/About'
import Reviews from './Component/Reviews'
import Projects from './Component/Projects'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <About/>
      <Reviews/>
      <Projects/>
    </div>
  )
}

export default App