import React, { useState, useEffect } from "react";
import { Menu } from "antd";
import "./nav.scss";
import NJSLogo from "../../assets/NJSLogo";

const Nav = ({ navItems, inPaintMode, color }) => {
  const [hover, setHover] = useState(null);

  return (
    <>
      {hover ? (
        <Menu
          style={{ zIndex: 999 }}
          className={color === "#403121" ? "menu ant-menu-sh" : "menu"}
          mode="horizontal"
        >
          {navItems.map((i) => {
            return (
              <Menu.Item
                onClick={() => (window.location.pathname = i.path)}
                className="item"
                onMouseEnter={(e) => setHover(e.key)}
                onMouseLeave={() => setHover(null)}
                key={i.key}
                style={{
                  backgroundColor: "rgba(210, 105, 30, 0) !important",
                  height: i.item === "logo" && "130px",
                  position: i.item === "logo" && "absolute",
                  left: i.item === "logo" && "14%",
                  top: i.item === "logo" && "70px",
                  color: hover
                    ? parseInt(hover) === i.key
                      ? "#C6B09A"
                      : "#403121"
                    : color
                    ? color
                    : "#403121",
                }}
              >
                {i.item === "logo" ? (
                  <NJSLogo
                    color={color}
                    onMouseEnter={(e) => setHover(e.key)}
                  />
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
          className={color === "#403121" ? "menu ant-menu-sh" : "menu"}
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
                    : color
                    ? color
                    : "#403121",
                }}
              >
                {i.item === "logo" ? (
                  <NJSLogo
                    color={color}
                    onMouseEnter={(e) => setHover(e.key)}
                  />
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
