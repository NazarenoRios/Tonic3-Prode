import React from 'react'

import NavBar2 from '../components/Navbar/NavBar2'
import Banner from '../components/Homepage/Banner'
import Fixture from '../components/Homepage/Fixture.tsx'
import PrizePodium from '../components/Homepage/PrizePodium'
import Footer from '../components/Footer/Footer'

function Homepage() {
  return (
    <>  
        <NavBar2/>
        <Banner/>
        <Fixture/>
        <PrizePodium/>
        <Footer/>
    </>
  )
}

export default Homepage