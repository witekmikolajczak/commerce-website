import React, { useState } from "react";
import Wrapper from "../../assets/wrappers/Navbar/UserIconWrapper";
import { CgProfile } from "react-icons/cg";
import { FaCaretDown } from "react-icons/fa";

import { useAppContext } from "../../context/appContext";
const UserIcon = () => {
  const [show, setShow] = useState(false);
  const { logoutUser, user } = useAppContext();

  return (
    <Wrapper>
      <div className="btn-container">
        <button
          type="button"
          className="toggle-btn"
          onClick={() => setShow(!show)}
        >
          <CgProfile />
          <FaCaretDown />
        </button>
        {show && (
          <div className="dropdown ">
            <button type="button" className="toggle-btn" onClick={logoutUser}>
              {user ? "logout" : "register"}
            </button>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default UserIcon;
