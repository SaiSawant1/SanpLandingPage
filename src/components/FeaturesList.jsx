import React from 'react'
import listIcon from "../images/icon-todo.svg"
import calenderIcon from "../images/icon-calendar.svg"
import reminderIcon from "../images/icon-reminders.svg"
import PlanningIcon from "../images/icon-planning.svg"

const FeaturesList = () => {
  return (
    <ul className=' w-[150px] flex flex-col items-center justify-evenly h-[140px] rounded-2xl bg-white shadow-2xl absolute top-[25px] right-0'>
        <li className='flex'><img className='object-contain mx-2' src={listIcon} alt="" />Todo List</li>
        <li className='flex'><img className='object-contain mx-2' src={calenderIcon} alt="" />Calender</li>
        <li className='flex'><img className='object-contain mx-2' src={reminderIcon} alt="" />Reminder</li>
        <li className='flex'><img className='object-contain mx-2' src={PlanningIcon} alt="" />Planning</li>
    </ul>
  )
}

export default FeaturesList