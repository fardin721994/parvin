import React from "react";
import "./App.css";
import "./fonts/Vazirmatn-Regular.ttf";
import { Routes, Route, Navigate } from "react-router-dom";

import NavBar from "./NavBar";
import MainPage from "./MainPage";
import AboutTest from "./AboutTest";
import AboutUs from "./AboutUs";
import DataList from "./DataList";
import TestRoutes from "./TestRoutes";
import TestSteps from "./TestSteps";
import Arrows from "./Arrows";
import ArrowTest from "./ArrowTest";
import Test from "./Test";
import DataListItem from "./DataListItem";
import DataRoutes from "./DataRoutes";
import Login from "./Login";

////////////
function App() {
  return (
    <div className="App" dir="rtl">
      <NavBar />
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="test/*" element={<TestRoutes />} />
        <Route path="about-test" element={<AboutTest />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="login" element={<Login />} />
        <Route path="data/*" element={<DataRoutes />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
