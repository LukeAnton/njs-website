import React, { useState } from "react";
import CanvasDraw from "react-canvas-draw";
import Nav from "../components/navigation/Nav";

import "./home.scss";
const Home = () => {
  const [clearCanvas, setClearCanvas] = useState(null);
  const [inPaintMode, setInPainMode] = useState(false);
  const [activeCanvas, setActiveCanvas] = useState(false);
  const [mouseMoveAndDown, setMouseMoveAndDown] = useState(false);
  const [hover, setHover] = useState(false);

  const toggleCanvas = () => {
    setActiveCanvas(!activeCanvas);
  };
  const navItems = [
    { key: 1, item: "logo" },
    { key: 2, item: "Home" },
    { key: 3, item: "Services" },
    { key: 4, item: "Gallery" },
    { key: 5, item: "Contact" },
  ];
  console.log(hover);
  return (
    <>
      <div
        onMouseDown={() => setInPainMode(true)}
        onMouseUp={() => {
          setInPainMode(false);
          setMouseMoveAndDown(false);
        }}
        onMouseMove={() => setMouseMoveAndDown(true)}
        className="container"
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
          />
        )}

        {activeCanvas ? (
          <>
            <CanvasDraw
              ref={(canvasDraw) => setClearCanvas(canvasDraw)}
              hideGrid
              lazyRadius={15}
              brushRadius={20}
              backgroundColor="none"
              canvasWidth="100vw"
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
        <h1 className="secondary-heading">Jack of all trades</h1>
        <p className="secondary-about">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
          sunt rerum neque est atque quidem temporibus sit, voluptatem
          architecto obcaecati iste nesciunt molestiae fugiat laudantium
          possimus provident explicabo error adipisci?
        </p>
      </div>
    </>
  );
};

export default Home;
