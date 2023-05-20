import { faChevronUp,faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import FeaturesList from './FeaturesList'
import CompanyList from './CompanyList'

const NavBar = () => {

  const [displayFeatureList,setDisplayFeatureList] = React.useState(false);
  const [displayCompanyList,setDisplayCompanyList] = React.useState(false);

  const toggleFeatureList=()=>{
    setDisplayFeatureList(!displayFeatureList)
  }
  const toggleCompanyList=()=>{
    setDisplayCompanyList(!displayCompanyList)
  }

  return (
    <nav className='w-full  px-[30px] py-[40px] h-[82px] flex  items-center'>
        <div className='font-bold mr-[60px] text-4xl flex '>snap</div>
        <ul className=' flex flex-grow'>
            <li onClick={toggleFeatureList} className='mr-[30px] relative cursor-pointer'>Features<FontAwesomeIcon className='ml-[7px]' fontSize={'12px'} icon={displayFeatureList?faChevronUp:faChevronDown} />{displayFeatureList&&<FeaturesList/>}</li>
            <li onClick={toggleCompanyList} className='mr-[30px] relative cursor-pointer'>Company<FontAwesomeIcon className='ml-[7px]' fontSize={'12px'} icon={displayCompanyList?faChevronUp:faChevronDown} />{displayCompanyList&&<CompanyList/>}</li>
            <li className='mr-[30px] cursor-pointer'>careers</li>
            <li className='cursor-pointer'>About</li>
        </ul>
        <div className='flex'>
            <button >Login</button>
            <button  className='w-[100px] ml-[30px] border h-[40px] border-black rounded-[10px]'>register</button>
        </div>
    </nav>
  )
}

export default NavBar