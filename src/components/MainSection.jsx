import React from 'react'
import Content from './Content'
import HeroImage from './HeroImage'
import { useWidthContext } from '../context/WidthContext'

const MainSection = () => {
    const {width}=useWidthContext()
  return (
    <main className={width>=768? 'flex justify-between mx-[170px]':' flex flex-col-reverse h-full '}>
        <Content/>
        <HeroImage />
    </main>
  )
}

export default MainSection