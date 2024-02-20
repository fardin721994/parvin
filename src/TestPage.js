import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./TestPage.css";
function TestPage({ name, setName }) {
  const handleInputChange = (event) => setName(event.target.value);
  return (
    <div className="TestPage">
      <div className="wrapper">
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
        <div className="name">
          <label htmlFor="name">نام آزموننده</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </div>
  );
}

export default TestPage;
