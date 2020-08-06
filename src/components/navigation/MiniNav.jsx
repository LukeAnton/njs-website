import React, { useState } from "react";
import "./miniNav.scss";

const MiniNav = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <>
      <div
        className={navOpen ? " active button_container" : "button_container"}
        onClick={() => setNavOpen(!navOpen)}
      >
        <span className="top"></span>
        <span className="middle"></span>
        <span className="bottom"></span>
      </div>
      <div className={navOpen ? "overlay open" : "overlay"}>
        <nav className="overlay-menu">
          <ul>
            <li>{/* <a href="#">Something</a> */}</li>
            <li>{/* <a href="#">Something</a> */}</li>
            <li>{/* <a href="#">Something</a> */}</li>
            <li>{/* <a href="#">Something</a> */}</li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default MiniNav;
