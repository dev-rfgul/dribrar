import React from 'react'
import Navbar from './Component/Navbar'
import Banner from './Component/Banner'
import About from './Component/About'
import Reviews from './Component/Reviews'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <About/>
      <Reviews/>
    </div>
  )
}

export default App