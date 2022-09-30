import React, { useEffect } from 'react'

import NavBar2 from '../components/Navbar/NavBar2'
import Banner from '../common/Banner/Banner'
import Fixture from '../components/Homepage/Fixture.tsx'
import PrizePodium from '../components/Homepage/PrizePodium'
import Footer from '../components/Footer/Footer'
import TutorialSection from '../components/Homepage/TutorialSection'
import { useDispatch } from 'react-redux'
import {  get_my_user } from '../state/user'

function Homepage() {
  const dispatch=useDispatch()
    useEffect(()=>{
      dispatch(get_my_user())
    },[])
    
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