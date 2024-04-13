import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./TestPage.css";
import Profile from "./Profile";
import BreadCrumb from "./BreadCrumb";
import TestTypeSelect from "./TestTypeSelect";
import Results from "./Results";
import Test from "./Test";

const navItems = [
  { title: "آزمون", id: "test" },
  { title: "اطلاعات آزمودنی", id: "profile" },
  { title: "نوع آزمون", id: "type" },
  { title: "آزمون اصلی", id: "main-test" },
  { title: "آزمون نمونه", id: "sample-test" },
  ,
  { title: "نتایج", id: "results" },
];
function TestPage({ profile, setProfile }) {
  return (
    <div className="TestPage">
      <Routes></Routes>
    </div>
  );
}

export default TestPage;
