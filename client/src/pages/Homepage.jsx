import React from 'react'

import NavBar2 from '../components/Navbar/NavBar2'
import Banner from '../common/Banner/Banner'
import Fixture from '../components/Homepage/Fixture.tsx'
import PrizePodium from '../components/Homepage/PrizePodium'
import Footer from '../components/Footer/Footer'
import TutorialSection from '../components/Homepage/TutorialSection'

function Homepage() {
  return (
    <>  
        <NavBar2/>
        <Banner/>
        <Fixture/>
        <PrizePodium/>
        <TutorialSection/>
        <Footer/>
    </>
  )
}

export default Homepage