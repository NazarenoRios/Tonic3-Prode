import React, { useEffect, useRef } from 'react'

import NavBar2 from '../components/Navbar/NavBar2'
import Banner from '../common/Banner/Banner'
import Fixture from '../components/Homepage/Fixture.tsx'
import PrizePodium from '../components/Homepage/PrizePodium'
import Footer from '../components/Footer/Footer'
import TutorialSection from '../components/Homepage/TutorialSection'
import axios from 'axios'
import useUnload from './UserPanel/test'
function Homepage() {
  /*
  useUnload(e=>{
    let token;
    e.preventDefault()
    const value = `; ${document.cookie}`;
    const parts = value.split(`; token=`);
    if (parts.length === 2)  token=parts.pop().split(';').shift()
    console.log(token)
     axios.post('http://localhost:3001/metrics',{token})
     .then(data=>{
       alert(data.data)
      
     })
  })
  */
  
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