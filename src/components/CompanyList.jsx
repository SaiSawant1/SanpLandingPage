import React from 'react'
import { useWidthContext } from '../context/WidthContext'

const CompanyList = () => {
  const {width}=useWidthContext()
  const desktopStyles='w-[112px] flex flex-col justify-evenly items-center rounded-2xl absolute shadow-2xl h-[124px] top-[25px] right-0 bg-white'
  const mobileStyles=' bg-white justify-between mt-[10px] h-[100px] items-center flex flex-col'
  return (
    <ul className={width>=768?desktopStyles:mobileStyles}>
      <li>History</li>
      <li>Our Team</li>
      <li>Blog</li>
    </ul>
  )
}

export default CompanyList