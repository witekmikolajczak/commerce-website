import React from "react";

import SmallNavbar from "./SmallNavbar";
import Wrapper from "../../assets/wrappers/Navbar/NavbarWrapper";
import NavLinks from "./NavLinks";
import UserIcon from "./UserIcon";

const Navbar = () => {
  return (
    <Wrapper>
      <SmallNavbar />
      <div className="nav-center">
        <NavLinks />
      </div>
      <UserIcon />
    </Wrapper>
  );
};

export default Navbar;
