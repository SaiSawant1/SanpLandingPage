import React from "react";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CompanyList from "./CompanyList";
import FeaturesList from "./FeaturesList";
const NavList = () => {
  const [displayFeatureList, setDisplayFeatureList] = React.useState(false);
  const [displayCompanyList, setDisplayCompanyList] = React.useState(false);

  const toggleFeatureList = () => {
    setDisplayFeatureList(!displayFeatureList);
  };
  const toggleCompanyList = () => {
    setDisplayCompanyList(!displayCompanyList);
  };

  return (
    <ul className=" flex flex-col pt-[60px] pl-[20px] bg-white  absolute z-10 right-0 bottom-0 top-0 left-[50%]  text-white">
      <li
        onClick={toggleFeatureList}
        className="mr-[30px] mb-[30px] relative cursor-pointer"
      >
        Features
        <FontAwesomeIcon
          className="ml-[7px]"
          fontSize={"12px"}
          icon={displayFeatureList ? faChevronUp : faChevronDown}
        />
        {displayFeatureList && <FeaturesList />}
      </li>
      <li
        onClick={toggleCompanyList}
        className="mr-[30px] mb-[30px] relative cursor-pointer"
      >
        Company
        <FontAwesomeIcon
          className="ml-[7px]"
          fontSize={"12px"}
          icon={displayCompanyList ? faChevronUp : faChevronDown}
        />
        {displayCompanyList && <CompanyList />}
      </li>
      <li className="mr-[30px] mb-[30px] cursor-pointer">careers</li>
      <li className="cursor-pointer mb-[30px]">About</li>
    </ul>
  );
};

export default NavList;