import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const tabs = [
  { title: "صفحه اصلی", to: "" },
  { title: "آزمون", to: "testpage" },
  { title: "درباره آزمون", to: "about-test" },
  { title: "درباره ما", to: "about-us" },
];
function NavBar() {
  const [showNav, setShowNav] = useState(false);

  const toggleShowNav = () => setShowNav((previousShowNav) => !previousShowNav);
  return (
    <div className="NavBar">
      <button className="menu-button" onClick={toggleShowNav}></button>
      <nav className={showNav ? "" : "hidden"} id="nav">
        <ul>
          {tabs.map(({ title, to }) => (
            <li key={title}>
              <NavLink to={to} onClick={() => setShowNav(false)}>
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <NavLink
        to=""
        className="logo"
        onClick={() => setShowNav(false)}
      ></NavLink>
    </div>
  );
}

export default NavBar;
