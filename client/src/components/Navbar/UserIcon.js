import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
const UserIcon = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="user-icon">
      <CgProfile onClick={() => setShow(!show)} />
      {show && <div className="dropdown">logout</div>}
    </div>
  );
};

export default UserIcon;
