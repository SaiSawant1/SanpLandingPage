import React from "react";
import listIcon from "../images/icon-todo.svg";
import calenderIcon from "../images/icon-calendar.svg";
import reminderIcon from "../images/icon-reminders.svg";
import PlanningIcon from "../images/icon-planning.svg";
import { useWidthContext } from "../context/WidthContext";
import { motion} from "framer-motion";
const itemVariants= {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};
const FeaturesList = () => {
  
  const { width } = useWidthContext();
  const desktopStyles =
    "w-[150px]  flex flex-col items-center justify-evenly h-[140px] rounded-2xl bg-white shadow-2xl absolute top-[25px] right-0";
  const mobileStyles =
    " bg-white justify-between h-[130px] items-center flex flex-col";
  return (

      <motion.ul
        variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "spring",
              bounce: 1,
              duration: 2,
              delayChildren: 10,
              staggerChildren: 0.05
            }
          },
          closed: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3
            }
          }
        }}
        className={width >= 768 ? desktopStyles : mobileStyles}
      >
        <motion.li  variants={itemVariants} className="flex">
          <img className="object-contain mx-2" src={listIcon} alt="" />
          Todo List
        </motion.li>
        <motion.li variants={itemVariants} className="flex">
          <img className="object-contain mx-2" src={calenderIcon} alt="" />
          Calender
        </motion.li>
        <motion.li variants={itemVariants} className="flex">
          <img className="object-contain mx-2" src={reminderIcon} alt="" />
          Reminder
        </motion.li>
        <motion.li variants={itemVariants} className="flex">
          <img className="object-contain mx-2" src={PlanningIcon} alt="" />
          Planning
        </motion.li>
      </motion.ul>
 
  );
};

export default FeaturesList;
