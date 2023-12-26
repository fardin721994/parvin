import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

// const tabs = [
//   { title: "صفحه اصلی", id: "main", to: "/" },
//   { title: "آزمون", id: "test", to: "/test" },
//   { title: "درباره آزمون", id: "aboutTest", to: "/" },
//   { title: "درباره ما", id: "aboutUs", to: "/" },
// ];
const tabs = [
  { title: "صفحه اصلی", to: "/" },
  { title: "آزمون", to: "/testpage" },
  { title: "درباره آزمون", to: "/about-test" },
  { title: "درباره ما", to: "/about-us" },
];
function NavBar(props) {
  const [selectedTab, setSelectedTab] = useState("صفحه اصلی");
  const [showNav, setShowNav] = useState(false);
  const handleNavClick = (navTitle) => {
    setSelectedTab(navTitle);
    setShowNav(false);
  };
  const toggleShowNav = () => setShowNav((previousShowNav) => !previousShowNav);
  return (
    <div className="NavBar">
      <button className="menu-button" onClick={toggleShowNav}></button>
      <nav className={showNav ? "" : "hidden"} id="nav">
        <ul>
          {tabs.map(({ title, to }) => (
            <li
              key={title}
              // className={title === selectedTab ? "selected" : ""}
            >
              <NavLink to={to} onClick={() => handleNavClick(title)}>
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <NavLink
        to="/"
        className="logo"
        onClick={() => handleNavClick("صفحه اصلی")}
      ></NavLink>
    </div>
  );
}

export default NavBar;
