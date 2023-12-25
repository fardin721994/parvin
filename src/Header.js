import "./Header.css";
import { NavLink } from "react-router-dom";
const welcomeText = "به آزمون تشخیص" + "\n" + "خوش آمدید";
function Header() {
  return (
    <div className="Header">
      <div className="welcome">
        <h2>
          به آزمون
          <br />
          <span> بازشناسی هیجان</span>
          <br />
          خوش آمدید
        </h2>

        <NavLink to="./testpage">ورود به آزمون</NavLink>
      </div>
      <img src={require("./icons/header.jpg")} />
    </div>
  );
}
export default Header;
