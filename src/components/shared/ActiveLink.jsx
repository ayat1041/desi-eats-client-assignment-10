import React from "react";
import { NavLink } from "react-router-dom";
const ActiveLink = ({ to, title }) => {
  return (
    <NavLink
      to={to}
      className={
        ({ isActive }) => isActive ? "text-lg font-medium text-black" : "text-lg font-medium text-yellow-100"
      }>
      {title}
    </NavLink>
  );
};

export default ActiveLink;
