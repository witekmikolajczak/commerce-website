import React from "react";
import NavLinks from "./NavLinks";
import Wrapper from "../../assets/wrappers/Navbar/SmallNavbar";
import { useAppContext } from "../../context/appContext";
import { HiMenuAlt2 } from "react-icons/hi";
const SmallNavbar = () => {
  const { showDropdown, toggleNavbar } = useAppContext();
  return (
    <Wrapper>
      <div className="icon" onClick={toggleNavbar}>
        <HiMenuAlt2 />
      </div>
      {showDropdown && (
        <div className="sidebar-container">
          <div className="content">
            <button className="close-btn" onClick={toggleNavbar}>
              X
            </button>
            <NavLinks toggleNavbar={toggleNavbar} />
          </div>
        </div>
      )}
    </Wrapper>
  );
};

export default SmallNavbar;
