import React from 'react'
import heroImg from '../images/image-hero-desktop.png'
import heroImgMob from "../images/image-hero-mobile.png"
import { useWidthContext } from '../context/WidthContext'
const HeroImage = () => {
    const {width}=useWidthContext()
  return (
    <div><img  className={width>=768?'w-[488px] object-fill h-[638px]':'object-fill h-[280px]'} src={width>=768?heroImg:heroImgMob} alt="" /></div>
  )
}

export default HeroImage