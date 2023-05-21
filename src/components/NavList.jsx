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
    <ul className=" flex flex-grow">
      <li
        onClick={toggleFeatureList}
        className="mr-[30px] relative cursor-pointer"
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
        className="mr-[30px] relative cursor-pointer"
      >
        Company
        <FontAwesomeIcon
          className="ml-[7px]"
          fontSize={"12px"}
          icon={displayCompanyList ? faChevronUp : faChevronDown}
        />
        {displayCompanyList && <CompanyList />}
      </li>
      <li className="mr-[30px] cursor-pointer">careers</li>
      <li className="cursor-pointer">About</li>
    </ul>
  );
};

export default NavList;
