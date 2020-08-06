import React from "react";
import "./App.scss";
import Nav from "./components/navigation/Nav";
import MiniNav from "./components/navigation/MiniNav";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ProjectsGallery from "./pages/ProjectsGallery";
import Contact from "./pages/Contact";

import { Route, BrowserRouter as Router } from "react-router-dom";
const navItems = [
  { key: 1, item: "logo", path: "/" },
  { key: 2, item: "Home", path: "/" },
  { key: 3, item: "Services", path: "services" },
  { key: 4, item: "Projects Gallery", path: "projects-gallery" },
  { key: 5, item: "Contact", path: "contact" },
];

const App = () => {
  return (
    <Router>
      <MiniNav />
      {window.location.pathname === "/njs-website/services" && (
        <Nav navItems={navItems} />
      )}
      {window.location.pathname === "/njs-website/projects-gallery" && (
        <Nav navItems={navItems} />
      )}
      {window.location.pathname === "/njs-website/contact" && (
        <Nav navItems={navItems} />
      )}
      <div className="App">
        <Route exact path="/njs-website/" component={Home} />
        <Route exact path="/njs-website/services" component={Services} />
        <Route
          exact
          path="/njs-website/projects-gallery"
          component={ProjectsGallery}
        />
        <Route exact path="/njs-website/contact" component={Contact} />
      </div>
    </Router>
  );
};

export default App;
