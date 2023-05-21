import React from 'react'
import NavBar from '../components/NavBar'
import MainSection from '../components/MainSection'
import { useWidthContext } from '../context/WidthContext'

const LandingPage = () => {
  const {isMenuOpen}=useWidthContext()
  console.log(isMenuOpen)

  return (
    <div className={isMenuOpen?"bg-[rgba(0,0,0,0.6)]":''}>
    <NavBar/>
    <MainSection/>
    </div>
    
  )
}

export default LandingPage