import React from 'react'
import ClientImages from './ClientImages'
import { useWidthContext } from '../context/WidthContext'

const Content = () => {
    const {width}=useWidthContext()
  return (
    
    <div className={width>=768?'flex justify-end flex-col':'flex flex-col text-center items-center '}>
        <div className={width>=768?'text-7xl font-bold':'text-4xl mt-[50px] font-bold'}><span className={width>=768?'block':'inline'}>Make </span>remote work </div>
        <div className='text-base content-text mt-[65px] leading-6'>Get your team in sync, no matter your location.<br/>
        Streamline process, create team rituals ,and <br/>
        watch productivity soar</div>
        <button className=' rounded-lg bg-black font-bold text-white text-center w-[160px] mt-[50px] h-[60px] px-[30px] py-[20px]'>Learn more</button>
        <ClientImages/>
    </div>
  
  )
}

export default Content