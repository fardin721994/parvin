import React from "react";
import "./Arrows.scss";
function Arrows() {
  return (
    <section className="Arrows">
      <ul className="after-as-rhombus">
        <li>
          <a href="#1">Link</a>
        </li>
        <li>
          <a href="#2">Link</a>
        </li>
        <li className="active">
          <span className="a">Active</span>
        </li>
        <li>
          <a href="#4">Link</a>
        </li>
        <li>
          <span className="a">No link</span>
        </li>
      </ul>
    </section>
  );
}

export default Arrows;
