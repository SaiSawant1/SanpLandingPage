import React from 'react'
import Content from './Content'
import HeroImage from './HeroImage'

const MainSection = () => {
  return (
    <main className='flex justify-between mx-[170px]'>
        <Content/>
        <HeroImage />
    </main>
  )
}

export default MainSection