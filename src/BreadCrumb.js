import React from "react";
import "./BreadCrumb.scss";
import { NavLink } from "react-router-dom";

function BreadCrumb({ navOptions, activeNav, setActiveNav }) {
  const activeNavIndex = navOptions.findIndex(
    (option) => option.id === activeNav
  );
  const navLinkItems = navOptions.slice(0, activeNavIndex + 1);
  return (
    <ul className="BreadCrumb">
      {navLinkItems.map((item) => (
        <li onClick={() => setActiveNav(item.id)} key={item.id}>
          <NavLink to={item.id}>{item.title}</NavLink>
        </li>
      ))}
    </ul>
  );
}

export default BreadCrumb;
