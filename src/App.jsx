import React from "react";
import "./App.scss";
import Home from "./pages/Home";
import Nav from "./components/navigation/Nav";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
const navItems = [
  { key: 1, item: "logo" },
  { key: 2, item: "Home" },
  { key: 3, item: "Services" },
  { key: 4, item: "Gallery" },
  { key: 5, item: "Contact" },
];

const App = () => {
  return (
    <Router>
      {!window.location.pathname === "/" && <Nav navItems={navItems} />}
      <div className="App">
        <Route exact path="/" component={Home} />
      </div>
    </Router>
  );
};

export default App;
