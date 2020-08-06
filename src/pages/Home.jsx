import React, { useState, useEffect } from "react";
import CanvasDraw from "react-canvas-draw";
import Nav from "../components/navigation/Nav";
import ContactBlock from "../components/common/ContactBlock";

import "./home.scss";

const Home = () => {
  const [navColor, setNavColor] = useState("white");
  const [clearCanvas, setClearCanvas] = useState(null);
  const [inPaintMode, setInPainMode] = useState(false);
  const [activeCanvas, setActiveCanvas] = useState(false);
  const [mouseMoveAndDown, setMouseMoveAndDown] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setNavColor("#403121");
      if (window.scrollY > 710) {
        setNavColor("#403121");
      } else {
        setNavColor("white");
      }
    });
    return () => {};
  }, []);
  const toggleCanvas = () => {
    setActiveCanvas(!activeCanvas);
  };
  const navItems = [
    { key: 1, item: "logo", path: "/" },
    { key: 2, item: "Home", path: "/" },
    { key: 3, item: "Services", path: "services" },
    { key: 4, item: "Projects Gallery", path: "projects-gallery" },
    { key: 5, item: "Contact", path: "contact" },
  ];

  return (
    <>
      <div
        onMouseDown={() => setInPainMode(true)}
        onMouseUp={() => {
          setInPainMode(false);
          setMouseMoveAndDown(false);
        }}
        onMouseMove={() => setMouseMoveAndDown(true)}
        className={false ? "loading" : "container"}
      >
        <div className="dark-overlay" />
        <div
          style={{
            zIndex: inPaintMode && mouseMoveAndDown ? 0 : 17,
          }}
          class="container-inner"
        >
          <h1 className="container-heading">CARPENTRY & PLASTERING</h1>
          <p class="container-about">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
            sunt rerum neque est atque quidem temporibus sit, voluptatem
            architecto obcaecati iste nesciunt molestiae fugiat laudantium
            possimus provident explicabo error adipisci?
          </p>
        </div>
        {window.location.pathname === "/" && (
          <Nav
            navItems={navItems}
            inPaintMode={inPaintMode}
            mouseMoveAndDown={mouseMoveAndDown}
            color={navColor}
          />
        )}

        {activeCanvas ? (
          <>
            <CanvasDraw
              style={{ overflowY: "hidden !important" }}
              ref={(canvasDraw) => setClearCanvas(canvasDraw)}
              hideGrid
              lazyRadius={15}
              brushRadius={20}
              backgroundColor="none"
              canvasWidth="100%"
              canvasHeight="100vh"
              brushColor="#C6B09A"
              catenaryColor="white"
            />
          </>
        ) : null}

        {hover && activeCanvas ? (
          <i
            onClick={() => {
              toggleCanvas();
            }}
            onMouseEnter={(e) => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{
              cursor: "pointer",
              zIndex: "17 !important",
              color: "white",
              backgroundColor: activeCanvas && " #C6B09A",
            }}
            className="brush fas fa-fill-drip fa-2x"
          />
        ) : (
          <i
            onClick={() => {
              toggleCanvas();
            }}
            onMouseEnter={(e) => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{
              cursor: "pointer",
              zIndex: inPaintMode && mouseMoveAndDown ? 0 : 17,
              color: activeCanvas ? "white" : " #C6B09A",

              backgroundColor: activeCanvas && " #C6B09A",
            }}
            className="brush fas fa-fill-drip fa-2x"
          />
        )}
      </div>
      <div className="secondary">
        <h3 className="secondary-mini-heading">Services</h3>
        <h1 className="secondary-heading">Something about services</h1>
        <p className="secondary-about">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
          sunt rerum neque est atque quidem temporibus sit, voluptatem
          architecto obcaecati iste nesciunt molestiae fugiat laudantium
          possimus provident explicabo error adipisci? Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Reiciendis sunt rerum neque est
          atque quidem temporibus sit, voluptatem architecto obcaecati iste
          nesciunt molestiae fugiat laudantium possimus provident explicabo
          error adipisci?
        </p>
      </div>
      <ContactBlock />
    </>
  );
};

export default Home;
