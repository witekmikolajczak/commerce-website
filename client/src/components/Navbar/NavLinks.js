import React from "react";
import { NavLink } from "react-router-dom";
import links from "../../utils/links";
import { FiSettings } from "react-icons/fi";
import { useAppContext } from "../../context/appContext";
const NavLinks = ({ toggleNavbar }) => {
  const { user } = useAppContext();
  return (
    <div className="nav-links">
      {links.map((link) => {
        const { text, path, id, icon } = link;
        return (
          <NavLink
            onClick={toggleNavbar}
            to={path}
            key={id}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        );
      })}
      {user && (
        <NavLink
          to="add-product"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          <span className="icon">{<FiSettings />}</span>
          Add Product
        </NavLink>
      )}
    </div>
  );
};

export default NavLinks;
