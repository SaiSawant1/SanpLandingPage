
import React from 'react'
import MobNavList from './MobNavList'
import { useWidthContext } from '../context/WidthContext'
import menu from "../images/icon-menu.svg"
import menuClose from "../images/icon-close-menu.svg"
import NavList from './NavList'

const NavBar = () => {
  const {width,isMenuOpen,setIsMenuOpen}=useWidthContext()
  
 const toggleMenu=()=>{
   setIsMenuOpen((prev)=>!prev)
 }
 React.useEffect(()=>{
  if(width>768){
    setIsMenuOpen(false)
  }
 },[setIsMenuOpen,width])
  const buttons=<div className='flex'>
  <button >Login</button>
  <button  className='w-[100px] ml-[30px] border h-[40px] border-black rounded-[10px]'>register</button>
</div>
  return (
    <nav className={width>768?'w-full px-[30px] py-[40px] h-[82px] flex  items-center':'w-full px-[15px] py-[20px] h-[82px] flex justify-between items-center'}>        <div className='font-bold mr-[60px] text-4xl flex '>snap</div>
        {width>=768&&<NavList/>}
        {width>=768&&buttons}
        {isMenuOpen&&<MobNavList/>}
        {!(width>=768)&&<img onClick={toggleMenu} src={isMenuOpen?menuClose:menu} alt="" className='cursor-pointer relative z-10'/>}
    </nav>
  )
}

export default NavBar