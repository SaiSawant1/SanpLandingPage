import React from 'react'
import listIcon from "../images/icon-todo.svg"
import calenderIcon from "../images/icon-calendar.svg"
import reminderIcon from "../images/icon-reminders.svg"
import PlanningIcon from "../images/icon-planning.svg"
import { useWidthContext } from '../context/WidthContext'

const FeaturesList = () => {
  const {width}=useWidthContext()
  const desktopStyles='w-[150px] flex flex-col items-center justify-evenly h-[140px] rounded-2xl bg-white shadow-2xl absolute top-[25px] right-0'
  const mobileStyles=' bg-white justify-center items-center flex flex-col absolute top-0 bottom-0 left-[50%] right-0'
  return (
    <ul className={width>=768?desktopStyles:mobileStyles}>
        <li className='flex'><img className='object-contain mx-2' src={listIcon} alt="" />Todo List</li>
        <li className='flex'><img className='object-contain mx-2' src={calenderIcon} alt="" />Calender</li>
        <li className='flex'><img className='object-contain mx-2' src={reminderIcon} alt="" />Reminder</li>
        <li className='flex'><img className='object-contain mx-2' src={PlanningIcon} alt="" />Planning</li>
    </ul>
  )
}

export default FeaturesList