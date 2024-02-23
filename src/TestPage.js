import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./TestPage.css";
import Profile from "./Profile";
function TestPage({ profile, setProfile }) {
  return (
    <div className="TestPage">
      <div className="wrapper">
        <Profile profile={profile} setProfile={setProfile} />
        <section className="sampleTest">
          <p>
            هدف از آزمون نمونه، آشنایی کاربر با آزمون اصلی است. در آزمون نمونه ۶
            عکس به آزمودنی نمایش داده می شود و او باید برای هر عکس، گزینه ای را
            که بیانگر احساس شخص است انتخاب نماید.
          </p>
          <NavLink to="/test/sample">شروع آزمون نمونه</NavLink>
        </section>
        <section className="mainTest">
          <p>
            در این آزمون ۶۰ عکس به آزمودنی نمایش داده می شود و او باید برای هر
            عکس، گزینه ای را که بیانگر احساس شخص است انتخاب نماید.
          </p>
          <NavLink to="/test/main">شروع آزمون اصلی</NavLink>
        </section>
      </div>
    </div>
  );
}

export default TestPage;
