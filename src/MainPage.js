import "./MainPage.css";
import { NavLink } from "react-router-dom";
const welcomeText = "به آزمون تشخیص" + "\n" + "خوش آمدید";
function MainPage() {
  return (
    <div className="MainPage">
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
      <img src={require("./icons/mainpage.jpg")} />
    </div>
  );
}
export default MainPage;
