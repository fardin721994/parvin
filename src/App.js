import "./App.css";
import "./fonts/Vazirmatn-Regular.ttf";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./NavBar";
import MainPage from "./MainPage";
import Test from "./Test";
import AboutTest from "./AboutTest";
import AboutUs from "./AboutUs";
import TestPage from "./TestPage";
import { useState } from "react";

const initialProfileData = {
  firstName: "",
  lastName: "",
  age: "",
  sex: "",
  groupCode: "",
  caseCode: "",
};
function App() {
  const [profile, setProfile] = useState(initialProfileData);

  return (
    <div className="App" dir="rtl">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route index element={<MainPage />} />
          <Route
            path="testpage"
            element={<TestPage profile={profile} setProfile={setProfile} />}
          />
          <Route path="test/:type" element={<Test profile={profile} />} />
          <Route path="about-test" element={<AboutTest />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="*" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
