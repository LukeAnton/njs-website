import React, { useState } from "react";
import { Menu } from "antd";
import "./nav.scss";
import NJSLogo from "../../assets/NJSLogo";

const Nav = ({ navItems, inPaintMode, mouseMoveAndDown }) => {
  const [hover, setHover] = useState(null);

  return (
    <>
      {hover ? (
        <Menu style={{ zIndex: 999 }} className="menu" mode="horizontal">
          {navItems.map((i) => {
            return (
              <Menu.Item
                onClick={() => console.log("navclick")}
                className="item"
                onMouseEnter={(e) => setHover(e.key)}
                onMouseLeave={() => setHover(null)}
                key={i.key}
                style={{
                  height: i.item === "logo" && "130px",
                  position: i.item === "logo" && "absolute",
                  left: i.item === "logo" && "14%",
                  top: i.item === "logo" && "70px",
                  color: hover
                    ? parseInt(hover) === i.key
                      ? "#C6B09A"
                      : "#403121"
                    : "white",
                }}
              >
                {i.item === "logo" ? (
                  <NJSLogo onMouseEnter={(e) => setHover(e.key)} />
                ) : (
                  i.item
                )}
              </Menu.Item>
            );
          })}
        </Menu>
      ) : (
        <Menu
          style={{ zIndex: inPaintMode ? null : 999 }}
          className="menu"
          mode="horizontal"
        >
          {navItems.map((i) => {
            return (
              <Menu.Item
                onClick={() => console.log("navclick")}
                className="item"
                onMouseEnter={(e) => setHover(e.key)}
                onMouseLeave={() => setHover(null)}
                key={i.key}
                style={{
                  height: i.item === "logo" && "130px",
                  position: i.item === "logo" && "absolute",
                  left: i.item === "logo" && "14%",
                  top: i.item === "logo" && "70px",
                  color: hover
                    ? parseInt(hover) === i.key
                      ? "#C6B09A"
                      : "#403121"
                    : "white",
                }}
              >
                {i.item === "logo" ? (
                  <NJSLogo onMouseEnter={(e) => setHover(e.key)} />
                ) : (
                  i.item
                )}
              </Menu.Item>
            );
          })}
        </Menu>
      )}
    </>
  );
};

export default Nav;
