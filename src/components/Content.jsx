import React from 'react'
import ClientImages from './ClientImages'

const Content = () => {
  return (
    
    <div className='flex justify-end flex-col'>
        <div className='text-7xl font-bold'><span className='block'>Make</span>remote work </div>
        <div className='text-base content-text mt-[65px] leading-6'>Get your team in sync, no matter your location.<br/>
        Streamline process, create team rituals ,and <br/>
        watch productivity soar</div>
        <button className=' rounded-lg bg-black font-bold text-white text-center w-[160px] mt-[50px] h-[60px] px-[30px] py-[20px]'>Learn more</button>
        <ClientImages/>
    </div>
  
  )
}

export default Content