import React, { useState } from "react";
import "./miniNav.scss";

const MiniNav = ({ navItems, color }) => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <>
      <div
        className={navOpen ? " active button_container" : "button_container"}
        onClick={() => setNavOpen(!navOpen)}
      >
        <span
          style={{
            backgroundColor: navOpen ? null : color ? "white" : "black",
          }}
          className="top"
        ></span>
        <span
          style={{
            backgroundColor: navOpen ? null : color ? "white" : "black",
          }}
          className="middle"
        ></span>
        <span
          style={{
            backgroundColor: navOpen ? null : color ? "white" : "black",
          }}
          className="bottom"
        ></span>
      </div>
      <div className={navOpen ? "overlay open" : "overlay"}>
        <nav className="overlay-menu">
          <ul>
            {navItems.map((i) =>
              i.item === "logo" ? null : (
                <li key={i.key}>
                  <a
                    onClick={() => (window.location.pathname = i.path)}
                    className="mini-item"
                  >
                    {i.item}
                  </a>
                </li>
              )
            )}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default MiniNav;
