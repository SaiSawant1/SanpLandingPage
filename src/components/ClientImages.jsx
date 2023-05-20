import React from 'react'
import databiz from '../images/client-databiz.svg'
import audioPhile from '../images/client-audiophile.svg'
import meet from '../images/client-meet.svg'
import maker from '../images/client-maker.svg'

const ClientImages = () => {
  return (
    <div className='flex mt-[105px] h-[35px] justify-between '>
        <img  className='object-contain' src={databiz} alt="" /> 
        <img  className='object-contain' src={audioPhile} alt="" /> 
        <img  className='object-contain' src={meet} alt="" /> 
        <img  className='object-contain' src={maker} alt="" /> 

    </div>
  )
}

export default ClientImages